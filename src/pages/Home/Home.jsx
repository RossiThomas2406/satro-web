import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

// Importación de Assets
import bannerImg from '../../assets/banner.jpg'; 
import logoImg from '../../assets/logo.png';     

const Home = () => {

  // Lista de logos (Usamos URLs externas de alta calidad y fondo transparente)
const partners = [
    { 
      name: "Coca-Cola", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/2560px-Coca-Cola_logo.svg.png" 
    },
    { 
      name: "Fanta", 
      logo: "https://images.seeklogo.com/logo-png/27/1/fanta-logo-png_seeklogo-275670.png" 
    },
    { 
      name: "Sprite", 
      // Usamos el logo clásico verde/amarillo que contrasta mejor
      logo: "https://pngimg.com/uploads/sprite/sprite_PNG98772.png" 
    },
    { 
      name: "Powerade", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Powerade_logo.png" 
    },
    { 
      name: "Monster", 
      // El logo de la garra verde clásico
      logo: "https://images.seeklogo.com/logo-png/24/1/monster-energy-logo-png_seeklogo-247669.png" 
    },
    { 
      name: "Cepita", 
      // Usamos el logo de "Del Valle" (marca madre de Cepita) que es más estable
      logo: "https://images.seeklogo.com/logo-png/55/1/cepita-del-valle-logo-png_seeklogo-555119.png" 
    }, 
  ];

  return (
    <div className={styles.homeContainer}>
      
      {/* --- HERO SECTION --- */}
      <header 
        className={styles.hero}
        style={{ 
           backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), url(${bannerImg})`
        }}
      >
        <div className={styles.heroContent}>
          
          <img src={logoImg} alt="Yamanil Logo" className={styles.heroLogo} />

          <h1 className={styles.title}>
            Distribuidor Oficial <br />
            <span className={styles.highlight}>Coca-Cola</span>
          </h1>
          <p className={styles.subtitle}>
            Llevamos las marcas líderes del mundo a tu negocio. 
            Calidad, frescura y servicio garantizado en cada entrega.
          </p>
          
          <div className={styles.buttonGroup}>
            <Link to="/productos" className={styles.primaryBtn}>
              Ver Productos
            </Link>
            <Link to="/contacto" className={styles.secondaryBtn}>
              Quiero ser Cliente
            </Link>
          </div>
        </div>
      </header>

      {/* --- SECCIÓN INTRO --- */}
      <section className={styles.introSection}>
        <div className={styles.introContainer}>
            
            <div className={styles.introHeader}>
                <span className={styles.tagline}>Pasión por el servicio</span>
                <h2 className={styles.sectionTitle}>¿Por qué elegir YAMANIL?</h2>
                <div className={styles.separator}></div>
            </div>

            {/* Grid de Valores */}
            <div className={styles.valuesGrid}>
                {/* Card 1: Logística */}
                <div className={styles.valueCard}>
                    <div className={styles.iconBox}>
                        <svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
                    </div>
                    <h3>Logística Eficiente</h3>
                    <p>Contamos con una flota moderna y un sistema de preventa que asegura que el stock llegue a tiempo a tu local.</p>
                </div>

                {/* Card 2: Marcas */}
                <div className={styles.valueCard}>
                    <div className={styles.iconBox}>
                        <svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                    </div>
                    <h3>Marcas Líderes</h3>
                    <p>Ofrecemos el portfolio completo: Coca-Cola, Fanta, Sprite, Powerade, Cepita y muchas más.</p>
                </div>

                {/* Card 3: Atención */}
                <div className={styles.valueCard}>
                    <div className={styles.iconBox}>
                        <svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                    </div>
                    <h3>Atención Personalizada</h3>
                    <p>Un equipo de ventas dedicado a asesorarte para maximizar la rentabilidad de tu negocio.</p>
                </div>
            </div>

            {/* --- NUEVA SECCIÓN: PARTNERS --- */}
            <div className={styles.partnersSection}>
                <p className={styles.partnersSubtitle}>OPERADOR LOGÍSTICO OFICIAL DE</p>
                <div className={styles.partnersGrid}>
                    {partners.map((partner, index) => (
                        <div key={index} className={styles.partnerLogoWrapper}>
                            <img src={partner.logo} alt={partner.name} className={styles.partnerLogo} />
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Cinta de Estadísticas */}
            <div className={styles.statsStrip}>
                <div className={styles.statItem}>
                    <strong>+2000</strong>
                    <span>Clientes Activos</span>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.statItem}>
                    <strong>24hs</strong>
                    <span>Tiempo de Entrega</span>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.statItem}>
                    <strong>100%</strong>
                    <span>Calidad Oficial</span>
                </div>
            </div>

        </div>
      </section>

    </div>
  );
};

export default Home;