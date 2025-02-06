import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from "lucide-react";

const educationData = [
  {
    degree: "Master's in Computer Science",
    institution: "ENI",
    period: "Current - M1",
    location: "Fianarantsoa, Madagascar",
    specializations: [
      "Artificial Intelligence",
      "Connected Objects",
      "Cybersecurity"
    ],
    highlights: [
      "Advanced AI algorithms and applications",
      "IoT system design and implementation",
      "Network security and cryptography"
    ],
    status: "current"
  },
  {
    "degree": "Professional License in General Computer Science",
    "institution": "ENI",
    "period": "2024",
    "location": "Fianarantsoa, Madagascar",
    "specializations": [
      "Software Development",
      "Database Management",
      "Web Technologies",
      "System Administration",
      "Networking"
    ],
    "highlights": [
      "Full-stack development",
      "Database design and optimization",
      "Web application architecture",
      "System administration and configuration",
      "Network setup and security"
    ]
  },
  {
    degree: "Baccalaureate Series C",
    institution: "LRR Anjoma",
    period: "2020",
    location: "Fianarantsoa, Madagascar",
    specializations: [
      "Mathematics",
      "Physics"
    ],
    highlights: [
      "Scientific problem-solving",
      "Analytical thinking"
    ]
  }
];

export const Education = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900" id="education">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-green-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-green-500 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 text-lg font-medium bg-green-500/10 text-green-400 rounded-full mb-4"
          >
            Education
          </motion.span>
          <h2 className="text-4xl font-bold text-white mb-4">Academic Journey</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My educational background and academic achievements in technology and computer science
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-12 lg:left-1/2 transform lg:-translate-x-1/2 h-full w-0.5 bg-green-500/20" />

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
            >
              {/* Timeline dot */}
              <div className="absolute left-12 lg:left-1/2 transform lg:-translate-x-1/2 w-4 h-4 bg-green-500 rounded-full border-4 border-black" />

              <div className={`lg:pr-16 ${index % 2 === 0 ? '' : 'lg:col-start-2 lg:pl-16 lg:pr-0'}`}>
                <div className="backdrop-blur-sm bg-white/5 border border-green-500/10 rounded-xl p-8 hover:border-green-500/30 transition-all duration-300 hover:bg-white/10">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-green-500/10 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-gray-400">
                          <BookOpen className="w-4 h-4 text-green-400" />
                          <span>{edu.institution}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                          <Calendar className="w-4 h-4 text-green-400" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                          <MapPin className="w-4 h-4 text-green-400" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Specializations */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Specializations</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.specializations.map((spec, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Key Highlights</h4>
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-300">
                          <Award className="w-4 h-4 mt-1 text-green-400 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Current indicator */}
                  {edu.status === 'current' && (
                    <div className="mt-6 flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-green-400 text-sm">Currently Pursuing</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Empty column for timeline layout */}
              <div className={index % 2 === 0 ? 'lg:col-start-2' : ''} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;