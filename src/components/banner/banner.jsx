import './banner.css';
import banner1 from '../../assets/image/banner-01.jpg';
import banner2 from '../../assets/image/banner-02.jpg';
import banner3 from '../../assets/image/banner-03.jpg';
import banner4 from '../../assets/image/banner-04.jpg';

const promoImages = [banner1, banner2, banner3, banner4];

function PromoBanners() {
    return (
        <section className="promo-banners">
            {promoImages.map((img, index) => (
                <div className="promo-card" key={index}>
                    <img src={img} alt="Promo banner" />
                </div>
            ))}
        </section>
    );
}

export default PromoBanners;