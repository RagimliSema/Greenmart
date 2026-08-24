import './hero.css';
import { useState, useEffect } from 'react';

const slides = [
    {
        id: 1,
        title1: 'Farm Fresh',
        title2: 'Vegetables &',
        title3: 'Food 100% Organic.',
        text: 'Always fresh organic products for you.',
        image:
            'https://el3.thembaydev.com/greenmart_fresh/wp-content/uploads/revslider/slider-1/background-slider-01.jpg',
    },
    {
        id: 2,
        title1: 'Farm Fresh',
        title2: 'Poultry &',
        title3: 'Meat 100% Organic.',
        text: 'Always fresh organic products for you.',
        image:
            'https://el3.thembaydev.com/greenmart_fresh/wp-content/uploads/revslider/slider-1/background-slider-02.jpg',
    },
];

const SLIDE_DURATION = 4000;

function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Previous slide
    const goToPrevSlide = () => {
        setCurrentSlide((prev) =>
            prev === 0 ? slides.length - 1 : prev - 1
        );
    };

    // Next slide
    const goToNextSlide = () => {
        setCurrentSlide((prev) =>
            prev === slides.length - 1 ? 0 : prev + 1
        );
    };

  
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) =>
                prev === slides.length - 1 ? 0 : prev + 1
            );
        }, SLIDE_DURATION);

        return () => clearInterval(timer);
    }, []);

    const slide = slides[currentSlide];

    return (
        <section
            className="hero"
            style={{
                backgroundImage: `url(${slide.image})`,
            }}
        >
           
            <div className="hero-overlay"></div>

            
            <button
                type="button"
                className="hero-arrow hero-arrow-left"
                onClick={goToPrevSlide}
                aria-label="Previous slide"
            >
                <span>‹</span>
            </button>

           
            <div
                className="hero-content"
                key={slide.id}
            >
                {/* 1-ci yazı — yuxarıdan aşağı */}
                <h1 className="hero-title">
                    <span className="hero-title-first">
                        <strong>{slide.title1}</strong> {slide.title2}
                    </span>

                    {/* 2-ci yazı — aşağıdan yuxarı */}
                    <span className="hero-title-second">
                        <strong>{slide.title3}</strong>
                    </span>
                </h1>

                {/* Description */}
                <p className="hero-description">
                    {slide.text}
                </p>

                {/* Shop Now — aşağıdan yuxarı */}
                <button
                    type="button"
                    className="shop-now-btn"
                >
                    Shop Now
                </button>
            </div>

            {/* RIGHT ARROW */}
            <button
                type="button"
                className="hero-arrow hero-arrow-right"
                onClick={goToNextSlide}
                aria-label="Next slide"
            >
                <span>›</span>
            </button>

            {/* DOTS */}
            <div className="hero-dots">
                {slides.map((item, index) => (
                    <button
                        type="button"
                        key={item.id}
                        className={`dot ${
                            index === currentSlide ? 'active' : ''
                        }`}
                        onClick={() => setCurrentSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}

export default Hero;