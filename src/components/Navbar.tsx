import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User, GraduationCap, Briefcase, Mail, Download, Code2 } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages = [
    { code: "en", label: "English" },
    { code: "fr", label: "Français" },
    { code: "de", label: "Deutsch" },
    { code: "ja", label: "日本語" }
  ];

  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(() => (typeof window !== 'undefined' ? (localStorage.getItem('selectedLng') || i18n.language || 'en') : (i18n.language || 'en')));

  const navItems = [
    { href: "#hero", label: t("home"), icon: User },
    { href: "#experience", label: t("experience"), icon: Briefcase },
    { href: "#projects", label: t("projects"), icon: Code2 },
    { href: "#education", label: t("education"), icon: GraduationCap },
    { href: "#contact", label: t("contact"), icon: Mail }
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href === "#hero" ? "section" : href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
    try {
      localStorage.setItem('selectedLng', lang);
    } catch (e) {
      // ignore localStorage errors (e.g., in SSR or privacy modes)
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-lg border-b border-slate-200/50 shadow-lg"
            : "bg-white/70 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <div className="w-12 h-12 bg-white/90 p-1 rounded-lg shadow-md flex items-center justify-center">
                <img src="/devops-logo.png" alt="DevOps logo" className="w-10 h-10 object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
                  {t("name")}
                </span>
                <span className="text-xs text-slate-500 font-medium">{t("devopsEngineer")}</span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <ul className="flex items-center gap-1">
                {navItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    >
                      <motion.button
                        onClick={() => handleNavClick(item.href)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2.5 text-slate-700 hover:text-slate-900 font-medium rounded-xl hover:bg-slate-100/80 transition-all duration-300 group"
                      >
                        <IconComponent className="w-4 h-4 text-slate-500 group-hover:text-emerald-600 transition-colors" />
                        <span className="relative">
                          {item.label}
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                        </span>
                      </motion.button>
                    </motion.li>
                  );
                })}
              </ul>

              {/* Language Switcher */}
              <select
                value={language}
                onChange={e => handleLanguageChange(e.target.value)}
                className="ml-4 px-3 py-2 rounded-xl border border-slate-300 bg-white/90 text-slate-700 font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {languages.map(lang => (
                  <option key={lang.code} value={lang.code}>{lang.label}</option>
                ))}
              </select>

              {/* CTA Button */}
              <motion.a
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                href="/randriambololona.pdf"
                download
                aria-label={t('downloadResume')}
              >
                <Download className="w-4 h-4" />
                <span>{t("downloadResume")}</span>
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5 text-slate-700" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5 text-slate-700" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-slate-200/50"
            >
              <div className="px-6 py-4 space-y-2">
                {navItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.button
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      onClick={() => handleNavClick(item.href)}
                      className="flex items-center gap-3 w-full px-4 py-3 text-slate-700 hover:text-slate-900 font-medium rounded-xl hover:bg-slate-100/80 transition-all duration-300 group"
                    >
                      <IconComponent className="w-5 h-5 text-slate-500 group-hover:text-emerald-600 transition-colors" />
                      <span>{item.label}</span>
                    </motion.button>
                  );
                })}

                {/* Language Switcher Mobile */}
                <select
                  value={language}
                  onChange={e => handleLanguageChange(e.target.value)}
                  className="w-full mt-2 px-3 py-2 rounded-xl border border-slate-300 bg-white text-slate-700 font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  {languages.map(lang => (
                    <option key={lang.code} value={lang.code}>{lang.label}</option>
                  ))}
                </select>

                {/* Mobile CTA */}
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                  className="flex items-center justify-center gap-2 w-full mt-4 px-5 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold rounded-xl shadow-lg"
                  href="/randriambololona.pdf"
                  download
                  aria-label={t('downloadResume')}
                >
                  <Download className="w-4 h-4" />
                  <span>{t("downloadResume")}</span>
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer to prevent content from being hidden behind fixed navbar */}
      <div className="h-16 lg:h-20" />
    </>
  );
};

export default Navbar;