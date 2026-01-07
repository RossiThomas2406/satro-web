import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, ShieldCheck, Heart, Users, Briefcase, Award } from 'lucide-react';
import styles from './RRHH.module.css';

const RRHH = () => {
  return (
    <div className={styles.pageWrapper}>
      
      {/* HEADER */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
            <div className={styles.headerIcon}>
                <Users size={48} />
            </div>
            <h1 className={styles.title}>Nuestra Gente</h1>
            <p className={styles.subtitle}>El motor que impulsa la distribución líder del mercado</p>
        </div>
      </header>

      <div className={styles.container}>
        
        {/* Introducción Destacada */}
        <section className={styles.introSection}>
            <p className={styles.introText}>
              En <strong>YAMANIL S.A.</strong> sabemos que la excelencia logística no se logra solo con camiones, 
              sino con personas comprometidas. Como <strong>Distribuidor Oficial</strong>, fomentamos una cultura de 
              trabajo basada en el respeto, la seguridad y el orgullo de representar a la marca número uno del mundo.
            </p>
        </section>

        {/* Pilares (Grid de 3) */}
        <div className={styles.pillarsGrid}>
            
            {/* Pilar 1: Capacitación */}
            <div className={styles.pillarCard}>
                <div className={styles.iconBox}>
                    <GraduationCap size={32} />
                </div>
                <h3 className={styles.pillarTitle}>Escuela de Logística</h3>
                <div className={styles.divider}></div>
                <p>
                    Capacitación constante en procesos de preventa, conducción eficiente y manejo de tecnología (Handhelds), 
                    alineados con los estándares globales de Coca-Cola.
                </p>
            </div>
            
            {/* Pilar 2: Seguridad */}
            <div className={styles.pillarCard}>
                <div className={styles.iconBox}>
                    <ShieldCheck size={32} />
                </div>
                <h3 className={styles.pillarTitle}>Seguridad Vial y Laboral</h3>
                <div className={styles.divider}></div>
                <p>
                    Nuestra prioridad es que cada colaborador regrese sano a casa. 
                    Cumplimos estrictamente con las normativas de seguridad e higiene en planta y en ruta.
                </p>
            </div>

            {/* Pilar 3: Pertenencia */}
            <div className={styles.pillarCard}>
                <div className={styles.iconBox}>
                    <Award size={32} />
                </div>
                <h3 className={styles.pillarTitle}>Orgullo y Pertenencia</h3>
                <div className={styles.divider}></div>
                <p>
                    Valoramos el esfuerzo y la trayectoria. Fomentamos un ambiente donde el crecimiento interno 
                    es posible para quienes demuestran pasión y compromiso.
                </p>
            </div>
        </div>

        {/* Frase / Manifiesto */}
        <div className={styles.quoteSection}>
            <Heart size={40} className={styles.quoteIcon} />
            <blockquote className={styles.quoteText}>
                “Llevamos felicidad a miles de hogares, y esa tarea comienza cuidando a quienes la hacen posible.”
            </blockquote>
            <span className={styles.quoteLabel}>— Valores Yamanil S.A.</span>
        </div>

        <div className={styles.ctaBanner}>
            <div className={styles.ctaText}>
                <h3>¿Querés sumarte a nuestro equipo?</h3>
                <p>Buscamos personas apasionadas por la logística. ¡Envíanos tu CV!</p>
            </div>
            <Link to="/contacto" className={styles.ctaButton}>
                <Briefcase size={20} /> Enviar mi CV
            </Link>
        </div>
      </div>
    </div>
  );
};

export default RRHH;