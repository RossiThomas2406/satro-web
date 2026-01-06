import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, ShieldCheck, TrendingUp, Heart, Users, Briefcase } from 'lucide-react';
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
            <h1 className={styles.title}>Capital Humano</h1>
            <p className={styles.subtitle}>La columna vertebral de nuestra organización</p>
        </div>
      </header>

      <div className={styles.container}>
        
        {/* Introducción Destacada */}
        <section className={styles.introSection}>
            <p className={styles.introText}>
              En <strong>SATRO S.A.</strong> consideramos que nuestros colaboradores son el motor de la compañía. 
              Buscamos calidad y excelencia para brindar un servicio diferenciador, creando un contexto de 
              <strong> apoyo, credibilidad y diálogo constructivo.</strong>
            </p>
        </section>

        {/* Pilares (Grid de 3) */}
        <div className={styles.pillarsGrid}>
            
            {/* Pilar 1 */}
            <div className={styles.pillarCard}>
                <div className={styles.iconBox}>
                    <GraduationCap size={32} />
                </div>
                <h3 className={styles.pillarTitle}>Capacitación Continua</h3>
                <div className={styles.divider}></div>
                <p>
                    Diseñamos planes de formación específicos para cada sector, asegurando el entrenamiento 
                    constante y la actualización tecnológica en el puesto de trabajo.
                </p>
            </div>
            
            {/* Pilar 2 */}
            <div className={styles.pillarCard}>
                <div className={styles.iconBox}>
                    <ShieldCheck size={32} />
                </div>
                <h3 className={styles.pillarTitle}>Seguridad Primero</h3>
                <div className={styles.divider}></div>
                <p>
                    Compromiso total con la salud y la prevención de riesgos. Actuamos preventivamente 
                    cumpliendo rigurosamente con todos los requisitos legales y normas de seguridad.
                </p>
            </div>

            {/* Pilar 3 */}
            <div className={styles.pillarCard}>
                <div className={styles.iconBox}>
                    <TrendingUp size={32} />
                </div>
                <h3 className={styles.pillarTitle}>Desarrollo Profesional</h3>
                <div className={styles.divider}></div>
                <p>
                    Nuestra motivación es conquistar al capital humano, fomentando relaciones de largo plazo 
                    y garantizando la evolución del desempeño de cada colaborador.
                </p>
            </div>
        </div>

        {/* Frase / Manifiesto */}
        <div className={styles.quoteSection}>
            <Heart size={40} className={styles.quoteIcon} />
            <blockquote className={styles.quoteText}>
                “En Recursos Humanos, trabajamos para lograr… no ser necesarios”
            </blockquote>
            <span className={styles.quoteLabel}>— Filosofía Satro S.A.</span>
        </div>

        {/* CTA: Sumate al equipo */}
        <div className={styles.ctaSection}>
            <div className={styles.ctaContent}>
                <h3>¿Querés formar parte de nuestro equipo?</h3>
                <p>Buscamos personas apasionadas por la logística y el trabajo en equipo.</p>
            </div>
            <Link to="/contacto" className={styles.ctaButton}>
                <Briefcase size={20} /> Enviar CV
            </Link>
        </div>

      </div>
    </div>
  );
};

export default RRHH;