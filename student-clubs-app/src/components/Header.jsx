import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../assets/images/USC-logo.png';

const Header = () => {
    // State to track the search input value
  const [searchTerm, setSearchTerm] = useState('');
 // Hook to programmatically navigate between routes
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/clubs?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.mainHeader}>
        <div className={styles.leftSection}>
          <div className={styles.logoAndTitle}>
            <img src={logo} alt="USC Logo" className={styles.logo} />
            <div className={styles.titleContainer}>
              <h1 className={styles.title}>University Student Clubs</h1>
              <p className={styles.tagline}>The future is waiting for you...</p>
              <p className={styles.tagline}>Since 2025 </p>
            </div>
          </div>
        </div>
        <div className={styles.middleSection}>
          <form onSubmit={handleSearchSubmit} className={styles.searchForm}>
            <input
              type="text"
              placeholder="Search clubs..."
              value={searchTerm}
              onChange={handleSearchChange}
              className={styles.searchInput}
            />
            <button type="submit" className={styles.searchButton}>Search</button>
          </form>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.contactInfo}>
            <p className={styles.contactLabel}>Contact Us</p>
            <span>📞 011 3333333</span>
            <span>✉️ contact@usc.edu</span>
          </div>
        </div>
      </div>
      <nav className={styles.navList}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/clubs"
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
          }
        >
          Clubs
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;