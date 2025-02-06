import { motion } from "framer-motion";
import { Building2, Clock, ChevronRight, Award, Code2 } from "lucide-react";

const experiences = [
  {
    "title": "DevOps Lead (Planned)",
    "company": "CODEL",
    "duration": "Expected Start: 2025",
    "status": "upcoming",
    "description": "Planned role for leading DevOps initiatives and implementing modern development practices in a dynamic startup environment.",
    "skills": [
      "CI/CD Pipeline",
      "Docker",
      "Kubernetes",
      "Cloud Infrastructure",
      "Automation",
      "Infrastructure as Code"
    ],
    "achievements": [
      "Establishing automated deployment pipelines",
      "Implementing containerization strategies",
      "Optimizing development workflows",
      "Managing cloud infrastructure",
      "Enhancing system reliability and scalability"
    ]
  },
  {
    title: "Web Developer Intern",
    company: "ADES Madagascar",
    duration: "3 months",
    description: "Contributed to web development projects, focusing on creating efficient and user-friendly solutions.",
    skills: ["React", "Django", "UI/UX Design"],
    achievements: [
      "Developed responsive web applications",
      "Implemented user-friendly interfaces",
      "Collaborated with cross-functional teams"
    ]
  },
  {
    title: "Designer & Full-stack Developer",
    company: "COSTM Tanambao morafeno TOLIARA Madagascar",
    duration: "3 months",
    description: "Designed and developed full-stack applications, combining both frontend and backend expertise.",
    skills: ["Full-stack Development", "UI Design", "Database Management"],
    achievements: [
      "Led end-to-end application development",
      "Optimized database performance",
      "Created intuitive user interfaces"
    ]
  }
];

export const Experience = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900" id="experience">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-green-500 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
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
            Experience
          </motion.span>
          <h2 className="text-4xl font-bold text-white mb-4">
            Professional Journey
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Leading DevOps practices and driving technological innovation in the software industry
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-green-500/20" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left md:flex-row-reverse'
                }`}
            >
              {/* Timeline dot */}
              <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 ${exp.status === 'current' ? 'bg-green-400 animate-pulse' : 'bg-green-500'
                } rounded-full border-4 border-black`} />

              <div className={`space-y-4 ${index % 2 === 0 ? 'md:pr-20' : 'md:pl-20 md:col-start-2'}`}>
                <div className={`backdrop-blur-sm ${exp.status === 'current'
                    ? 'bg-green-500/5 border-green-400/30'
                    : 'bg-white/5 border-green-500/10'
                  } rounded-xl border hover:border-green-500/30 transition-all duration-300 hover:bg-white/10 overflow-hidden`}>

                  {/* Header Section */}
                  <div className="p-8 border-b border-green-500/10">
                    <div className="flex flex-col gap-4">
                      <h3 className="text-2xl font-bold text-white">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-gray-400">
                        <div className="flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-green-400" />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-green-400" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>
                      {exp.status === 'current' && (
                        <span className="self-start px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                          Current Position
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 space-y-8">
                    {/* Description */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <div className="h-px flex-1 bg-green-500/10"></div>
                        <h4 className="text-lg font-semibold text-white px-4">Role Overview</h4>
                        <div className="h-px flex-1 bg-green-500/10"></div>
                      </div>
                      <p className="text-gray-300">{exp.description}</p>
                    </div>

                    {/* Skills */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <div className="h-px flex-1 bg-green-500/10"></div>
                        <h4 className="text-lg font-semibold text-white px-4 flex items-center gap-2">
                          <Code2 className="w-5 h-5 text-green-400" />
                          Key Skills
                        </h4>
                        <div className="h-px flex-1 bg-green-500/10"></div>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {exp.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 bg-green-500/10 text-green-400 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <div className="h-px flex-1 bg-green-500/10"></div>
                        <h4 className="text-lg font-semibold text-white px-4 flex items-center gap-2">
                          <Award className="w-5 h-5 text-green-400" />
                          Achievements
                        </h4>
                        <div className="h-px flex-1 bg-green-500/10"></div>
                      </div>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-300">
                            <ChevronRight className="w-4 h-4 mt-1 text-green-400 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Empty column for timeline layout */}
              <div className={index % 2 === 0 ? 'md:col-start-2' : ''} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;