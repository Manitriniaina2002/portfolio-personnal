import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export const Education = () => {
  return (
    <section className="py-20 px-4 bg-slate-50" id="education">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium bg-slate-100 text-slate-800 rounded-full mb-4">
            Education
          </span>
          <h2 className="text-3xl font-bold text-slate-800">Academic Journey</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="backdrop-blur-sm bg-white/50 border border-slate-200 rounded-xl p-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-slate-100 rounded-lg">
              <GraduationCap className="w-6 h-6 text-slate-700" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-800">
                Master's in Computer Science
              </h3>
              <p className="text-slate-600">ENI University</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-slate-300 rounded-full"></span>
              <p className="text-slate-700">
                Specialization in Artificial Intelligence
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-slate-300 rounded-full"></span>
              <p className="text-slate-700">Connected Objects</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-slate-300 rounded-full"></span>
              <p className="text-slate-700">Cybersecurity</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};