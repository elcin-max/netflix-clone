import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";


import  "../styles/Banner.scss";

export default function Banner() {
  const [index, setIndex] = useState(0);

  const images = [
    {
      img: "img/bg-1.jpg",
      title: "Welcome to Prime Video",
      text: "Join Prime to watch the latest movies, TV shows, and award-winning Amazon Originals",
      button: "Sign In",
    },
    {
      img: "img/bg-2.jpg",
      title: "Welcome to Prime Video",
      text: "Early Access to new movies, before digital subscription",
      button: "Renew Now",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={"banner-container"}>
      <AnimatePresence>
        <motion.div
          key={index}
          className={"banner-slide"}
          style={{ backgroundImage: `url(${images[index].img})` }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1 }}
        >
          <div className="content">
            <h1>{images[index].title}</h1>
            <p>{images[index].text}</p>
            <button>{images[index].button}</button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
