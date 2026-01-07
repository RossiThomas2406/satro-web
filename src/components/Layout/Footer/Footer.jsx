import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ChevronRight, Linkedin, Facebook, Instagram } from 'lucide-react';
import styles from './Footer.module.css';

// Importamos el nuevo logo horizontal
import logoFooterImg from '../../../assets/logoFooter.png'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Columna 1: Marca y Logo */}
        <div className={styles.brandColumn}>
          
          <div className={styles.logoWrapper}>
            <img src={logoFooterImg} alt="Yamanil S.A." className={styles.footerLogo} />
          </div>

          <p className={styles.brandText}>
            Distribuidor Oficial de Coca-Cola. Llevamos frescura y calidad a miles de puntos de venta. 
            Comprometidos con la excelencia operativa.
          </p>
          
          <div className={styles.socialIcons}>
            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
          </div>
        </div>
        
        {/* Columna 2: Navegación */}
        <div className={styles.linksColumn}>
          <h3>Navegación</h3>
          <ul className={styles.linkList}>
            <li><Link to="/"><ChevronRight size={16} className={styles.chevron}/> Inicio</Link></li>
            <li><Link to="/calidad"><ChevronRight size={16} className={styles.chevron}/> Productos</Link></li>
            <li><Link to="/servicios"><ChevronRight size={16} className={styles.chevron}/> Distribución</Link></li>
            <li><Link to="/contacto"><ChevronRight size={16} className={styles.chevron}/> Contacto</Link></li>
          </ul>
        </div>

        {/* Columna 3: Contacto */}
        <div className={styles.contactColumn}>
          <h3>Oficina Central</h3>
          <div className={styles.contactItem}>
            <MapPin size={20} className={styles.icon} />
            <div>
                <span className={styles.contactLabel}>Dirección</span>
                <p>Av. Principal 1234, Parque Industrial</p>
            </div>
          </div>
          <div className={styles.contactItem}>
            <Mail size={20} className={styles.icon} />
            <div>
                <span className={styles.contactLabel}>Ventas</span>
                <p>ventas@yamanil.com.ar</p>
            </div>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className={styles.copyrightBar}>
        <div className={styles.copyrightContainer}>
            <p>&copy; {currentYear} <strong>YAMANIL S.A.</strong> - Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;