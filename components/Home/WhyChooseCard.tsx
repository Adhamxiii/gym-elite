import { LucideIcon } from "lucide-react";
import React from "react";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const WhyChooseCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="card flex flex-col items-center text-center p-8 bg-[#333] rounded-xl shadow-md">
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <h3 className="font-oswald text-2xl mb-4 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default WhyChooseCard;
