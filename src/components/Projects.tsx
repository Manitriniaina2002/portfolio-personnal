import { motion } from "framer-motion";
import { Code2, ExternalLink, Github, Star, Calendar, Users, Zap, Database, Globe, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";

const projects = [
  {
    title: "projects.0.title",
    description: "projects.0.description",
    category: "projects.0.category",
    image: "/project1.jpg",
    technologies: [
      "projects.0.technologies.0",
      "projects.0.technologies.1",
      "projects.0.technologies.2",
      "projects.0.technologies.3",
      "projects.0.technologies.4",
      "projects.0.technologies.5"
    ],
    features: [
      "projects.0.features.0",
      "projects.0.features.1",
      "projects.0.features.2",
      "projects.0.features.3"
    ],
    status: "completed",
    duration: "projects.0.duration",
    team: "projects.0.team",
    github: "https://github.com/example/project1",
    demo: "https://demo.example.com",
    icon: Database,
    color: "emerald"
  },
  {
    title: "projects.1.title",
    description: "projects.1.description",
    category: "projects.1.category",
    image: "/project2.jpg",
    technologies: [
      "projects.1.technologies.0",
      "projects.1.technologies.1",
      "projects.1.technologies.2",
      "projects.1.technologies.3",
      "projects.1.technologies.4"
    ],
    features: [
      "projects.1.features.0",
      "projects.1.features.1",
      "projects.1.features.2",
      "projects.1.features.3"
    ],
    status: "in-progress",
    duration: "projects.1.duration",
    team: "projects.1.team",
    github: "https://github.com/example/project2",
    demo: "https://demo2.example.com",
    icon: Globe,
    color: "blue"
  },
  {
    title: "projects.2.title",
    description: "projects.2.description",
    category: "projects.2.category",
    image: "/project3.jpg",
    technologies: [
      "projects.2.technologies.0",
      "projects.2.technologies.1",
      "projects.2.technologies.2",
      "projects.2.technologies.3",
      "projects.2.technologies.4"
    ],
    features: [
      "projects.2.features.0",
      "projects.2.features.1",
      "projects.2.features.2",
      "projects.2.features.3"
    ],
    status: "completed",
    duration: "projects.2.duration",
    team: "projects.2.team",
    github: "https://github.com/example/project3",
    demo: "https://demo3.example.com",
    icon: Shield,
    color: "purple"
  },
  {
    title: "projects.3.title",
    description: "projects.3.description",
    category: "projects.3.category",
    image: "/project4.jpg",
    technologies: [
      "projects.3.technologies.0",
      "projects.3.technologies.1",
      "projects.3.technologies.2",
      "projects.3.technologies.3"
    ],
    features: [
      "projects.3.features.0",
      "projects.3.features.1",
      "projects.3.features.2"
    ],
    status: "completed",
    duration: "projects.3.duration",
    team: "projects.3.team",
    github: "https://github.com/example/project4",
    demo: "https://demo4.example.com",
    icon: Zap,
    color: "orange"
  }
];

export const Projects = () => {
  const { t } = useTranslation();
  
  const colorClasses = {
    emerald: {
      bg: 'from-emerald-50 to-green-50',
      border: 'border-emerald-200',
      icon: 'bg-emerald-500',
      text: 'text-emerald-700',
      accent: 'text-emerald-600',
      button: 'hover:bg-emerald-50'
    },
    blue: {
      bg: 'from-blue-50 to-cyan-50', 
      border: 'border-blue-200',
      icon: 'bg-blue-500',
      text: 'text-blue-700',
      accent: 'text-blue-600',
      button: 'hover:bg-blue-50'
    },
    purple: {
      bg: 'from-purple-50 to-pink-50',
      border: 'border-purple-200', 
      icon: 'bg-purple-500',
      text: 'text-purple-700',
      accent: 'text-purple-600',
      button: 'hover:bg-purple-50'
    },
    orange: {
      bg: 'from-orange-50 to-yellow-50',
      border: 'border-orange-200', 
      icon: 'bg-orange-500',
      text: 'text-orange-700',
      accent: 'text-orange-600',
      button: 'hover:bg-orange-50'
    }
  };

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-blue-50/30 via-white to-slate-50" id="projects">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-emerald-400/20 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <Code2 className="w-6 h-6 text-purple-600" />
            <span className="px-4 py-2 text-lg font-semibold bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-purple-700 rounded-full border border-purple-200">
              {t("projects.portfolio")}
            </span>
          </motion.div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent mb-6">
            {t("projects.featured")}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t("projects.intro")}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            const colors = colorClasses[project.color];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -8, shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                  transition={{ duration: 0.3 }}
                  className={`relative group bg-gradient-to-br ${colors.bg} border-2 ${colors.border} rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 h-full`}
                >
                  
                  {/* Status indicator */}
                  <div className="absolute top-6 right-6 z-20">
                    <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold ${
                      project.status === 'in-progress'
                        ? 'bg-orange-500 text-white'
                        : 'bg-green-500 text-white'
                    }`}>
                      {project.status === 'in-progress' ? (
                        <>
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                          {t("projects.inProgress")}
                        </>
                      ) : (
                        <>
                          <Star className="w-3 h-3" />
                          {t("projects.completed")}
                        </>
                      )}
                    </div>
                  </div>

                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} flex items-center justify-center`}>
                      <IconComponent className={`w-16 h-16 ${colors.accent}`} />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-8 space-y-6">
                    {/* Header */}
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`p-2 bg-white rounded-lg shadow-sm`}>
                          <IconComponent className={`w-5 h-5 ${colors.accent}`} />
                        </div>
                        <span className={`px-3 py-1 ${colors.button} ${colors.text} rounded-full text-sm font-medium border ${colors.border}`}>
                          {t(project.category)}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
                        {t(project.title)}
                      </h3>
                      
                      <p className="text-slate-600 leading-relaxed mb-4">
                        {t(project.description)}
                      </p>
                    </div>

                    {/* Quick Info */}
                    <div className="flex flex-wrap gap-3 text-sm">
                      <div className="flex items-center gap-2 text-slate-600">
                        <Calendar className={`w-4 h-4 ${colors.accent}`} />
                        <span>{t(project.duration)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <Users className={`w-4 h-4 ${colors.accent}`} />
                        <span>{t(project.team)}</span>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 mb-3">{t("projects.techStack")}</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ scale: 0.9 }}
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1 bg-white/80 backdrop-blur-sm hover:bg-white text-slate-700 hover:text-slate-900 rounded-lg text-xs font-medium border border-white/60 hover:border-white shadow-sm hover:shadow-md transition-all duration-300"
                          >
                            {t(tech)}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 mb-3">{t("projects.keyFeatures")}</h4>
                      <ul className="space-y-2">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                            <div className={`w-1.5 h-1.5 ${colors.icon} rounded-full flex-shrink-0 mt-2`} />
                            <span>{t(feature)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-slate-50 text-slate-700 font-medium rounded-xl border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm">{t("projects.liveDemo")}</span>
                      </motion.a>
                      
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                      >
                        <Github className="w-4 h-4" />
                        <span className="text-sm">{t("projects.viewCode")}</span>
                      </motion.a>
                    </div>
                  </div>

                  {/* Decorative gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            <span>{t("projects.viewAllProjects")}</span>
            <ExternalLink className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;