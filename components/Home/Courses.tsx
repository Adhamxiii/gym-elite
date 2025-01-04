"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import FeaturedCard from "./FeaturedCard";

const featuredCourses = [
  {
    title: "Complete Body Transformation",
    description:
      "A comprehensive 12-week program designed to reshape your body and improve overall fitness.",
    image:
      "https://images.pexels.com/photos/5327470/pexels-photo-5327470.jpeg?auto=compress&cs=tinysrgb&w=600",
    instructor: {
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    price: 99.99,
    tags: ["Strength", "Cardio", "Nutrition"],
  },
  {
    title: "Mindful Yoga Journey",
    description:
      "Master the fundamentals of yoga while developing strength, flexibility, and inner peace.",
    image:
      "https://images.pexels.com/photos/7596965/pexels-photo-7596965.jpeg?auto=compress&cs=tinysrgb&w=600",
    instructor: {
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    price: 79.99,
    tags: ["Yoga", "Meditation", "Flexibility"],
  },
  {
    title: "HIIT Master Class",
    description:
      "High-intensity interval training designed to maximize calorie burn and improve endurance.",
    image:
      "https://images.pexels.com/photos/4164518/pexels-photo-4164518.jpeg?auto=compress&cs=tinysrgb&w=600",
    instructor: {
      name: "Alex Rodriguez",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    price: 89.99,
    tags: ["HIIT", "Cardio", "Weight Loss"],
  },
];

const Courses = () => {
  return (
    <section className="py-16 px-4 bg-gray-50 flex items-center justify-center">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-oswald text-4xl font-bold mb-4">
            Explore Our Popular Courses
          </h2>
          <p className="font-oswald text-muted-foreground max-w-2xl mx-auto">
            Transform your fitness journey with our expert-led courses, designed
            to help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredCourses.map((course) => (
            <FeaturedCard key={course.title} type="course" {...course} />
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" className="group">
            View All Courses
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
