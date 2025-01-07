"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { motion } from "framer-motion";
import {
  Activity,
  Calculator,
  ClipboardList,
  Clock,
  Droplet,
  Dumbbell,
  MoreHorizontal,
  PieChart,
} from "lucide-react";
import Link from "next/link";

const tools = [
  {
    id: "bmi",
    name: "BMI Calculator",
    description: "Calculate your Body Mass Index",
    icon: Calculator,
  },
  {
    id: "calories",
    name: "Calorie Calculator",
    description: "Estimate your daily calorie needs",
    icon: Activity,
  },
  {
    id: "one-rep-max",
    name: "1RM Calculator",
    description: "Estimate your one-rep max for any lift",
    icon: Dumbbell,
  },
];

const moreTools = [
  { name: "Workout Plan Generator", icon: ClipboardList },
  { name: "Progress Tracker", icon: Activity },
  { name: "Macro-Nutrient Calculator", icon: PieChart },
  { name: "Hydration Calculator", icon: Droplet },
  { name: "Fitness Timer", icon: Clock },
  { name: "Interval Timer", icon: Clock },
];

const ToolsPage = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="container px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-primary mb-4">
            Fitness Tools
          </h1>
          <p className="text-xl text-accent max-w-2xl mx-auto">
            Optimize your workout routine and track your progress with our
            comprehensive suite of fitness calculators and tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <>
            {tools.map((tool, index) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={tool.id === "more" ? "#" : `/tools/${tool.id}`}>
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <tool.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-white">{tool.name}</CardTitle>
                      <CardDescription className="text-muted">
                        {tool.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {tool.id === "more" ? (
                        <p className="text-sm text-muted-foreground">
                          Coming soon...
                        </p>
                      ) : (
                        <p className="text-sm text-primary">
                          Click to use tool →
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}

            <Popover>
              <PopoverTrigger asChild>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <MoreHorizontal className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-white">More Tools</CardTitle>
                    <CardDescription className="text-gray-400">
                      Explore upcoming fitness tools
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-primary">Click to see more →</p>
                  </CardContent>
                </Card>
              </PopoverTrigger>
              <PopoverContent
                sideOffset={10}
                className="bg-neutral-950 text-white p-4 border rounded-lg"
              >
                <div>
                  <h1>Coming Soon</h1>
                  <p>
                    These tools are currently in development and will be
                    available soon.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mt-4">
                    {moreTools.map((tool, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 p-2 rounded-md bg-neutral-800"
                      >
                        <tool.icon className="w-5 h-5 text-primary" />
                        <span>{tool.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-semibold mb-6 text-center text-white">
            Why Use Our Fitness Tools?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Accurate Calculations",
                description:
                  "Our tools use scientifically validated formulas to provide accurate results for your fitness journey.",
                icon: Calculator,
              },
              {
                title: "User-Friendly Interface",
                description:
                  "Intuitive design makes it quick and easy to input your data and get the information you need.",
                icon: Activity,
              },
              {
                title: "Progress Tracking",
                description:
                  "Regularly use these tools to monitor your fitness progress and adjust your goals for optimal results.",
                icon: Dumbbell,
              },
            ].map((item, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-white">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ToolsPage;
