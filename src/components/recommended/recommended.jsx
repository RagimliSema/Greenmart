import { useState } from 'react';
import './recommended.css';

import { FaStar } from 'react-icons/fa6';
import { FaShoppingCart } from 'react-icons/fa';
import { FaMinus, FaPlus, FaRegHeart, FaEye } from 'react-icons/fa6';

import bannerImg from '../../assets/image/banner-product.jpg';

import rec1 from '../../assets/image/product-1.jpg';
import rec2 from '../../assets/image/product-02.jpg';
import rec3 from '../../assets/image/product-03.jpg';
import rec4 from '../../assets/image/product-04.jpg';
import rec5 from '../../assets/image/product-05.jpg';
import rec6 from '../../assets/image/product-06.jpg';
import rec7 from '../../assets/image/product-07.jpg';
import rec8 from '../../assets/image/product-08.jpg';
import rec9 from '../../assets/image/product-09.jpg';

const recommendedData = [
    {
        tag: 'Featured',
        brand: 'Betterfoods',
        name: 'Zesco Ripe Bananas',
        weight: '350g',
        rating: 4,
        reviews: 3,
        price: 120.00,
        image: rec1
    },
    {
        tag: '',
        brand: 'Icebreg Foods',
        name: 'Orange Peel Zest',
        weight: '350g',
        rating: 0,
        reviews: 0,
        price: 45.00,
        image: rec2
    },
    {
        tag: '',
        brand: 'Fusion Foods',
        name: 'Tesco Green Seedless',
        weight: '450g',
        rating: 5,
        reviews: 1,
        price: 40.00,
        image: rec3
    },
    {
        tag: '',
        brand: 'Holy Roots',
        name: 'Waterfi SwimActive',
        weight: '350g',
        rating: 0,
        reviews: 0,
        price: 100.00,
        image: rec4
    },
    {
        tag: '',
        brand: 'Icebreg Foods',
        name: 'Tescot Coconut',
        weight: '450g',
        rating: 0,
        reviews: 0,
        price: 80.00,
        image: rec5
    },
    {
        tag: '',
        brand: 'Urban Foods',
        name: 'Tesco Yellow Flesh Kiwi',
        weight: '350g',
        rating: 0,
        reviews: 0,
        price: 85.00,
        image: rec6
    },
    {
        tag: 'Featured',
        brand: 'Yummy Tummy',
        name: 'Tesco Large Cherries',
        weight: '450g',
        rating: 4,
        reviews: 1,
        price: 100.00,
        image: rec7
    },
    {
        tag: 'Featured',
        brand: 'Betterfoods',
        name: 'Tesco Brownturn Appl',
        weight: '450g',
        rating: 0,
        reviews: 0,
        price: 100.00,
        image: rec8
    },
    {
        tag: '',
        brand: 'Fatlhappy',
        name: 'Tesco Karni Apples',
        weight: '350g',
        rating: 4,
        reviews: 1,
        price: 90.00,
        image: rec9
    }
];

function Recommended({ addToCart }) {

    const [quantities, setQuantities] = useState({});

    const handleAddToCart = (index, price) => {

        addToCart(price);

        setQuantities((prev) => ({
            ...prev,
            [index]: 1
        }));
    };

    const handleIncrease = (index, price) => {

        addToCart(price);

        setQuantities((prev) => ({
            ...prev,
            [index]: (prev[index] || 0) + 1
        }));
    };

    const handleDecrease = (index, price) => {

        const currentQty = quantities[index] || 0;

        addToCart(-price);

        if (currentQty <= 1) {

            setQuantities((prev) => {

                const updated = { ...prev };

                delete updated[index];

                return updated;
            });

        } else {

            setQuantities((prev) => ({
                ...prev,
                [index]: currentQty - 1
            }));
        }
    };

    return (
        <section className="recommended-section">

            <div className="recommended-header">

                <h2>Recommended For You</h2>

                <a href="#" className="shop-all-link">
                    Shop all
                </a>

            </div>

            <div className="recommended-layout">

                {/* BANNER */}

                <div className="recommended-banner">

                    <img
                        src={bannerImg}
                        alt="Daily Foods For Your Meals"
                    />

                </div>

                {/* PRODUCTS */}

                {recommendedData.map((product, index) => {

                    const qty = quantities[index] || 0;

                    return (

                        <div
                            className="rec-card"
                            key={index}
                        >

                            {/* TAG */}

                            <div className="rec-tag-wrapper">

                                {product.tag && (
                                    <span className="rec-tag">
                                        {product.tag}
                                    </span>
                                )}

                            </div>

                            {/* IMAGE */}

                            <div className="rec-image">

                                <img
                                    src={product.image}
                                    alt={product.name}
                                />

                                {/* HOVER ACTIONS */}

                                <div className="rec-hover-actions">

                                    <button className="rec-action">

                                        <span>
                                            <FaRegHeart />
                                        </span>

                                        <small>
                                            Add to wishlist
                                        </small>

                                    </button>

                                    <button className="rec-action">

                                        <span>
                                            <FaEye />
                                        </span>

                                        <small>
                                            Quickview
                                        </small>

                                    </button>

                                </div>

                            </div>

                            {/* INFO */}

                            <div className="rec-info">

                                <p className="rec-brand">
                                    {product.brand}
                                </p>

                                <h4 className="rec-name">
                                    {product.name}
                                </h4>

                                <p className="rec-weight">
                                    {product.weight}
                                </p>

                                {/* RATING */}

                                <div className="rec-rating">

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

                                {/* PRICE */}

                                <p className="rec-price">
                                    ${product.price.toFixed(2)}
                                </p>

                                {/* CART */}

                                {qty > 0 ? (

                                    <div className="quantity-control">

                                        <button
                                            className="quantity-minus"
                                            onClick={() =>
                                                handleDecrease(
                                                    index,
                                                    product.price
                                                )
                                            }
                                        >
                                            <FaMinus size={12} />
                                        </button>

                                        <span className="quantity-number">
                                            {qty}
                                        </span>

                                        <button
                                            className="quantity-plus"
                                            onClick={() =>
                                                handleIncrease(
                                                    index,
                                                    product.price
                                                )
                                            }
                                        >
                                            <FaPlus size={12} />
                                        </button>

                                    </div>

                                ) : (

                                    <button
                                        className="add-to-cart-btn"
                                        onClick={() =>
                                            handleAddToCart(
                                                index,
                                                product.price
                                            )
                                        }
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

        </section>
    );
}

export default Recommended;