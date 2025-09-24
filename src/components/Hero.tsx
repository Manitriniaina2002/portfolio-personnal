import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Mail, Phone, Linkedin, Github, MapPin, Calendar } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Animated background elements - Responsive */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 sm:top-20 left-4 sm:left-20 w-48 h-48 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full filter blur-2xl sm:blur-3xl animate-pulse" />
        <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-20 w-40 h-40 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-gradient-to-r from-emerald-400/10 to-blue-400/10 rounded-full filter blur-2xl sm:blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 sm:left-1/3 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full filter blur-xl sm:blur-2xl animate-pulse delay-2000" />
      </div>

      <div className="relative flex items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-12 min-h-screen py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center w-full">
          
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1 space-y-6 sm:space-y-8"
          >
            {/* Badge and Title */}
            <div className="space-y-4 sm:space-y-6">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3"
              >
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold bg-gradient-to-r from-emerald-500/10 to-blue-500/10 text-emerald-700 rounded-full border border-emerald-200">
                  {t("hero.role")}
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 tracking-tight leading-tight"
              >
                <span className="bg-gradient-to-r from-slate-500 to-slate-600 bg-clip-text text-transparent block">
                  {t("hero.lastname")}
                </span>
                <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent block">
                  {t("hero.firstname")}
                </span>
              </motion.h1>
            </div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              {t("hero.bio")}
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-slate-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="p-1.5 sm:p-2 bg-emerald-100 rounded-lg">
                    <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm font-medium text-slate-500 truncate">{t("hero.stats.education")}</p>
                    <p className="text-xs sm:text-sm font-semibold text-slate-900 truncate">{t("hero.stats.educationDetail")}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="p-1.5 sm:p-2 bg-blue-100 rounded-lg">
                    <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm font-medium text-slate-500 truncate">{t("hero.stats.experience")}</p>
                    <p className="text-xs sm:text-sm font-semibold text-slate-900 truncate">{t("hero.stats.experienceDetail")}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-slate-200 hover:border-purple-300 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="p-1.5 sm:p-2 bg-purple-100 rounded-lg">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm font-medium text-slate-500 truncate">{t("hero.stats.location")}</p>
                    <p className="text-xs sm:text-sm font-semibold text-slate-900 truncate">{t("hero.stats.locationDetail")}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-3 sm:space-y-4"
            >
              <div className="grid grid-cols-2 lg:flex lg:flex-wrap gap-2 sm:gap-3 lg:gap-4">
                <a
                  href="mailto:manitriniaina2002@gmail.com"
                  className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl border border-slate-200 hover:border-emerald-300 text-slate-700 hover:text-emerald-700 transition-all duration-300 hover:shadow-md min-w-0"
                >
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium truncate">{t("hero.contact.email")}</span>
                </a>
                
                <a
                  href="tel:+261347297148"
                  className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-700 transition-all duration-300 hover:shadow-md min-w-0"
                >
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium truncate">{t("hero.contact.phone")}</span>
                </a>
                
                <a
                  href="https://linkedin.com/in/manitriniaina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-700 transition-all duration-300 hover:shadow-md min-w-0"
                >
                  <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium truncate">{t("hero.contact.linkedin")}</span>
                </a>
                
                <a
                  href="https://github.com/Manitriniaina2002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl border border-slate-200 hover:border-slate-400 text-slate-700 hover:text-slate-900 transition-all duration-300 hover:shadow-md min-w-0"
                >
                  <Github className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium truncate">{t("hero.contact.github")}</span>
                </a>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm text-slate-500">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>{t("hero.birthday")}</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Section - Fully Responsive */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative order-1 lg:order-2 px-4 sm:px-8 lg:px-0"
          >
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
              {/* Background decoration - Responsive */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl transform rotate-6 scale-105" />
              <div className="absolute inset-0 bg-gradient-to-l from-purple-400/20 to-pink-400/20 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl transform -rotate-3 scale-110" />
              
              {/* Main image container */}
              <div className="relative">
                <div className="aspect-square rounded-2xl sm:rounded-3xl overflow-hidden border-2 sm:border-4 border-white shadow-xl sm:shadow-2xl bg-gradient-to-br from-slate-100 to-white">
                  <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                    src="/Me.jpg"
                    alt="RANDRIAMBOLOLONA Manitriniaina - DevOps Engineer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                {/* Floating elements - Responsive */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-white rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-lg sm:shadow-xl border border-slate-200"
                >
                  <div className="flex items-center gap-1 sm:gap-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-700">Available</span>
                  </div>
                </motion.div>
                
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                  className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-lg sm:shadow-xl"
                >
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Briefcase className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm font-semibold">DevOps</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;