"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  courseCount: number;
  tags: string[];
}
const CategoryCard = ({
  title,
  description,
  image,
  courseCount,
  tags,
}: CategoryCardProps) => {
  return (
    <Card className="group overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300">
      <div className="relative aspect-[4/3]">
        <Image
          src={image}
          alt={title}
          width={400}
          height={225}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="bg-white/10 text-white">
              {courseCount} Courses
            </Badge>
          </div>
        </div>
      </div>
      <CardContent className="p-4">
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="bg-muted">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-primary hover:bg-primary/90 text-white">
          Explore Category
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CategoryCard;
