import type { Metadata } from "next";
import { Oswald, Roboto, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-oswald",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GymElite - Your Ultimate Fitness Platform",
  description:
    "Join GymElite, the ultimate fitness platform designed for trainees, coaches, and administrators. Track progress, access free workouts, and achieve your fitness goals today!",
  keywords: [
    "Fitness",
    "Gym",
    "Training",
    "Workout Plans",
    "Progress Tracking",
    "Coaches",
    "Fitness Tools",
    "BMI Calculator",
  ],
  authors: [{ name: "GymElite Team", url: "https://www.gymelite.com" }],
  openGraph: {
    title: "GymElite - Your Ultimate Fitness Platform",
    description:
      "Unlock your fitness potential with GymElite. Free workouts, expert coaching, and the best fitness tools in one place.",
    url: "https://www.gymelite.com",
    siteName: "GymElite",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "GymElite - Fitness Platform Social Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GymElite - Your Ultimate Fitness Platform",
    description:
      "Access top-tier fitness tools, track your progress, and enjoy free workout plans with GymElite.",
    creator: "@GymElite",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  other: {
    "theme-color": "#FF3333",
    "canonical-url": "https://www.gymelite.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${oswald.variable} ${roboto.variable} ${poppins.variable}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
