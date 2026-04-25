import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Facebook, Map as MapIcon } from 'lucide-react';

const Contact = () => {
  return (
    <div className="flex flex-col pb-20">
      <section className="bg-navy py-20 px-6 md:px-10 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h4 className="text-sky font-bold uppercase tracking-[0.3em] text-xs underline underline-offset-8 decoration-sky/50">Get In Touch</h4>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Contact Us</h1>
            <p className="max-w-2xl text-gray-400 text-lg">We are here to answer any questions about our school, pathways, and boarding facilities.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Section */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="p-8 bg-gray-50 space-y-4 group hover:bg-navy transition-colors duration-500">
                  <div className="p-3 bg-white w-fit shadow-sm text-navy group-hover:bg-sky group-hover:text-white transition-colors"><Phone size={24} /></div>
                  <h4 className="font-bold text-navy uppercase tracking-widest text-[10px] group-hover:text-white">Call Us</h4>
                  <p className="text-xl font-bold text-navy group-hover:text-white">+254 745 259359</p>
               </div>
               
               <div className="p-8 bg-gray-50 space-y-4 group hover:bg-navy transition-colors duration-500">
                  <div className="p-3 bg-white w-fit shadow-sm text-navy group-hover:bg-sky group-hover:text-white transition-colors"><Mail size={24} /></div>
                  <h4 className="font-bold text-navy uppercase tracking-widest text-[10px] group-hover:text-white">Email Us</h4>
                  <p className="text-lg font-bold text-navy break-all group-hover:text-white">saossec@gmail.com</p>
               </div>
               
               <div className="p-8 bg-gray-50 space-y-4 group hover:bg-navy transition-colors duration-500">
                  <div className="p-3 bg-white w-fit shadow-sm text-navy group-hover:bg-sky group-hover:text-white transition-colors"><MapPin size={24} /></div>
                  <h4 className="font-bold text-navy uppercase tracking-widest text-[10px] group-hover:text-white">Visit Us</h4>
                  <p className="text-sm font-bold text-navy group-hover:text-white">Saos, Koibatek Sub-County, Baringo County, Kenya</p>
               </div>
               
               <div className="p-8 bg-gray-50 space-y-4 group hover:bg-navy transition-colors duration-500">
                  <div className="p-3 bg-white w-fit shadow-sm text-navy group-hover:bg-sky group-hover:text-white transition-colors"><Clock size={24} /></div>
                  <h4 className="font-bold text-navy uppercase tracking-widest text-[10px] group-hover:text-white">Office Hours</h4>
                  <p className="text-sm font-bold text-navy group-hover:text-white">Mon — Fri: 8AM — 4PM</p>
               </div>
            </div>

            <div className="space-y-6 pt-8 border-t">
              <h3 className="text-3xl font-bold text-navy underline underline-offset-[12px] decoration-sky/20">Official Codes</h3>
              <div className="flex flex-col sm:flex-row gap-6">
                 <div className="flex-1 p-6 border-l-4 border-navy bg-gray-50">
                    <p className="text-[10px] uppercase font-black text-gray-400 tracking-[0.2em] mb-1">KNEC Code</p>
                    <p className="text-2xl font-bold text-navy">33521108</p>
                 </div>
                 <div className="flex-1 p-6 border-l-4 border-sky bg-gray-50">
                    <p className="text-[10px] uppercase font-black text-gray-400 tracking-[0.2em] mb-1">UIC Code</p>
                    <p className="text-2xl font-bold text-navy">DPBZ</p>
                 </div>
              </div>
            </div>
            
            <div className="pt-8">
              <h3 className="text-3xl font-bold text-navy mb-8">Postal Address</h3>
              <div className="flex items-start space-x-4 bg-navy p-8 text-white relative overflow-hidden">
                 <div className="space-y-2 relative z-10">
                    <p className="text-xl font-bold">P.O. Box 401</p>
                    <p className="text-sky font-bold uppercase tracking-widest">Eldama Ravine, 20103, Kenya</p>
                 </div>
                 <MapIcon className="absolute right-[-20px] bottom-[-20px] w-64 h-64 text-white opacity-[0.03] rotate-12" />
              </div>
            </div>
          </div>

          {/* Map Preview Placeholder & Socials */}
          <div className="space-y-8">
             <div className="aspect-[4/5] bg-gray-100 flex items-center justify-center relative shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-bold uppercase tracking-widest text-xs z-0">
                  [ Google Maps Integration ]
                </div>
                {/* Visual placeholder for map */}
                 <img 
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066&auto=format&fit=crop" 
                  alt="School Area Map" 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700 pointer-events-none" 
                />
                
                <div className="absolute bottom-8 left-8 right-8 bg-white p-6 shadow-2xl transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                  <h4 className="font-bold text-navy mb-2">Saos Senior School</h4>
                  <p className="text-xs text-gray-500 mb-4">Located in the scenic landscapes of Baringo, accessible via Eldama Ravine.</p>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-sky font-black text-[10px] uppercase tracking-widest hover:text-navy transition-colors">
                    Open in Google Maps
                  </a>
                </div>
             </div>
             
             <div className="p-8 border-2 border-navy flex flex-col items-center text-center space-y-4">
                <Facebook className="text-navy" size={32} />
                <h4 className="text-lg font-bold text-navy">Join Our Community</h4>
                <p className="text-sm text-gray-500">Connect with the Saos Boys Alumni network on Facebook for updates and school news.</p>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-navy text-white px-8 py-3 rounded-sm font-bold uppercase text-[10px] tracking-widest hover:bg-sky transition-colors">
                   Visit Alumni Page
                </a>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
