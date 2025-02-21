
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Mail, Phone, Linkedin } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-r from-gray-900 via-black to-gray-900">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-green-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-green-500 rounded-full filter blur-3xl" />
      </div>

      <div className="relative flex items-center justify-center px-4 sm:px-6 lg:px-8 min-h-screen py-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left order-2 lg:order-1 space-y-6"
          >
            {/* Title and Role */}
            <div className="space-y-4">
              <motion.span
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block px-4 py-2 text-lg font-medium bg-green-500/10 text-green-400 rounded-full"
              >
                DevOps Specialist
              </motion.span>
              <motion.h1
                initial={{ x: -50 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
              >
                RANDRIAMBOLOLONA
                <br />
                Manitriniaina Louis Josilde
              </motion.h1>
            </div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-300 leading-relaxed max-w-2xl"
            >
              Born on December 29, 2002, I've spent my time exploring the fascinating worlds of Artificial Intelligence,
              Connected Objects, and Cybersecurity, all while honing my full-stack development skills,
              gaining experience, and constantly challenging myself to push boundaries in the tech world.
            </motion.p>

            {/* Info Grid */}
            <div className="grid sm:grid-cols-2 gap-4 text-gray-300">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center gap-3 bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors"
              >
                <GraduationCap className="w-5 h-5 text-green-400" />
                <span>ENI University</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center gap-3 bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors"
              >
                <Briefcase className="w-5 h-5 text-green-400" />
                <span>2 Internships</span>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <a href="mailto:manitriniaina2002@gmail.com" className="hover:underline">
                  manitriniaina2002@gmail.com
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <a href="tel:+261347297148" className="hover:underline">
                  +261 34 72 971 48
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <a href="https://linkedin.com/in/manitriniaina" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  linkedin.com/in/manitriniaina
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative w-full max-w-md mx-auto aspect-square">
              <div className="absolute inset-0 bg-green-500/20 rounded-full blur-3xl transform -rotate-6" />
              <div className="relative rounded-full overflow-hidden border-4 border-green-500/20 shadow-xl">
                <motion.img
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  src="/Me.jpeg"
                  alt="Profile of RANDRIAMBOLOLONA Manitriniaina Louis Josilde"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
