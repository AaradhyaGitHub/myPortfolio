// @ts-nocheck
// ============================================
// FILE 1: Photography.jsx (UPDATED)
// ============================================
import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronDown, ChevronLeft, ChevronRight, X } from "lucide-react"; // ADDED: ChevronLeft, ChevronRight, X
import { GALLERY } from "../data/galleryData";
import "./Photography.css";

// Shuffle array using Fisher-Yates algorithm
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export default function Photography() {
  const { genre = "aerial" } = useParams();
  const navigate = useNavigate();
  const [photos, setPhotos] = useState([]);
  const [displayedPhotos, setDisplayedPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showNavToggle, setShowNavToggle] = useState(false);
  const [columns, setColumns] = useState(2);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null); // NEW: Track selected photo for modal
  const galleryRef = useRef(null);
  const observerRef = useRef(null);
  const loadMoreRef = useRef(null);

  const INITIAL_LOAD = 30;
  const LOAD_MORE = 20;

  // Handle responsive columns
  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width >= 1400) setColumns(4);
      else if (width >= 1024) setColumns(3);
      else if (width >= 640) setColumns(2);
      else setColumns(2); // Mobile gets 2 columns for bigger images
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  // Handle scroll to show/hide nav toggle button
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 200;
      setShowNavToggle(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Load and shuffle photos when genre changes
  useEffect(() => {
    const loadGenre = async () => {
      // Start transition
      setIsTransitioning(true);

      // Scroll to top smoothly when switching genres
      window.scrollTo({ top: 0, behavior: "smooth" });

      // Wait for fade out
      await new Promise((resolve) => setTimeout(resolve, 300));

      // Find and shuffle photos
      const foundGenre = GALLERY.find((g) => g.genre === genre);
      if (foundGenre) {
        const shuffled = shuffleArray(foundGenre.photos);
        setPhotos(shuffled);
        setDisplayedPhotos(shuffled.slice(0, INITIAL_LOAD));
      }

      // Show loading state briefly for smooth transition
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 600));

      setIsLoading(false);
      setIsTransitioning(false);
    };

    loadGenre();
  }, [genre]);

  // Lazy loading with Intersection Observer
  useEffect(() => {
    if (isLoading || displayedPhotos.length >= photos.length) return;

    const options = {
      root: null,
      rootMargin: "400px",
      threshold: 0.01
    };

    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && displayedPhotos.length < photos.length) {
        const nextBatch = photos.slice(
          displayedPhotos.length,
          displayedPhotos.length + LOAD_MORE
        );
        setDisplayedPhotos((prev) => [...prev, ...nextBatch]);
      }
    }, options);

    if (loadMoreRef.current) {
      observerRef.current.observe(loadMoreRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [displayedPhotos, photos, isLoading]);

  // NEW: Keyboard navigation for modal
  useEffect(() => {
    if (selectedPhotoIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhotoIndex, photos.length]);

  // NEW: Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedPhotoIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedPhotoIndex]);

  // Distribute photos into columns for masonry
  const distributePhotos = () => {
    const columnArrays = Array.from({ length: columns }, () => []);

    displayedPhotos.forEach((photo, index) => {
      const columnIndex = index % columns;
      columnArrays[columnIndex].push({ url: photo, index });
    });

    return columnArrays;
  };

  const handleGenreChange = (newGenre) => {
    if (newGenre !== genre) {
      navigate(`/photography/${newGenre}`);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // NEW: Modal functions
  const openModal = (index) => {
    setSelectedPhotoIndex(index);
  };

  const closeModal = () => {
    setSelectedPhotoIndex(null);
  };

  const goToNext = () => {
    setSelectedPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const goToPrevious = () => {
    setSelectedPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const photoColumns = distributePhotos();

  return (
    <div className="photography-page">
      {/* Genre Navigation */}
      <nav className="genre-nav">
        <div className="genre-nav-container">
          <button
            onClick={() => handleGenreChange("aerial")}
            className={`genre-btn ${genre === "aerial" ? "active" : ""}`}
          >
            DRONE
          </button>
          <button
            onClick={() => handleGenreChange("street")}
            className={`genre-btn ${genre === "street" ? "active" : ""}`}
          >
            STREET
          </button>
          <button
            onClick={() => handleGenreChange("animal")}
            className={`genre-btn ${genre === "animal" ? "active" : ""}`}
          >
            ANIMALS
          </button>
        </div>
      </nav>

      {/* Floating scroll-to-top button */}
      {showNavToggle && (
        <button
          onClick={scrollToTop}
          className="scroll-top-btn"
          aria-label="Scroll to top"
        >
          <ChevronDown size={20} className="rotate-180" />
        </button>
      )}

      {/* Gallery Grid */}
      {isLoading ? (
        <div className="gallery-loading">
          <div className="loading-spinner"></div>
          <p className="loading-text">Loading {genre} photography...</p>
        </div>
      ) : (
        <div
          ref={galleryRef}
          className={`gallery-container ${
            isTransitioning ? "transitioning" : ""
          }`}
        >
          <div
            className="masonry-grid"
            style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
          >
            {photoColumns.map((column, colIndex) => (
              <div key={`column-${colIndex}`} className="masonry-column">
                {column.map((photo) => (
                  <div
                    key={`photo-${genre}-${photo.index}`}
                    className="photo-wrapper"
                    onClick={() => openModal(photo.index)} // NEW: Open modal on click
                  >
                    <img
                      src={photo.url}
                      alt={`${genre} photography ${photo.index}`}
                      className="photo"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Load more trigger */}
          {displayedPhotos.length < photos.length && (
            <div ref={loadMoreRef} className="load-more-trigger">
              <div className="loading-spinner small"></div>
            </div>
          )}
        </div>
      )}

      {/* NEW: LIGHTBOX MODAL */}
      {selectedPhotoIndex !== null && (
        <div className="lightbox-modal" onClick={closeModal}>
          {/* Close button */}
          <button
            className="lightbox-close"
            onClick={closeModal}
            aria-label="Close"
          >
            <X size={28} />
          </button>

          {/* Previous button */}
          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Current image */}
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photos[selectedPhotoIndex]}
              alt={`${genre} photography ${selectedPhotoIndex}`}
              className="lightbox-image"
            />
            {/* Image counter */}
            <div className="lightbox-counter">
              {selectedPhotoIndex + 1} / {photos.length}
            </div>
          </div>

          {/* Next button */}
          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </div>
  );
}
