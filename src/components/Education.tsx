import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Brain, Shield, Cpu } from "lucide-react";
import { useTranslation } from "react-i18next";

const educationData = [
  {
    degree: "education.masters.degree",
    institution: "education.masters.institution",
    period: "education.masters.period",
    location: "education.masters.location",
    specializations: [
      "education.masters.specializations.0",
      "education.masters.specializations.1",
      "education.masters.specializations.2"
    ],
    highlights: [
      "education.masters.highlights.0",
      "education.masters.highlights.1",
      "education.masters.highlights.2",
      "education.masters.highlights.3"
    ],
    status: "current",
    icon: Brain,
    color: "emerald",
    projects: 8
  },
  {
    degree: "education.license.degree",
    institution: "education.license.institution",
    period: "education.license.period",
    location: "education.license.location",
    specializations: [
      "education.license.specializations.0",
      "education.license.specializations.1",
      "education.license.specializations.2",
      "education.license.specializations.3",
      "education.license.specializations.4"
    ],
    highlights: [
      "education.license.highlights.0",
      "education.license.highlights.1",
      "education.license.highlights.2",
      "education.license.highlights.3",
      "education.license.highlights.4"
    ],
    status: "completed",
    icon: Cpu,
    color: "blue",
    projects: 12
  },
  {
    degree: "education.bac.degree",
    institution: "education.bac.institution",
    period: "education.bac.period",
    location: "education.bac.location",
    specializations: [
      "education.bac.specializations.0",
      "education.bac.specializations.1",
      "education.bac.specializations.2"
    ],
    highlights: [
      "education.bac.highlights.0",
      "education.bac.highlights.1",
      "education.bac.highlights.2",
      "education.bac.highlights.3"
    ],
    status: "completed",
    icon: Shield,
    color: "purple",
    projects: 5
  }
];

