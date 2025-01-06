'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

// Importing image assets
import burgerImg from '@/assets/burger.jpg';
import curryImg from '@/assets/curry.jpg';
import dumplingsImg from '@/assets/dumplings.jpg';
import macncheeseImg from '@/assets/macncheese.jpg';
import pizzaImg from '@/assets/pizza.jpg';
import schnitzelImg from '@/assets/schnitzel.jpg';
import tomatoSaladImg from '@/assets/tomato-salad.jpg';
import classes from './image-slideshow.module.css';

// Array of image objects with `src` and `alt` attributes for slideshow
const images = [
  { image: burgerImg, alt: 'A delicious, juicy burger' },
  { image: curryImg, alt: 'A delicious, spicy curry' },
  { image: dumplingsImg, alt: 'Steamed dumplings' },
  { image: macncheeseImg, alt: 'Mac and cheese' },
  { image: pizzaImg, alt: 'A delicious pizza' },
  { image: schnitzelImg, alt: 'A delicious schnitzel' },
  { image: tomatoSaladImg, alt: 'A delicious tomato salad' },
];

export default function ImageSlideshow() {
  // State to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // useEffect to handle the automatic slideshow functionality
  useEffect(() => {
    // Set up an interval to change the image every 5 seconds (5000ms)
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        // Increment the index or reset to 0 if at the last image
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this effect runs once on component mount

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ''}
          alt={image.alt}
        />
      ))}
    </div>
  );
}