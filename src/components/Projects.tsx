import { motion, AnimatePresence } from "framer-motion";
import { Code2, ExternalLink, Github, Star, Calendar, Users, Zap, Database, Globe, Shield, ChevronLeft, ChevronRight, Play, Server, Cloud, Lock } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const projects = [
  {
    title: "projects.0.title",
    description: "projects.0.description", 
    category: "projects.0.category",
    images: [
      "/placeholder.svg",
      "/devops-logo.png",
      "/placeholder.svg"
    ],
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
    github: "https://github.com/Manitriniaina2002",
    demo: "https://github.com/Manitriniaina2002",
    icon: Server,
    color: "emerald"
  },
  {
    title: "projects.1.title",
    description: "projects.1.description",
    category: "projects.1.category", 
    images: [
      "/placeholder.svg",
      "/Me.jpg",
      "/placeholder.svg"
    ],
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
    status: "completed",
    duration: "projects.1.duration",
    team: "projects.1.team",
    github: "https://github.com/Manitriniaina2002",
    demo: "https://github.com/Manitriniaina2002",
    icon: Globe,
    color: "blue"
  },
  {
    title: "projects.2.title", 
    description: "projects.2.description",
    category: "projects.2.category",
    images: [
      "/placeholder.svg",
      "/devops-logo.svg", 
      "/placeholder.svg"
    ],
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
    github: "https://github.com/Manitriniaina2002",
    demo: "https://github.com/Manitriniaina2002", 
    icon: Shield,
    color: "purple"
  },
  {
    title: "projects.3.title",
    description: "projects.3.description",
    category: "projects.3.category",
    images: [
      "/placeholder.svg",
      "/og-image.png",
      "/placeholder.svg"
    ],
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
    status: "in-progress",
    duration: "projects.3.duration", 
    team: "projects.3.team",
    github: "https://github.com/Manitriniaina2002",
    demo: "https://github.com/Manitriniaina2002",
    icon: Zap,
    color: "orange"
  }
];

// Image Carousel Component
const ImageCarousel = ({ images, projectTitle }: { images: string[], projectTitle: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden group">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${projectTitle} - Image ${currentIndex + 1}`}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/placeholder.svg';
          }}
        />
      </AnimatePresence>
      
      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      )}

      {/* Play Icon Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <Play className="w-5 h-5 text-white ml-0.5" />
        </motion.div>
      </div>
    </div>
  );
};

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
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/30 via-white to-slate-50" id="projects">
      {/* Background decoration - Responsive */}
      <div className="absolute inset-0 opacity-10 sm:opacity-20 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 sm:right-1/3 w-48 h-48 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full filter blur-2xl sm:blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 sm:left-1/3 w-40 h-40 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-gradient-to-r from-blue-400/20 to-emerald-400/20 rounded-full filter blur-2xl sm:blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4 sm:mb-6"
          >
            <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base lg:text-lg font-semibold bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-purple-700 rounded-full border border-purple-200">
              {t("projects.portfolio")}
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent mb-4 sm:mb-6">
            {t("projects.featured")}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            {t("projects.intro")}
          </p>
        </motion.div>

        {/* Projects Grid - Fully Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
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
                className="w-full"
              >
                <motion.div
                  whileHover={{ y: -4, shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                  transition={{ duration: 0.3 }}
                  className={`relative group bg-gradient-to-br ${colors.bg} border-2 ${colors.border} rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col`}
                >
                  
                  {/* Status indicator */}
                  <div className="absolute top-3 sm:top-4 md:top-6 right-3 sm:right-4 md:right-6 z-20">
                    <div className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold ${
                      project.status === 'in-progress'
                        ? 'bg-orange-500 text-white'
                        : 'bg-green-500 text-white'
                    }`}>
                      {project.status === 'in-progress' ? (
                        <>
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse" />
                          <span className="hidden sm:inline">{t("projects.inProgress")}</span>
                          <span className="sm:hidden">WIP</span>
                        </>
                      ) : (
                        <>
                          <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                          <span className="hidden sm:inline">{t("projects.completed")}</span>
                          <span className="sm:hidden">Done</span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Project Image Carousel */}
                  <div className="relative">
                    <ImageCarousel images={project.images} projectTitle={t(project.title)} />
                  </div>

                  {/* Content - Responsive Padding and Spacing */}
                  <div className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6 flex-1 flex flex-col">
                    {/* Header */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 sm:gap-3 mb-3">
                        <div className={`p-1.5 sm:p-2 bg-white rounded-lg shadow-sm`}>
                          <IconComponent className={`w-4 h-4 sm:w-5 sm:h-5 ${colors.accent}`} />
                        </div>
                        <span className={`px-2 sm:px-3 py-1 ${colors.button} ${colors.text} rounded-full text-xs sm:text-sm font-medium border ${colors.border}`}>
                          {t(project.category)}
                        </span>
                      </div>
                      
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-slate-700 transition-colors">
                        {t(project.title)}
                      </h3>
                      
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-3 sm:mb-4">
                        {t(project.description)}
                      </p>
                    </div>

                    {/* Quick Info */}
                    <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm">
                      <div className="flex items-center gap-1 sm:gap-2 text-slate-600">
                        <Calendar className={`w-3 h-3 sm:w-4 sm:h-4 ${colors.accent}`} />
                        <span>{t(project.duration)}</span>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-2 text-slate-600">
                        <Users className={`w-3 h-3 sm:w-4 sm:h-4 ${colors.accent}`} />
                        <span>{t(project.team)}</span>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-slate-900 mb-2 sm:mb-3">{t("projects.techStack")}</h4>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {project.technologies.slice(0, 5).map((tech, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ scale: 0.9 }}
                            whileHover={{ scale: 1.05 }}
                            className="px-2 sm:px-3 py-1 bg-white/80 backdrop-blur-sm hover:bg-white text-slate-700 hover:text-slate-900 rounded-md sm:rounded-lg text-xs font-medium border border-white/60 hover:border-white shadow-sm hover:shadow-md transition-all duration-300"
                          >
                            {t(tech)}
                          </motion.span>
                        ))}
                        {project.technologies.length > 5 && (
                          <span className="px-2 sm:px-3 py-1 bg-slate-100 text-slate-500 rounded-md sm:rounded-lg text-xs font-medium">
                            +{project.technologies.length - 5}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Key Features - Collapsible on Mobile */}
                    <div className="hidden sm:block">
                      <h4 className="text-xs sm:text-sm font-semibold text-slate-900 mb-2 sm:mb-3">{t("projects.keyFeatures")}</h4>
                      <ul className="space-y-1 sm:space-y-2">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                            <div className={`w-1 h-1 sm:w-1.5 sm:h-1.5 ${colors.icon} rounded-full flex-shrink-0 mt-1.5 sm:mt-2`} />
                            <span>{t(feature)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons - Responsive */}
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-3 sm:pt-4 mt-auto">
                      <motion.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-sm"
                      >
                        <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{t("projects.viewCode")}</span>
                      </motion.a>
                      
                      <motion.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-white hover:bg-slate-50 text-slate-700 font-medium rounded-lg sm:rounded-xl border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-300 text-sm"
                      >
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="hidden sm:inline">{t("projects.liveDemo")}</span>
                        <span className="sm:hidden">Demo</span>
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

        {/* View All Projects CTA - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center px-4 sm:px-0"
        >
          <motion.a
            href="https://github.com/Manitriniaina2002"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
          >
            <Github className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>{t("projects.viewAllProjects")}</span>
            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;