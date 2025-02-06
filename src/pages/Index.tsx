import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Hero />
      <Experience />
      <Education />
    </div>
  );
};

export default Index;