
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export const Education = () => {
  return (
    <section className="py-20 px-4 bg-black" id="education">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium bg-green-500/10 text-green-500 rounded-full mb-4">
            Education
          </span>
          <h2 className="text-3xl font-bold text-white">Academic Journey</h2>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-sm bg-white/5 border border-green-500/10 rounded-xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-green-500/10 rounded-lg">
                <GraduationCap className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Master's in Computer Science (Current)
                </h3>
                <p className="text-gray-400">ENI University - M1</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <p className="text-gray-400">
                  Specialization in Artificial Intelligence
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <p className="text-gray-400">Connected Objects</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <p className="text-gray-400">Cybersecurity</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="backdrop-blur-sm bg-white/5 border border-green-500/10 rounded-xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-green-500/10 rounded-lg">
                <GraduationCap className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Professional License in General Computer Science
                </h3>
                <p className="text-gray-400">ENI University (2024)</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="backdrop-blur-sm bg-white/5 border border-green-500/10 rounded-xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-green-500/10 rounded-lg">
                <GraduationCap className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Baccalaureate Series C
                </h3>
                <p className="text-gray-400">2020</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
