import { motion } from 'motion/react';
import { Facebook, Users, GraduationCap } from 'lucide-react';

const Alumni = () => {
  return (
    <div className="flex flex-col pb-20">
      <section className="bg-navy py-20 px-6 md:px-10 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
            <h4 className="text-sky font-bold uppercase tracking-[0.3em] text-xs">Stay Connected</h4>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Alumni Network</h1>
            <p className="max-w-2xl text-gray-400 text-lg">Celebrating the success of our past students and building a stronger future together.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-navy">Saos Boys Alumni Community</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our alumni are our greatest ambassadors. From industry leaders to community organizers, the Saos spirit of 'Excellence & Character' lives on through you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 bg-gray-50 border-l-4 border-maroon">
              <Users className="text-maroon mb-4" />
              <h4 className="font-bold text-navy mb-2">Network Hub</h4>
              <p className="text-sm text-gray-500">Connect with classmates and mentor current students.</p>
            </div>
            <div className="p-8 bg-gray-50 border-l-4 border-sky">
              <GraduationCap className="text-sky mb-4" />
              <h4 className="font-bold text-navy mb-2">History & Legacy</h4>
              <p className="text-sm text-gray-500">Preserving our school stories for the next generation.</p>
            </div>
          </div>

          <div className="pt-8">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-4 bg-navy text-white px-10 py-5 rounded-sm font-bold uppercase tracking-widest text-sm hover:bg-maroon transition-all shadow-2xl"
            >
              <Facebook />
              <span>Join Facebook Alumni Group</span>
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] bg-gray-100 overflow-hidden shadow-2xl relative border-[20px] border-white">
            <img 
               src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop" 
               alt="Alumni Graduation" 
               className="w-full h-full object-cover grayscale brightness-90 saturate-0 hover:saturate-100 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-maroon/10"></div>
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-navy/5 rounded-full -z-10"></div>
        </div>
      </section>
    </div>
  );
};

export default Alumni;
