"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Dumbbell,
  Star,
  Target,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import CountUp from "react-countup";

const teamMembers = [
  {
    name: "John Doe",
    role: "Head Coach",
    image:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Jane Smith",
    role: "Nutrition Expert",
    image:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Mike Johnson",
    role: "Strength Trainer",
    image:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Sarah Lee",
    role: "Yoga Instructor",
    image:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const staggerContainer = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.5,
    },
  },
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const AboutPage = () => {
  const ourStoryRef = useRef(null);
  const ourStoryInView = useInView(ourStoryRef, { once: true });

  const missionRef = useRef(null);
  const missionInView = useInView(missionRef, { once: true });

  const whatSetsUsApartRef = useRef(null);
  const whatSetsUsApartInView = useInView(whatSetsUsApartRef, { once: true });

  const expertTeamRef = useRef(null);
  const expertTeamInView = useInView(expertTeamRef, { once: true });

  const achievementsRef = useRef(null);
  const achievementsInView = useInView(achievementsRef, { once: true });

  const callToActionRef = useRef(null);
  const callToActionInView = useInView(callToActionRef, { once: true });

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src="/gym-hero.jpg"
            alt="Gym Equipment"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
        <div className="relative z-10 text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Empowering Your Fitness Journey
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Building strength, confidence, and health – one rep at a time.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/80 text-white"
              onClick={() =>
                document
                  .getElementById("our-story")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Discover Our Story
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <section ref={ourStoryRef} id="our-story" className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold mb-8 text-center text-primary"
            {...fadeInUp}
          >
            Our Story
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={ourStoryInView ? "animate" : "initial"}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <motion.div {...fadeInUp}>
              <Image
                src="https://images.pexels.com/photos/841131/pexels-photo-841131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="GymElite Story"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <p className="text-lg mb-4">
                Founded in 2015, GymElite emerged from a passion for making
                fitness accessible and enjoyable for everyone. Our journey began
                in a small studio with a handful of dedicated trainers and a
                vision to revolutionize the fitness industry through technology
                and personalized coaching.
              </p>
              <p className="text-lg mb-4">
                Today, we&apos;ve grown into a global community of fitness
                enthusiasts, backed by cutting-edge technology and a team of
                world-class experts. Our mission remains unchanged: to empower
                individuals to achieve their fitness goals, no matter where they
                are on their journey.
              </p>
              <Link
                href="/join-us"
                className="text-accent hover:text-yellow-700 inline-flex items-center"
              >
                Join our community
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section ref={missionRef} className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center text-red-500"
            {...fadeInUp}
          >
            Our Mission & Values
          </motion.h2>
          <motion.div
            initial="initial"
            animate={missionInView ? "animate" : "initial"}
            variants={{
              initial: { opacity: 0, y: 50 },
              animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Target,
                title: "Mission",
                description:
                  "To empower individuals on their fitness journey by providing expert guidance, innovative tools, and a supportive community.",
              },
              {
                icon: Star,
                title: "Vision",
                description:
                  "To create a world where everyone has access to personalized fitness solutions, fostering a global community of healthier, stronger, and more confident individuals.",
              },
              {
                icon: Users,
                title: "Values",
                description:
                  "Integrity, Innovation, Inclusivity, and Empowerment guide everything we do at GymElite.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-neutral-950 border-none h-full">
                  <CardContent className="p-6 text-center">
                    <item.icon className="h-12 w-12 text-yellow-500 mb-4 mx-auto" />
                    <h3 className="text-xl font-bold mb-2 text-white">
                      {item.title}
                    </h3>
                    <p className="text-muted">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section ref={whatSetsUsApartRef} className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center text-primary"
            initial="initial"
            animate={whatSetsUsApartInView ? "animate" : "initial"}
            variants={fadeInUp}
          >
            What Sets Us Apart
          </motion.h2>
          <Tabs defaultValue="expert-coaches" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 bg-neutral-800 text-white">
              <TabsTrigger
                value="expert-coaches"
                className="data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Expert Coaches
              </TabsTrigger>
              <TabsTrigger
                value="innovative-tools"
                className="data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Innovative Tools
              </TabsTrigger>
              <TabsTrigger
                value="personalized-approach"
                className="data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Personalized Approach
              </TabsTrigger>
            </TabsList>
            <TabsContent value="expert-coaches">
              <Card className="bg-neutral-950 border-none">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Users className="h-8 w-8 text-accent mr-4" />
                    <h3 className="text-2xl font-bold text-white">
                      Expert Coaches
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Our team of certified professionals brings years of
                    experience and passion to every session. They&apos;re not
                    just trainers; they&apos;re mentors dedicated to your
                    success.
                  </p>
                  <ul className="list-disc list-inside text-gray-300">
                    <li>Personalized attention and guidance</li>
                    <li>Diverse specializations to meet all fitness needs</li>
                    <li>Continuous education and training for our coaches</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="innovative-tools">
              <Card className="bg-neutral-950 border-none">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Dumbbell className="h-8 w-8 text-accent mr-4" />
                    <h3 className="text-2xl font-bold text-white">
                      Innovative Tools
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    We leverage cutting-edge technology to enhance your fitness
                    experience. Our suite of tools is designed to track
                    progress, optimize workouts, and keep you motivated.
                  </p>
                  <ul className="list-disc list-inside text-gray-300">
                    <li>AI-powered workout recommendations</li>
                    <li>Real-time performance tracking</li>
                    <li>Virtual reality training sessions</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="personalized-approach">
              <Card className="bg-neutral-950 border-none">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Target className="h-8 w-8 text-accent mr-4" />
                    <h3 className="text-2xl font-bold text-white">
                      Personalized Approach
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    We believe that no two fitness journeys are the same.
                    That&apos;s why we tailor our programs to your unique goals,
                    preferences, and lifestyle.
                  </p>
                  <ul className="list-disc list-inside text-gray-300">
                    <li>Customized workout plans</li>
                    <li>Adaptive nutrition guidance</li>
                    <li>Regular progress assessments and plan adjustments</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section ref={expertTeamRef} className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center text-primary"
            initial="initial"
            animate={expertTeamInView ? "animate" : "initial"}
            variants={fadeInUp}
          >
            Meet Our Expert Team
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial="initial"
                animate={expertTeamInView ? "animate" : "initial"}
                variants={{
                  initial: { opacity: 0, y: 50 },
                  animate: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.1 },
                  },
                }}
              >
                <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-accent">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section ref={achievementsRef} className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center text-primary"
            initial="initial"
            animate={achievementsInView ? "animate" : "initial"}
            variants={fadeInUp}
          >
            Our Achievements
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "100", description: "Active Users" },
              { number: "500", description: "Expert Coaches" },
              { number: "1", description: "Workouts Completed" },
              { number: "50", description: "Awards Won" },
            ].map((achievement, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial="initial"
                animate={achievementsInView ? "animate" : "initial"}
                variants={{
                  initial: { opacity: 0, y: 50 },
                  animate: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.1 },
                  },
                }}
              >
                <Card className="bg-neutral-950 border-none h-full">
                  <CardContent className="p-6">
                    {achievement.number === "1" ||
                    achievement.number === "100" ? (
                      <p className="text-4xl font-bold text-accent mb-2">
                        <CountUp
                          end={Number(achievement.number)}
                          duration={2}
                        />
                        K+
                      </p>
                    ) : (
                      <p className="text-4xl font-bold text-accent mb-2">
                        <CountUp
                          end={Number(achievement.number)}
                          duration={2}
                        />
                        +
                      </p>
                    )}
                    <p className="text-muted">{achievement.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section ref={callToActionRef} className="py-16 text-center">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial="initial"
            animate={callToActionInView ? "animate" : "initial"}
            variants={fadeInUp}
          >
            Ready to Transform Your Fitness Journey?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 max-w-2xl mx-auto"
            animate={callToActionInView ? "animate" : "initial"}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Join GymElite today and experience the power of personalized fitness
            coaching and cutting-edge technology.
          </motion.p>
          <motion.div
            animate={callToActionInView ? "animate" : "initial"}
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <Link href="/signup">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/80 text-white"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
