"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import CategoryCard from "@/components/Categories/CategoryCard";
import { useState } from "react";

const categories = [
  {
    id: 1,
    title: "Strength Training",
    description:
      "Build muscle, increase strength, and improve overall fitness with our comprehensive strength training programs.",
    image:
      "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=600",
    courseCount: 15,
    tags: ["Weightlifting", "Bodyweight", "Resistance Training"],
  },
  {
    id: 2,
    title: "Cardio & HIIT",
    description:
      "Boost endurance and burn calories with high-intensity workouts and cardio training sessions.",
    image:
      "https://images.pexels.com/photos/6516232/pexels-photo-6516232.jpeg?auto=compress&cs=tinysrgb&w=600",
    courseCount: 12,
    tags: ["HIIT", "Running", "Endurance"],
  },
  {
    id: 3,
    title: "Yoga & Flexibility",
    description:
      "Improve flexibility, balance, and mindfulness through various yoga styles and stretching routines.",
    image:
      "https://images.pexels.com/photos/3822583/pexels-photo-3822583.jpeg?auto=compress&cs=tinysrgb&w=600",
    courseCount: 18,
    tags: ["Yoga", "Meditation", "Flexibility"],
  },
  {
    id: 4,
    title: "Nutrition & Meal Planning",
    description:
      "Learn about proper nutrition, meal planning, and dietary strategies for optimal health and fitness.",
    image:
      "https://images.pexels.com/photos/12911636/pexels-photo-12911636.jpeg?auto=compress&cs=tinysrgb&w=600",
    courseCount: 8,
    tags: ["Nutrition", "Meal Prep", "Diet"],
  },
  {
    id: 5,
    title: "Sports Performance",
    description:
      "Enhance athletic performance with sport-specific training programs and techniques.",
    image:
      "https://images.pexels.com/photos/4753986/pexels-photo-4753986.jpeg?auto=compress&cs=tinysrgb&w=600",
    courseCount: 10,
    tags: ["Sports", "Athletics", "Performance"],
  },
  {
    id: 6,
    title: "Recovery & Wellness",
    description:
      "Focus on recovery, injury prevention, and overall wellness with specialized programs.",
    image:
      "https://images.pexels.com/photos/3760275/pexels-photo-3760275.jpeg?auto=compress&cs=tinysrgb&w=600",
    courseCount: 7,
    tags: ["Recovery", "Mobility", "Wellness"],
  },
];
const CategoriesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = categories.filter(
    (category) =>
      category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="container px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">
            Browse Categories
          </h1>
          <p className="text-accent">
            Discover specialized workout programs tailored to your fitness goals
          </p>
        </div>

        <div className="relative max-w-md mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 text-white" />
          <Input
            placeholder="Search categories..."
            className="pl-10 text-white placeholder:text-muted"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <CategoryCard
                title={category.title}
                description={category.description}
                image={category.image}
                courseCount={category.courseCount}
                tags={category.tags}
              />
            </motion.div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No categories found matching your search.
            </p>
          </div>
        )}

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-primary">Category Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Total Categories", value: categories.length },
              {
                label: "Total Courses",
                value: categories.reduce(
                  (acc, cat) => acc + cat.courseCount,
                  0
                ),
              },
              { label: "Most Popular", value: "Strength Training" },
              { label: "Newest Category", value: "Recovery & Wellness" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="bg-card p-4 rounded-lg"
              >
                <p className="text-sm text-muted mb-1">
                  {stat.label}
                </p>
                <p className="text-2xl font-bold text-accent">{stat.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
