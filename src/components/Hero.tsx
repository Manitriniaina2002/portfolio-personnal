import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Mail, Phone, Linkedin, Github, MapPin, Calendar } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-emerald-400/10 to-blue-400/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full filter blur-2xl animate-pulse delay-2000" />
      </div>

      <div className="relative flex items-center justify-center px-6 sm:px-8 lg:px-12 min-h-screen py-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left order-2 lg:order-1 space-y-8"
          >
            {/* Badge and Title */}
            <div className="space-y-6">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-3"
              >
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-emerald-500/10 to-blue-500/10 text-emerald-700 rounded-full border border-emerald-200">
                  {t("hero.role")}
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight"
              >
                <span className="bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
                  {t("hero.lastname")}
                </span>
                <br />
                <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  {t("hero.firstname")}
                </span>
              </motion.h1>
            </div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-slate-600 leading-relaxed max-w-2xl"
            >
              {t("hero.bio")}
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid sm:grid-cols-3 gap-4"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-slate-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-100 rounded-lg">
                    <GraduationCap className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">{t("hero.stats.education")}</p>
                    <p className="text-sm font-semibold text-slate-900">{t("hero.stats.educationDetail")}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Briefcase className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">{t("hero.stats.experience")}</p>
                    <p className="text-sm font-semibold text-slate-900">{t("hero.stats.experienceDetail")}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-slate-200 hover:border-purple-300 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <MapPin className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">{t("hero.stats.location")}</p>
                    <p className="text-sm font-semibold text-slate-900">{t("hero.stats.locationDetail")}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-4"
            >
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:manitriniaina2002@gmail.com"
                  className="flex items-center gap-3 px-4 py-3 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200 hover:border-emerald-300 text-slate-700 hover:text-emerald-700 transition-all duration-300 hover:shadow-md"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm font-medium">{t("hero.contact.email")}</span>
                </a>
                
                <a
                  href="tel:+261347297148"
                  className="flex items-center gap-3 px-4 py-3 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-700 transition-all duration-300 hover:shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium">{t("hero.contact.phone")}</span>
                </a>
                
                <a
                  href="https://linkedin.com/in/manitriniaina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-700 transition-all duration-300 hover:shadow-md"
                >
                  <Linkedin className="w-4 h-4" />
                  <span className="text-sm font-medium">{t("hero.contact.linkedin")}</span>
                </a>
                
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200 hover:border-slate-400 text-slate-700 hover:text-slate-900 transition-all duration-300 hover:shadow-md"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm font-medium">{t("hero.contact.github")}</span>
                </a>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Calendar className="w-4 h-4" />
                <span>{t("hero.birthday")}</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 rounded-3xl blur-3xl transform rotate-6 scale-105" />
              <div className="absolute inset-0 bg-gradient-to-l from-purple-400/20 to-pink-400/20 rounded-3xl blur-2xl transform -rotate-3 scale-110" />
              
              {/* Main image container */}
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-slate-100 to-white">
                  <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                    src="/Me.jpg"
                    alt="RANDRIAMBOLOLONA Manitriniaina - DevOps Engineer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                {/* Floating elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-slate-200"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-slate-700">Available</span>
                  </div>
                </motion.div>
                
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                  className="absolute -bottom-4 -left-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-2xl p-4 shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    <span className="text-sm font-semibold">DevOps</span>
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