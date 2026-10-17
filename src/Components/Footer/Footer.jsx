import "./footer.css";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-left">
          <h2 className="footer-logo">MyPortfolio</h2>
          <p>Building modern and responsive web experiences.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/work">Work</Link>
          <Link to="/certification">Certs</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-social">
          <h3>Follow Me</h3>

          <a
            href="https://github.com/Hafsa-Arshad93"
            target="_blank"
            rel="noopener noreferrer">
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/hafsa-arshad-52ba71317/"
            target="_blank"
            rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 MyPortfolio. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

