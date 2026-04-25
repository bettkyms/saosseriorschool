import { motion } from 'motion/react';
import { Target, Eye, ShieldCheck, History } from 'lucide-react';

const About = () => {
  const values = [
    { name: 'Hard work', desc: 'Consistency in effort.' },
    { name: 'Discipline', desc: 'Self-control and order.' },
    { name: 'Courtesy', desc: 'Respect and politeness.' },
    { name: 'Diligence', desc: 'Persistence in work.' },
    { name: 'Perseverance', desc: 'Overcoming obstacles.' },
    { name: 'Determination', desc: 'Firmness of purpose.' },
    { name: 'Foresight', desc: 'Planning for the future.' },
  ];

  return (
    <div className="flex flex-col pb-20">
      {/* Page Header */}
      <section className="bg-navy py-20 px-6 md:px-10 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h4 className="text-sky font-bold uppercase tracking-[0.3em] text-xs">Excellence & Character</h4>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Our Identity</h1>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-20"></div>
      </section>

      {/* History & Mission */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-8">
          <div className="flex items-start space-x-6">
            <div className="p-4 bg-sky-light text-navy rounded-sm"><History size={32} /></div>
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-navy">Our History</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Founded as Saos Secondary School, we have evolved through decades of academic dedication to become a leading Senior School in Koibatek Sub-County, Baringo. Today, we stand as a beacon of the Competency-Based Curriculum (CBC) framework, transitioning Grade 10–12 students into specialized career pathways.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-6">
            <div className="p-4 bg-gray-50 text-navy rounded-sm"><Target size={32} /></div>
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-navy">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To provide holistic, quality education that equips students with competency skills for self-reliance.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-6">
            <div className="p-4 bg-sky text-white rounded-sm"><Eye size={32} /></div>
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-navy">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To be a center of excellence in academic and character development.
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square bg-gray-100 overflow-hidden shadow-2xl skew-y-3">
             <img 
              src="https://images.unsplash.com/photo-1544648185-55139bc64032?q=80&w=1974&auto=format&fit=crop" 
              alt="School Campus" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="absolute -top-10 -left-10 w-40 h-40 border-8 border-sky/20 -z-10 animate-pulse"></div>
        </div>
      </section>

      {/* core values section - moving it up to make room for principal message */}
      <section className="bg-navy py-12 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {values.map((value, idx) => (
              <motion.div
                key={value.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="text-center p-4 border border-white/5 hover:border-sky/30 transition-all"
              >
                <h4 className="text-sm font-bold truncate">{value.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-2/5 relative">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="aspect-[3/4] bg-white shadow-2xl relative border-[12px] border-white group"
            >
              <img 
                src="https://lh3.googleusercontent.com/d/13UeyUCVTrmU92UxPGPfbKfVBiexzzSoY" 
                alt="Saos Senior School Principal" 
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-maroon text-white p-6 shadow-xl hidden md:block">
                <p className="font-bold uppercase tracking-widest text-xs">Excellence & Character</p>
              </div>
            </motion.div>
          </div>
          
          <div className="w-full lg:w-3/5 space-y-8">
            <div className="space-y-4">
              <h4 className="text-maroon font-black uppercase tracking-widest text-sm">Leadership Voice</h4>
              <h3 className="text-4xl font-bold text-navy">Message from the Principal</h3>
              <div className="w-20 h-1 bg-maroon"></div>
            </div>
            
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed italic">
              <p>
                "At Saos Senior School, we are committed to nurturing not just academic giants, but individuals of profound character. As we transition into the CBC Senior School framework, our focus remains on providing specialized pathways that empower every student to discover their unique potential."
              </p>
              <p>
                "Our 13-acre campus serves as a crucible for innovation, discipline, and community growth. We welcome you to join us in this journey of excellence."
              </p>
            </div>

            <div className="pt-4">
              <p className="font-bold text-navy text-xl">The Principal</p>
              <p className="text-gray-400 font-bold uppercase tracking-[0.2em] text-xs mt-1">Saos Senior School</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
