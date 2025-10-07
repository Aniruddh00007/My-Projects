import React, { useRef, useEffect, useState } from "react";

const cn = (...classes) => classes.filter(Boolean).join(" ");

const ThreeDHoverGallery = ({
  images = [
    "/Images/girl.jpg",
    "https://images.pexels.com/photos/12194487/pexels-photo-12194487.jpeg",
    "https://images.pexels.com/photos/32423809/pexels-photo-32423809.jpeg",
    "https://images.pexels.com/photos/32296519/pexels-photo-32296519.jpeg",
    "https://images.pexels.com/photos/32396739/pexels-photo-32396739.jpeg",
    "https://images.pexels.com/photos/32304900/pexels-photo-32304900.jpeg",
    "https://images.pexels.com/photos/32437034/pexels-photo-32437034.jpeg",
    "https://images.pexels.com/photos/32469847/pexels-photo-32469847.jpeg",
  ],

  itemWidth = 12,
  itemHeight = 20,
  gap = 1.2,
  perspective = 50,
  hoverScale = 15,
  transitionDuration = 1.25,
  backgroundColor,
  grayscaleStrength = 1,
  brightnessLevel = 0.5,
  activeWidth = 45,
  enableKeyboardNavigation = true,
  autoPlay = false,
  autoPlayDelay = 3000,
  className,
  style,
  onImageClick,
  onImageHover,
  onImageFocus,
}) => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [focusedIndex, setFocusedIndex] = useState(null);
  const autoPlayRef = useRef(null);

  useEffect(() => {
    if (autoPlay && images.length > 0) {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      autoPlayRef.current = setInterval(() => {
        setActiveIndex((prev) =>
          prev === null ? 0 : (prev + 1) % images.length
        );
      }, autoPlayDelay);

      return () => clearInterval(autoPlayRef.current);
    }
    if (!autoPlay && autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  }, [autoPlay, autoPlayDelay, images.length]);

  const handleImageClick = (index, image) => {
    setActiveIndex(activeIndex === index ? null : index);
    if (onImageClick) onImageClick(index, image);
  };

  const handleImageHover = (index, image) => {
    if (!autoPlay) setActiveIndex(index);
    if (onImageHover) onImageHover(index, image);
  };

  const handleImageFocus = (index, image) => {
    setFocusedIndex(index);
    if (onImageFocus) onImageFocus(index, image);
  };

  const handleImageLeave = () => {
    if (!autoPlay) setActiveIndex(null);
  };

  const handleKeyDown = (e, index) => {
    if (!enableKeyboardNavigation) return;

    switch (e.key) {
      case "Enter":
      case " ":
        e.preventDefault();
        handleImageClick(index, images[index]);
        break;
      case "ArrowLeft":
        e.preventDefault();
        const prevIndex = index > 0 ? index - 1 : images.length - 1;
        containerRef.current?.children[prevIndex]?.focus();
        break;
      case "ArrowRight":
        e.preventDefault();
        const nextIndex = index < images.length - 1 ? index + 1 : 0;
        containerRef.current?.children[nextIndex]?.focus();
        break;
    }
  };

  const getItemStyle = (index) => {
    const isActive = activeIndex === index;
    const isFocused = focusedIndex === index;
    const baseWidthPx = 10;

    return {
      width: isActive
        ? `${activeWidth}vw`
        : `calc(${itemWidth}vw + ${baseWidthPx}px)`,
      height: `calc(${itemHeight}vw + ${itemHeight}vh)`,
      backgroundImage: `url(${images[index]})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor,
      cursor: "pointer",
      filter:
        isActive || isFocused
          ? "inherit"
          : `grayscale(${grayscaleStrength}) brightness(${brightnessLevel})`,
      transform: isActive ? `translateZ(${hoverScale}vw)` : "none",
      transition: `transform ${transitionDuration}s cubic-bezier(.1,.7,0,1), filter 3s cubic-bezier(.1,.7,0,1), width ${transitionDuration}s cubic-bezier(.1,.7,0,1)`,
      willChange: "transform, filter, width",
      zIndex: isActive ? 100 : "auto",
      margin: isActive ? "0 0.45vw" : "0",
      outline: isFocused ? "2px solid #3b82f6" : "none",
      outlineOffset: "2px",
      borderRadius: "0.5rem",
    };
  };

  return (
    <div
      className={cn(
        "flex items-center justify-center min-h-screen w-full overflow-hidden bg-background",
        className
      )}
      style={backgroundColor ? { backgroundColor, ...style } : style}
    >
      <div
        ref={containerRef}
        className="flex justify-center items-center w-full"
        style={{
          perspective: `calc(${perspective}vw + ${perspective}vh)`,
          gap: `${gap}rem`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="relative will-change-transform rounded-lg shadow-lg"
            style={getItemStyle(index)}
            tabIndex={enableKeyboardNavigation ? 0 : -1}
            onClick={() => handleImageClick(index, image)}
            onMouseEnter={() => handleImageHover(index, image)}
            onMouseLeave={handleImageLeave}
            onFocus={() => handleImageFocus(index, image)}
            onBlur={() => setFocusedIndex(null)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            role="button"
            aria-label={`Image ${index + 1} of ${images.length}`}
            aria-pressed={activeIndex === index}
          />
        ))}
      </div>
    </div>
  );
};

export default ThreeDHoverGallery;
