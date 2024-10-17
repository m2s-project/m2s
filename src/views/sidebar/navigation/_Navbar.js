import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmenu = (menu) => {
    if (openSubmenu === menu) {
      setOpenSubmenu(null); // Close if already open
    } else {
      setOpenSubmenu(menu); // Open selected submenu
    }
  };

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="navbar-container">
        <div className="menu-toggle" onClick={toggleMenu}>
          <span className="hamburger"></span>
        </div>
        <ul className="menu">
          <li className="menu-item">
            <Link to="/">Accueil</Link>
          </li>
          <li className="menu-item" onClick={() => handleSubmenu('gmao')}>
            Gestion GMAO
            <ul className={`submenu ${openSubmenu === 'gmao' ? 'open' : ''}`}>
              <li><Link to="/equipements">Équipements</Link></li>
              <li><Link to="/interventions">Interventions</Link></li>
              <li><Link to="/maintenance">Planification de Maintenance</Link></li>
            </ul>
          </li>
          <li className="menu-item" onClick={() => handleSubmenu('stock')}>
            Gestion des Stocks
            <ul className={`submenu ${openSubmenu === 'stock' ? 'open' : ''}`}>
              <li><Link to="/articles">Articles</Link></li>
              <li><Link to="/mouvements">Mouvements</Link></li>
              <li><Link to="/reapprovisionnement">Réapprovisionnement</Link></li>
            </ul>
          </li>
          <li className="menu-item" onClick={() => handleSubmenu('com')}>
            Gestion Commerciale
            <ul className={`submenu ${openSubmenu === 'com' ? 'open' : ''}`}>
              <li><Link to="/clients">Clients</Link></li>
              <li><Link to="/ventes">Ventes</Link></li>
              <li><Link to="/facturation">Facturation</Link></li>
            </ul>
          </li>
          <li className="menu-item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
