import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react'; 
import styles from './Navbar.module.css';

// Importamos el logo pequeño (asegúrate que la ruta sea correcta según tu estructura)
import logoImg from '../../../assets/logoNavbar.png'; 

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
                    <span>info@satro.com.ar</span>
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
            
            {/* --- LOGO MEJORADO (Icono + Texto) --- */}
            <div className={styles.logo}>
                <Link to="/" onClick={closeMenu}>
                    {/* Imagen: Actúa como icono/símbolo */}
                    <img src={logoImg} alt="Logo" />
                    
                    {/* Texto HTML: Garantiza legibilidad perfecta */}
                    <span className={styles.brandName}>SATRO S.A.</span>
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
                <li><Link to="/calidad" className={`${styles.link} ${isActive('/calidad')}`}>Calidad</Link></li>
                <li><Link to="/servicios" className={`${styles.link} ${isActive('/servicios')}`}>Servicios</Link></li>
                <li><Link to="/rrhh" className={`${styles.link} ${isActive('/rrhh')}`}>RRHH</Link></li>
                <li>
                    <Link to="/contacto" className={`${styles.link} ${styles.btnContacto}`}>
                        Contacto
                    </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* MENÚ MOBILE (Desplegable) */}
          {isOpen && (
            <div className={styles.mobileMenu}>
                <ul className={styles.mobileLinks}>
                    <li><Link to="/" onClick={closeMenu}>Inicio</Link></li>
                    <li><Link to="/calidad" onClick={closeMenu}>Calidad</Link></li>
                    <li><Link to="/servicios" onClick={closeMenu}>Servicios</Link></li>
                    <li><Link to="/rrhh" onClick={closeMenu}>RRHH</Link></li>
                    <li><Link to="/contacto" onClick={closeMenu} className={styles.mobileBtn}>Contacto</Link></li>
                </ul>
            </div>
          )}

        </header>
    </div>
  );
};

export default Navbar;