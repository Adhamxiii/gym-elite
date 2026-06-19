"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

interface FeaturedCardProps {
  type: "course" | "coach";
  image: string;
  title: string;
  description: string;
  tags?: string[];
  price?: number;
  instructor?: {
    name: string;
    avatar: string;
  };
  specialization?: string;
}

const FeaturedCard = ({
  type,
  image,
  title,
  description,
  tags,
  price,
  instructor,
  specialization,
}: FeaturedCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden group">
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
          {price && (
            <div className="absolute top-4 right-4">
              <Badge
                variant="secondary"
                className="bg-white/90 text-primary font-semibold"
              >
                ${price}
              </Badge>
            </div>
          )}
        </div>
        <CardHeader>
          <CardTitle className="line-clamp-1">{title}</CardTitle>
          {type === "course" && instructor && (
            <div className="flex items-center space-x-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src={instructor.avatar} />
                <AvatarFallback>{instructor.name[0]}</AvatarFallback>
              </Avatar>
              <span className="text-sm text-muted-foreground">
                {instructor.name}
              </span>
            </div>
          )}
          {type === "coach" && specialization && (
            <CardDescription>{specialization}</CardDescription>
          )}
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground line-clamp-2">{description}</p>
          {tags && (
            <div className="flex flex-wrap gap-2 mt-4">
              {tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Button className="w-full text-white">
            {type === "course" ? "Learn More" : "View Profile"}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default FeaturedCard;
