import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="section-navbar">
      <div className="container">

        <div className="logo">
          <Link to="/home" className="logo-link">
            ~ Web Developer ~
          </Link>  
        </div>

        <nav className="navbar-links">
          <Link to="/" className="nav-button home-btn">Home</Link>
          <Link to="/about" className="nav-button about-btn">About</Link>
          <Link to="/work" className="nav-button work-btn">Work</Link>
           <Link to="/certification" className="nav-button certification-btn">Certs</Link>
          <Link to="/contact" className="nav-button contact-btn">Contact</Link>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;
