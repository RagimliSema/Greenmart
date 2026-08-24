import { useRef, useState } from 'react';
import './product.css';

import { FaStar } from 'react-icons/fa6';
import { FaShoppingCart } from 'react-icons/fa';
import {
    FaChevronLeft,
    FaChevronRight,
    FaRegHeart,
    FaEye,
    FaMinus,
    FaPlus
} from 'react-icons/fa6';

import product1 from '../../assets/image/product-1.jpg';
import product2 from '../../assets/image/product-02.jpg';
import product3 from '../../assets/image/product-03.jpg';
import product4 from '../../assets/image/product-04.jpg';
import product5 from '../../assets/image/product-05.jpg';
import product6 from '../../assets/image/product-06.jpg';
import product7 from '../../assets/image/product-07.jpg';
import product8 from '../../assets/image/product-08.jpg';
import product9 from '../../assets/image/product-09.jpg';
import product10 from '../../assets/image/product-10.jpg';

const productsData = [
    {
        tag: 'Featured',
        brand: 'Betterfoods',
        name: 'Zesco Ripe Bananas',
        weight: '350g',
        rating: 4,
        reviews: 3,
        price: 120.00,
        image: product1,
    },
    {
        tag: '',
        brand: 'Icebreg Foods',
        name: 'Orange Peel Zest',
        weight: '350g',
        rating: 0,
        reviews: 0,
        price: 45.00,
        image: product2,
    },
    {
        tag: '',
        brand: 'Fusion Foods',
        name: 'Tesco Green Seedless',
        weight: '450g',
        rating: 5,
        reviews: 5,
        price: 40.00,
        image: product3,
    },
    {
        tag: '',
        brand: 'Holy Roots',
        name: 'Waterfi SwimActive',
        weight: '350g',
        rating: 0,
        reviews: 0,
        price: 100.00,
        image: product4,
    },
    {
        tag: '',
        brand: 'Icebreg Foods',
        name: 'Tescot Coconut',
        weight: '450g',
        rating: 0,
        reviews: 0,
        price: 80.00,
        image: product5,
    },
    {
        tag: 'Featured',
        brand: 'Fresh Farm',
        name: 'Organic Fresh Apples',
        weight: '500g',
        rating: 4,
        reviews: 6,
        price: 35.00,
        image: product6,
    },
    {
        tag: '',
        brand: 'Green Valley',
        name: 'Fresh Red Tomatoes',
        weight: '500g',
        rating: 5,
        reviews: 8,
        price: 25.00,
        image: product7,
    },
    {
        tag: '',
        brand: 'Nature Foods',
        name: 'Fresh Green Peppers',
        weight: '400g',
        rating: 4,
        reviews: 4,
        price: 30.00,
        image: product8,
    },
    {
        tag: '',
        brand: 'Organic Farm',
        name: 'Fresh Broccoli',
        weight: '300g',
        rating: 5,
        reviews: 5,
        price: 32.00,
        image: product9,
    },
    {
        tag: '',
        brand: 'Daily Fresh',
        name: 'Organic Carrots',
        weight: '500g',
        rating: 4,
        reviews: 7,
        price: 28.00,
        image: product10,
    },
    {
        tag: 'Featured',
        brand: 'Betterfoods',
        name: 'Fresh Bananas',
        weight: '350g',
        rating: 4,
        reviews: 3,
        price: 38.00,
        image: product1,
    },
    {
        tag: '',
        brand: 'Icebreg Foods',
        name: 'Fresh Orange',
        weight: '500g',
        rating: 5,
        reviews: 4,
        price: 42.00,
        image: product2,
    },
    {
        tag: '',
        brand: 'Fusion Foods',
        name: 'Green Seedless Grapes',
        weight: '450g',
        rating: 4,
        reviews: 5,
        price: 55.00,
        image: product3,
    },
    {
        tag: '',
        brand: 'Holy Roots',
        name: 'Organic Milk',
        weight: '1L',
        rating: 5,
        reviews: 9,
        price: 60.00,
        image: product4,
    },
    {
        tag: '',
        brand: 'Fresh Farm',
        name: 'Fresh Coconut',
        weight: '450g',
        rating: 4,
        reviews: 2,
        price: 48.00,
        image: product5,
    },
];

