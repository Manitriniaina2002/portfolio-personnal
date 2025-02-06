
import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-black">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium bg-green-500/10 text-green-500 rounded-full mb-4">
            M1 Computer Science Student
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Aspiring AI Engineer & Full-Stack Developer
          </h1>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl">
            Specializing in Artificial Intelligence, Connected Objects, and
            Cybersecurity. Experienced in full-stack development with international
            exposure.
          </p>
          <div className="flex items-center gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-green-500" />
              <span>ENI University</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-green-500" />
              <span>2 Internships</span>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="w-full aspect-square rounded-2xl overflow-hidden border-2 border-green-500/20">
            <img
              src="/placeholder.svg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
        </motion.div>
      </div>
    </section>
  );
};
