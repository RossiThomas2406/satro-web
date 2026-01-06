import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

// Importación de Assets
import bannerImg from '../../assets/banner.jpg';
import logoImg from '../../assets/logo.png';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      
      {/* --- HERO SECTION --- */}
      <header 
        className={styles.hero}
        style={{ 
           // Gradiente: Transparente a la izquierda (0%) -> Oscuro a la derecha (70%)
           backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.9) 70%), url(${bannerImg})`
        }}
      >
        <div className={styles.heroContent}>
          
          {/* LOGO AGREGADO */}
          <img src={logoImg} alt="Satro S.A." className={styles.heroLogo} />

          <h1 className={styles.title}>
            Soluciones Logísticas <br />
            <span className={styles.highlight}>Integrales</span>
          </h1>
          <p className={styles.subtitle}>
            Más de 25 años liderando la distribución y el transporte 
            con flota propia y tecnología de punta.
          </p>
          
          <div className={styles.buttonGroup}>
            <Link to="/servicios" className={styles.primaryBtn}>
              Nuestros Servicios
            </Link>
            <Link to="/contacto" className={styles.secondaryBtn}>
              Contactar
            </Link>
          </div>
        </div>
      </header>

      {/* --- SECCIÓN INTRO (Estilo Premium con Tarjetas) --- */}
      <section className={styles.introSection}>
        <div className={styles.introContainer}>
            
            <div className={styles.introHeader}>
                <span className={styles.tagline}>Excelencia en movimiento</span>
                <h2 className={styles.sectionTitle}>Por qué elegir Satro S.A.</h2>
                <div className={styles.separator}></div>
            </div>

            {/* Grid de Valores */}
            <div className={styles.valuesGrid}>
                {/* Card 1: Flota */}
                <div className={styles.valueCard}>
                    <div className={styles.iconBox}>
                        <svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
                    </div>
                    <h3>Flota Moderna</h3>
                    <p>Unidades Mercedes-Benz de última generación con menos de 10 años de antigüedad, garantizando fiabilidad en cada entrega.</p>
                </div>

                {/* Card 2: Tecnología */}
                <div className={styles.valueCard}>
                    <div className={styles.iconBox}>
                        <svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                    </div>
                    <h3>Tracking Online</h3>
                    <p>Tecnología de punta con seguimiento GPS en tiempo real y tablets en cabina para una gestión logística precisa.</p>
                </div>

                {/* Card 3: Calidad */}
                <div className={styles.valueCard}>
                    <div className={styles.iconBox}>
                        <svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
                    </div>
                    <h3>Calidad Certificada</h3>
                    <p>Operamos bajo estrictas normas ISO 9001:2015, priorizando la seguridad y la satisfacción total del cliente.</p>
                </div>
            </div>
            
            {/* Cinta de Estadísticas */}
            <div className={styles.statsStrip}>
                <div className={styles.statItem}>
                    <strong>+25</strong>
                    <span>Años de Trayectoria</span>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.statItem}>
                    <strong>+1M</strong>
                    <span>Litros Diarios</span>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.statItem}>
                    <strong>ISO</strong>
                    <span>9001:2015</span>
                </div>
            </div>

        </div>
      </section>

    </div>
  );
};

export default Home;