"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter } from "lucide-react";
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
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CoachCard from "@/components/Coaches/CoacheCard";

const coaches = [
  {
    id: 1,
    name: "Sarah Johnson",
    specialization: "Strength & Conditioning",
    bio: "NASM certified trainer with 10+ years of experience specializing in strength training and functional fitness.",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.9,
    reviewCount: 128,
    certifications: ["NASM CPT", "CSCS", "FMS Level 2"],
    expertise: ["Strength Training", "Functional Fitness", "Nutrition"],
    availability: "Available" as const,
  },
  {
    id: 2,
    name: "Michael Chen",
    specialization: "Yoga & Meditation",
    bio: "Experienced yoga instructor focusing on mindfulness and body awareness with 8 years of teaching experience.",
    image:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.8,
    reviewCount: 95,
    certifications: ["RYT 500", "E-RYT 200", "YACEP"],
    expertise: ["Yoga", "Meditation", "Flexibility"],
    availability: "Fully Booked" as const,
  },
  {
    id: 3,
    name: "Alex Rodriguez",
    specialization: "HIIT & Cardio",
    bio: "Former professional athlete specializing in high-intensity training and sports performance.",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.7,
    reviewCount: 86,
    certifications: ["ACE CPT", "TRX Trainer", "CrossFit L2"],
    expertise: ["HIIT", "Cardio", "Athletic Performance"],
    availability: "Available" as const,
  },
];

const specializations = [
  "All",
  "Strength & Conditioning",
  "Yoga & Meditation",
  "HIIT & Cardio",
  "Nutrition",
  "Recovery",
];
const certifications = ["All", "NASM", "ACE", "CSCS", "RYT 500", "CrossFit"];

const CoachesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecialization, setSelectedSpecialization] = useState("All");
  const [selectedCertification, setSelectedCertification] = useState("All");
  const [availabilityFilter, setAvailabilityFilter] = useState("all");

  const filteredCoaches = coaches.filter((coach) => {
    const matchesSearch =
      coach.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coach.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coach.expertise.some((exp) =>
        exp.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesSpecialization =
      selectedSpecialization === "All" ||
      coach.specialization === selectedSpecialization;

    const matchesCertification =
      selectedCertification === "All" ||
      coach.certifications.some((cert) => cert.includes(selectedCertification));

    const matchesAvailability =
      availabilityFilter === "all" ||
      (availabilityFilter === "available" &&
        coach.availability === "Available") ||
      (availabilityFilter === "booked" &&
        coach.availability === "Fully Booked");

    return (
      matchesSearch &&
      matchesSpecialization &&
      matchesCertification &&
      matchesAvailability
    );
  });

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="container px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">
            Expert Coaches
          </h1>
          <p className="text-accent">
            Train with certified professionals who are passionate about helping
            you achieve your fitness goals
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white h-4 w-4" />
            <Input
              placeholder="Search coaches..."
              className="pl-10 text-white placeholder:text-muted"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="hidden md:flex gap-4">
            <Select
              value={selectedSpecialization}
              onValueChange={setSelectedSpecialization}
            >
              <SelectTrigger className="w-[200px] text-white">
                <SelectValue placeholder="Specialization" />
              </SelectTrigger>
              <SelectContent className="bg-neutral-950">
                {specializations.map((spec) => (
                  <SelectItem key={spec} value={spec} className="text-white">
                    {spec}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={selectedCertification}
              onValueChange={setSelectedCertification}
            >
              <SelectTrigger className="w-[200px] text-white">
                <SelectValue placeholder="Certification" />
              </SelectTrigger>
              <SelectContent className="bg-neutral-950">
                {certifications.map((cert) => (
                  <SelectItem key={cert} value={cert} className="text-white">
                    {cert}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={availabilityFilter}
              onValueChange={setAvailabilityFilter}
            >
              <SelectTrigger className="w-[200px] text-white">
                <SelectValue placeholder="Availability" />
              </SelectTrigger>
              <SelectContent className="bg-neutral-950">
                <SelectItem value="all" className="text-white">
                  All
                </SelectItem>
                <SelectItem value="available" className="text-white">
                  Available
                </SelectItem>
                <SelectItem value="booked" className="text-white">
                  Fully Booked
                </SelectItem>
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
              <SheetContent className="bg-neutral-950 [&>button]:text-white">
                <SheetHeader>
                  <SheetTitle className="text-white">Filters</SheetTitle>
                </SheetHeader>
                <div className="grid gap-4 py-4 text-white">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Specialization
                    </label>
                    <Select
                      value={selectedSpecialization}
                      onValueChange={setSelectedSpecialization}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Specialization" />
                      </SelectTrigger>
                      <SelectContent className="bg-neutral-950">
                        {specializations.map((spec) => (
                          <SelectItem
                            key={spec}
                            value={spec}
                            className="text-white"
                          >
                            {spec}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Certification</label>
                    <Select
                      value={selectedCertification}
                      onValueChange={setSelectedCertification}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Certification" />
                      </SelectTrigger>
                      <SelectContent className="bg-neutral-950">
                        {certifications.map((cert) => (
                          <SelectItem
                            key={cert}
                            value={cert}
                            className="text-white"
                          >
                            {cert}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Availability</label>
                    <Select
                      value={availabilityFilter}
                      onValueChange={setAvailabilityFilter}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Availability" />
                      </SelectTrigger>
                      <SelectContent className="bg-neutral-950">
                        <SelectItem value="all" className="text-white">
                          All
                        </SelectItem>
                        <SelectItem value="available" className="text-white">
                          Available
                        </SelectItem>
                        <SelectItem value="booked" className="text-white">
                          Fully Booked
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {(selectedSpecialization !== "All" ||
          selectedCertification !== "All" ||
          availabilityFilter !== "all") && (
          <div className="flex flex-wrap gap-2 mb-6">
            {selectedSpecialization !== "All" && (
              <Badge variant="secondary" className="text-white">
                {selectedSpecialization}
              </Badge>
            )}
            {selectedCertification !== "All" && (
              <Badge variant="secondary" className="text-white">
                {selectedCertification}
              </Badge>
            )}
            {availabilityFilter !== "all" && (
              <Badge variant="secondary" className="text-white">
                {availabilityFilter === "available"
                  ? "Available"
                  : "Fully Booked"}
              </Badge>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCoaches.map((coach, index) => (
            <motion.div
              key={coach.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <CoachCard {...coach} />
            </motion.div>
          ))}
        </div>

        {filteredCoaches.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white">
              No coaches found matching your criteria.
            </p>
          </div>
        )}

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-primary">Coach Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Total Coaches", value: coaches.length },
              {
                label: "Available Now",
                value: coaches.filter((c) => c.availability === "Available")
                  .length,
              },
              { label: "Certified Trainers", value: "100%" },
              { label: "Average Rating", value: "4.8" },
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

export default CoachesPage;
