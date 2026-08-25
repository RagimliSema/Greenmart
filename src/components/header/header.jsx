import './header.css';

import {
    FaRegUser,
    FaPhone,
    FaCartShopping,
    FaHeart,
    FaSearch
} from "react-icons/fa6";

function Header({ cartCount, cartTotal }) {

    return (
        <header className='header'>

            {/* =========================
                DESKTOP HEADER
            ========================= */}

            <div className="header-container">

                <div className="logo">
                    <img
                        src="https://el3.thembaydev.com/greenmart_fresh/wp-content/uploads/2021/10/logo.svg"
                        alt="GreenMart"
                    />
                </div>

                <div className="search">

                    <input
                        type="text"
                        placeholder="Search products..."
                    />

                    <button>
                        <i className="bi bi-search"></i>
                    </button>

                </div>

                <div className="header-icons">

                    <div className="online-shopping">

                        <FaPhone size={20} />

                        <div>
                            <p>Online Shopping</p>

                            <p className="account-text">
                                + 78 925-942-2900
                            </p>
                        </div>

                    </div>

                    <div className="account">

                        <FaRegUser size={20} />

                        <div>
                            <p>Account</p>

                            <p className="shopping-text">
                                Login/Register
                            </p>
                        </div>

                    </div>

                    <div className="cart">

                        <div className="cart-icon-wrap">

                            <FaCartShopping size={20} />

                            <span className="cart-count">
                                {cartCount}
                            </span>

                        </div>

                        <div>

                            <p>Cart</p>

                            <p className="cart-text">
                                ${cartTotal.toFixed(2)}
                            </p>

                        </div>

                    </div>

                </div>

            </div>


            {/* =========================
                MOBILE HEADER
            ========================= */}

            <div className="mobile-header">

                <div className="mobile-logo">
                    <img
                        src="https://el3.thembaydev.com/greenmart_fresh/wp-content/uploads/2021/10/logo.svg"
                        alt="GreenMart"
                    />
                </div>

                <div className="mobile-header-actions">

                    <button className="mobile-header-icon">
                        <FaHeart />

                        {cartCount > 0 && (
                            <span className="mobile-wishlist-count">
                                {cartCount}
                            </span>
                        )}
                    </button>

                    <button className="mobile-header-icon">
                        <FaSearch />
                    </button>

                </div>

            </div>

        </header>
    );
}

export default Header;