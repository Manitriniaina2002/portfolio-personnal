import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left order-2 md:order-1"
        >
          <span className="inline-block px-3 py-1 text-6xl font-medium bg-green-500/10 text-green-500 rounded-full mb-4">
            DevOps specialist
          </span>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
            RANDRIAMBOLOLONA Manitriniaina Louis Josilde
          </h3>
          <p className="text-base sm:text-lg text-gray-400 mb-6 md:mb-8">
            Born on December 29, 2002, I’ve spent my time exploring the fascinating worlds of Artificial Intelligence, 
            Connected Objects, and Cybersecurity, all while honing my full-stack development skills, 
            gaining experience, and constantly challenging myself to push boundaries in the tech world, 
            all of which has shaped me into a dynamic and forward-thinking individual ready to take on the next big challenge.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-gray-400">
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
          className="relative order-1 md:order-2"
        >
          <div className="w-full max-w-md mx-auto aspect-square rounded-full overflow-hidden border-4 border-green-500/20">
            <img
              src="/Photo.jpg"
              alt="Profile of RANDRIAMBOLOLONA Manitriniaina Louis Josilde"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 rounded-full"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full"></div>
        </motion.div>

      </div>
    </section>
  );
};
