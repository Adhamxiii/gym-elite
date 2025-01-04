import { Dumbbell, LineChart, Users } from "lucide-react";
import React from "react";
import WhyChooseCard from "./WhyChooseCard";

const WhyChoose = () => {
  return (
    <section className="container mx-auto px-6 py-12 flex flex-col items-center min-h-[400px]">
      <h1 className="text-white font-oswald text-5xl md:text-6xl font-bold mb-16 text-center">
        Why Choose <span className="text-primary">GymElite</span>?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <WhyChooseCard
          icon={LineChart}
          title="Professional Trainers"
          description="Our trainers are certified professionals who will help you achieve your fitness goals."
        />
        <WhyChooseCard
          icon={Dumbbell}
          title="Free Workouts"
          description="Enjoy free workouts with our community of trainers and coaches."
        />
        <WhyChooseCard
          icon={Users}
          title="Expert Coaches"
          description="Our coaches are experts in their field, providing personalized guidance and support."
        />
      </div>
    </section>
  );
};

export default WhyChoose;
