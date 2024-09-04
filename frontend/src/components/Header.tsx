import { useEffect, useRef, useState } from "react";
import "./Header.css"; // Import the CSS file

const images = [
  {
    src: "/images/k1.jpg",
    title: "Sleek Modern Kitchen",
    description: "Modern design blended with bold patterns and vibrant colors.",
  },
  {
    src: "/images/k2.jpg",
    title: "Contemporary Kitchen Design",
    description: "Modern kitchen with efficient design and sleek aesthetics.",
  },
  {
    src: "/images/k3.jpg",
    title: "Urban Loft Kitchen",
    description: "Ideal for city living with modern, functional design.",
  },
  {
    src: "/images/w1.jpg",
    title: "Modern Furniture Collection",
    description: "Elegant furniture with clean lines and minimalistic design.",
  },
  {
    src: "/images/k4.jpg",
    title: "Classic Gourmet Kitchen",
    description:
      "Timeless charm with elegant cabinetry and granite countertops.",
  },
  {
    src: "/images/w2.jpg",
    title: "Rustic Farmhouse Kitchen",
    description: "Cozy atmosphere with distressed wood and vintage appliances.",
  },
  {
    src: "/images/w3.jpg",
    title: "Classic Furniture Range",
    description: "Traditional designs with rich textures and warm finishes.",
  },
  {
    src: "/images/w4.jpg",
    title: "Urban Chic Furniture",
    description:
      "Modern furniture with bold, geometric designs for city living.",
  },
  {
    src: "/images/w5.jpg",
    title: "Rustic Furniture Collection",
    description: "Reclaimed wood and earthy finishes for a cozy retreat.",
  },
  {
    src: "/images/w6.jpg",
    title: "Scandinavian Design",
    description:
      "Light, airy aesthetics with functional, minimalist furniture.",
  },
  {
    src: "/images/w7.jpg",
    title: "Luxury Furniture Collection",
    description: "Opulent, comfortable furniture with exquisite craftsmanship.",
  },
  {
    src: "/images/k5.jpg",
    title: "Contemporary Fusion",
    description: "Modern design blended with bold patterns and vibrant colors.",
  },
];

const Header = () => {
  const [intersectingItems, setIntersectingItems] = useState<string[]>([]);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIntersectingItems((prev) => {
            const newItem = entry.target.getAttribute("data-index");
            if (newItem && !prev.includes(newItem)) {
              return [...prev, newItem];
            }
            return prev;
          });
        }
      });
    }, options);

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      itemsRef.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  return (
    <div className="header-container">
      <div className="w-[100%] h-[100%] relative ">
        <div className="absolute w-[100%] h-[100%] inset-0 p-3"></div>
      </div>
      <p className="text-lg text-center mb-8">
        Scroll down to see our designs with descriptions.
      </p>
      <div className="content px-10 relative">
        {images.map((image, index) => (
          <div
            key={index}
            data-index={String(index)}
            ref={(el) => {
              if (el) {
                itemsRef.current[index] = el;
              }
            }}
            className={`content-item ${index % 2 === 0 ? "left" : "right"} ${
              intersectingItems.includes(String(index)) ? "in-view" : ""
            }`}
          >
            <img src={image.src} alt={`Demo ${index + 1}`} className="image" />
            <div
              className={`description absolute ${
                index % 2 !== 0 ? "left-20" : "right-20"
              } top-10 w-[500px]`}
            >
              <p className="title">{image.title}</p>
              <p className="description-text">{image.description}</p>
              <button className="shop-now-button">Shop Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
