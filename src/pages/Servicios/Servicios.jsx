import React from 'react';
import { Truck, Warehouse, Wrench, Smartphone, ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './Servicios.module.css';

const Servicios = () => {

  const servicesList = [
    {
      id: 1,
      title: "Distribución y Logística",
      desc: "Como Distribuidor Oficial de Coca-Cola FEMSA, gestionamos una flota propia de camiones de gran porte y utilitarios para cubrir la Zona Oeste y Noroeste de Buenos Aires. \n\nGarantizamos la entrega 'puerta a puerta' en miles de puntos de venta (kioscos, almacenes y autoservicios) cumpliendo con los estándares de tiempo y seguridad de la marca.",
      tags: ["Flota Propia", "Coca-Cola FEMSA", "Capilaridad"],
      // Foto: Camión rojo de reparto en movimiento o cargado
      img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1920&auto=format&fit=crop",
      icon: <Truck size={32} />
    },
    {
      id: 2,
      title: "Centro de Distribución Inteligente",
      desc: "Operamos desde nuestra base en Loma Hermosa con un depósito de alta densidad. Utilizamos sistemas de gestión de stock (WMS) para asegurar la rotación correcta de los productos (FEFO), garantizando que las bebidas lleguen siempre frescas al consumidor.",
      tags: ["Loma Hermosa", "Stock Real-Time", "Depósito"],
      // Foto: Interior de un depósito grande con pallets de bebidas
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1920&auto=format&fit=crop",
      icon: <Warehouse size={32} />
    },
    {
      id: 3,
      title: "Preventa y Tecnología",
      desc: "Nuestro equipo comercial recorre la calle diariamente equipado con dispositivos móviles (Handhelds) conectados en tiempo real. \n\nEsto nos permite tomar pedidos con precisión, sugerir mix de productos personalizados para cada cliente y optimizar la ruta de entrega del día siguiente.",
      tags: ["Fuerza de Ventas", "Tecnología Móvil", "Asesoramiento"],
      // Foto: Persona usando tablet/tecnología o reunión de negocios
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1920&auto=format&fit=crop",
      icon: <Smartphone size={32} />
    },
    {
      id: 4,
      title: "Mantenimiento de Flota (Taller Propio)",
      desc: "Para asegurar la continuidad operativa, contamos con talleres propios dentro del predio. \n\nRealizamos mantenimiento preventivo, mecánica pesada, gomería y chapa y pintura in-house, asegurando que nuestras unidades estén siempre en condiciones óptimas para salir a la ruta.",
      tags: ["Taller In-House", "Mecánica Pesada", "Seguridad Vial"],
      // Foto: Mecánico trabajando en un camión
      img: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1920&auto=format&fit=crop",
      icon: <Wrench size={32} />
    }
  ];

  return (
    <div className={styles.pageWrapper}>
      
      {/* HEADER */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
            <span className={styles.brandTag}>OPERACIONES YAMANIL S.A.</span>
            <h1 className={styles.title}>Nuestros Servicios</h1>
            <p className={styles.subtitle}>
                Excelencia logística al servicio de las marcas <br/>
                más importantes del mundo.
            </p>
        </div>
      </header>

      <div className={styles.container}>
        {servicesList.map((service) => (
          <div key={service.id} className={styles.serviceRow}>
            
            {/* Imagen */}
            <div className={styles.imageBox}>
                <img src={service.img} alt={service.title} />
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

        <div className={styles.ctaBanner}>
            <div className={styles.ctaText}>
                <h3>¿Buscas un partner logístico confiable?</h3>
                <p>Contáctanos para conocer nuestra cobertura y soluciones a medida.</p>
            </div>
            <Link to="/contacto" className={styles.ctaButton}>
                Contactar Ahora <ArrowRight size={20} />
            </Link>
        </div>

      </div>
    </div>
  );
};

export default Servicios;