"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import FeaturedCard from "./FeaturedCard";

const featuredCoaches = [
  {
    title: "Emma Thompson",
    description:
      "NASM certified trainer with 10+ years of experience in strength training and functional fitness.",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
    specialization: "Strength & Conditioning",
    tags: ["Strength Training", "Nutrition", "Rehabilitation"],
  },
  {
    title: "David Martinez",
    description:
      "Former professional athlete specializing in sports performance and athletic development.",
    image:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600",
    specialization: "Sports Performance",
    tags: ["Athletics", "Speed Training", "Agility"],
  },
  {
    title: "Lisa Chen",
    description:
      "Yoga Alliance certified instructor focusing on mindfulness and body awareness.",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
    specialization: "Yoga & Meditation",
    tags: ["Yoga", "Meditation", "Flexibility"],
  },
];

const Coaches = () => {
  return (
    <section className="py-16 px-4 bg-white flex items-center justify-center">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-oswald text-4xl font-bold mb-4">
            Meet Our Expert Coaches
          </h2>
          <p className="font-oswald text-muted-foreground max-w-2xl mx-auto">
            Train with certified professionals who are passionate about helping
            you achieve your fitness goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredCoaches.map((coach) => (
            <FeaturedCard key={coach.title} type="coach" {...coach} />
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" className="group">
            View All Coaches
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Coaches;
