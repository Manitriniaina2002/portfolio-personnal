import { Github, Linkedin, Mail, Phone, MapPin, Heart, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background decoration - responsive */}
      <div className="absolute inset-0 opacity-5 sm:opacity-8 md:opacity-10">
        <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full filter blur-3xl" />
      </div>

      <div className="relative py-12 sm:py-14 md:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Main footer content - responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-12">
            
            {/* Profile Section - responsive */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4 sm:space-y-6 sm:col-span-2 lg:col-span-1"
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-2">
                  {t("footer.name")}
                </h3>
                <p className="text-emerald-400 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">{t("footer.role")}</p>
                <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                  {t("footer.bio")}
                </p>
              </div>
              
              {/* Quick contact - responsive */}
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center gap-2 sm:gap-3 text-slate-300">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base">{t("footer.location")}</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-slate-300">
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400 flex-shrink-0" />
                  <a 
                    href="tel:+261347297148" 
                    className="hover:text-white transition-colors text-sm sm:text-base"
                  >
                    {t("footer.phone")}
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Quick Links - responsive */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 sm:space-y-6"
            >
              <h4 className="text-lg sm:text-xl font-semibold text-white">{t("footer.expertise")}</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {[0,1,2,3,4,5].map(idx => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors cursor-default"
                  >
                    <Zap className="w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">{t(`footer.skills.${idx}`)}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact & Social - responsive */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4 sm:space-y-6 sm:col-span-2 lg:col-span-1"
            >
              <h4 className="text-lg sm:text-xl font-semibold text-white">{t("footer.connect")}</h4>
              <p className="text-slate-400 text-sm sm:text-base">
                {t("footer.connectText")}
              </p>
              
              {/* Social links - responsive */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:manitriniaina2002@gmail.com"
                  className="flex items-center gap-2 sm:gap-3 px-3 py-2.5 sm:px-4 sm:py-3 bg-white/10 hover:bg-emerald-500/20 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/20 hover:border-emerald-400/50 text-white hover:text-emerald-400 transition-all duration-300 text-center sm:text-left"
                >
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium">{t("footer.email")}</span>
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://linkedin.com/in/manitriniaina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 sm:gap-3 px-3 py-2.5 sm:px-4 sm:py-3 bg-white/10 hover:bg-blue-500/20 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/20 hover:border-blue-400/50 text-white hover:text-blue-400 transition-all duration-300 text-center sm:text-left"
                >
                  <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium">{t("footer.linkedin")}</span>
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/Manitriniaina2002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 sm:gap-3 px-3 py-2.5 sm:px-4 sm:py-3 bg-white/10 hover:bg-slate-500/20 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/20 hover:border-slate-400/50 text-white hover:text-slate-300 transition-all duration-300 text-center sm:text-left"
                >
                  <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium">{t("footer.github")}</span>
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Bottom section - responsive */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="pt-6 sm:pt-8 border-t border-white/10"
          >
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
              <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-slate-400 text-center sm:text-left">
                <div className="flex items-center gap-1 text-xs sm:text-sm">
                  <span>&copy; {new Date().getFullYear()} {t("footer.copyright")}</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
                  <span className="hidden sm:inline">•</span>
                  <span>{t("footer.builtWith")}</span>
                  <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-400" />
                  <span>{t("footer.modernTech")}</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-xs sm:text-sm text-slate-500 text-center">
                <span>{t("footer.eni")}</span>
                <span className="hidden sm:inline">•</span>
                <span>{t("footer.devopsEnthusiast")}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
  </footer>
  );
}