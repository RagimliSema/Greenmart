import './organicpromo.css';
import organicImage from '../../assets/image/banner-05.jpg';

function OrganicPromo() {
    return (
        <section className="organic-promo">

            <div className="organic-promo-image">
                <img src={organicImage} alt="Organic fruits and vegetables" />
            </div>

            <div className="organic-promo-content">
                <h2>Organic Vegetables Everyday.</h2>
                <p className="organic-subtitle">Your online resource of healthy recipes.</p>

                <p className="organic-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam vulputate ultrices libero ut vehicula. In sit amet
                    arcu libero. Proin fringilla duo sed arcu fringilla tristique
                    eget ultricies elit.
                </p>

                <button className="organic-shop-btn">Shop Now</button>
            </div>

        </section>
    );
}

export default OrganicPromo;