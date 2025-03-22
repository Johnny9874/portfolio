import React, { useState } from "react";
import "./../styles/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shouldRenderMenu, setShouldRenderMenu] = useState(false);

  // ✅ Détection mobile simple (attention : ne réagit pas aux redimensionnements en temps réel)
  const isMobile = window.innerWidth <= 768;

  const toggleMenu = () => {
    if (!menuOpen) {
      setShouldRenderMenu(true);
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
      setTimeout(() => setShouldRenderMenu(false), 300);
    }
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">Johnny YE</div>

        {/* Burger visible uniquement sur mobile (géré en CSS) */}
        <button className="burger" onClick={toggleMenu}>
          ☰
        </button>

        {/* ✅ Affichage du menu : 
              - Toujours visible sur PC
              - Géré avec animation sur mobile */}
        <ul className={`nav-links ${
          isMobile 
            ? (shouldRenderMenu ? (menuOpen ? "show" : "hide") : "hide")
            : ""
        }`}>
          <li><a href="#home" onClick={() => isMobile && toggleMenu()}>Home</a></li>
          <li><a href="#about" onClick={() => isMobile && toggleMenu()}>About</a></li>
          <li><a href="#projects" onClick={() => isMobile && toggleMenu()}>Projects</a></li>
          <li><a href="#contact" onClick={() => isMobile && toggleMenu()}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
