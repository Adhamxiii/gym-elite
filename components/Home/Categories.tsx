"use client";

import { motion } from "framer-motion";
import {
  Dumbbell,
  Heart,
  SpaceIcon as Yoga,
  MonitorIcon as Running,
  BoxIcon as Boxing,
  Brain,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    title: "Strength Training",
    description: "Build muscle and increase strength",
    icon: Dumbbell,
    color: "bg-red-100 text-red-600",
  },
  {
    title: "Cardio",
    description: "Improve endurance and heart health",
    icon: Heart,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Yoga",
    description: "Enhance flexibility and mindfulness",
    icon: Yoga,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "HIIT",
    description: "Maximum results in minimum time",
    icon: Running,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Boxing",
    description: "Learn self-defense and get fit",
    icon: Boxing,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Meditation",
    description: "Reduce stress and improve focus",
    icon: Brain,
    color: "bg-teal-100 text-teal-600",
  },
];

const Categories = () => {
  return (
    <section className="py-16 px-4 flex items-center justify-center">
      <div className="container">
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
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="cursor-pointer group hover:shadow-lg transition-shadow">
                <CardContent className="flex items-start space-x-4 p-6">
                  <div className={`p-3 rounded-lg ${category.color}`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-white group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted">{category.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
