import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center">
      <div className="absolute inset-0 z-0 ">
        <Image
          src="/hero-background.jpg"
          alt="hero-background"
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-[#010101] mix-blend-overlay" />
      </div>
      <div className="container mx-auto px-6 flex flex-col justify-center items-center z-10">
        <h1 className="font-oswald text-5xl md:text-6xl font-bold text-accent mb-4">
          Unleash Your Potential with GymElite
        </h1>
        <p className="text-white text-xl mb-8 max-w-2xl font-oswald">
          Track progress, train smarter, and achieve your goals with the
          ultimate fitness platform.
        </p>
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          <Button
            size="lg"
            className="w-full md:w-auto bg-primary hover:bg-red-700 text-white transition-colors flex items-center gap-2 group"
          >
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            size="lg"
            className="w-full md:w-auto text-white border-white hover:bg-white hover:text-primary transition-colors flex items-center gap-2 group"
            variant="secondary"
          >
            <Play className="w-5 h-5" />
            <span>Learn More</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
