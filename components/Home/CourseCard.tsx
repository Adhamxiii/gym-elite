import React from "react";
import { Clock, BarChart } from "lucide-react";

interface CourseCardProps {
  title: string;
  instructor: string;
  duration: string;
  difficulty: string;
  price: number;
  thumbnail: string;
}

const CourseCard = ({
  title,
  instructor,
  duration,
  difficulty,
  price,
  thumbnail,
}: CourseCardProps) => {
  return (
    <div className="card overflow-hidden">
      <div className="relative aspect-video mb-4">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <h3 className="font-oswald text-xl mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">by {instructor}</p>

      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-1 text-sm text-gray-600">
          <Clock className="w-4 h-4" />
          <span>{duration}</span>
        </div>
        <div className="flex items-center gap-1 text-sm text-gray-600">
          <BarChart className="w-4 h-4" />
          <span>{difficulty}</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className="font-oswald text-xl">${price}</span>
        <button className="btn btn-primary">Enroll Now</button>
      </div>
    </div>
  );
};

export default CourseCard;
