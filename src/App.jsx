import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate
} from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/navigation/Footer";
import Home from "./pages/Home";
// import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Photography from "./pages/Photography";

// Layout wrapper
function RootLayout() {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

// Placeholder pages (replace with your actual pages)

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     children: [
//       { index: true, element: <Home /> },
//       { path: "projects", element: <Projects /> },
//       { path: "about", element: <About /> },
//       { path: "contact", element: <Contact /> },
//       { path: "photography/:genre", element: <Photography /> }
//     ]
//   }
// ]);

// In your router file (App.jsx or wherever you define routes)

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> }, // Use index: true for the default child route
      { path: "projects", element: <Projects /> }, // No leading slash
      { path: "about", element: <About /> }, // No leading slash
      { path: "contact", element: <Contact /> }, // No leading slash
      { path: "photography/:genre", element: <Photography /> }, // No leading slash
      {
        path: "photography",
        element: <Navigate to="/photography/drone" replace />
      } // No leading slash
    ]
  }
]);

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
