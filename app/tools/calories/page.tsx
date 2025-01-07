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
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, Flame, Info } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const CaloriesPage = () => {
     const [age, setAge] = useState("");
     const [gender, setGender] = useState("male");
     const [weight, setWeight] = useState("");
     const [height, setHeight] = useState("");
     const [activityLevel, setActivityLevel] = useState("1.2");
     const [calories, setCalories] = useState<number | null>(null);
     const [goalCalories, setGoalCalories] = useState<number | null>(null);
     const [weightGoal, setWeightGoal] = useState<number>(0);

     const calculateCalories = (e: React.FormEvent<HTMLFormElement>) => {
       e.preventDefault();
       if (age && gender && weight && height && activityLevel) {
         const weightInKg = parseFloat(weight);
         const heightInCm = parseFloat(height);
         const ageInYears = parseFloat(age);
         const activityFactor = parseFloat(activityLevel);

         let bmr;
         if (gender === "male") {
           bmr =
             88.362 +
             13.397 * weightInKg +
             4.799 * heightInCm -
             5.677 * ageInYears;
         } else {
           bmr =
             447.593 +
             9.247 * weightInKg +
             3.098 * heightInCm -
             4.33 * ageInYears;
         }

         const calculatedCalories = Math.round(bmr * activityFactor);
         setCalories(calculatedCalories);
         setGoalCalories(calculatedCalories);
       }
     };

     const handleWeightGoalChange = (value: number[]) => {
       const goalValue = value[0];
       setWeightGoal(goalValue);
       if (calories) {
         const newGoalCalories = calories + goalValue * 500;
         setGoalCalories(newGoalCalories);
       }
     };

     const getCalorieDistribution = (totalCalories: number) => {
       const carbs = Math.round((totalCalories * 0.5) / 4); // 50% carbs, 4 calories per gram
       const protein = Math.round((totalCalories * 0.3) / 4); // 30% protein, 4 calories per gram
       const fat = Math.round((totalCalories * 0.2) / 9); // 20% fat, 9 calories per gram
       return [
         { name: "Carbs", value: carbs, color: "#34D399" },
         { name: "Protein", value: protein, color: "#60A5FA" },
         { name: "Fat", value: fat, color: "#F87171" },
       ];
     };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4">
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
          <Card className="w-full bg-white/10 border-none overflow-hidden backdrop-blur-lg">
            <CardHeader className="bg-gradient-to-r from-orange-600 to-red-600">
              <CardTitle className="text-3xl font-bold text-white flex items-center justify-between">
                <span className="flex items-center">
                  <Flame className="mr-2 h-6 w-6" />
                  Calorie Calculator
                </span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-5 w-5 text-white/80 cursor-pointer" />
                    </TooltipTrigger>
                    <TooltipContent className="bg-white/10 backdrop-blur-lg text-white border-none">
                      <p>
                        Estimate your daily calorie needs based on your personal
                        information and activity level.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </CardTitle>
              <CardDescription className="text-white/80">
                Estimate your daily calorie needs
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-4">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2">
                  <form onSubmit={calculateCalories} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="age" className="text-white">
                          Age
                        </Label>
                        <Input
                          id="age"
                          type="number"
                          value={age}
                          onChange={(e) => setAge(e.target.value)}
                          required
                          className="bg-white/20 text-white border-white/30 placeholder:text-muted"
                          placeholder="Enter your age"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="gender" className="text-white">
                          Gender
                        </Label>
                        <Select value={gender} onValueChange={setGender}>
                          <SelectTrigger className="bg-white/20 text-white border-white/30">
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent className="bg-neutral-950 text-white">
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
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
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="activityLevel" className="text-white">
                        Activity Level
                      </Label>
                      <Select
                        value={activityLevel}
                        onValueChange={setActivityLevel}
                      >
                        <SelectTrigger className="bg-white/20 text-white border-white/30">
                          <SelectValue placeholder="Select activity level" />
                        </SelectTrigger>
                        <SelectContent className="bg-neutral-950 text-white">
                          <SelectItem value="1.2">Sedentary</SelectItem>
                          <SelectItem value="1.375">Lightly Active</SelectItem>
                          <SelectItem value="1.55">
                            Moderately Active
                          </SelectItem>
                          <SelectItem value="1.725">Very Active</SelectItem>
                          <SelectItem value="1.9">Extra Active</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
                    >
                      Calculate Calories
                    </Button>
                  </form>
                </div>

                <div className="w-full md:w-1/2">
                  <AnimatePresence mode="wait">
                    {calories !== null ? (
                      <motion.div
                        key="result"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                      >
                        <div className="mb-6">
                          <p className="text-lg font-semibold text-white">
                            Your Estimated Daily Calories:
                          </p>
                          <p className="text-5xl font-bold text-orange-400">
                            {calories}
                          </p>
                        </div>
                        <div className="mt-6 space-y-4">
                          <Label htmlFor="weightGoal" className="text-white">
                            Adjust for Weight Goal:
                          </Label>
                          <Slider
                            id="weightGoal"
                            min={-2}
                            max={2}
                            step={0.5}
                            value={[weightGoal]}
                            onValueChange={handleWeightGoalChange}
                            className="w-full"
                          />
                          <div className="flex justify-between text-sm text-white/80">
                            <span>Lose 1kg/week</span>
                            <span>Maintain</span>
                            <span>Gain 1kg/week</span>
                          </div>
                          {goalCalories && (
                            <div className="text-center mt-4">
                              <p className="text-lg font-semibold text-white">
                                Adjusted Daily Calories:
                              </p>
                              <p className="text-4xl font-bold text-green-400">
                                {goalCalories}
                              </p>
                              <p className="text-sm text-white/80 mt-2">
                                {weightGoal === 0
                                  ? "To maintain your current weight"
                                  : weightGoal > 0
                                  ? `To gain ${weightGoal} kg per week`
                                  : `To lose ${Math.abs(
                                      weightGoal
                                    )} kg per week`}
                              </p>
                            </div>
                          )}
                        </div>
                        {goalCalories && (
                          <div className="mt-8">
                            <h3 className="text-lg font-semibold text-white mb-4">
                              Recommended Macronutrient Distribution:
                            </h3>
                            <ResponsiveContainer width="100%" height={250}>
                              <PieChart>
                                <Pie
                                  data={getCalorieDistribution(goalCalories)}
                                  cx="50%"
                                  cy="50%"
                                  outerRadius={80}
                                  fill="#8884d8"
                                  dataKey="value"
                                  label={({ name, value }) =>
                                    `${name}: ${value}g`
                                  }
                                  labelLine={false}
                                >
                                  {getCalorieDistribution(goalCalories).map(
                                    (entry, index) => (
                                      <Cell
                                        key={`cell-${index}`}
                                        fill={entry.color}
                                      />
                                    )
                                  )}
                                </Pie>
                              </PieChart>
                            </ResponsiveContainer>
                          </div>
                        )}
                      </motion.div>
                    ) : (
                      <motion.div
                        key="placeholder"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="text-center text-white/80"
                      >
                        Enter your details to calculate your daily calorie
                        needs.
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <div className="mt-6 bg-white/10 p-4 rounded-lg backdrop-blur-lg">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Activity Levels Explained:
                    </h3>
                    <ul className="space-y-1 text-sm text-white/80">
                      <li>
                        <span className="font-semibold">Sedentary:</span> Little
                        to no exercise
                      </li>
                      <li>
                        <span className="font-semibold">Lightly Active:</span>{" "}
                        Light exercise 1-3 days/week
                      </li>
                      <li>
                        <span className="font-semibold">
                          Moderately Active:
                        </span>{" "}
                        Moderate exercise 3-5 days/week
                      </li>
                      <li>
                        <span className="font-semibold">Very Active:</span> Hard
                        exercise 6-7 days/week
                      </li>
                      <li>
                        <span className="font-semibold">Extra Active:</span>{" "}
                        Very hard exercise & physical job
                      </li>
                    </ul>
                  </div>
                  <p className="text-sm mt-4 text-white/60 text-center">
                    This is an estimate based on your inputs. Consult with a
                    healthcare professional for personalized advice.
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

export default CaloriesPage;