export const Education = () => {
  const { t } = useTranslation();
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-white to-blue-50/30" id="education">
      {/* Background decoration - responsive */}
      <div className="absolute inset-0 opacity-15 sm:opacity-20 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-4 sm:mb-6"
          >
            <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
            <span className="px-3 py-1.5 sm:px-4 sm:py-2 text-base sm:text-lg font-semibold bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-700 rounded-full border border-blue-200">
              {t("education.excellence")}
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent mb-4 sm:mb-6 px-2">
            {t("education.journey")}
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-2">
            {t("education.intro")}
          </p>
        </motion.div>

        <div className="relative">
          {/* Modern timeline - responsive positioning */}
          <div className="absolute left-6 sm:left-8 md:left-10 lg:left-1/2 lg:transform lg:-translate-x-1/2 h-full w-0.5 sm:w-1 bg-gradient-to-b from-emerald-300 via-blue-300 to-purple-300 rounded-full" />

          {educationData.map((edu, index) => {
            const IconComponent = edu.icon;
            const colorClasses = {
              emerald: {
                bg: 'from-emerald-50 to-green-50',
                border: 'border-emerald-200',
                icon: 'bg-emerald-500',
                text: 'text-emerald-700',
                accent: 'text-emerald-600'
              },
              blue: {
                bg: 'from-blue-50 to-cyan-50', 
                border: 'border-blue-200',
                icon: 'bg-blue-500',
                text: 'text-blue-700',
                accent: 'text-blue-600'
              },
              purple: {
                bg: 'from-purple-50 to-pink-50',
                border: 'border-purple-200', 
                icon: 'bg-purple-500',
                text: 'text-purple-700',
                accent: 'text-purple-600'
              }
            };
            const colors = colorClasses[edu.color];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-12 sm:mb-16 md:mb-20 last:mb-0"
              >
                {/* Timeline node - responsive positioning */}
                <div className={`absolute left-6 sm:left-8 md:left-10 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ${colors.icon} rounded-full border-2 sm:border-3 md:border-4 border-white shadow-lg z-10 ${edu.status === 'current' ? 'animate-pulse' : ''}`} />

                <div className={`ml-12 sm:ml-16 md:ml-20 lg:ml-0 ${index % 2 === 0 ? 'lg:pr-8 xl:pr-16' : 'lg:col-start-2 lg:pl-8 xl:pl-16 lg:pr-0'}`}>
                  <motion.div
                    whileHover={{ y: -3, shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                    transition={{ duration: 0.3 }}
                    className={`relative group bg-gradient-to-br ${colors.bg} border-2 ${colors.border} rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl hover:shadow-xl sm:hover:shadow-2xl transition-all duration-500`}
                  >
                    
                    {/* Status indicator - responsive */}
                    {edu.status === 'current' && (
                      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 z-10">
                        <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3 sm:py-1 bg-emerald-500 text-white rounded-full text-xs sm:text-sm font-semibold">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse" />
                          <span className="hidden sm:inline">{t("education.currentlyPursuing")}</span>
                          <span className="sm:hidden">Current</span>
                        </div>
                      </div>
                    )}

                    {/* Header Section - responsive */}
                    <div className="p-4 sm:p-6 md:p-8 border-b border-white/50">
                      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
                        <div className={`p-3 sm:p-4 bg-white rounded-xl sm:rounded-2xl shadow-lg flex-shrink-0`}>
                          <IconComponent className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ${colors.accent}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-slate-700 transition-colors leading-tight">
                            {t(edu.degree)}
                          </h3>
                          <div className="space-y-1.5 sm:space-y-2">
                            <div className="flex items-center gap-2 sm:gap-3 text-slate-700">
                              <BookOpen className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${colors.accent} flex-shrink-0`} />
                              <span className="font-semibold text-sm sm:text-base">{t(edu.institution)}</span>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-3 text-slate-600">
                              <Calendar className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${colors.accent} flex-shrink-0`} />
                              <span className="text-sm sm:text-base">{t(edu.period)}</span>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-3 text-slate-600">
                              <MapPin className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${colors.accent} flex-shrink-0`} />
                              <span className="text-sm sm:text-base">{t(edu.location)}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Quick stats - responsive */}
                      <div className="flex flex-wrap gap-2 sm:gap-3">
                        <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/60 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/40">
                          <span className="text-xs sm:text-sm font-semibold text-slate-700">{t("education.projects")}: </span>
                          <span className={`text-xs sm:text-sm font-bold ${colors.text}`}>{edu.projects}+</span>
                        </div>
                      </div>
                    </div>

                    {/* Content Section - responsive */}
                    <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
                      {/* Specializations */}
                      <div>
                        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                          <div className={`w-1.5 h-4 sm:w-2 sm:h-5 md:h-6 ${colors.icon} rounded-full`} />
                          <h4 className="text-base sm:text-lg font-semibold text-slate-900">{t("education.specializations")}</h4>
                        </div>
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                          {edu.specializations.map((spec, idx) => (
                            <motion.span
                              key={idx}
                              initial={{ scale: 0.9 }}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/80 backdrop-blur-sm hover:bg-white text-slate-700 hover:text-slate-900 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium border border-white/60 hover:border-white shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                            >
                              {t(spec)}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Highlights */}
                      <div>
                        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                          <Award className={`w-4 h-4 sm:w-5 sm:h-5 ${colors.accent}`} />
                          <h4 className="text-base sm:text-lg font-semibold text-slate-900">{t("education.highlights")}</h4>
                        </div>
                        <ul className="space-y-2 sm:space-y-3">
                          {edu.highlights.map((highlight, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ x: -10, opacity: 0 }}
                              whileInView={{ x: 0, opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-start gap-2 sm:gap-3 text-slate-600"
                            >
                              <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 ${colors.icon} rounded-full flex-shrink-0 mt-1.5 sm:mt-2`} />
                              <span className="leading-relaxed text-sm sm:text-base">{t(highlight)}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Decorative gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" />
                  </motion.div>
                </div>

                {/* Empty column for timeline layout */}
                <div className={index % 2 === 0 ? 'lg:col-start-2' : ''} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;