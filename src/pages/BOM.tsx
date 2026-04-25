import { motion } from 'motion/react';
import { Users, ShieldCheck, Award } from 'lucide-react';

const BOM = () => {
  const leaders = [
    { 
      name: 'Board Chairperson', 
      role: 'Strategic Oversight & Governance',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop'
    },
    { 
      name: 'The Principal', 
      role: 'Secretary to the Board & Academic Lead',
      image: 'https://lh3.googleusercontent.com/d/13UeyUCVTrmU92UxPGPfbKfVBiexzzSoY'
    },
    { 
      name: 'Parents Association Rep', 
      role: 'Community & Parent Liaison',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop'
    },
    { 
      name: 'Area Education Officer', 
      role: 'Regulatory Compliance',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop'
    },
  ];

  return (
    <div className="flex flex-col pb-20">
      <section className="bg-navy py-20 px-6 md:px-10 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
            <h4 className="text-sky font-bold uppercase tracking-[0.3em] text-xs">Governance</h4>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Board of Management</h1>
            <p className="max-w-2xl text-gray-400 text-lg">Providing strategic leadership and ensuring high standards of integrity.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, idx) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-6 border-b-4 border-maroon">
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-xl font-bold text-navy truncate">{leader.name}</h3>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">{leader.role}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-navy text-white flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 space-y-6">
            <div className="flex items-center space-x-3 text-sky">
              <ShieldCheck size={32} />
              <h3 className="text-2xl font-bold uppercase tracking-tight">Accountability</h3>
            </div>
            <p className="text-lg text-white/80 leading-relaxed">
              Our Board of Management operates under the Ministry of Education guidelines, focusing on resource optimization, staff welfare, and the physical development of the school infrastructure.
            </p>
          </div>
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
            {['Regular Audits', 'Transparent Procurement', 'Quality Assurance', 'Strategic Planning'].map(item => (
              <div key={item} className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest border border-white/10 p-4">
                <Award size={14} className="text-sky" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BOM;
