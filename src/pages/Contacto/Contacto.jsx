import React from 'react';
import { MapPin, Mail, Clock, Phone, Navigation } from 'lucide-react';
import styles from './Contacto.module.css';

const Contacto = () => {
  return (
    <div className={styles.pageWrapper}>
      
      {/* HEADER */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
            <h1 className={styles.title}>Estamos para Ayudarlo</h1>
            <p className={styles.subtitle}>
                Canales de comunicación directos con nuestro equipo comercial y operativo.
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
                    <h3 className={styles.infoLabel}>Base Operativa</h3>
                    <p className={styles.infoText}>Churruca 9960, Loma Hermosa</p>
                    <p className={styles.infoText}>Buenos Aires, Argentina</p>
                    
                    {/* Link real a Google Maps de la ubicación */}
                    <a 
                        href="https://www.google.com/maps/search/?api=1&query=Yamanil+SA+Churruca+9960" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.linkAction}
                    >
                        Ver en Google Maps <Navigation size={16} />
                    </a>
                </div>

                {/* Item 2: Canales de Comunicación */}
                <div className={styles.infoItem}>
                    <div className={styles.iconBox}>
                        <Mail size={32} />
                    </div>
                    <h3 className={styles.infoLabel}>Canales Digitales</h3>
                    
                    <div className={styles.contactRow}>
                        <strong>Ventas:</strong> <a href="mailto:ventas@yamanil.com.ar">ventas@yamanil.com.ar</a>
                    </div>
                    <div className={styles.contactRow}>
                        <strong>RRHH:</strong> <a href="mailto:rrhh@yamanil.com.ar">rrhh@yamanil.com.ar</a>
                    </div>
                    <div className={styles.contactRow} style={{marginTop: '15px'}}>
                        <Phone size={18} style={{marginRight:'8px', color:'#F40009'}}/> 
                        <span style={{fontWeight:'700', fontSize:'1.1rem'}}>+54 11 4769-XXXX</span>
                    </div>
                </div>

                {/* Item 3: Horarios */}
                <div className={styles.infoItem}>
                    <div className={styles.iconBox}>
                        <Clock size={32} />
                    </div>
                    <h3 className={styles.infoLabel}>Horarios de Atención</h3>
                    <p className={styles.infoText}>Lunes a Viernes</p>
                    <p className={styles.highlightText}>08:00 - 17:00 hs</p>
                    <p className={styles.infoSmall}>Sábados: 08:00 - 13:00 hs</p>
                </div>

            </div>

            {/* Mapa Integrado (Iframe apuntando a Churruca 9960) */}
            <div className={styles.mapWrapper}>
                <iframe 
                    title="Ubicación Yamanil S.A."
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.8878593466!2d-58.5833!3d-34.5772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb9c5b5b5b5b5%3A0x0!2sChurruca%209960%2C%20Loma%20Hermosa!5e0!3m2!1ses!2sar!4v1600000000000!5m2!1ses!2sar"
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