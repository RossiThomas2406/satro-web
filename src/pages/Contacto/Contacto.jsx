import React from 'react';
import { MapPin, Mail, Clock, Phone, Navigation } from 'lucide-react';
import styles from './Contacto.module.css';

const Contacto = () => {
  return (
    <div className={styles.pageWrapper}>
      
      {/* HEADER (Consistente con las otras páginas) */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
            <h1 className={styles.title}>Estamos para Ayudarlo</h1>
            <p className={styles.subtitle}>
                Contáctese con nuestro equipo comercial y operativo.
            </p>
        </div>
      </header>

      <div className={styles.container}>

        {/* Tarjeta Principal de Contacto */}
        <div className={styles.card}>
            
            <div className={styles.gridInfo}>
                
                {/* Item 1: Dirección */}
                <div className={styles.infoItem}>
                    <div className={styles.iconBox}>
                        <MapPin size={32} />
                    </div>
                    <h3 className={styles.infoLabel}>Ubicación</h3>
                    <p className={styles.infoText}>Churruca 9960, Loma Hermosa</p>
                    <p className={styles.infoText}>Buenos Aires, Argentina</p>
                    <a 
                        href="https://maps.google.com/?q=Churruca+9960+Loma+Hermosa" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.linkAction}
                    >
                        Ver en Mapa <Navigation size={16} />
                    </a>
                </div>

                {/* Item 2: Canales de Comunicación */}
                <div className={styles.infoItem}>
                    <div className={styles.iconBox}>
                        <Mail size={32} />
                    </div>
                    <h3 className={styles.infoLabel}>Canales Digitales</h3>
                    <div className={styles.contactRow}>
                        <strong>General:</strong> info@satro.com.ar
                    </div>
                    <div className={styles.contactRow}>
                        <strong>Ventas:</strong> ventas@satro.com.ar
                    </div>
                    <div className={styles.contactRow} style={{marginTop: '10px'}}>
                        <Phone size={16} style={{marginRight:'5px'}}/> +54 11 1234-5678
                    </div>
                </div>

                {/* Item 3: Horarios */}
                <div className={styles.infoItem}>
                    <div className={styles.iconBox}>
                        <Clock size={32} />
                    </div>
                    <h3 className={styles.infoLabel}>Horarios de Atención</h3>
                    <p className={styles.infoText}>Lunes a Viernes</p>
                    <p className={styles.highlightText}>09:00 - 18:00 hs</p>
                    <p className={styles.infoSmall}>Sábados y Domingos cerrado</p>
                </div>

            </div>

            {/* Mapa Integrado al final de la tarjeta */}
            <div className={styles.mapWrapper}>
                <iframe 
                    title="Ubicación Satro S.A."
                    /* URL Genérica de Google Maps embed para la dirección */
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016887889451!2d-58.59567848477036!3d-34.60373888045946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb9b76c5b5b5b%3A0x123456789abcdef!2sChurruca%209960%2C%20Loma%20Hermosa%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1625000000000!5m2!1ses!2sar"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>

        </div>

      </div>
    </div>
  );
};

export default Contacto;