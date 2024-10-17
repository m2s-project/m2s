import { useState } from "react";
import "./carousel.css";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };
  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <img
        src={images[currentIndex]}
        alt={`Slide $ {
                currentIndex
            }

            `}
        className="carousel-image"
      />
      <button onClick={prevSlide} className="carousel-prev">
        &#10094;
      </button>
      <button onClick={nextSlide} className="carousel-next">
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
