
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Web Developer Intern",
    company: "ADES Madagascar",
    duration: "3 months",
    description:
      "Contributed to web development projects, focusing on creating efficient and user-friendly solutions.",
  },
  {
    title: "Full-stack Designer & Developer",
    company: "COSTM Tanambao morafeno TOLIARA Madagascar",
    duration: "3 months",
    description:
      "Designed and developed full-stack applications, combining both frontend and backend expertise.",
  },
];

export const Experience = () => {
  return (
    <section className="py-20 px-4 bg-black" id="experience">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 text-4xl font-medium bg-green-500/10 text-green-500 rounded-full mb-4">
            Experience
          </span>
          <h2 className="text-3xl font-bold text-white mb-12">
            Professional Journey
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="backdrop-blur-sm bg-white/5 border border-green-500/10 rounded-xl p-6 hover:border-green-500/30 transition-all"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {exp.title}
              </h3>
              <p className="text-gray-400 mb-2">{exp.company}</p>
              <p className="text-sm text-gray-500 mb-4">{exp.duration}</p>
              <p className="text-gray-400">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
