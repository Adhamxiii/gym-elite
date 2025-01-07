"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { ArrowLeft, Info } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const BmiPage = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState<number | null>(null);
  const [animatedBMI, setAnimatedBMI] = useState(0);

  useEffect(() => {
    if (bmi !== null) {
      const animation = setInterval(() => {
        setAnimatedBMI((prev) => {
          if (prev < bmi) {
            return Math.min(prev + 0.1, bmi);
          }
          clearInterval(animation);
          return bmi;
        });
      }, 20);
      return () => clearInterval(animation);
    }
  }, [bmi]);

  const calculateBMI = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (weight && height) {
      const weightInKg = parseFloat(weight);
      const heightInM = parseFloat(height) / 100;
      const calculatedBMI = weightInKg / (heightInM * heightInM);
      setBMI(parseFloat(calculatedBMI.toFixed(1)));
      setAnimatedBMI(0);
    }
  };

  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Normal weight";
    if (bmi < 30) return "Overweight";
    return "Obese";
  };

  const getBMIColor = (bmi: number) => {
    if (bmi < 18.5) return "text-blue-400";
    if (bmi < 25) return "text-green-400";
    if (bmi < 30) return "text-yellow-400";
    return "text-red-400";
  };

  const getBMIGradient = (bmi: number) => {
    if (bmi < 18.5) return "from-blue-500 to-blue-700";
    if (bmi < 25) return "from-green-500 to-green-700";
    if (bmi < 30) return "from-yellow-500 to-yellow-700";
    return "from-red-500 to-red-700";
  };

  return (
    <div className="min-h-screen bg-[#101010] flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/tools"
            className="text-white hover:text-primary hover:underline mb-6 inline-flex items-center"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Tools
          </Link>
          <Card className="w-full bg-[#444] border-none overflow-hidden backdrop-blur-lg">
            <CardHeader className="bg-[#333]">
              <CardTitle className="text-3xl font-bold text-primary flex items-center justify-between">
                BMI Calculator
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-5 w-5 text-white cursor-pointer" />
                    </TooltipTrigger>
                    <TooltipContent className="bg-white/10 backdrop-blur-lg text-white border-none">
                      <p>
                        BMI is a measure of body fat based on height and weight.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </CardTitle>
              <CardDescription className="text-accent">
                Calculate your Body Mass Index
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-4">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2">
                  <form onSubmit={calculateBMI} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="weight" className="text-white">
                        Weight (kg)
                      </Label>
                      <Input
                        id="weight"
                        type="number"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        required
                        className="bg-white/20 text-white border-white/30 placeholder:text-muted"
                        placeholder="Enter your weight"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="height" className="text-white">
                        Height (cm)
                      </Label>
                      <Input
                        id="height"
                        type="number"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        required
                        className="bg-white/20 text-white border-white/30 placeholder:text-muted"
                        placeholder="Enter your height"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-primary text-white"
                    >
                      Calculate BMI
                    </Button>
                  </form>
                </div>

                <div className="w-full md:w-1/2">
                  {bmi !== null ? (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="relative pt-1">
                        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-700">
                          <motion.div
                            style={{ width: `${(animatedBMI / 40) * 100}%` }}
                            className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r ${getBMIGradient(
                              bmi
                            )}`}
                            initial={{ width: "0%" }}
                            animate={{ width: `${(bmi / 40) * 100}%` }}
                            transition={{ duration: 1 }}
                          ></motion.div>
                        </div>
                      </div>
                      <div className="text-center mb-6">
                        <p className="text-lg font-semibold text-white">
                          Your BMI:
                        </p>
                        <p className={`text-5xl font-bold ${getBMIColor(bmi)}`}>
                          {bmi}
                        </p>
                        <p className="text-xl mt-2 text-white">
                          {getBMICategory(bmi)}
                        </p>
                      </div>
                    </motion.div>
                  ) : (
                    <div className="text-center text-gray-400">
                      Enter your weight and height to calculate your BMI.
                    </div>
                  )}
                  <div className="mt-4 bg-gray-700 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      BMI Categories:
                    </h3>
                    <ul className="space-y-1 text-sm">
                      <li className="text-blue-400">Underweight: &lt; 18.5</li>
                      <li className="text-green-400">
                        Normal weight: 18.5 - 24.9
                      </li>
                      <li className="text-yellow-400">Overweight: 25 - 29.9</li>
                      <li className="text-red-400">Obese: 30 or greater</li>
                    </ul>
                  </div>
                  <p className="text-sm mt-4 text-gray-400 text-center">
                    BMI is a general indicator. Consult a healthcare
                    professional for a comprehensive health assessment.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default BmiPage;
