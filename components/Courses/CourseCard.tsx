import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";

interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  instructor: {
    name: string;
    avatar: string;
  };
  price: number;
  duration: string;
  level: string;
  category: string;
  tags: string[];
}

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
      <div className="relative aspect-video">
        <Image
          src={course.image}
          alt={course.title}
          width={400}
          height={600}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
        <Badge
          variant="secondary"
          className="absolute top-4 right-4 bg-black/75 text-white"
        >
          ${course.price}
        </Badge>
      </div>
      <CardHeader className="space-y-2">
        <div className="flex items-center space-x-2">
          <Avatar className="h-6 w-6">
            <AvatarImage src={course.instructor.avatar} />
            <AvatarFallback>{course.instructor.name[0]}</AvatarFallback>
          </Avatar>
          <span className="text-sm text-muted">{course.instructor.name}</span>
        </div>
        <h3 className="font-semibold text-lg leading-tight text-white group-hover:text-primary transition-colors">
          {course.title}
        </h3>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted line-clamp-2">{course.description}</p>
        <div className="flex flex-wrap gap-2">
          {course.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="bg-muted">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex items-center justify-between text-sm text-muted">
          <span>{course.duration}</span>
          <span>{course.level}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-primary hover:bg-primary/90 text-white">
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
