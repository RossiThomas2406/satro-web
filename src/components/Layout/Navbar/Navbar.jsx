import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react'; 
import styles from './Navbar.module.css';

// Asegúrate de que este archivo sea el logo circular nuevo
import logoImg from '../../../assets/logo.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? styles.activeLink : '';
  const closeMenu = () => setIsOpen(false);

  return (
    <div className={styles.navbarWrapper}>
        
        {/* --- 1. TOP BAR (Barra superior de contacto) --- */}
        <div className={styles.topBar}>
            <div className={styles.topBarContainer}>
                <div className={styles.contactItem}>
                    <Mail size={14} />
                    <span>ventas@yamanil.com.ar</span>
                </div>
                <div className={styles.contactItem}>
                    <Phone size={14} />
                    <span>+54 11 1234-5678</span>
                </div>
            </div>
        </div>

        {/* --- 2. HEADER PRINCIPAL --- */}
        <header className={styles.header}>
          <div className={styles.container}>
            
            {/* --- LOGO YAMANIL --- */}
            <div className={styles.logo}>
                <Link to="/" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img src={logoImg} alt="Yamanil Logo" />
                    <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.2' }}>
                        <span className={styles.brandName}>YAMANIL</span>
                        <span style={{ fontSize: '0.7rem', fontWeight: '500', color: '#666' }}>Distribuidor Oficial</span>
                    </div>
                </Link>
            </div>

            {/* BOTÓN HAMBURGUESA (Mobile) */}
            <button 
                className={styles.hamburger} 
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Menu"
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* MENÚ DESKTOP */}
            <nav className={styles.desktopNav}>
              <ul className={styles.navLinks}>
                <li><Link to="/" className={`${styles.link} ${isActive('/')}`}>Inicio</Link></li>
                <li><Link to="/calidad" className={`${styles.link} ${isActive('/calidad')}`}>Productos</Link></li>
                <li><Link to="/servicios" className={`${styles.link} ${isActive('/servicios')}`}>Distribución</Link></li>
                <li><Link to="/rrhh" className={`${styles.link} ${isActive('/rrhh')}`}>Nosotros</Link></li>
                <li>
                    <Link to="/contacto" className={`${styles.link} ${styles.btnContacto}`}>
                        Contacto
                    </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* MENÚ MOBILE */}
          {isOpen && (
            <div className={styles.mobileMenu}>
                <ul className={styles.mobileLinks}>
                    <li><Link to="/" onClick={closeMenu}>Inicio</Link></li>
                    <li><Link to="/calidad" onClick={closeMenu}>Productos</Link></li>
                    <li><Link to="/servicios" onClick={closeMenu}>Distribución</Link></li>
                    <li><Link to="/rrhh" onClick={closeMenu}>Nosotros</Link></li>
                    <li><Link to="/contacto" onClick={closeMenu} className={styles.mobileBtn}>Contacto</Link></li>
                </ul>
            </div>
          )}

        </header>
    </div>
  );
};

export default Navbar;