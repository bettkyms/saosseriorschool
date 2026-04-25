import { Mail, Phone, MapPin, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden border border-gray-100">
              <img 
                src="https://lh3.googleusercontent.com/d/11D8BgneByetNI68aqH10rOGwQtdZT6Dn" 
                alt="Saos Senior School Logo" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="text-navy font-bold text-lg uppercase tracking-tight">SAOS SENIOR SCHOOL</h3>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            A leading Extra County level public boys boarding school dedicated to excellence in academic and character development.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="text-navy font-bold text-sm uppercase tracking-widest">Connect With Us</h4>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-center space-x-3">
              <Phone size={16} className="text-sky" />
              <span>+254 745 259359</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={16} className="text-sky" />
              <a href="mailto:saossec@gmail.com" className="hover:text-navy transition-colors">saossec@gmail.com</a>
            </li>
            <li className="flex items-center space-x-3">
              <MapPin size={16} className="text-sky" />
              <span>P.O. Box 401, Eldama Ravine, Kenya</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-navy font-bold text-sm uppercase tracking-widest">Important Details</h4>
          <div className="text-sm text-gray-600 space-y-2">
            <p>KNEC: <span className="font-semibold">33521108</span></p>
            <p>UIC: <span className="font-semibold">DPBZ</span></p>
            <div className="pt-2 flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-sky hover:text-navy transition-colors uppercase text-[10px] font-bold tracking-widest">
                <Facebook size={14} />
                <span>Alumni Page</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-6 border-t border-maroon/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between text-[10px] font-medium text-gray-400 uppercase tracking-widest text-center md:text-left space-y-4 md:space-y-0">
          <p>&copy; {new Date().getFullYear()} Saos Senior School. Eldama Ravine, Kenya.</p>
          <div className="flex space-x-6">
            <Link to="/about" className="hover:text-maroon">History</Link>
            <Link to="/admissions" className="hover:text-maroon">Admissions</Link>
            <Link to="/contact" className="hover:text-maroon">Privacy Policy</Link>
          </div>
          <p className="text-maroon font-black">Character First</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
