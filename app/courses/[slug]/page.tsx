"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
import { motion } from "framer-motion";
import {
  ArrowLeft,
  BarChart,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Clock,
  Play,
  Star,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Mock data for the course
const courseData = {
  title: "Ultimate Strength Training",
  subtitle: "Build muscle and strength with our expert program",
  description:
    "Master advanced strength training techniques and principles to take your fitness to the next level. This comprehensive program is designed for both beginners and experienced athletes looking to maximize their strength gains.",
  image: "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  duration: "12 weeks",
  level: "Intermediate to Advanced",
  enrolled: 1234,
  rating: 4.8,
  instructor: {
    name: "Jane Doe",
    title: "Certified Fitness Expert",
    avatar: "/instructor-jane.jpg",
    bio: "With over 15 years of experience in strength training and sports performance, Jane has helped thousands of clients achieve their fitness goals. She holds certifications from NASM, CSCS, and is a former competitive powerlifter.",
    socialLinks: {
      instagram: "https://instagram.com/janedoe",
      twitter: "https://twitter.com/janedoe",
      linkedin: "https://linkedin.com/in/janedoe",
    },
  },
  price: 199.99,
  curriculum: [
    {
      title: "Foundations of Strength Training",
      lessons: [
        {
          title: "Understanding Progressive Overload",
          duration: "20 min",
          type: "video",
        },
        {
          title: "Proper Form for Compound Lifts",
          duration: "30 min",
          type: "video",
        },
        {
          title: "Warm-up and Mobility Routines",
          duration: "15 min",
          type: "video",
        },
        { title: "Foundation Quiz", type: "quiz" },
      ],
    },
    {
      title: "Building Your Training Program",
      lessons: [
        {
          title: "Designing a Balanced Workout Split",
          duration: "25 min",
          type: "video",
        },
        {
          title: "Periodization for Continuous Progress",
          duration: "20 min",
          type: "video",
        },
        {
          title: "Nutrition for Muscle Growth",
          duration: "30 min",
          type: "video",
        },
        {
          title: "Program Design Workshop",
          duration: "45 min",
          type: "workshop",
        },
      ],
    },
    {
      title: "Advanced Techniques",
      lessons: [
        {
          title: "Incorporating Plyometrics",
          duration: "20 min",
          type: "video",
        },
        {
          title: "Tempo Training for Muscle Growth",
          duration: "25 min",
          type: "video",
        },
        {
          title: "Recovery Strategies for Heavy Lifting",
          duration: "15 min",
          type: "video",
        },
        { title: "Advanced Techniques Quiz", type: "quiz" },
      ],
    },
  ],
  reviews: [
    {
      name: "John S.",
      rating: 5,
      comment:
        "This course transformed my approach to strength training. Highly recommended!",
    },
    {
      name: "Sarah M.",
      rating: 4,
      comment:
        "Great content and instruction. Would love even more advanced modules.",
    },
    {
      name: "Mike R.",
      rating: 5,
      comment:
        "Jane's expertise shines through. I've seen significant gains in just 6 weeks.",
    },
  ],
  faqs: [
    {
      question: "Do I need a gym membership for this course?",
      answer:
        "While access to a gym with standard equipment is ideal, many exercises can be modified for home workouts with minimal equipment.",
    },
    {
      question: "Is this course suitable for beginners?",
      answer:
        "This course is designed for intermediate to advanced lifters. We recommend our 'Foundations of Fitness' course for complete beginners.",
    },
    {
      question: "How long do I have access to the course materials?",
      answer:
        "You'll have lifetime access to all course materials, including any future updates.",
    },
  ],
  relatedCourses: [
    {
      title: "Advanced Nutrition for Athletes",
      image: "/course-nutrition.jpg",
      price: 149.99,
    },
    {
      title: "Mobility and Injury Prevention",
      image: "/course-mobility.jpg",
      price: 99.99,
    },
    {
      title: "Powerlifting Fundamentals",
      image: "/course-powerlifting.jpg",
      price: 179.99,
    },
  ],
};

const CoursePage = () => {
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [expandedFAQs, setExpandedFAQs] = useState<number[]>([]);

  const toggleFAQ = (index: number) => {
    setExpandedFAQs((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src={courseData.image}
          alt={courseData.title}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {courseData.title}
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {courseData.subtitle}
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Badge variant="secondary" className="text-lg py-1 px-3 bg-neutral-950">
              <Clock className="w-4 h-4 mr-2" />
              {courseData.duration}
            </Badge>
            <Badge variant="secondary" className="text-lg py-1 px-3 bg-neutral-950">
              <BarChart className="w-4 h-4 mr-2" />
              {courseData.level}
            </Badge>
            <Badge variant="secondary" className="text-lg py-1 px-3 bg-neutral-950">
              <Users className="w-4 h-4 mr-2" />
              {courseData.enrolled} enrolled
            </Badge>
            <Badge variant="secondary" className="text-lg py-1 px-3 bg-neutral-950">
              <Star className="w-4 h-4 mr-2 fill-yellow-500" />
              {courseData.rating}
            </Badge>
          </motion.div>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white"
              onClick={() => setIsEnrolled(true)}
            >
              Enroll Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-gray-900"
            >
              Watch Preview
            </Button>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <Link
          href="/courses"
          className="text-white hover:text-yellow-500 inline-flex items-center mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Courses
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Course Overview */}
            <Card className="bg-neutral-950 border-none">
              <CardHeader>
                <CardTitle className="text-2xl text-white">
                  Course Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p className="mb-4">{courseData.description}</p>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Who is this course for?
                </h3>
                <ul className="list-disc list-inside space-y-1 mb-4">
                  <li>Intermediate to advanced fitness enthusiasts</li>
                  <li>Athletes looking to improve strength and performance</li>
                  <li>Personal trainers seeking to expand their knowledge</li>
                  <li>
                    Anyone committed to mastering strength training techniques
                  </li>
                </ul>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  What you&apos;ll learn:
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Advanced strength training principles and techniques</li>
                  <li>
                    How to design and implement effective training programs
                  </li>
                  <li>Proper form and execution of compound lifts</li>
                  <li>Nutrition strategies for muscle growth and recovery</li>
                  <li>Injury prevention and mobility enhancement</li>
                </ul>
              </CardContent>
            </Card>

            {/* Instructor */}
            <Card className="bg-neutral-950 border-none">
              <CardHeader>
                <CardTitle className="text-2xl text-white">
                  Your Instructor
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                <Avatar className="h-24 w-24">
                  <AvatarImage
                    src={courseData.instructor.avatar}
                    alt={courseData.instructor.name}
                  />
                  <AvatarFallback>
                    {courseData.instructor.name[0]}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {courseData.instructor.name}
                  </h3>
                  <p className="text-yellow-500 mb-2">
                    {courseData.instructor.title}
                  </p>
                  <p className="text-gray-300 mb-4">
                    {courseData.instructor.bio}
                  </p>
                  <div className="flex space-x-4">
                    {Object.entries(courseData.instructor.socialLinks).map(
                      ([platform, url]) => (
                        <Link
                          key={platform}
                          href={url}
                          className="text-gray-400 hover:text-white"
                        >
                          <span className="sr-only">{platform}</span>
                          {platform === "instagram" && (
                            <i className="fab fa-instagram"></i>
                          )}
                          {platform === "twitter" && (
                            <i className="fab fa-twitter"></i>
                          )}
                          {platform === "linkedin" && (
                            <i className="fab fa-linkedin"></i>
                          )}
                        </Link>
                      )
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Curriculum */}
            <Card className="bg-neutral-950 border-none">
              <CardHeader>
                <CardTitle className="text-2xl text-white">
                  Course Curriculum
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {courseData.curriculum.map((module, index) => (
                    <AccordionItem key={index} value={`module-${index + 1}`}>
                      <AccordionTrigger className="text-white hover:text-yellow-500">
                        Module {index + 1}: {module.title}
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2">
                          {module.lessons.map((lesson, lessonIndex) => (
                            <li
                              key={lessonIndex}
                              className="flex items-center text-gray-300"
                            >
                              {lesson.type === "video" && (
                                <Play className="w-4 h-4 mr-2 text-yellow-500" />
                              )}
                              {lesson.type === "quiz" && (
                                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                              )}
                              {lesson.type === "workshop" && (
                                <Users className="w-4 h-4 mr-2 text-blue-500" />
                              )}
                              <span>{lesson.title}</span>
                              {lesson.duration && (
                                <span className="ml-auto text-sm text-gray-400">
                                  {lesson.duration}
                                </span>
                              )}
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>

            {/* Reviews and Testimonials */}
            <Card className="bg-neutral-950 border-none">
              <CardHeader>
                <CardTitle className="text-2xl text-white">
                  Student Reviews
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center mb-4">
                  <span className="text-3xl font-bold text-yellow-500 mr-2">
                    {courseData.rating}
                  </span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-5 h-5 ${
                          star <= Math.round(courseData.rating)
                            ? "text-yellow-500 fill-yellow-500"
                            : "text-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-400">
                    ({courseData.enrolled} reviews)
                  </span>
                </div>
                <div className="space-y-4">
                  {courseData.reviews.map((review, index) => (
                    <div key={index} className="border-t border-gray-700 pt-4">
                      <div className="flex items-center mb-2">
                        <span className="font-semibold text-white mr-2">
                          {review.name}
                        </span>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`w-4 h-4 ${
                                star <= review.rating
                                  ? "text-yellow-500 fill-yellow-500"
                                  : "text-gray-400"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-300">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* FAQs */}
            <Card className="bg-neutral-950 border-none">
              <CardHeader>
                <CardTitle className="text-2xl text-white">
                  Frequently Asked Questions
                </CardTitle>
              </CardHeader>
              <CardContent>
                {courseData.faqs.map((faq, index) => (
                  <div key={index} className="mb-4">
                    <button
                      className="flex justify-between items-center w-full text-left font-semibold text-white hover:text-yellow-500"
                      onClick={() => toggleFAQ(index)}
                    >
                      <span>{faq.question}</span>
                      {expandedFAQs.includes(index) ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                    {expandedFAQs.includes(index) && (
                      <p className="mt-2 text-gray-300">{faq.answer}</p>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="bg-neutral-950 border-none sticky top-6">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-white">
                  ${courseData.price}
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Lifetime access to course materials
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  className="w-full bg-red-600 hover:bg-red-700 text-white text-lg py-6"
                  onClick={() => setIsEnrolled(true)}
                >
                  {isEnrolled ? "Continue Learning" : "Enroll Now"}
                </Button>
                {isEnrolled && (
                  <div className="space-y-2">
                    <p className="text-white">Your progress:</p>
                    <Progress value={33} className="w-full" />
                    <p className="text-sm text-gray-400 text-right">
                      33% complete
                    </p>
                  </div>
                )}
                <ul className="space-y-2">
                  {[
                    "12 weeks of intensive training",
                    "24/7 access to course materials",
                    "Personal feedback from instructor",
                    "Mobile and desktop access",
                    "Certificate of completion",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="text-center text-gray-400">
                <p>30-day money-back guarantee</p>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Related Courses */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-white">
            Related Courses
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {courseData.relatedCourses.map((course, index) => (
              <Card
                key={index}
                className="bg-neutral-950 border-none overflow-hidden"
              >
                <div className="aspect-video relative">
                  <Image
                    src={course.image}
                    alt={course.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg text-white">
                    {course.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-yellow-500">
                    ${course.price}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CoursePage;
