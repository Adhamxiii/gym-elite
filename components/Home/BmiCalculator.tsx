"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scale, Info } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface BMICategory {
  range: string;
  description: string;
  color: string;
  textColor: string;
}

const bmiCategories: { [key: string]: BMICategory } = {
  underweight: {
    range: "< 18.5",
    description:
      "Being underweight can indicate nutritional deficiencies or other health issues. Consider consulting a healthcare provider.",
    color: "bg-blue-100",
    textColor: "text-blue-700",
  },
  normal: {
    range: "18.5 - 24.9",
    description:
      "A healthy weight range is associated with lower risk of health issues. Maintain a balanced diet and regular exercise.",
    color: "bg-green-100",
    textColor: "text-green-700",
  },
  overweight: {
    range: "25 - 29.9",
    description:
      "Being overweight may increase risk of health issues. Focus on healthy eating and regular physical activity.",
    color: "bg-yellow-100",
    textColor: "text-yellow-700",
  },
  obese: {
    range: "≥ 30",
    description:
      "Obesity increases risk of various health conditions. Consider consulting healthcare providers for personalized advice.",
    color: "bg-red-100",
    textColor: "text-red-700",
  },
};

const BmiCalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState<string>("");

  const calculateBMI = () => {
    const heightInMeters = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);

    if (heightInMeters > 0 && weightInKg > 0) {
      const bmiValue = weightInKg / (heightInMeters * heightInMeters);
      setBmi(parseFloat(bmiValue.toFixed(1)));

      if (bmiValue < 18.5) setCategory("underweight");
      else if (bmiValue < 25) setCategory("normal");
      else if (bmiValue < 30) setCategory("overweight");
      else setCategory("obese");
    }
  };

  const getBMIColor = () => {
    if (!category) return "text-gray-900";
    return bmiCategories[category].textColor;
  };

  return (
    <Card className="w-full mx-auto bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Scale className="h-6 w-6" />
          BMI Calculator
        </CardTitle>
        <CardDescription>
          Calculate your Body Mass Index to check if you&apos;re at a healthy
          weight
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="height">Height (cm)</Label>
            <Input
              id="height"
              type="number"
              placeholder="Enter your height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="weight">Weight (kg)</Label>
            <Input
              id="weight"
              type="number"
              placeholder="Enter your weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <Button
            className="w-full text-white"
            onClick={calculateBMI}
            disabled={!height || !weight}
          >
            Calculate BMI
          </Button>
        </div>

        <AnimatePresence>
          {bmi !== null && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="space-y-4"
            >
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-1">Your BMI</p>
                <p className={`text-4xl font-bold ${getBMIColor()}`}>{bmi}</p>
              </div>

              {category && (
                <Card
                  className={`${bmiCategories[category].color} border-none`}
                >
                  <CardContent className="pt-6">
                    <p
                      className={`font-semibold ${bmiCategories[category].textColor}`}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </p>
                    <p className="text-sm mt-1">
                      {bmiCategories[category].description}
                    </p>
                  </CardContent>
                </Card>
              )}

              <div className="grid grid-cols-2 gap-2">
                {Object.entries(bmiCategories).map(([key, data]) => (
                  <TooltipProvider key={key}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div
                          className={`p-2 rounded-lg ${data.color} cursor-help transition-transform hover:scale-105`}
                        >
                          <p
                            className={`text-sm font-medium ${data.textColor}`}
                          >
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                          </p>
                          <p className="text-xs text-gray-600">
                            BMI: {data.range}
                          </p>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-sm max-w-xs">{data.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Info className="h-4 w-4" />
                <p>
                  BMI is a general indicator. Factors like muscle mass, age, and
                  ethnicity aren&apos;t considered. Consult healthcare providers
                  for personal advice.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
};

export default BmiCalculator;
