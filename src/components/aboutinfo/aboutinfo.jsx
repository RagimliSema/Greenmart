import './aboutinfo.css';
import { FaTruck, FaHeadset, FaStore } from 'react-icons/fa6';

function AboutInfo() {
    return (
        <section className="about-info">

            <p className="about-text">
                <strong>GreenMart</strong> makes online grocery delivery and grocery shopping fast and easy.
                Get groceries delivered and order the best of seasonal farm fresh food, great local finds,
                quick meal solutions, incredible new products and exclusives, and all of your favorite grocery
                brands. It's supermarket delivery with so much more: from Fresh Deals that help you save big
                to convenient delivery windows that work around your schedule, we've thought of everything
                to make grocery home delivery simple for you. We're a grocery delivery service you can trust
                as we source only the highest-quality products and deliver them directly to your door.
            </p>

            <div className="about-cards">

                <div className="about-card">
                    <FaTruck className="about-card-icon" />
                    <div>
                        <p className="about-card-title">Home Online Shopping</p>
                        <p className="about-card-value">+78 925-942-2900</p>
                    </div>
                </div>

                <div className="about-card">
                    <FaHeadset className="about-card-icon icon-blue" />
                    <div>
                        <p className="about-card-title">Support Center</p>
                        <p className="about-card-value">+78 925-942-2901</p>
                    </div>
                </div>

                <div className="about-card">
                    <FaStore className="about-card-icon icon-orange" />
                    <div>
                        <p className="about-card-title">Store Locations</p>
                        <p className="about-card-value">View all 5 stores</p>
                    </div>
                </div>

            </div>

        </section>
    );
}

export default AboutInfo;