function ProductsSection({
    title = "Daily Chilled Vegetables",
    addToCart
}) {

    const scrollRef = useRef(null);

    // Hər məhsulun index-inə görə seçilmiş sayı saxlayır
    const [quantities, setQuantities] = useState({});

    const scrollLeft = () => {

        if (!scrollRef.current) return;

        const card = scrollRef.current.querySelector('.product-card');

        if (card) {
            scrollRef.current.scrollBy({
                left: -card.offsetWidth,
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {

        if (!scrollRef.current) return;

        const card = scrollRef.current.querySelector('.product-card');

        if (card) {
            scrollRef.current.scrollBy({
                left: card.offsetWidth,
                behavior: 'smooth',
            });
        }
    };

    // "Add to cart" düyməsinə basılanda - say seçicisini aktiv edir
    const handleAddToCart = (index, price) => {

        addToCart(price);

        setQuantities((prev) => ({
            ...prev,
            [index]: 1,
        }));
    };

    // "+" düyməsi - sayı artırır və səbətə əlavə edir
    const handleIncrease = (index, price) => {

        addToCart(price);

        setQuantities((prev) => ({
            ...prev,
            [index]: (prev[index] || 0) + 1,
        }));
    };

    // "-" düyməsi - sayı azaldır, 0 olanda yenidən "Add to cart" düyməsini göstərir
    const handleDecrease = (index, price) => {

        const currentQty = quantities[index] || 0;

        if (currentQty <= 1) {

            addToCart(-price);

            setQuantities((prev) => {
                const updated = { ...prev };
                delete updated[index];
                return updated;
            });

        } else {

            addToCart(-price);

            setQuantities((prev) => ({
                ...prev,
                [index]: currentQty - 1,
            }));
        }
    };

    return (
        <div className="products-section-wrap">

            <section className="products-section">

                <div className="products-header">

                    <h2>{title}</h2>

                    <a
                        href="#"
                        className="shop-all-link"
                    >
                        Shop all
                    </a>

                </div>

                <div className="products-slider">

                    <button
                        className="slider-arrow left"
                        onClick={scrollLeft}
                        aria-label="Previous products"
                    >
                        <FaChevronLeft />
                    </button>

                    <div
                        className="products-grid"
                        ref={scrollRef}
                    >

                        {productsData.map((product, index) => {

                            const qty = quantities[index] || 0;

                            return (

                                <div
                                    className="product-card"
                                    key={index}
                                >

                                    <div className="product-tag-wrapper">

                                        {product.tag && (
                                            <span className="product-tag">
                                                {product.tag}
                                            </span>
                                        )}

                                    </div>

                                    <div className="product-image">

                                        <img
                                            src={product.image}
                                            alt={product.name}
                                        />

                                        <div className="product-hover-actions">

                                            <button
                                                className="product-action"
                                                aria-label="Add to wishlist"
                                            >
                                                <span className="action-icon">
                                                    <FaRegHeart />
                                                </span>

                                                <span className="action-text">
                                                    Add to wishlist
                                                </span>
                                            </button>

                                            <button
                                                className="product-action"
                                                aria-label="Quickview"
                                            >
                                                <span className="action-icon">
                                                    <FaEye />
                                                </span>

                                                <span className="action-text">
                                                    Quickview
                                                </span>
                                            </button>

                                        </div>

                                    </div>

                                    <div className="product-info">

                                        <p className="product-brand">
                                            {product.brand}
                                        </p>

                                        <h4 className="product-name">
                                            {product.name}
                                        </h4>

                                        <p className="product-weight">
                                            {product.weight}
                                        </p>

                                        <div className="product-rating">

                                            {[...Array(5)].map((_, i) => (

                                                <FaStar
                                                    key={i}
                                                    className={
                                                        i < product.rating
                                                            ? 'star-filled'
                                                            : 'star-empty'
                                                    }
                                                />

                                            ))}

                                            <span className="review-count">
                                                {product.reviews}
                                            </span>

                                        </div>

                                        <p className="product-price">
                                            ${product.price.toFixed(2)}
                                        </p>

                                        {qty > 0 ? (

                                            <div className="quantity-control">

                                                <button
                                                    className="quantity-minus"
                                                    onClick={() => handleDecrease(index, product.price)}
                                                    aria-label="Decrease quantity"
                                                >
                                                    <FaMinus size={12} />
                                                </button>

                                                <span className="quantity-number">
                                                    {qty}
                                                </span>

                                                <button
                                                    className="quantity-plus"
                                                    onClick={() => handleIncrease(index, product.price)}
                                                    aria-label="Increase quantity"
                                                >
                                                    <FaPlus size={12} />
                                                </button>

                                            </div>

                                        ) : (

                                            <button
                                                className="add-to-cart-btn"
                                                onClick={() => handleAddToCart(index, product.price)}
                                            >
                                                <FaShoppingCart size={14} />

                                                <span>
                                                    Add to cart
                                                </span>
                                            </button>

                                        )}

                                    </div>

                                </div>

                            );
                        })}

                    </div>

                    <button
                        className="slider-arrow right"
                        onClick={scrollRight}
                        aria-label="Next products"
                    >
                        <FaChevronRight />
                    </button>

                </div>

            </section>

        </div>
    );
}

export default ProductsSection;