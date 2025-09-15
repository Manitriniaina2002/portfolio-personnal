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
    gpa: "education.masters.gpa",
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
    gpa: "education.license.gpa",
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
    gpa: "education.bac.gpa",
    projects: 5
  }
];

export const Education = () => {
  const { t } = useTranslation();
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-slate-50 via-white to-blue-50/30" id="education">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full filter blur-3xl" />
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
            <GraduationCap className="w-6 h-6 text-blue-600" />
            <span className="px-4 py-2 text-lg font-semibold bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-700 rounded-full border border-blue-200">
              {t("education.excellence")}
            </span>
          </motion.div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent mb-6">
            {t("education.journey")}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t("education.intro")}
          </p>
        </motion.div>

        <div className="relative">
          {/* Modern timeline */}
          <div className="absolute left-12 lg:left-1/2 lg:transform lg:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-emerald-300 via-blue-300 to-purple-300 rounded-full" />

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
                className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 last:mb-0"
              >
                {/* Timeline node */}
                <div className={`absolute left-12 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-6 h-6 ${colors.icon} rounded-full border-4 border-white shadow-lg z-10 ${edu.status === 'current' ? 'animate-pulse' : ''}`} />

                <div className={`lg:pr-16 ${index % 2 === 0 ? '' : 'lg:col-start-2 lg:pl-16 lg:pr-0'}`}>
                  <motion.div
                    whileHover={{ y: -8, shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                    transition={{ duration: 0.3 }}
                    className={`relative group bg-gradient-to-br ${colors.bg} border-2 ${colors.border} rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500`}
                  >
                    
                    {/* Status indicator */}
                    {edu.status === 'current' && (
                      <div className="absolute top-6 right-6 z-10">
                        <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500 text-white rounded-full text-sm font-semibold">
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                          {t("education.currentlyPursuing")}
                        </div>
                      </div>
                    )}

                    {/* Header Section */}
                    <div className="p-8 border-b border-white/50">
                      <div className="flex items-start gap-6 mb-6">
                        <div className={`p-4 bg-white rounded-2xl shadow-lg`}>
                          <IconComponent className={`w-8 h-8 ${colors.accent}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
                            {t(edu.degree)}
                          </h3>
                          <div className="space-y-2">
                            <div className="flex items-center gap-3 text-slate-700">
                              <BookOpen className={`w-4 h-4 ${colors.accent}`} />
                              <span className="font-semibold">{t(edu.institution)}</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-600">
                              <Calendar className={`w-4 h-4 ${colors.accent}`} />
                              <span>{t(edu.period)}</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-600">
                              <MapPin className={`w-4 h-4 ${colors.accent}`} />
                              <span>{t(edu.location)}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Quick stats */}
                      <div className="flex flex-wrap gap-3">
                        <div className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-xl border border-white/40">
                          <span className="text-sm font-semibold text-slate-700">{t("education.gpa")}: </span>
                          <span className={`text-sm font-bold ${colors.text}`}>{t(edu.gpa)}</span>
                        </div>
                        <div className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-xl border border-white/40">
                          <span className="text-sm font-semibold text-slate-700">{t("education.projects")}: </span>
                          <span className={`text-sm font-bold ${colors.text}`}>{edu.projects}+</span>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 space-y-8">
                      {/* Specializations */}
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`w-2 h-6 ${colors.icon} rounded-full`} />
                          <h4 className="text-lg font-semibold text-slate-900">{t("education.specializations")}</h4>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          {edu.specializations.map((spec, idx) => (
                            <motion.span
                              key={idx}
                              initial={{ scale: 0.9 }}
                              whileHover={{ scale: 1.05 }}
                              className="px-4 py-2 bg-white/80 backdrop-blur-sm hover:bg-white text-slate-700 hover:text-slate-900 rounded-xl text-sm font-medium border border-white/60 hover:border-white shadow-sm hover:shadow-md transition-all duration-300"
                            >
                              {t(spec)}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Highlights */}
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <Award className={`w-5 h-5 ${colors.accent}`} />
                          <h4 className="text-lg font-semibold text-slate-900">{t("education.highlights")}</h4>
                        </div>
                        <ul className="space-y-3">
                          {edu.highlights.map((highlight, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ x: -10, opacity: 0 }}
                              whileInView={{ x: 0, opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-start gap-3 text-slate-600"
                            >
                              <div className={`w-2 h-2 ${colors.icon} rounded-full flex-shrink-0 mt-2`} />
                              <span className="leading-relaxed">{t(highlight)}</span>
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