import React from 'react';
import { Link } from 'react-router-dom'; // Importamos Link
import { ShoppingBag, Droplet, Check } from 'lucide-react'; 
import styles from './Calidad.module.css';

const Calidad = () => {
  return (
    <div className={styles.container}>
      
      {/* HEADER */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
             <span className={styles.brandTag}>YAMANIL S.A.</span>
             <h1 className={styles.title}>Catálogo de Productos</h1>
             <p className={styles.headerSubtitle}>
                Distribuimos la familia completa de <strong>The Coca-Cola Company</strong>.
                <br />Calidad y frescura garantizada en cada entrega.
             </p>
        </div>
      </header>

      <div className={styles.content}>
        
        {/* SECCIÓN 1: GASEOSAS */}
        <section className={styles.categorySection}>
            <div className={styles.categoryHeader}>
                <div className={styles.iconWrapper} style={{ background: '#ffebee', color: '#F40009' }}>
                    <ShoppingBag size={30} />
                </div>
                <h2>Línea Gaseosas</h2>
                <p>El sabor de siempre, en todos los formatos.</p>
            </div>

            <div className={styles.productGrid}>
                {/* Producto 1: Coca-Cola Original */}
                <div className={styles.productCard}>
                    <div className={styles.cardBadge}>Más Vendido</div>
                    <div className={styles.imageContainer}>
                        <img 
                            src="https://acdn-us.mitiendanube.com/stores/001/211/660/products/coca-006ef25d4b11679fa917251138441237-640-0.webp" 
                            alt="Coca-Cola Original Botella" 
                            className={styles.productImage}
                        />
                    </div>
                    <div className={styles.cardBody}>
                        <h3>Coca-Cola Original</h3>
                        <p>La bebida más famosa del mundo. Disponible en todas sus presentaciones.</p>
                        <ul className={styles.packList}>
                            <li><Check size={14}/> Retornable 2L / 1.25L</li>
                            <li><Check size={14}/> PET 3L / 2.25L / 1.5L</li>
                            <li><Check size={14}/> Lata 354ml / 220ml</li>
                        </ul>
                    </div>
                </div>

                 {/* Producto 2: Coca-Cola Sin Azúcar */}
                 <div className={styles.productCard}>
                    <div className={styles.imageContainer}>
                        <img 
                            src="https://acdn-us.mitiendanube.com/stores/001/144/141/products/whatsapp-image-2021-08-25-at-10-58-521-0f25c3ffe2f988f61416299000066804-1024-1024.webp" 
                            alt="Coca-Cola Zero Botella" 
                            className={styles.productImage}
                        />
                    </div>
                    <div className={styles.cardBody}>
                        <h3>Coca-Cola Sin Azúcar</h3>
                        <p>El mismo sabor inconfundible, sin azúcar. La opción de mayor crecimiento.</p>
                        <ul className={styles.packList}>
                            <li><Check size={14}/> Retornable 2L</li>
                            <li><Check size={14}/> PET 2.5L / 1.5L</li>
                            <li><Check size={14}/> Lata 354ml</li>
                        </ul>
                    </div>
                </div>

                {/* Producto 3: Sprite */}
                <div className={styles.productCard}>
                    <div className={styles.imageContainer}>
                        <img 
                            src="https://jumboargentina.vtexassets.com/arquivos/ids/881687-1200-auto?v=638919057894970000&width=1200&height=auto&aspect=true" 
                            alt="Sprite Lima Limón Botella" 
                            className={styles.productImage}
                        />
                    </div>
                    <div className={styles.cardBody}>
                        <h3>Sprite Lima-Limón</h3>
                        <p>Transparente, crujiente y refrescante. Ideal para combatir la sed.</p>
                        <ul className={styles.packList}>
                            <li><Check size={14}/> Retornable 2L</li>
                            <li><Check size={14}/> PET 2.25L / 1.5L</li>
                            <li><Check size={14}/> Lata 354ml</li>
                        </ul>
                    </div>
                </div>

                {/* Producto 4: Fanta */}
                <div className={styles.productCard}>
                    <div className={styles.imageContainer}>
                        <img 
                            src="https://jumboargentina.vtexassets.com/arquivos/ids/782922-1200-auto?v=638826490849600000&width=1200&height=auto&aspect=true" 
                            alt="Fanta Naranja Botella" 
                            className={styles.productImage}
                        />
                    </div>
                    <div className={styles.cardBody}>
                        <h3>Fanta Naranja</h3>
                        <p>Diversión y sabor frutal intenso. La preferida de los jóvenes.</p>
                        <ul className={styles.packList}>
                            <li><Check size={14}/> Retornable 2L</li>
                            <li><Check size={14}/> PET 2.25L / 1.5L</li>
                            <li><Check size={14}/> Lata 354ml</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>


        {/* SECCIÓN 2: AGUAS Y JUGOS */}
        <section className={styles.categorySection} style={{ marginTop: '4rem' }}>
            <div className={styles.categoryHeader}>
                <div className={styles.iconWrapper} style={{ background: '#e3f2fd', color: '#0288d1' }}>
                    <Droplet size={30} />
                </div>
                <h2>Aguas, Jugos e Isotónicas</h2>
                <p>Hidratación y energía para cada momento del día.</p>
            </div>

            <div className={styles.productGrid}>
                {/* Producto: Jugos */}
                <div className={styles.productCard}>
                    <div className={styles.imageContainer}>
                        <img 
                            src="https://jumboargentina.vtexassets.com/arquivos/ids/800264-1200-auto?v=638826492568330000&width=1200&height=auto&aspect=true" 
                            alt="Cepita del Valle Naranja" 
                            className={styles.productImage}
                        />
                    </div>
                    <div className={styles.cardBody}>
                        <h3>Jugos y Aguas Saborizadas</h3>
                        <p>Cepita del Valle y Aquarius en formatos familiares e individuales.</p>
                        <div className={styles.miniTag}>Tetra 1L & PET 1.5L</div>
                    </div>
                </div>

                {/* Producto: Powerade */}
                <div className={styles.productCard}>
                    <div className={styles.imageContainer}>
                        <img 
                            src="https://hiperlibertad.vtexassets.com/arquivos/ids/210119-1200-auto?v=638210685812700000&width=1200&height=auto&aspect=true" 
                            alt="Bebidas Deportivas Powerade" 
                            className={styles.productImage}
                        />
                    </div>
                    <div className={styles.cardBody}>
                        <h3>Isotónicos Deportivos</h3>
                        <p>Powerade Mountain Blast, Frutas Tropicales. Rehidratación completa.</p>
                        <div className={styles.miniTag}>PET 500ml / 995ml</div>
                    </div>
                </div>

                {/* Producto: Monster */}
                <div className={styles.productCard}>
                    <div className={styles.imageContainer}>
                        <img 
                            src="https://jumboargentina.vtexassets.com/arquivos/ids/774218-1200-auto?v=638149331391670000&width=1200&height=auto&aspect=true" 
                            alt="Monster Energy Lata" 
                            className={styles.productImage}
                        />
                    </div>
                    <div className={styles.cardBody}>
                        <h3>Energía Monster</h3>
                        <p>Energy, Mango Loco, Ultra White. La energía que necesitas.</p>
                        <div className={styles.miniTag}>Lata 473ml</div>
                    </div>
                </div>
            </div>
        </section>

        {/* Banner Final (ACTUALIZADO CON LINK) */}
        <div className={styles.ctaBanner}>
            <div className={styles.ctaText}>
                <h3>¿Necesitas abastecer tu negocio?</h3>
                <p>Consulta nuestra lista de precios actualizada y zonas de reparto.</p>
            </div>
            {/* Botón ahora es un Link a /contacto */}
            <Link to="/contacto" className={styles.ctaButton}>
                Contactar Vendedor
            </Link>
        </div>

      </div>
    </div>
  );
};

export default Calidad;