"use client";

import { motion, useSpring } from "framer-motion";
import React, { useState, useRef } from "react";
import {
  Dumbbell,
  Heart,
  SpaceIcon as Yoga,
  MonitorIcon as Running,
  BoxIcon as Boxing,
  Brain,
} from "lucide-react";

const categories = [
  {
    title: "Strength Training",
    description: "Build muscle and increase strength",
    icon: Dumbbell,
    color: "bg-red-100 text-red-600",
    image:
      "https://images.pexels.com/photos/5327503/pexels-photo-5327503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Cardio",
    description: "Improve endurance and heart health",
    icon: Heart,
    color: "bg-blue-100 text-blue-600",
    image:
      "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Yoga",
    description: "Enhance flexibility and mindfulness",
    icon: Yoga,
    color: "bg-purple-100 text-purple-600",
    image:
      "https://images.pexels.com/photos/374101/pexels-photo-374101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "HIIT",
    description: "Maximum results in minimum time",
    icon: Running,
    color: "bg-green-100 text-green-600",
    image:
      "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Boxing",
    description: "Learn self-defense and get fit",
    icon: Boxing,
    color: "bg-orange-100 text-orange-600",
    image:
      "https://images.pexels.com/photos/23702087/pexels-photo-23702087/free-photo-of-an-athlete-wearing-gloves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Meditation",
    description: "Reduce stress and improve focus",
    icon: Brain,
    color: "bg-teal-100 text-teal-600",
    image:
      "https://images.pexels.com/photos/3822273/pexels-photo-3822273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const Categories = () => {
  const [img, setImg] = useState({
    src: "",
    alt: "",
    opacity: 0,
  });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const spring = {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  };

  const imagePos = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
  };

  const handleMove = (e: React.MouseEvent) => {
    if (!imageRef.current || !containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const { clientX, clientY } = e;
    const relativeX = clientX - containerRect.left;
    const relativeY = clientY - containerRect.top;
    imagePos.x.set(relativeX - imageRef.current.offsetWidth / 2);
    imagePos.y.set(relativeY - imageRef.current.offsetHeight / 2);
  };

  const handleImageInteraction = (
    item: { title: string; image: string },
    opacity: number
  ) => {
    setImg({ src: item.image, alt: item.title, opacity });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMove}
      className="relative  mx-auto py-16 px-4 bg-black"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-oswald text-3xl font-bold mb-4 text-white">
          Choose Your Workout Style
        </h2>
        <p className="font-oswald text-muted max-w-2xl mx-auto">
          Discover diverse workout categories tailored to your preferences and
          goals.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            className={`p-6 rounded-lg shadow-lg cursor-pointer text-white transition-all duration-300 z-[2] ${
              hoveredIndex === null || hoveredIndex === index
                ? "opacity-100"
                : "opacity-0"
            }`}
            onMouseEnter={() => {
              handleImageInteraction(category, 1);
              setHoveredIndex(index);
            }}
            onMouseMove={() => handleImageInteraction(category, 1)}
            onMouseLeave={() => {
              handleImageInteraction(category, 0);
              setHoveredIndex(null);
            }}
          >
            <div className="flex items-center space-x-4">
              <category.icon
                className={`w-8 h-8 ${
                  hoveredIndex === index && `text-${category.color}`
                }`}
              />
              <h3
                className={`text-lg font-bold

              ${hoveredIndex === index && `text-${category.color}`}
                `}
              >
                {category.title}
              </h3>
            </div>
            <p
              className={`mt-2 text-sm
                ${hoveredIndex === index && `text-accent`}
              `}
            >
              {category.description}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.img
        ref={imageRef}
        src={img.src}
        alt={img.alt}
        className="aspect-video max-w-[400px] rounded-lg object-cover absolute top-0 left-0 transition-opacity duration-200 ease-in-out pointer-events-none z-[0]"
        style={{
          x: imagePos.x,
          y: imagePos.y,
          opacity: img.opacity,
        }}
      />
    </section>
  );
};

export default Categories;
