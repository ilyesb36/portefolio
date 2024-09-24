import React from 'react'

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <a href="/">Accueil</a>
        <a href="/projects">Mes projets</a>
        <a href="/about">À propos</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
