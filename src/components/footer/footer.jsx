import './footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa6';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import logoFooter from '../../assets/image/logofooter.svg';
import paymentImage from '../../assets/image/payment.png';

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-main">

                <div className="footer-col footer-about">
                    <div className="footer-logo">
                        <img src={logoFooter} alt="Greenmart" />
                        </div>

                    <p className="footer-about-text">
                        Lorem ipsum dolor sit amet, con sectetur adipiscing elit.
                        Quisque id luctus mauris, eget varius libero. Vestibulum metus leo.
                    </p>

                    <ul className="footer-contact">
                        <li><FaEnvelope /> <a href="mailto:contact@example.com">contact@example.com</a></li>
                        <li><FaPhone /> +884 123 456 789</li>
                        <li><FaMapMarkerAlt /> 70 West Buckingham Ave, NY 11735</li>
                    </ul>

                    <div className="footer-socials">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaLinkedinIn /></a>
                        <a href="#"><FaTwitter /></a>
                    </div>
                </div>

                <div className="footer-col">
                    <h4>About</h4>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Help Center</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Help &amp; Guide</h4>
                    <ul>
                        <li><a href="#">Term Of Use</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Shipping &amp; Delivery</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Newsletter</h4>
                    <p className="footer-newsletter-text">
                        Don't miss out <strong>thousands of great deals</strong> &amp; promotions.
                    </p>

                    <input type="email" placeholder="Email address..." className="footer-email-input" />
                    <button className="footer-subscribe-btn">Subscribe</button>
                </div>

            </div>

            <div className="footer-bottom">
                <p>© 2026 <strong>Greenmart</strong>. All rights reserved.</p>

                <div className="footer-payments">
                    <img src={paymentImage} alt="Payment methods" />
                </div>
            </div>

        </footer>
    );
}

export default Footer;