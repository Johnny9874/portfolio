import React, { useState } from "react";
import "./../styles/Header.css";

const Header = () => {
  // État qui contrôle si le menu est "ouvert" (pour les classes d'animation)
  const [menuOpen, setMenuOpen] = useState(false);

  // État qui contrôle si le menu est "affiché dans le DOM"
  const [shouldRenderMenu, setShouldRenderMenu] = useState(false);

  // Fonction qui ouvre ou ferme le menu avec animation
  const toggleMenu = () => {
    if (!menuOpen) {
      // Si le menu est fermé → on l'affiche et on le marque comme ouvert
      setShouldRenderMenu(true);
      setMenuOpen(true);
    } else {
      // Si le menu est ouvert → on lance l'animation de fermeture
      setMenuOpen(false);
      // Et on le retire du DOM après la durée de l'animation (300ms)
      setTimeout(() => setShouldRenderMenu(false), 300);
    }
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <header>
      <nav className="navbar">
        <div className="logo">Johnny YE</div>

        {/* Bouton burger visible sur mobile */}
        <button className="burger" onClick={toggleMenu}>
          ☰
        </button>

        {/* Menu : visible uniquement si shouldRenderMenu est true */}
        {/* La classe dépend de menuOpen pour appliquer show (ouverture) ou hide (fermeture) */}
        {(!isMobile || shouldRenderMenu) && (
          <ul className={`nav-links ${isMobile ? (menuOpen ? "show" : "hide") : ""}`}>

            <li><a href="#home" onClick={toggleMenu}>Home</a></li>
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
