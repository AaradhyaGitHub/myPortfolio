import "./Footer.css";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content container">
        <p className="footer-copyright">© {currentYear} Aaradhya</p>

        <div className="footer-links">
          <a
            href="https://github.com/AaradhyaGitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/aaradhya-poudyal-202020/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:poudyalaaradhya@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
