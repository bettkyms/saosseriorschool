import { motion } from 'motion/react';
import { Coffee, Shield, Activity, Heart, Music, Trophy } from 'lucide-react';

const StudentLife = () => {
  const highlights = [
    { title: 'Dormitories', desc: 'Modern, spacious boarding facilities designed for comfort and safety.', icon: <Shield /> },
    { title: 'Balanced Diet', desc: 'Nutritious meals including Githeri, Rice, Beef, and fresh seasonal fruits.', icon: <Coffee /> },
    { title: 'Sports', desc: 'Active participation in Athletics, Football, and various indoor games.', icon: <Activity /> },
    { title: 'Spiritual Growth', desc: 'Regular Sunday services and programs focused on character building.', icon: <Heart /> },
    { title: 'Talent Dev', desc: 'Thriving Drama and Music clubs to express creativity and build confidence.', icon: <Music /> },
    { title: 'Competitions', desc: 'Internal and inter-school academic and co-curricular contests.', icon: <Trophy /> },
  ];

  return (
    <div className="flex flex-col pb-20">
      <section className="bg-navy py-20 px-6 md:px-10 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h4 className="text-sky font-bold uppercase tracking-[0.3em] text-xs">Life at Saos</h4>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Beyond Academics</h1>
            <p className="max-w-2xl text-gray-400 text-lg">Developing balanced individuals through sports, diet, and spiritual guidance.</p>
          </motion.div>
        </div>
      </section>

      {/* Facilities & Lifestyle */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-10 space-y-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {highlights.map((h, idx) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-10 bg-white border border-gray-100 shadow-xl space-y-6 group hover:border-sky transition-all"
            >
              <div className="w-14 h-14 bg-sky-light text-navy flex items-center justify-center rounded-sm transition-colors group-hover:bg-navy group-hover:text-white">
                {h.icon}
              </div>
              <h3 className="text-2xl font-bold text-navy">{h.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{h.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Boarding Section */}
        <div className="flex flex-col lg:flex-row bg-white overflow-hidden shadow-2xl border border-gray-100">
           <div className="w-full lg:w-1/2 p-12 lg:p-20 space-y-8 flex flex-col justify-center">
              <h4 className="text-sky font-bold uppercase tracking-widest text-xs">Boarding Excellence</h4>
              <h3 className="text-4xl font-bold text-navy">A Home Away from Home</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                As a public boys boarding institution, we prioritize create an environment where every student feels secure and supported. Our modern dormitories and spacious dining hall form the heart of our campus community.
              </p>
              <ul className="space-y-4">
                {['24/7 Professional Security', 'Qualified House Masters', 'Regular Health Checkups', 'Spacious Dormitories'].map((f) => (
                  <li key={f} className="flex items-center space-x-3 text-navy font-bold text-sm">
                    <div className="w-2 h-2 bg-sky"></div>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
           </div>
           <div className="w-full lg:w-1/2 min-h-[400px] relative">
              <img 
                src="https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?q=80&w=2072&auto=format&fit=crop" 
                alt="Student Life" 
                className="absolute inset-0 w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000" 
              />
              <div className="absolute inset-0 bg-navy/20"></div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default StudentLife;
