"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Award,
  BarChart,
  Clock,
  Search,
  Star,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// Mock data for the category
const categoryData = {
  name: "Strength Training",
  description:
    "Build strength and power with expert-led courses designed for every fitness level.",
  image:
    "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  courseCount: 15,
};

// Mock data for courses
const coursesData = [
  {
    id: 1,
    title: "Foundations of Weightlifting",
    description:
      "Master the basics of weightlifting with proper form and technique.",
    image: "/course-weightlifting.jpg",
    instructor: {
      name: "John Doe",
      avatar: "/john-doe-avatar.jpg",
    },
    duration: "6 weeks",
    level: "Beginner",
    enrolled: 1234,
    rating: 4.8,
    price: 79.99,
    features: ["Video Lessons", "Quizzes", "Certification"],
  },
  {
    id: 2,
    title: "Advanced Powerlifting Techniques",
    description:
      "Take your powerlifting skills to the next level with advanced training methods.",
    image: "/course-powerlifting.jpg",
    instructor: {
      name: "Jane Smith",
      avatar: "/jane-smith-avatar.jpg",
    },
    duration: "8 weeks",
    level: "Advanced",
    enrolled: 876,
    rating: 4.9,
    price: 99.99,
    features: ["Video Lessons", "Live Sessions", "Personalized Feedback"],
  },
  {
    id: 3,
    title: "Bodyweight Strength Mastery",
    description: "Build incredible strength using just your body weight.",
    image: "/course-bodyweight.jpg",
    instructor: {
      name: "Mike Johnson",
      avatar: "/mike-johnson-avatar.jpg",
    },
    duration: "4 weeks",
    level: "Intermediate",
    enrolled: 2345,
    rating: 4.7,
    price: 59.99,
    features: ["Video Lessons", "Workout Plans", "Mobile App Access"],
  },
  // Add more courses as needed
];

const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];
const durations = ["Any Duration", "0-4 weeks", "4-8 weeks", "8+ weeks"];
const priceRanges = ["All Prices", "Free", "Paid"];
const features = [
  "Video Lessons",
  "Quizzes",
  "Certification",
  "Live Sessions",
  "Personalized Feedback",
  "Workout Plans",
  "Mobile App Access",
];

