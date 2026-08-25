import { useState } from 'react';
import './App.css';

import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import ShippingBar from './components/shippingbar/shippingbar';
import FeaturesBar from './components/featurepart/feature';
import Banner from './components/banner/banner';
import Product from './components/product/product';
import OrganicPromo from './components/organicpromo/organicpromo';
import TwoBanners from './components/twobanner/twobanners';
import ShopByCategory from './components/shopby/shopby';
import Recommended from './components/recommended/recommended';
import AboutInfo from './components/aboutinfo/aboutinfo';
import Footer from './components/footer/footer';

function App() {

    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);
    const [wishlistCount, setWishlistCount] = useState(0);

    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileTab, setMobileTab] = useState('menu');

    const addToCart = (price) => {
        setCartCount(prev => prev + 1);
        setCartTotal(prev => prev + price);
    };

    const addToWishlist = () => {
        setWishlistCount(prev => prev + 1);
    };

    const openMobileMenu = () => {
        setMobileTab('menu');
        setMobileOpen(true);
    };

    const closeMobileMenu = () => {
        setMobileOpen(false);
    };

    return (
        <>
            <Header
                cartCount={cartCount}
                cartTotal={cartTotal}
                wishlistCount={wishlistCount}
                onMenuClick={openMobileMenu}
            />

            <Navbar
                mobileOpen={mobileOpen}
                mobileTab={mobileTab}
                setMobileTab={setMobileTab}
                closeMobileMenu={closeMobileMenu}
            />

            <Hero />
            <ShippingBar />
            <FeaturesBar />
            <Banner />

            <div className="pattern-bg-section">

                <Product
                    title="Daily Chilled Vegetables"
                    addToCart={addToCart}
                    addToWishlist={addToWishlist}
                />

                <TwoBanners />

            </div>

            <ShopByCategory />
            <Recommended
                addToCart={addToCart}
                addToWishlist={addToWishlist}
            />
            <OrganicPromo />

            <Product
                title="Featured Fresh Fruit"
                addToCart={addToCart}
                addToWishlist={addToWishlist}
            />

            <AboutInfo />
            <Footer />
        </>
    );
}

export default App;