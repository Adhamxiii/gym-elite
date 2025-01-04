"use client";

import CourseCard from "@/components/Courses/CourseCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { motion } from "framer-motion";
import { Filter, Search } from "lucide-react";
import { useState } from "react";

const courses = [
  {
    id: 1,
    title: "Complete Body Transformation",
    description:
      "A comprehensive 12-week program designed to reshape your body and improve overall fitness.",
    image:
      "https://images.pexels.com/photos/5327470/pexels-photo-5327470.jpeg?auto=compress&cs=tinysrgb&w=600",
    instructor: {
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    price: 99.99,
    duration: "12 weeks",
    level: "Intermediate",
    category: "Strength",
    tags: ["Strength", "Cardio", "Nutrition"],
  },
  {
    id: 2,
    title: "Mindful Yoga Journey",
    description:
      "Master the fundamentals of yoga while developing strength, flexibility, and inner peace.",
    image:
      "https://images.pexels.com/photos/7596965/pexels-photo-7596965.jpeg?auto=compress&cs=tinysrgb&w=600",
    instructor: {
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    price: 79.99,
    duration: "8 weeks",
    level: "Beginner",
    category: "Yoga",
    tags: ["Yoga", "Meditation", "Flexibility"],
  },
  {
    id: 3,
    title: "HIIT Master Class",
    description:
      "High-intensity interval training designed to maximize calorie burn and improve endurance.",
    image:
      "https://images.pexels.com/photos/4164518/pexels-photo-4164518.jpeg?auto=compress&cs=tinysrgb&w=600",
    instructor: {
      name: "Alex Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    price: 89.99,
    duration: "6 weeks",
    level: "Advanced",
    category: "HIIT",
    tags: ["HIIT", "Cardio", "Weight Loss"],
  },
];

const categories = ["All", "Strength", "Cardio", "Yoga", "HIIT", "Nutrition"];
const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];
const durations = [
  "Any Duration",
  "0-4 weeks",
  "4-8 weeks",
  "8-12 weeks",
  "12+ weeks",
];

const CoursesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [selectedDuration, setSelectedDuration] = useState("Any Duration");

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || course.category === selectedCategory;
    const matchesLevel =
      selectedLevel === "All Levels" || course.level === selectedLevel;
    const matchesDuration =
      selectedDuration === "Any Duration" ||
      course.duration.includes(selectedDuration.replace("weeks", "").trim());

    return matchesSearch && matchesCategory && matchesLevel && matchesDuration;
  });

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="container px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-primary">
            Explore Our Courses
          </h1>
          <p className="text-accent">
            Transform your fitness journey with expert-led courses designed for
            all levels
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 text-white" />
            <Input
              placeholder="Search courses..."
              className="pl-10 text-white placeholder:text-muted"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="hidden md:flex gap-4">
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-[180px] text-white">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent className="bg-neutral-950">
                {categories.map((category) => (
                  <SelectItem
                    key={category}
                    value={category}
                    className="text-white"
                  >
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
              <SelectTrigger className="w-[180px] text-white">
                <SelectValue placeholder="Level" />
              </SelectTrigger>
              <SelectContent className="bg-neutral-950">
                {levels.map((level) => (
                  <SelectItem key={level} value={level} className="text-white">
                    {level}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={selectedDuration}
              onValueChange={setSelectedDuration}
            >
              <SelectTrigger className="w-[180px] text-white">
                <SelectValue placeholder="Duration" />
              </SelectTrigger>
              <SelectContent className="bg-neutral-950">
                {durations.map((duration) => (
                  <SelectItem
                    key={duration}
                    value={duration}
                    className="text-white"
                  >
                    {duration}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full text-white">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-neutral-950">
                <SheetHeader>
                  <SheetTitle className="text-white">Filters</SheetTitle>
                </SheetHeader>
                <div className="grid gap-4 py-4 text-white">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Category</label>
                    <Select
                      value={selectedCategory}
                      onValueChange={setSelectedCategory}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Category" />
                      </SelectTrigger>
                      <SelectContent className="bg-neutral-950">
                        {categories.map((category) => (
                          <SelectItem key={category} value={category} className="text-white">
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Level</label>
                    <Select
                      value={selectedLevel}
                      onValueChange={setSelectedLevel}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Level" />
                      </SelectTrigger>
                      <SelectContent className="bg-neutral-950">
                        {levels.map((level) => (
                          <SelectItem key={level} value={level} className="text-white">
                            {level}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Duration</label>
                    <Select
                      value={selectedDuration}
                      onValueChange={setSelectedDuration}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Duration" />
                      </SelectTrigger>
                      <SelectContent className="bg-neutral-950">
                        {durations.map((duration) => (
                          <SelectItem key={duration} value={duration} className="text-white">
                            {duration}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {(selectedCategory !== "All" ||
          selectedLevel !== "All Levels" ||
          selectedDuration !== "Any Duration") && (
          <div className="flex flex-wrap gap-2 mb-6">
            {selectedCategory !== "All" && (
              <Badge variant="secondary" className="px-3 py-1">
                {selectedCategory}
              </Badge>
            )}
            {selectedLevel !== "All Levels" && (
              <Badge variant="secondary" className="px-3 py-1">
                {selectedLevel}
              </Badge>
            )}
            {selectedDuration !== "Any Duration" && (
              <Badge variant="secondary" className="px-3 py-1">
                {selectedDuration}
              </Badge>
            )}
          </div>
        )}

        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8 mb-8">
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <CourseCard course={course} />
            </motion.div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted">
              No courses found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;
