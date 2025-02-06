import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 text-sm font-medium bg-slate-100 text-slate-800 rounded-full mb-4">
            M1 Computer Science Student
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
            Aspiring AI Engineer & Full-Stack Developer
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Specializing in Artificial Intelligence, Connected Objects, and
            Cybersecurity. Experienced in full-stack development with international
            exposure.
          </p>
          <div className="flex items-center justify-center gap-4 text-slate-600">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5" />
              <span>ENI University</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5" />
              <span>2 Internships</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};