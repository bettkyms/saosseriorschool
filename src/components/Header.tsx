import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'About Us', 
      path: '/about',
      dropdown: [
        { name: 'Our Identity', path: '/about' },
        { name: 'Academic Pathways', path: '/academics' },
        { name: 'Board of Management', path: '/bom' },
        { name: 'Co-curricular Activities', path: '/co-curricular' },
        { name: 'Clubs & Societies', path: '/clubs' },
      ]
    },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Student Life', path: '/student-life' },
    { name: 'Downloads', path: '/downloads' },
    { name: 'Alumni', path: '/alumni' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-navy h-20 w-full flex items-center justify-between px-6 md:px-10 text-white shadow-lg z-50 sticky top-0 border-b-2 border-maroon/20">
      <Link to="/" className="flex items-center space-x-3">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden border-2 border-white/20 shadow-lg">
          <img 
            src="https://lh3.googleusercontent.com/d/11D8BgneByetNI68aqH10rOGwQtdZT6Dn" 
            alt="Saos Senior School Logo" 
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        <div>
          <h1 className="text-sm md:text-lg font-bold leading-none uppercase">SAOS SENIOR SCHOOL</h1>
          <p className="text-[9px] md:text-[10px] tracking-[0.2em] text-sky mt-1 uppercase font-medium">Excellence & Character</p>
        </div>
      </Link>

      {/* Desktop Nav */}
      <div className="hidden lg:flex items-center space-x-8 text-[11px] font-bold uppercase tracking-wider">
        {navLinks.map((link) => (
          <div 
            key={link.name} 
            className="relative h-20 flex items-center"
            onMouseEnter={() => link.dropdown && setAboutDropdown(true)}
            onMouseLeave={() => link.dropdown && setAboutDropdown(false)}
          >
            {link.dropdown ? (
              <div className="flex items-center space-x-1 cursor-pointer hover:text-sky transition-colors">
                <span className={isActive(link.path) || link.dropdown.some(d => isActive(d.path)) ? 'text-sky' : ''}>
                  {link.name}
                </span>
                <motion.span animate={{ rotate: aboutDropdown ? 180 : 0 }}>▾</motion.span>
                
                <AnimatePresence>
                  {aboutDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-20 left-0 w-64 bg-navy border-t-2 border-maroon shadow-2xl py-4 flex flex-col"
                    >
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className={`px-6 py-3 hover:bg-white/5 hover:text-sky transition-all text-[10px] ${isActive(sub.path) ? 'text-sky bg-white/5' : 'text-white/80'}`}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                to={link.path}
                className={`hover:text-sky transition-colors duration-200 ${isActive(link.path) ? 'text-sky border-b-2 border-sky' : ''}`}
              >
                {link.name}
              </Link>
            )}
          </div>
        ))}
        <Link to="/contact" className="bg-maroon text-white px-5 py-2 rounded-sm hover:bg-white hover:text-maroon transition-all duration-300 font-bold border border-maroon">
          Contact
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-20 left-0 w-full bg-navy border-t border-white/10 flex flex-col items-center py-10 space-y-6 lg:hidden shadow-2xl z-40"
          >
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col items-center">
                {link.dropdown ? (
                  <>
                    <button 
                      onClick={() => setAboutDropdown(!aboutDropdown)}
                      className={`text-sm font-bold uppercase tracking-widest flex items-center space-x-2 ${isActive(link.path) || link.dropdown.some(d => isActive(d.path)) ? 'text-sky' : 'text-white'}`}
                    >
                      <span>{link.name}</span>
                      <motion.span animate={{ rotate: aboutDropdown ? 180 : 0 }}>▾</motion.span>
                    </button>
                    <AnimatePresence>
                      {aboutDropdown && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="flex flex-col items-center space-y-4 mt-6 bg-white/5 w-screen py-6 overflow-hidden"
                        >
                          {link.dropdown.map(sub => (
                            <Link
                              key={sub.name}
                              to={sub.path}
                              onClick={() => { setIsOpen(false); setAboutDropdown(false); }}
                              className={`text-[10px] font-bold uppercase tracking-widest ${isActive(sub.path) ? 'text-sky' : 'text-white/60'}`}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm font-bold uppercase tracking-widest ${isActive(link.path) ? 'text-sky border-b-2 border-sky' : 'text-white'}`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-maroon text-white px-10 py-4 rounded-sm font-bold uppercase tracking-widest text-xs border border-maroon"
            >
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
