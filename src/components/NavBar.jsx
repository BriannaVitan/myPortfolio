import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const { pathname } = useLocation();

  const getLinkClass = (path) => pathname === path ? 'nav-link active' : 'nav-link';

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">
          <Link to="/" className={getLinkClass('/')}>Brianna Vitan</Link>
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className={getLinkClass('/')}>About Me</Link>
            </li>
            <li className="nav-item">
              <Link to="/portfolio" className={getLinkClass('/portfolio')}>Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className={getLinkClass('/contact')}>Contact</Link>
            </li>
            <li className="nav-item">
              <Link to="/resume" className={getLinkClass('/resume')}>Resume</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
