"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Info, Dumbbell } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
const OneRepMaxPage = () => {
  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");
  const [oneRepMax, setOneRepMax] = useState<number | null>(null);

  const calculateOneRepMax = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (weight && reps) {
      const weightLifted = parseFloat(weight);
      const repsPerformed = parseFloat(reps);
      const calculatedOneRepMax =
        weightLifted / (1.0278 - 0.0278 * repsPerformed);
      setOneRepMax(Math.round(calculatedOneRepMax));
    }
  };

  const getPercentages = (max: number) => {
    return [
      { percentage: 95, weight: Math.round(max * 0.95), reps: "2-3" },
      { percentage: 90, weight: Math.round(max * 0.9), reps: "3-4" },
      { percentage: 85, weight: Math.round(max * 0.85), reps: "5-6" },
      { percentage: 80, weight: Math.round(max * 0.8), reps: "6-8" },
      { percentage: 75, weight: Math.round(max * 0.75), reps: "8-10" },
      { percentage: 70, weight: Math.round(max * 0.7), reps: "10-12" },
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
            <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600">
              <CardTitle className="text-3xl font-bold text-white flex items-center justify-between">
                <span className="flex items-center">
                  <Dumbbell className="mr-2 h-6 w-6" />
                  1RM Calculator
                </span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-5 w-5 text-white/80 cursor-pointer" />
                    </TooltipTrigger>
                    <TooltipContent className="bg-white/10 backdrop-blur-lg text-white border-none">
                      <p>
                        Estimate your one-rep max based on the weight lifted and
                        reps performed.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </CardTitle>
              <CardDescription className="text-white/80">
                Estimate your one-rep max for any lift
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-4">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2">
                  <form onSubmit={calculateOneRepMax} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="weight" className="text-white">
                        Weight Lifted (kg)
                      </Label>
                      <Input
                        id="weight"
                        type="number"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        required
                        className="bg-white/20 text-white border-white/30 placeholder:text-muted"
                        placeholder="Enter weight lifted"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="reps" className="text-white">
                        Reps Performed
                      </Label>
                      <Input
                        id="reps"
                        type="number"
                        value={reps}
                        onChange={(e) => setReps(e.target.value)}
                        required
                        className="bg-white/20 text-white border-white/30 placeholder:text-muted"
                        placeholder="Enter reps performed"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white"
                    >
                      Calculate 1RM
                    </Button>
                  </form>
                </div>

                {/* Right column - Results and info */}
                <div className="w-full md:w-1/2">
                  <AnimatePresence mode="wait">
                    {oneRepMax !== null ? (
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
                            Your Estimated One-Rep Max:
                          </p>
                          <p className="text-5xl font-bold text-blue-400">
                            {oneRepMax} kg
                          </p>
                        </div>
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.3, duration: 0.5 }}
                        >
                          <div className="relative w-48 h-48 mx-auto mb-6">
                            <svg
                              className="w-full h-full"
                              viewBox="0 0 100 100"
                            >
                              <circle
                                cx="50"
                                cy="50"
                                r="45"
                                fill="none"
                                stroke="#4B5563"
                                strokeWidth="10"
                              />
                              <circle
                                cx="50"
                                cy="50"
                                r="45"
                                fill="none"
                                stroke="url(#strength-gradient)"
                                strokeWidth="10"
                                strokeDasharray={`${Math.min(
                                  (oneRepMax / 300) * 283,
                                  283
                                )} 283`}
                                transform="rotate(-90 50 50)"
                              />
                              <defs>
                                <linearGradient
                                  id="strength-gradient"
                                  x1="0"
                                  y1="0"
                                  x2="0"
                                  y2="1"
                                >
                                  <stop offset="0%" stopColor="#3B82F6" />
                                  <stop offset="100%" stopColor="#6366F1" />
                                </linearGradient>
                              </defs>
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                              <Dumbbell className="w-12 h-12 text-blue-400" />
                            </div>
                          </div>
                        </motion.div>
                        <div className="bg-white/10 rounded-lg p-4 backdrop-blur-lg">
                          <h3 className="text-lg font-semibold text-white mb-2">
                            Training Percentages:
                          </h3>
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead className="text-white/80">
                                  Percentage
                                </TableHead>
                                <TableHead className="text-white/80">
                                  Weight (kg)
                                </TableHead>
                                <TableHead className="text-white/80">
                                  Reps
                                </TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {getPercentages(oneRepMax).map((row) => (
                                <TableRow key={row.percentage}>
                                  <TableCell className="text-white/80">
                                    {row.percentage}%
                                  </TableCell>
                                  <TableCell className="text-white/80">
                                    {row.weight}
                                  </TableCell>
                                  <TableCell className="text-white/80">
                                    {row.reps}
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
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
                        Enter the weight lifted and reps performed to calculate
                        your one-rep max.
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <div className="mt-6 bg-white/10 p-4 rounded-lg backdrop-blur-lg">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      How to Use This Information:
                    </h3>
                    <ul className="list-disc list-inside text-white/80 space-y-2">
                      <li>
                        Use higher percentages (90-95%) for strength training
                      </li>
                      <li>
                        Use mid-range percentages (75-85%) for hypertrophy
                        (muscle growth)
                      </li>
                      <li>
                        Use lower percentages (70-75%) for endurance and form
                        practice
                      </li>
                    </ul>
                  </div>
                  <p className="text-sm mt-4 text-white/60 text-center">
                    This is an estimate based on the Brzycki formula. Always
                    prioritize safety when attempting maximal lifts.
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

export default OneRepMaxPage;
