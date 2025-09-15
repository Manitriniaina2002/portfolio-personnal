import { Github, Linkedin, Mail, Phone, MapPin, Heart, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full filter blur-3xl" />
      </div>

      <div className="relative py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Main footer content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
            
            {/* Profile Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-2">
                  {t("footer.name")}
                </h3>
                <p className="text-emerald-400 font-semibold mb-4">{t("footer.role")}</p>
                <p className="text-slate-400 leading-relaxed">
                  {t("footer.bio")}
                </p>
              </div>
              
              {/* Quick contact */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-300">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span>{t("footer.location")}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <a href="tel:+261347297148" className="hover:text-white transition-colors">
                    {t("footer.phone")}
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h4 className="text-xl font-semibold text-white">{t("footer.expertise")}</h4>
              <div className="grid grid-cols-2 gap-3">
                {[0,1,2,3,4,5].map(idx => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors cursor-default"
                  >
                    <Zap className="w-3 h-3" />
                    <span className="text-sm">{t(`footer.skills.${idx}`)}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact & Social */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <h4 className="text-xl font-semibold text-white">{t("footer.connect")}</h4>
              <p className="text-slate-400">
                {t("footer.connectText")}
              </p>
              
              {/* Social links */}
              <div className="flex flex-wrap gap-4">
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:manitriniaina2002@gmail.com"
                  className="flex items-center gap-3 px-4 py-3 bg-white/10 hover:bg-emerald-500/20 backdrop-blur-sm rounded-xl border border-white/20 hover:border-emerald-400/50 text-white hover:text-emerald-400 transition-all duration-300"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm font-medium">{t("footer.email")}</span>
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://linkedin.com/in/manitriniaina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 bg-white/10 hover:bg-blue-500/20 backdrop-blur-sm rounded-xl border border-white/20 hover:border-blue-400/50 text-white hover:text-blue-400 transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4" />
                  <span className="text-sm font-medium">{t("footer.linkedin")}</span>
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 bg-white/10 hover:bg-slate-500/20 backdrop-blur-sm rounded-xl border border-white/20 hover:border-slate-400/50 text-white hover:text-slate-300 transition-all duration-300"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm font-medium">{t("footer.github")}</span>
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Bottom section */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="pt-8 border-t border-white/10"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-slate-400">
                <span>&copy; {new Date().getFullYear()} {t("footer.copyright")}</span>
                <span>{t("footer.builtWith")}</span>
                <Heart className="w-4 h-4 text-red-400" />
                <span>{t("footer.modernTech")}</span>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-slate-500">
                <span>{t("footer.eni")}</span>
                <span>•</span>
                <span>{t("footer.devopsEnthusiast")}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
  </footer>
  );
}