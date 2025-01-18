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
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import {
  BarChart,
  Clock,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Star,
  Trophy,
  Twitter,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// Mock data for the coach
const coachData = {
  name: "Sarah Johnson",
  title: "Elite Strength & Conditioning Coach",
  image:
    "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  bio: "Sarah Johnson is a certified strength and conditioning specialist with over 10 years of experience in personal training and athletic performance. She has worked with professional athletes, Olympians, and fitness enthusiasts of all levels, helping them achieve their peak performance and fitness goals.",
  expertise: [
    "Strength Training",
    "Olympic Weightlifting",
    "Sports Performance",
    "Nutrition",
  ],
  certifications: ["CSCS", "USAW", "PN-1"],
  rating: 4.9,
  reviewCount: 150,
  experience: "10+ years",
  location: "New York, NY",
  email: "sarah.johnson@gymelite.com",
  phone: "+1 (555) 123-4567",
  website: "https://www.sarahjohnsonfit.com",
  socialMedia: {
    twitter: "https://twitter.com/sarahjohnsonfit",
    linkedin: "https://linkedin.com/in/sarahjohnsonfit",
    instagram: "https://instagram.com/sarahjohnsonfit",
  },
  courses: [
    {
      id: 1,
      title: "Advanced Strength Training Techniques",
      description:
        "Master advanced lifting techniques and program design for optimal strength gains.",
      image: "/course-strength-training.jpg",
      duration: "8 weeks",
      level: "Advanced",
      enrolled: 523,
      rating: 4.8,
      price: 199.99,
    },
    {
      id: 2,
      title: "Olympic Weightlifting Fundamentals",
      description:
        "Learn the basics of Olympic weightlifting and improve your power and explosiveness.",
      image: "/course-olympic-weightlifting.jpg",
      duration: "6 weeks",
      level: "Intermediate",
      enrolled: 412,
      rating: 4.9,
      price: 149.99,
    },
    {
      id: 3,
      title: "Sports Nutrition for Peak Performance",
      description:
        "Optimize your nutrition to support your training and achieve your performance goals.",
      image: "/course-sports-nutrition.jpg",
      duration: "4 weeks",
      level: "All Levels",
      enrolled: 789,
      rating: 4.7,
      price: 99.99,
    },
  ],
  schedule: [
    { day: "Monday", time: "9:00 AM - 5:00 PM" },
    { day: "Tuesday", time: "9:00 AM - 5:00 PM" },
    { day: "Wednesday", time: "9:00 AM - 5:00 PM" },
    { day: "Thursday", time: "9:00 AM - 5:00 PM" },
    { day: "Friday", time: "9:00 AM - 3:00 PM" },
    { day: "Saturday", time: "10:00 AM - 2:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  testimonials: [
    {
      id: 1,
      name: "John D.",
      avatar: "/testimonial-john.jpg",
      text: "Sarah's advanced strength training course completely transformed my approach to lifting. I've seen incredible gains in just 8 weeks!",
      rating: 5,
    },
    {
      id: 2,
      name: "Emily S.",
      avatar: "/testimonial-emily.jpg",
      text: "The Olympic weightlifting course was exactly what I needed to improve my technique. Sarah's attention to detail is unmatched.",
      rating: 5,
    },
    {
      id: 3,
      name: "Mike R.",
      avatar: "/testimonial-mike.jpg",
      text: "I learned so much about proper nutrition for athletes. This course has definitely improved my recovery and performance.",
      rating: 4,
    },
  ],
  achievements: [
    { icon: Users, label: "Successful Trainees", value: "100+" },
    { icon: Clock, label: "Years of Experience", value: "10+" },
    { icon: Trophy, label: "Fitness Programs Designed", value: "50+" },
  ],
  partnerships: [
    { name: "Gold's Gym", logo: "/golds-gym-logo.png" },
    { name: "Nike", logo: "/nike-logo.png" },
    { name: "Optimum Nutrition", logo: "/optimum-nutrition-logo.png" },
  ],
};

export default function CoachPage() {
  const [selectedTab, setSelectedTab] = useState("courses");

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src={coachData.image}
          alt={coachData.name}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-neutral-900"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Avatar className="h-32 w-32 mx-auto border-4 border-white">
              <AvatarImage src={coachData.image} alt={coachData.name} />
              <AvatarFallback>{coachData.name[0]}</AvatarFallback>
            </Avatar>
          </motion.div>
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-2"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {coachData.name}
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {coachData.title}
          </motion.p>
          <motion.div
            className="flex items-center justify-center space-x-2 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-5 h-5 ${
                    star <= Math.round(coachData.rating)
                      ? "text-yellow-500 fill-yellow-500"
                      : "text-gray-400"
                  }`}
                />
              ))}
            </div>
            <span className="text-lg">
              {coachData.rating}/5 · {coachData.reviewCount} Reviews
            </span>
          </motion.div>
          <motion.div
            className="flex justify-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              Book a Session
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-gray-900"
            >
              View Courses
            </Button>
          </motion.div>
        </div>
      </section>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="bg-neutral-950 border-none text-muted">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">
                Coach Profile
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={coachData.image} alt={coachData.name} />
                  <AvatarFallback>{coachData.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {coachData.name}
                  </h3>
                  <p className="text-gray-400">{coachData.title}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-500" />
                <span className="font-semibold">{coachData.rating}</span>
                <span className="text-gray-400">
                  ({coachData.reviewCount} reviews)
                </span>
              </div>
              <div className="space-y-2">
                <p className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" /> {coachData.experience}{" "}
                  experience
                </p>
                <p className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" /> {coachData.location}
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-accent">Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {coachData.expertise.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="text-white"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-accent">
                  Certifications
                </h4>
                <div className="flex flex-wrap gap-2">
                  {coachData.certifications.map((cert, index) => (
                    <Badge key={index} variant="outline" className="text-white">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-neutral-950 border-none">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-white">
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted">
              <p className="flex items-center">
                <Mail className="h-4 w-4 mr-2" /> {coachData.email}
              </p>
              <p className="flex items-center">
                <Phone className="h-4 w-4 mr-2" /> {coachData.phone}
              </p>
              <p className="flex items-center">
                <Globe className="h-4 w-4 mr-2" />
                <a
                  href={coachData.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Personal Website
                </a>
              </p>
              <div className="flex space-x-4">
                <a
                  href={coachData.socialMedia.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href={coachData.socialMedia.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href={coachData.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-neutral-950 border-none">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-white">
                Availability
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {coachData.schedule.map((day, index) => (
                  <li key={index} className="flex justify-between">
                    <span className="text-white">{day.day}</span>
                    <span className="text-gray-400">{day.time}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          <Card className="bg-neutral-950 border-none">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">
                About {coachData.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">{coachData.bio}</p>
            </CardContent>
          </Card>

          <Tabs
            value={selectedTab}
            onValueChange={setSelectedTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-3 bg-neutral-800 text-white">
              <TabsTrigger
                className="data-[state=active]:bg-primary data-[state=active]:text-white"
                value="courses"
              >
                Courses
              </TabsTrigger>
              <TabsTrigger
                className="data-[state=active]:bg-primary data-[state=active]:text-white"
                value="testimonials"
              >
                Testimonials
              </TabsTrigger>
              <TabsTrigger
                className="data-[state=active]:bg-primary data-[state=active]:text-white"
                value="stats"
              >
                Stats
              </TabsTrigger>
            </TabsList>
            <TabsContent value="courses">
              <div className="grid md:grid-cols-2 gap-6">
                {coachData.courses.map((course) => (
                  <Card
                    key={course.id}
                    className="bg-neutral-950 border-none overflow-hidden"
                  >
                    <div className="relative aspect-video">
                      <Image
                        src={course.image}
                        alt={course.title}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg text-white">{course.title}</CardTitle>
                      <CardDescription className="text-gray-400">
                        {course.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between text-sm text-gray-400 mb-4">
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
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <Star className="text-yellow-500 fill-yellow-500 h-5 w-5 mr-1" />
                          <span className="font-bold text-white">
                            {course.rating}
                          </span>
                        </div>
                        <span className="text-2xl font-bold text-white">
                          ${course.price}
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                        Enroll Now
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="testimonials">
              <div className="space-y-6">
                {coachData.testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.id}
                    className="bg-neutral-950 border-none"
                  >
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage
                            src={testimonial.avatar}
                            alt={testimonial.name}
                          />
                          <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-lg text-white">
                            {testimonial.name}
                          </CardTitle>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < testimonial.rating
                                    ? "text-yellow-500 fill-yellow-500"
                                    : "text-gray-400"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">&quot;{testimonial.text}&quot;</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="stats">
              <Card className="bg-neutral-950 border-none">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white">
                    Coach Statistics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-muted">Students Trained</h4>
                    <Progress value={85} className="w-full" />
                    <p className="text-right text-sm text-muted">
                      1,275 / 1,500 goal
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-muted">
                      Course Completion Rate
                    </h4>
                    <Progress value={92} className="w-full" />
                    <p className="text-right text-sm text-muted">92%</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-muted">
                      Average Student Rating
                    </h4>
                    <Progress value={98} className="w-full" />
                    <p className="text-right text-sm text-muted">
                      4.9 / 5.0
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Call to Action Section */}
      <section className="mt-12 text-center bg-gradient-to-r from-red-600 to-yellow-500 p-12 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Train with {coachData.name}?
        </h2>
        <p className="text-xl mb-6">
          Take your fitness to the next level with personalized coaching and
          expert guidance.
        </p>
        <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
          Book a Session
        </Button>
      </section>
    </div>
  );
}
