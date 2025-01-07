"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

interface CoachProps {
  id: number;
  name: string;
  specialization: string;
  bio: string;
  image: string;
  rating: number;
  reviewCount: number;
  certifications: string[];
  expertise: string[];
  availability: "Available" | "Fully Booked";
}

const CoachCard = ({
  name,
  specialization,
  bio,
  image,
  rating,
  reviewCount,
  certifications,
  expertise,
  availability,
}: CoachProps) => {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
      <CardHeader className="p-0">
        <div className="relative aspect-[3/2]">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:scale-105 duration-300" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
            <p className="text-white/90 text-sm">{specialization}</p>
          </div>
          <Badge
            variant={availability === "Available" ? "default" : "secondary"}
            className="absolute top-4 right-4 text-white"
          >
            {availability}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4 space-y-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < rating
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted">
            ({reviewCount} reviews)
          </span>
        </div>
        <p className="text-sm text-white line-clamp-2">{bio}</p>
        <div className="space-y-2">
          <div className="flex flex-wrap gap-2">
            {certifications.map((cert) => (
              <Badge key={cert} variant="outline" className="bg-muted">
                {cert}
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {expertise.map((exp) => (
              <Badge
                key={exp}
                variant="secondary"
                className="bg-primary/10 text-primary"
              >
                {exp}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-primary hover:bg-primary/90 text-white">
          Book Session
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CoachCard;