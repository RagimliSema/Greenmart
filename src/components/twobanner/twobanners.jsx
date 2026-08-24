import "./twobanners.css";
import bannerVietnam from "../../assets/image/banner-06.jpg";
import bannerItaly from "../../assets/image/banner-07.jpg";

function TwoBanners() {
    return (
        <section className="two-banners">
            <div className="two-banner-card">
                <img src={bannerVietnam} alt="Orange From Vietnam" />
            </div>

            <div className="two-banner-card">
                <img src={bannerItaly} alt="Fresh Italian Fruits" />
            </div>
        </section>
    );
}

export default TwoBanners;