export default function CategoryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [selectedDuration, setSelectedDuration] = useState("Any Duration");
  const [selectedPrice, setSelectedPrice] = useState("All Prices");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState("popularity");
  const [visibleCourses, setVisibleCourses] = useState(6);

  const filteredCourses = coursesData
    .filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLevel =
        selectedLevel === "All Levels" || course.level === selectedLevel;
      const matchesDuration =
        selectedDuration === "Any Duration" ||
        (selectedDuration === "0-4 weeks" && parseInt(course.duration) <= 4) ||
        (selectedDuration === "4-8 weeks" &&
          parseInt(course.duration) > 4 &&
          parseInt(course.duration) <= 8) ||
        (selectedDuration === "8+ weeks" && parseInt(course.duration) > 8);
      const matchesPrice =
        selectedPrice === "All Prices" ||
        (selectedPrice === "Free" && course.price === 0) ||
        (selectedPrice === "Paid" && course.price > 0);
      const matchesFeatures =
        selectedFeatures.length === 0 ||
        selectedFeatures.every((feature) => course.features.includes(feature));

      return (
        matchesSearch &&
        matchesLevel &&
        matchesDuration &&
        matchesPrice &&
        matchesFeatures
      );
    })
    .sort((a, b) => {
      switch (sortOption) {
        case "popularity":
          return b.enrolled - a.enrolled;
        case "highestRated":
          return b.rating - a.rating;
        case "newest":
          return new Date(b.id).getTime() - new Date(a.id).getTime();
        case "lowestPrice":
          return a.price - b.price;
        default:
          return 0;
      }
    });

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedLevel("All Levels");
    setSelectedDuration("Any Duration");
    setSelectedPrice("All Prices");
    setSelectedFeatures([]);
    setSortOption("popularity");
  };

  const loadMoreCourses = () => {
    setVisibleCourses((prevVisible) => prevVisible + 6);
  };

  useEffect(() => {
    setVisibleCourses(6);
  }, [
    searchQuery,
    selectedLevel,
    selectedDuration,
    selectedPrice,
    selectedFeatures,
    sortOption,
  ]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src={categoryData.image}
          alt={categoryData.name}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-neutral-900"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {categoryData.name} Courses
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {categoryData.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white"
              onClick={() =>
                document
                  .getElementById("courses")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Courses
            </Button>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <Link
          href="/categories"
          className="text-white hover:text-yellow-500 inline-flex items-center mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Categories
        </Link>

        {/* Filter and Sort Section */}
        <section className="mb-12 bg-neutral-950 p-6 rounded-lg">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 h-5 w-5" />
              <Input
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-neutral-700 border-neutral-600 text-white placeholder:text-neutral-400"
              />
            </div>
            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
              <SelectTrigger className="w-[180px] bg-neutral-700 border-neutral-600 text-white">
                <SelectValue placeholder="Select Level" />
              </SelectTrigger>
              <SelectContent className="bg-neutral-700 border-neutral-600 text-white">
                {levels.map((level) => (
                  <SelectItem key={level} value={level}>
                    {level}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select
              value={selectedDuration}
              onValueChange={setSelectedDuration}
            >
              <SelectTrigger className="w-[180px] bg-neutral-700 border-neutral-600 text-white">
                <SelectValue placeholder="Select Duration" />
              </SelectTrigger>
              <SelectContent className="bg-neutral-700 border-neutral-600 text-white">
                {durations.map((duration) => (
                  <SelectItem key={duration} value={duration}>
                    {duration}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedPrice} onValueChange={setSelectedPrice}>
              <SelectTrigger className="w-[180px] bg-neutral-700 border-neutral-600 text-white">
                <SelectValue placeholder="Select Price" />
              </SelectTrigger>
              <SelectContent className="bg-neutral-700 border-neutral-600 text-white">
                {priceRanges.map((price) => (
                  <SelectItem key={price} value={price}>
                    {price}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {features.map((feature) => (
              <Badge
                key={feature}
                variant={
                  selectedFeatures.includes(feature) ? "default" : "secondary"
                }
                className="cursor-pointer"
                onClick={() =>
                  setSelectedFeatures((prev) =>
                    prev.includes(feature)
                      ? prev.filter((f) => f !== feature)
                      : [...prev, feature]
                  )
                }
              >
                {feature}
              </Badge>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <Select value={sortOption} onValueChange={setSortOption}>
              <SelectTrigger className="w-[200px] bg-neutral-700 border-neutral-600 text-white">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="bg-neutral-700 border-neutral-600 text-white">
                <SelectItem value="popularity">Most Popular</SelectItem>
                <SelectItem value="highestRated">Highest Rated</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="lowestPrice">Lowest Price</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" onClick={clearFilters}>
              Clear Filters
            </Button>
          </div>
        </section>

        {/* Highlighted Course Section */}
        {filteredCourses.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Featured Course</h2>
            <Card className="bg-neutral-950 border-none overflow-hidden">
              <div className="md:flex">
                <div className="md:w-2/5 relative aspect-video md:aspect-auto">
                  <Image
                    src={filteredCourses[0].image}
                    alt={filteredCourses[0].title}
                    layout="fill"
                    objectFit="cover"
                  />
                  <Badge className="absolute top-2 left-2 bg-yellow-500 text-neutral-900">
                    Most Popular
                  </Badge>
                </div>
                <div className="md:w-3/5 p-6">
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {filteredCourses[0].title}
                  </h3>
                  <p className="text-muted mb-4">
                    {filteredCourses[0].description}
                  </p>
                  <div className="flex items-center mb-4">
                    <Avatar className="h-10 w-10 mr-2">
                      <AvatarImage
                        src={filteredCourses[0].instructor.avatar}
                        alt={filteredCourses[0].instructor.name}
                      />
                      <AvatarFallback>
                        {filteredCourses[0].instructor.name[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-muted">
                        {filteredCourses[0].instructor.name}
                      </p>
                      <p className="text-sm text-neutral-400">Instructor</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <Star className="text-yellow-500 fill-yellow-500 h-5 w-5 mr-1" />
                      <span className="font-bold text-muted">
                        {filteredCourses[0].rating}
                      </span>
                      <span className="text-neutral-400 ml-2">
                        ({filteredCourses[0].enrolled} students)
                      </span>
                    </div>
                    <div className="text-2xl font-bold text-muted">
                      ${filteredCourses[0].price}
                    </div>
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                    Enroll Now
                  </Button>
                </div>
              </div>
            </Card>
          </section>
        )}

        {/* Course Grid Section */}
        <section id="courses" className="mb-12">
          <h2 className="text-2xl font-bold mb-6">All Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.slice(0, visibleCourses).map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-neutral-950 border-none overflow-hidden">
                  <div className="relative aspect-video">
                    <Image
                      src={course.image}
                      alt={course.title}
                      layout="fill"
                      objectFit="cover"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge
                        variant="secondary"
                        className="bg-yellow-500 text-neutral-900"
                      >
                        ${course.price}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-white">
                      {course.title}
                    </CardTitle>
                    <CardDescription className="text-neutral-400">
                      {course.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-4 mb-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage
                          src={course.instructor.avatar}
                          alt={course.instructor.name}
                        />
                        <AvatarFallback>
                          {course.instructor.name[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium text-white">
                          {course.instructor.name}
                        </p>
                        <p className="text-sm text-neutral-400">Instructor</p>
                      </div>
                    </div>
                    <div className="flex justify-between text-sm text-neutral-400">
                      <div className="flex items-center">
                        <Clock className="mr-1 h-4 w-4" />
                        {course.duration}
                      </div>
                      <div className="flex items-center">
                        <BarChart className="mr-1 h-4 w-4" />
                        {course.level}
                      </div>
                      <div className="flex items-center">
                        <Users className="mr-1 h-4 w-4" />
                        {course.enrolled}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Star className="text-yellow-500 fill-yellow-500 h-5 w-5 mr-1" />
                      <span className="font-bold text-white">
                        {course.rating}
                      </span>
                    </div>
                    <Button className="bg-red-600 hover:bg-red-700 text-white">
                      Enroll Now
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
          {visibleCourses < filteredCourses.length && (
            <div className="text-center mt-8">
              <Button onClick={loadMoreCourses} variant="outline">
                Load More Courses
              </Button>
            </div>
          )}
        </section>

        {/* Gamified Metrics Section */}
        <section className="mb-12 bg-neutral-950 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Community Achievements
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                metric: "10,000+",
                description: "Students Trained",
              },
              {
                icon: Star,
                metric: "4.8/5",
                description: "Average Course Rating",
              },
              {
                icon: Award,
                metric: "500+",
                description: "Certified Professionals",
              },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <p className="text-3xl font-bold mb-2">{stat.metric}</p>
                <p className="text-neutral-400">{stat.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
