# GymElite

**Your Ultimate Fitness Platform** — track progress, train smarter, and achieve your goals with courses, expert coaches, and free fitness tools.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Live Demo](#live-demo)
- [Contact Me](#contact-me)

---

## Overview

**GymElite** is a modern fitness web application built with **Next.js 15** and **React 19**. It brings together workout courses, training categories, certified coaches, and interactive fitness calculators in one polished, responsive experience.

Whether you are a trainee looking for structured programs, a coach showcasing expertise, or someone exploring health metrics, GymElite provides the tools and content to support your fitness journey.

### Tech Stack

| Category | Technologies |
|----------|-------------|
| Framework | [Next.js 15](https://nextjs.org/) (App Router, Turbopack) |
| Language | TypeScript |
| Styling | Tailwind CSS, tailwindcss-animate |
| UI Components | Radix UI, shadcn/ui |
| Animations | Framer Motion |
| Charts | Recharts |
| Icons | Lucide React |

---

## Features

### Home Page
- Hero section with call-to-action buttons
- **Why Choose GymElite** — highlights professional trainers, free workouts, and expert coaches
- Embedded **BMI Calculator** with link to the full tools suite
- Featured **courses**, **categories**, and **coaches** sections

### Courses
- Browse and filter fitness courses by category, level, and price
- Search functionality with mobile-friendly filter sheet
- Detailed course pages with instructor info, curriculum, and reviews

### Categories
- Organized workout categories (Strength, Cardio, Yoga, and more)
- Category detail pages with related courses

### Coaches
- Coach directory with profiles and specialties
- Individual coach pages with bio, certifications, social links, and available courses

### Fitness Tools
- **BMI Calculator** — calculate Body Mass Index
- **Calorie Calculator** — estimate daily calorie needs
- **1RM Calculator** — estimate one-rep max for any lift
- Additional tools (workout planner, macro calculator, hydration tracker, and more) coming soon

### Additional Pages
- **About** — mission, stats, team members, and company story
- **Contact** — contact form, location map, and social links

### UI & UX
- Fully responsive layout with mobile navigation
- Dark theme with red accent branding
- Smooth page animations powered by Framer Motion
- Accessible components built on Radix UI primitives

---

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) 18.17 or later
- npm, yarn, pnpm, or bun

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/gym-elite.git
   cd gym-elite
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open the app**

   Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Other Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Create a production build |
| `npm run start` | Run the production server |
| `npm run lint` | Run ESLint |

---

## Usage

### Development

After starting the dev server, edit files in the `app/` and `components/` directories. Changes hot-reload automatically.

Key routes:

| Route | Description |
|-------|-------------|
| `/` | Home page |
| `/courses` | Course catalog |
| `/courses/[slug]` | Course detail |
| `/categories` | Workout categories |
| `/coaches` | Coach directory |
| `/coaches/[id]` | Coach profile |
| `/tools` | Fitness tools hub |
| `/tools/bmi` | BMI calculator |
| `/tools/calories` | Calorie calculator |
| `/tools/one-rep-max` | 1RM calculator |
| `/about` | About page |
| `/contact` | Contact page |

### Production Build

```bash
npm run build
npm run start
```

The app will be available at [http://localhost:3000](http://localhost:3000) by default.

### Project Structure

```
gym-elite/
├── app/                  # Next.js App Router pages
│   ├── about/
│   ├── categories/
│   ├── coaches/
│   ├── contact/
│   ├── courses/
│   └── tools/
├── components/
│   ├── Home/             # Home page sections
│   ├── layout/           # Header & Footer
│   └── ui/               # Reusable UI components
├── lib/                  # Utility functions
└── public/               # Static assets
```

---

## Contributing

Contributions are welcome! To get started:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit: `git commit -m "Add your feature"`
4. Push to your branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

### Guidelines

- Follow the existing code style and component patterns
- Use TypeScript for all new files
- Keep components focused and reusable
- Test your changes locally with `npm run dev` and `npm run lint` before submitting

---

## Live Demo

> **Demo URL:** [here](https://gym-elite-tau.vercel.app/)

The live demo showcases the full GymElite experience — browse courses, explore coaches, and try the fitness calculators in your browser.

---

## Contact Me

**Adham**

- GitHub: [@Adhamxiii](https://github.com/Adhamxiii)
- Email: [adhamxiii22@gmail.com](mailto:adhamxiii22@gmail.com)

