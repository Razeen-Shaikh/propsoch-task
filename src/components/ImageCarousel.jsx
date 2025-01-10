import React, { useState, useRef, useEffect } from "react";

const ImageCarousel = ({ images, gotoProductDetail }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const containerWidth = container.clientWidth;
      const index = Math.floor(container.scrollLeft / containerWidth);
      setCurrentIndex(index);
    };

    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="carousel-container product-image"
      onClick={gotoProductDetail}
    >
      <div
        className="carousel-images"
        ref={containerRef}
        style={{
          display: "flex",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
          width: "100%",
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-image ${
              index === currentIndex ? "active" : ""
            }`}
            style={{
              backgroundImage: `url(${image})`,
              flexShrink: 0,
              width: "100%",
              height: "300px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              scrollSnapAlign: "start",
            }}
          ></div>
        ))}
      </div>

      <div className="dots">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
