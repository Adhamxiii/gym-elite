import Categories from "@/components/Home/Categories";
import Coaches from "@/components/Home/Coaches";
import Courses from "@/components/Home/Courses";
import Hero from "@/components/Home/Hero";
import Tools from "@/components/Home/Tools";
import WhyChoose from "@/components/Home/WhyChoose";

export default function Home() {
  return (
    <div className="bg-black">
      <Hero />
      <WhyChoose />
      <Tools />
      <Courses />
      <Categories />
      <Coaches />
    </div>
  );
}
