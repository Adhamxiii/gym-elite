import { ArrowRight } from "lucide-react";
import React from "react";
import BmiCalculator from "./BmiCalculator";
import { Button } from "../ui/button";

const Tools = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-grid">
        <div className="text-center mb-16">
          <h2 className="font-oswald text-4xl mb-4 text-white">
            Fitness Tools
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Take advantage of our free fitness calculators and tools to help you
            make informed decisions about your health journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <BmiCalculator />
          <div className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-primary/10 flex flex-col justify-center items-center text-center p-12">
            <h3 className="font-oswald text-2xl mb-4 text-white">
              More Tools Available
            </h3>
            <p className="text-gray-300 mb-8">
              Discover our full suite of fitness tools and calculators.
            </p>
            <Button className="flex items-center gap-2 text-white group">
              <span>Explore Tools</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
