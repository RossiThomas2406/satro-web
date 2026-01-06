import React from 'react';
import { ShieldCheck, TrendingUp, Users, ClipboardCheck, Award, CheckCircle } from 'lucide-react';
import styles from './Calidad.module.css';

const Calidad = () => {
  return (
    <div className={styles.container}>
      
      {/* HEADER (Mismo estilo que Home/Servicios) */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
             <h1 className={styles.title}>Política de Calidad</h1>
             <p className={styles.headerSubtitle}>Excelencia certificada en cada kilómetro</p>
        </div>
      </header>

      <div className={styles.content}>
        
        {/* Bloque Principal */}
        <section className={styles.policySection}>
            <div className={styles.policyHeader}>
                <h2 className={styles.subtitle}>Compromiso con la Excelencia</h2>
                <div className={styles.separator}></div>
            </div>

            <p className={styles.text}>
                En <strong>SATRO S.A.</strong> y nuestra subsidiaria <strong>REBESA S.A.</strong>, 
                hemos desarrollado un Sistema de Gestión de Calidad robusto, diseñado para garantizar 
                una distribución ágil, segura y eficiente en todo el territorio nacional.
            </p>
            <p className={styles.text}>
                Nuestro principal objetivo es <strong>superar las expectativas de nuestros clientes</strong>, 
                evaluando sistemáticamente el grado de satisfacción y optimizando nuestros recursos 
                para ser la opción más competitiva del mercado.
            </p>

            {/* Objetivos con Iconos */}
            <div className={styles.objectivesGrid}>
                <div className={styles.objectiveCard}>
                    <div className={styles.iconBox}>
                        <TrendingUp size={28} />
                    </div>
                    <div>
                        <h4>Mejora Continua</h4>
                        <p>Optimización constante de procesos logísticos.</p>
                    </div>
                </div>

                <div className={styles.objectiveCard}>
                    <div className={styles.iconBox}>
                        <ShieldCheck size={28} />
                    </div>
                    <div>
                        <h4>Mantenimiento de Flota</h4>
                        <p>Recursos garantizados para verificación técnica.</p>
                    </div>
                </div>

                <div className={styles.objectiveCard}>
                    <div className={styles.iconBox}>
                        <Users size={28} />
                    </div>
                    <div>
                        <h4>Capital Humano</h4>
                        <p>Desarrollo y capacitación de nuestro personal.</p>
                    </div>
                </div>

                <div className={styles.objectiveCard}>
                    <div className={styles.iconBox}>
                        <ClipboardCheck size={28} />
                    </div>
                    <div>
                        <h4>Cumplimiento Legal</h4>
                        <p>Apego estricto a normativas y requisitos.</p>
                    </div>
                </div>
            </div>

            {/* KPI STRIP (Barra de Métricas - Nuevo) */}
            <div className={styles.kpiStrip}>
                <div className={styles.kpiItem}>
                    <span className={styles.kpiNumber}>100%</span>
                    <span className={styles.kpiLabel}>Trazabilidad</span>
                </div>
                <div className={styles.kpiDivider}></div>
                <div className={styles.kpiItem}>
                    <span className={styles.kpiNumber}>ISO</span>
                    <span className={styles.kpiLabel}>Estándar Global</span>
                </div>
                <div className={styles.kpiDivider}></div>
                <div className={styles.kpiItem}>
                    <span className={styles.kpiNumber}>24/7</span>
                    <span className={styles.kpiLabel}>Monitoreo</span>
                </div>
            </div>

            {/* Badge ISO (Diseño Certificado) */}
            <div className={styles.isoCertificate}>
                <div className={styles.isoIconWrapper}>
                    <Award size={60} strokeWidth={1.5} />
                </div>
                <div className={styles.isoText}>
                    <div className={styles.isoHeader}>
                        <h4>Certificación ISO 9001:2015</h4>
                        <span className={styles.verifiedBadge}><CheckCircle size={14}/> Verificado</span>
                    </div>
                    <p>
                        Nuestro sistema de gestión cumple con los estándares internacionales 
                        más exigentes, asegurando la calidad y transparencia en cada entrega 
                        que realizamos.
                    </p>
                </div>
            </div>

        </section>

      </div>
    </div>
  );
};

export default Calidad;