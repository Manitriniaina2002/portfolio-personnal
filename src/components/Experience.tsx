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
    <section className="py-32 px-6 bg-gradient-to-b from-white via-slate-50 to-white" id="experience">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-400/10 to-blue-400/10 rounded-full filter blur-3xl" />
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
            <Zap className="w-6 h-6 text-emerald-600" />
            <span className="px-4 py-2 text-lg font-semibold bg-gradient-to-r from-emerald-500/10 to-blue-500/10 text-emerald-700 rounded-full border border-emerald-200">
              {t("experience.professional")}
            </span>
          </motion.div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent mb-6">
            {t("experience.future")}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t("experience.intro")}
          </p>
        </motion.div>

        <div className="relative">
          {/* Modern timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-emerald-200 via-blue-200 to-purple-200 rounded-full" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative mb-20 last:mb-0"
            >
              {/* Timeline node */}
              <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white shadow-lg z-10 ${
                exp.status === 'upcoming' 
                  ? 'bg-gradient-to-r from-emerald-500 to-blue-500 animate-pulse' 
                  : 'bg-gradient-to-r from-blue-500 to-purple-500'
              }`} />

              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 ${
                index % 2 === 0 ? '' : 'lg:flex-row-reverse'
              }`}>
                
                <div className={`${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16 lg:col-start-2'}`}>
                  <motion.div
                    whileHover={{ y: -5, shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                    transition={{ duration: 0.3 }}
                    className={`relative group ${
                      exp.status === 'upcoming'
                        ? 'bg-gradient-to-br from-emerald-50 to-blue-50 border-2 border-emerald-200'
                        : 'bg-white border-2 border-slate-200'
                    } rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500`}
                  >
                    
                    {/* Status indicator */}
                    {exp.status === 'upcoming' && (
                      <div className="absolute top-4 right-4 z-20">
                        <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500 text-white rounded-full text-sm font-semibold">
                          <Star className="w-3 h-3" />
                          {t("experience.upcoming")}
                        </div>
                      </div>
                    )}

                    {/* Header Section */}
                    <div className="p-8 border-b border-slate-100">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                            {t(exp.title)}
                          </h3>
                          <div className="flex flex-wrap items-center gap-4 text-slate-600 mb-4">
                            <div className="flex items-center gap-2">
                              <Building2 className="w-4 h-4 text-emerald-600" />
                              <span className="font-medium">{t(exp.company)}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-blue-600" />
                              <span>{t(exp.duration)}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Quick info badges */}
                      <div className="flex flex-wrap gap-3">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                          {t(exp.companyType)}
                        </span>
                        <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                          {t("experience.team")}: {t(exp.teamSize)}
                        </span>
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                          {t(exp.techStack)}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 space-y-8">
                      {/* Description */}
                      <div>
                        <p className="text-slate-600 leading-relaxed text-lg">
                          {t(exp.description)}
                        </p>
                      </div>

                      {/* Skills */}
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <Code2 className="w-5 h-5 text-emerald-600" />
                          <h4 className="text-lg font-semibold text-slate-900">
                            {t("experience.skills")}
                          </h4>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          {exp.skills.map((skill, idx) => (
                            <motion.span
                              key={idx}
                              initial={{ scale: 0.9 }}
                              whileHover={{ scale: 1.05 }}
                              className="px-4 py-2 bg-gradient-to-r from-slate-100 to-slate-50 hover:from-emerald-100 hover:to-blue-100 text-slate-700 hover:text-slate-900 rounded-xl text-sm font-medium border border-slate-200 hover:border-emerald-300 transition-all duration-300"
                            >
                              {t(skill)}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <Award className="w-5 h-5 text-blue-600" />
                          <h4 className="text-lg font-semibold text-slate-900">
                            {t("experience.achievements")}
                          </h4>
                        </div>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ x: -10, opacity: 0 }}
                              whileInView={{ x: 0, opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-start gap-3 text-slate-600"
                            >
                              <ChevronRight className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{t(achievement)}</span>
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