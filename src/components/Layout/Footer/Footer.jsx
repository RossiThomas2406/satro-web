import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ChevronRight, Linkedin, Facebook, Instagram } from 'lucide-react';
import styles from './Footer.module.css';

// Usamos el mismo logo del navbar
import logoImg from '../../../assets/logoNavbar.png'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Columna 1: Marca, Resumen y Redes */}
        <div className={styles.brandColumn}>
          <div className={styles.logoWrapper}>
            <img src={logoImg} alt="Satro S.A." className={styles.footerLogo} />
            <span className={styles.brandName}>SATRO S.A.</span>
          </div>
          <p className={styles.brandText}>
            Soluciones logísticas integrales con más de 25 años de trayectoria. 
            Comprometidos con la calidad, el capital humano y la sustentabilidad.
          </p>
          
          {/* Redes Sociales */}
          <div className={styles.socialIcons}>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Columna 2: Enlaces Rápidos */}
        <div className={styles.linksColumn}>
          <h3>Navegación</h3>
          <ul className={styles.linkList}>
            <li>
                <Link to="/">
                    <ChevronRight size={16} className={styles.chevron}/> Inicio
                </Link>
            </li>
            <li>
                <Link to="/servicios">
                    <ChevronRight size={16} className={styles.chevron}/> Servicios
                </Link>
            </li>
            <li>
                <Link to="/calidad">
                    <ChevronRight size={16} className={styles.chevron}/> Calidad
                </Link>
            </li>
            <li>
                <Link to="/rrhh">
                    <ChevronRight size={16} className={styles.chevron}/> RRHH
                </Link>
            </li>
            <li>
                <Link to="/contacto">
                    <ChevronRight size={16} className={styles.chevron}/> Contacto
                </Link>
            </li>
          </ul>
        </div>

        {/* Columna 3: Datos de Contacto */}
        <div className={styles.contactColumn}>
          <h3>Casa Central</h3>
          
          <div className={styles.contactItem}>
            <MapPin size={20} className={styles.icon} />
            <div>
                <span className={styles.contactLabel}>Dirección</span>
                <p>Churruca 9960, Loma Hermosa,<br />Buenos Aires, Argentina.</p>
            </div>
          </div>
          
          <div className={styles.contactItem}>
            <Mail size={20} className={styles.icon} />
            <div>
                <span className={styles.contactLabel}>Email</span>
                <p>info@satro.com.ar</p>
            </div>
          </div>
          
          <div className={styles.contactItem}>
            <Phone size={20} className={styles.icon} />
            <div>
                <span className={styles.contactLabel}>Teléfono</span>
                <p>+54 11 4769-XXXX</p>
            </div>
          </div>
        </div>

      </div>

      {/* Copyright y Legales */}
      <div className={styles.copyrightBar}>
        <div className={styles.copyrightContainer}>
            <p>&copy; {currentYear} <strong>SATRO S.A.</strong> - Todos los derechos reservados.</p>
            <div className={styles.legalLinks}>
                <span>Política de Privacidad</span>
                <span>Términos y Condiciones</span>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;