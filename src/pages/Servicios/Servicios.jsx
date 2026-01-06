import React from 'react';
import { Truck, Package, Map, Wrench, Hammer, ArrowRight } from 'lucide-react'; // Iconos nuevos
import { Link } from 'react-router-dom';
import styles from './Servicios.module.css';

const Servicios = () => {

  // Datos con ICONOS agregados
  const servicesList = [
    {
      id: 1,
      title: "Distribución Directa",
      desc: "Proveemos a Coca-Cola Femsa S.A. el mejor servicio de distribución del país desde hace más de 25 años. \n\nNuestra flota actualizada (máximo 10 años) y nuestro plantel de choferes capacitados nos permiten entregar más de 1 millón de litros de bebidas por día.",
      tags: ["Coca-Cola Femsa", "+25 Años", "Flota Moderna"],
      img: "https://images.unsplash.com/photo-1616432043562-3671ea2e5242?q=80&w=1920&auto=format&fit=crop",
      icon: <Truck size={32} />
    },
    {
      id: 2,
      title: "Distribuidora Rebesa",
      desc: "Somos el distribuidor de bebidas con mayor variedad de productos en la zona Oeste (Isidro Casanova, Laferrere, Virrey del Pino).\n\nRealizamos entregas semanales con un alto índice de calidad, asegurando que los productos lleguen en tiempo y forma al punto de venta.",
      tags: ["Logística Capilar", "Zona Oeste", "Consumo Masivo"],
      img: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&w=1920&auto=format&fit=crop",
      icon: <Package size={32} />
    },
    {
      id: 3,
      title: "Distribución Interplanta",
      desc: "Mantenemos equilibrado el stock de los distintos Centros de Distribución moviendo unos 130.000 cajones diarios.\n\nUtilizamos tecnología de punta integrando Tracking GPS y tablets en cabina para mantener la operación controlada de manera online.",
      tags: ["Tecnología GPS", "Inter-Centros", "Gran Volumen"],
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1920&auto=format&fit=crop",
      icon: <Map size={32} />
    },
    {
      id: 4,
      title: "Mantenimiento de Flotas",
      desc: "Con más de 20 años de experiencia y 7000m² de infraestructura, realizamos mantenimiento preventivo y correctivo.\n\nContamos con especialistas en Herrería, Gomería, Pintura, Electricidad y Mecánica para reducir las fallas al mínimo.",
      tags: ["Taller Propio", "24hs", "Preventivo"],
      img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1920&auto=format&fit=crop",
      icon: <Wrench size={32} />
    },
    {
      id: 5,
      title: "Desarrollo de Carrocerías",
      desc: "Diseñamos y fabricamos nuestras propias carrocerías adaptadas a las necesidades específicas de la distribución de bebidas, garantizando durabilidad y eficiencia en la carga.",
      tags: ["Fabricación", "Metalúrgica", "Diseño a medida"],
      img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1920&auto=format&fit=crop",
      icon: <Hammer size={32} />
    }
  ];

  return (
    <div className={styles.pageWrapper}>
      
      {/* HEADER */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
            <h1 className={styles.title}>Nuestras Unidades de Negocio</h1>
            <p className={styles.subtitle}>Soluciones integrales para cada etapa de la cadena logística</p>
        </div>
      </header>

      <div className={styles.container}>
        {servicesList.map((service) => (
          <div key={service.id} className={styles.serviceRow}>
            
            {/* Imagen */}
            <div className={styles.imageBox}>
                <img src={service.img} alt={service.title} />
                {/* Overlay sutil al hacer hover */}
                <div className={styles.imageOverlay}></div>
            </div>

            {/* Texto */}
            <div className={styles.textBox}>
                <div className={styles.iconWrapper}>
                    {service.icon}
                </div>
                
                <h2 className={styles.serviceTitle}>{service.title}</h2>
                <div className={styles.divider}></div>
                
                <p className={styles.serviceDesc}>{service.desc}</p>
                
                {/* Badges/Etiquetas */}
                <div className={styles.tagsContainer}>
                    {service.tags.map((tag, index) => (
                        <span key={index} className={styles.badge}>{tag}</span>
                    ))}
                </div>
            </div>

          </div>
        ))}

        {/* Call to Action Final */}
        <div className={styles.ctaSection}>
            <h3>¿Necesita una solución logística a medida?</h3>
            <Link to="/contacto" className={styles.ctaButton}>
                Contactar Ahora <ArrowRight size={20} />
            </Link>
        </div>

      </div>
    </div>
  );
};

export default Servicios;