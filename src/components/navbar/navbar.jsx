import { useState, useRef } from 'react';
import './navbar.css';

import promoFruit from '../../assets/image/banner-magemenu-01.jpg';
import promoMeat from '../../assets/image/banner-magemenu-02.jpg';

import supplier1 from '../../assets/image/brand-01.jpg';
import supplier2 from '../../assets/image/brand-03.jpg';
import supplier3 from '../../assets/image/brand-05.jpg';

function Navbar() {
    const [openMenu, setOpenMenu] = useState(null);
    const [closingMenu, setClosingMenu] = useState(null);

    const closeTimer = useRef(null);

    const handleEnter = (name) => {
        clearTimeout(closeTimer.current);


        if (openMenu && openMenu !== name) {
            setClosingMenu(openMenu);
        }

        // Yeni menyunu aç
        setOpenMenu(name);

        // 300ms sonra köhnə menyunu tamamilə sil
        closeTimer.current = setTimeout(() => {
            setClosingMenu(null);
        }, 300);
    };

    const handleLeave = () => {
        if (!openMenu) return;

        setClosingMenu(openMenu);
        setOpenMenu(null);

        closeTimer.current = setTimeout(() => {
            setClosingMenu(null);
        }, 300);
    };

    return (
        <nav className="navbar">

            <ul>

                {/* HOME */}
                <li
                    className="active"
                    onMouseEnter={() => handleEnter('home')}
                    onMouseLeave={handleLeave}
                >
                    Home
                    <span className="arrow">▾</span>
                </li>


                {/* SHOP */}
                <li
                    onMouseEnter={() => handleEnter('shop')}
                    onMouseLeave={handleLeave}
                >
                    Shop
                    <span className="arrow">▾</span>
                </li>


                {/* PAGES */}
                <li
                    onMouseEnter={() => handleEnter('pages')}
                    onMouseLeave={handleLeave}
                >
                    Pages
                    <span className="arrow">▾</span>

                    {(openMenu === 'pages' || closingMenu === 'pages') && (
                        <div
                            className={`simple-dropdown ${openMenu === 'pages'
                                ? 'menu-open'
                                : 'menu-closing'
                                }`}
                        >
                            <a href="#">About Us</a>
                            <a href="#">Contact Us</a>
                            <a href="#">FAQ</a>
                            <a href="#">Term Of Use</a>
                        </div>
                    )}
                </li>


                {/* VEGETABLES */}
                <li
                    onMouseEnter={() => handleEnter('vegetables')}
                    onMouseLeave={handleLeave}
                >
                    Vegetables
                    <span className="arrow">▾</span>
                </li>


                {/* BLOG */}
                {/* BLOG */}
                <li
                    onMouseEnter={() => handleEnter('blog')}
                    onMouseLeave={handleLeave}
                >
                    Blog
                    <span className="arrow">▾</span>

                    {(openMenu === 'blog' || closingMenu === 'blog') && (
                        <div
                            className={`simple-dropdown ${openMenu === 'blog'
                                    ? 'menu-open'
                                    : 'menu-closing'
                                }`}
                        >
                            <a href="#">Blog Grid</a>
                            <a href="#">Blog List</a>
                            <a href="#">Single Post</a>
                        </div>
                    )}
                </li>

                {/* FLASH SALES */}
                <li>
                    Flash Sales
                </li>

            </ul>


            {/* =========================
                HOME MEGA MENU
            ========================= */}

            {(openMenu === 'home' || closingMenu === 'home') && (
                <div
                    className={`mega-menu mega-menu-home ${openMenu === 'home'
                        ? 'menu-open'
                        : 'menu-closing'
                        }`}
                >
                    <div className="mega-menu-col">

                        <h5>HOME DEFAULT</h5>

                        <a href="#">Home 1</a>
                        <a href="#">Home 2</a>
                        <a href="#">Home 3</a>
                        <a href="#">Home 4</a>
                        <a href="#">Home 5</a>
                        <a href="#">Home RTL</a>
                        <a href="#">Catalog Mode</a>

                    </div>


                    <div className="mega-menu-col">

                        <h5>VENDOR DEMOS</h5>

                        <a href="#">Home Dokan</a>
                        <a href="#">Home WCMP</a>
                        <a href="#">Home WCFM</a>
                        <a href="#">Home WCVendors</a>

                    </div>

                </div>
            )}


            {/* =========================
                SHOP MEGA MENU
            ========================= */}

            {(openMenu === 'shop' || closingMenu === 'shop') && (
                <div
                    className={`mega-menu mega-menu-wide mega-menu-centered ${openMenu === 'shop'
                        ? 'menu-open'
                        : 'menu-closing'
                        }`}
                >

                    <div className="mega-menu-col">

                        <h5>SHOP PAGE</h5>

                        <a href="#">Shop Default Grid</a>
                        <a href="#">Shop Default Listing</a>
                        <a href="#">Shop Left Sidebar</a>
                        <a href="#">Shop Right Sidebar</a>
                        <a href="#">Shop Category</a>
                        <a href="#">Shop Flash Sales</a>
                        <a href="#">Add to Cart + Popup</a>
                        <a href="#">Add to Cart + None Popup</a>
                        <a href="#">Add to Cart + Quantity Mode</a>

                    </div>


                    <div className="mega-menu-col">

                        <h5>PRODUCT TYPES</h5>

                        <a href="#">Simple Product</a>
                        <a href="#">Variable Product</a>
                        <a href="#">External/Affiliate Product</a>
                        <a href="#">Product Count Down</a>
                        <a href="#">Product Out Of Stock</a>
                        <a href="#">Product Video</a>
                        <a href="#">Product Variable Color</a>
                        <a href="#">Product Image Swatches</a>
                        <a href="#">Product Image Review Thumbnail</a>

                    </div>


                    <div className="mega-menu-col">

                        <h5>PRODUCT LAYOUTS</h5>

                        <a href="#">Product Image Vertical</a>
                        <a href="#">Product Image Horizontal</a>
                        <a href="#">Product Left - Main Sidebar</a>
                        <a href="#">Product Right - Main Sidebar</a>
                        <a href="#">Tab Default</a>
                        <a href="#">Tab Horizontal</a>
                        <a href="#">Tab Vertical</a>
                        <a href="#">Tab Accordion</a>

                    </div>


                    <div className="mega-menu-col">

                        <h5>WOOCOMERCE</h5>

                        <a href="#">My Wishlist</a>
                        <a href="#">Shopping Cart</a>
                        <a href="#">Checkout</a>
                        <a href="#">Track My Order</a>
                        <a href="#">My account</a>

                    </div>

                </div>
            )}


            {/* =========================
                VEGETABLES MEGA MENU
            ========================= */}

            {(openMenu === 'vegetables' || closingMenu === 'vegetables') && (
                <div
                    className={`mega-menu mega-menu-wide mega-menu-centered ${openMenu === 'vegetables'
                        ? 'menu-open'
                        : 'menu-closing'
                        }`}
                >

                    <div className="mega-menu-col">

                        <h5>TOP CATEGORIES</h5>

                        <a href="#">Asparagus</a>
                        <a href="#">Beans &amp; Peas</a>
                        <a href="#">Beetroot &amp; Radish</a>
                        <a href="#">Broccoli &amp; Cauliflower</a>
                        <a href="#">Cabbage &amp; Kale</a>
                        <a href="#">Celery &amp; Fennel</a>
                        <a href="#">Carrots &amp; Root</a>

                    </div>


                    <div className="mega-menu-col">

                        <h5>FEATURED SUPPLIERS</h5>

                        <div className="supplier-grid">

                            <div className="supplier-item">
                                <img
                                    src={supplier1}
                                    alt="Supplier 1"
                                />
                            </div>

                            <div className="supplier-item">
                                <img
                                    src={supplier2}
                                    alt="Supplier 2"
                                />
                            </div>

                            <div className="supplier-item">
                                <img
                                    src={supplier3}
                                    alt="Supplier 3"
                                />
                            </div>

                        </div>

                    </div>


                    <div className="mega-menu-promo">

                        <img
                            src={promoFruit}
                            alt="Fresh Fruit Sale Up To 30%"
                        />

                        <img
                            src={promoMeat}
                            alt="Meat & Poultry Up To 50%"
                        />

                    </div>

                </div>
            )}


            {/* =========================
                OVERLAY
            ========================= */}

            {(openMenu || closingMenu) && (
                <div className="menu-overlay"></div>
            )}

        </nav>
    );
}

export default Navbar;