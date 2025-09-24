import { motion } from "framer-motion";
import { Building2, Clock, ChevronRight, Award, Code2, Zap, Star } from "lucide-react";
import { useTranslation } from "react-i18next";

const experiences = [
  {
    title: "experience.0.title",
    company: "experience.0.company",
    duration: "experience.0.duration",
    status: "upcoming",
    description: "experience.0.description",
    skills: [
      "experience.0.skills.0",
      "experience.0.skills.1",
      "experience.0.skills.2",
      "experience.0.skills.3",
      "experience.0.skills.4",
      "experience.0.skills.5",
      "experience.0.skills.6"
    ],
    achievements: [
      "experience.0.achievements.0",
      "experience.0.achievements.1",
      "experience.0.achievements.2",
      "experience.0.achievements.3",
      "experience.0.achievements.4"
    ],
    companyType: "experience.0.companyType",
    teamSize: "experience.0.teamSize",
    techStack: "experience.0.techStack"
  },
  {
    title: "experience.1.title",
    company: "experience.1.company",
    duration: "experience.1.duration",
    status: "completed",
    description: "experience.1.description",
    skills: [
      "experience.1.skills.0",
      "experience.1.skills.1",
      "experience.1.skills.2",
      "experience.1.skills.3",
      "experience.1.skills.4",
      "experience.1.skills.5"
    ],
    achievements: [
      "experience.1.achievements.0",
      "experience.1.achievements.1",
      "experience.1.achievements.2",
      "experience.1.achievements.3"
    ],
    companyType: "experience.1.companyType",
    teamSize: "experience.1.teamSize",
    techStack: "experience.1.techStack"
  },
  {
    title: "experience.2.title",
    company: "experience.2.company",
    duration: "experience.2.duration",
    status: "completed",
    description: "experience.2.description",
    skills: [
      "experience.2.skills.0",
      "experience.2.skills.1",
      "experience.2.skills.2",
      "experience.2.skills.3",
      "experience.2.skills.4",
      "experience.2.skills.5"
    ],
    achievements: [
      "experience.2.achievements.0",
      "experience.2.achievements.1",
      "experience.2.achievements.2",
      "experience.2.achievements.3"
    ],
    companyType: "experience.2.companyType",
    teamSize: "experience.2.teamSize",
    techStack: "experience.2.techStack"
  }
];

export const Experience = () => {
  const { t } = useTranslation();
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-slate-50 to-white" id="experience">
      {/* Background decoration - responsive */}
      <div className="absolute inset-0 opacity-20 sm:opacity-30 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-gradient-to-r from-emerald-400/10 to-blue-400/10 rounded-full filter blur-3xl" />
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
            <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
            <span className="px-3 py-1.5 sm:px-4 sm:py-2 text-base sm:text-lg font-semibold bg-gradient-to-r from-emerald-500/10 to-blue-500/10 text-emerald-700 rounded-full border border-emerald-200">
              {t("experience.professional")}
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent mb-4 sm:mb-6 px-2">
            {t("experience.future")}
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-2">
            {t("experience.intro")}
          </p>
        </motion.div>

        <div className="relative">
          {/* Modern timeline - hidden on mobile, visible from sm up */}
          <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-emerald-200 via-blue-200 to-purple-200 rounded-full" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative mb-12 sm:mb-16 md:mb-20 last:mb-0"
            >
              {/* Timeline node - hidden on mobile, visible from sm up */}
              <div className={`hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full border-3 sm:border-4 border-white shadow-lg z-10 ${
                exp.status === 'upcoming' 
                  ? 'bg-gradient-to-r from-emerald-500 to-blue-500 animate-pulse' 
                  : 'bg-gradient-to-r from-blue-500 to-purple-500'
              }`} />

              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 ${
                index % 2 === 0 ? '' : 'lg:flex-row-reverse'
              }`}>
                
                <div className={`${index % 2 === 0 ? 'lg:pr-8 xl:pr-16' : 'lg:pl-8 xl:pl-16 lg:col-start-2'}`}>
                  <motion.div
                    whileHover={{ y: -3, shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                    transition={{ duration: 0.3 }}
                    className={`relative group ${
                      exp.status === 'upcoming'
                        ? 'bg-gradient-to-br from-emerald-50 to-blue-50 border-2 border-emerald-200'
                        : 'bg-white border-2 border-slate-200'
                    } rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl hover:shadow-xl sm:hover:shadow-2xl transition-all duration-500`}
                  >
                    
                    {/* Status indicator - responsive */}
                    {exp.status === 'upcoming' && (
                      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20">
                        <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3 sm:py-1 bg-emerald-500 text-white rounded-full text-xs sm:text-sm font-semibold">
                          <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                          <span className="hidden sm:inline">{t("experience.upcoming")}</span>
                          <span className="sm:hidden">New</span>
                        </div>
                      </div>
                    )}

                    {/* Header Section - responsive */}
                    <div className="p-4 sm:p-6 md:p-8 border-b border-slate-100">
                      <div className="flex items-start justify-between mb-4 sm:mb-6">
                        <div className="flex-1 pr-2 sm:pr-0">
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors leading-tight">
                            {t(exp.title)}
                          </h3>
                          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-4 text-slate-600 mb-4">
                            <div className="flex items-center gap-2">
                              <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 flex-shrink-0" />
                              <span className="font-medium text-sm sm:text-base">{t(exp.company)}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 flex-shrink-0" />
                              <span className="text-sm sm:text-base">{t(exp.duration)}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Quick info badges - responsive */}
                      <div className="flex flex-wrap gap-2 sm:gap-3">
                        <span className="px-2.5 py-1 sm:px-3 sm:py-1 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium">
                          {t(exp.companyType)}
                        </span>
                        <span className="px-2.5 py-1 sm:px-3 sm:py-1 bg-purple-100 text-purple-700 rounded-full text-xs sm:text-sm font-medium">
                          <span className="hidden sm:inline">{t("experience.team")}: </span>
                          <span className="sm:hidden">Team: </span>
                          {t(exp.teamSize)}
                        </span>
                        <span className="px-2.5 py-1 sm:px-3 sm:py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs sm:text-sm font-medium">
                          {t(exp.techStack)}
                        </span>
                      </div>
                    </div>

                    {/* Content Section - responsive */}
                    <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
                      {/* Description */}
                      <div>
                        <p className="text-slate-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                          {t(exp.description)}
                        </p>
                      </div>

                      {/* Skills */}
                      <div>
                        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                          <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
                          <h4 className="text-base sm:text-lg font-semibold text-slate-900">
                            {t("experience.skills")}
                          </h4>
                        </div>
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                          {exp.skills.map((skill, idx) => (
                            <motion.span
                              key={idx}
                              initial={{ scale: 0.9 }}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-slate-100 to-slate-50 hover:from-emerald-100 hover:to-blue-100 text-slate-700 hover:text-slate-900 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium border border-slate-200 hover:border-emerald-300 transition-all duration-300 cursor-pointer"
                            >
                              {t(skill)}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                          <Award className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                          <h4 className="text-base sm:text-lg font-semibold text-slate-900">
                            {t("experience.achievements")}
                          </h4>
                        </div>
                        <ul className="space-y-2 sm:space-y-3">
                          {exp.achievements.map((achievement, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ x: -10, opacity: 0 }}
                              whileInView={{ x: 0, opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-start gap-2 sm:gap-3 text-slate-600"
                            >
                              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                              <span className="leading-relaxed text-sm sm:text-base">{t(achievement)}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Empty column for timeline layout */}
                <div className={index % 2 === 0 ? 'lg:col-start-2' : ''} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;