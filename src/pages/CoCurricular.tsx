import { motion } from 'motion/react';
import { Trophy, Music, Palette, Activity } from 'lucide-react';

const CoCurricular = () => {
  const activities = [
    { title: 'Athletics', category: 'Sports', icon: <Trophy />, desc: 'Competing at sub-county and county levels in track and field.' },
    { title: 'Drama & Elocution', category: 'Performing Arts', icon: <Music />, desc: 'Nurturing confidence through stage plays and choral verses.' },
    { title: 'Football', category: 'Sports', icon: <Activity />, desc: 'Building teamwork through the most popular sport on campus.' },
    { title: 'Music & Choir', category: 'Creative', icon: <Palette />, desc: 'Expressing talent through various musical instruments and vocal skills.' },
  ];

  return (
    <div className="flex flex-col pb-20">
      <section className="bg-navy py-20 px-6 md:px-10 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
            <h4 className="text-sky font-bold uppercase tracking-[0.3em] text-xs">Beyond the Classroom</h4>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Co-curricular Activities</h1>
            <p className="max-w-2xl text-gray-400 text-lg">Developing holistic talents through sports, arts, and creative expression.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12">
        {activities.map((act, idx) => (
          <motion.div
            key={act.title}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex flex-col md:flex-row gap-8 items-center p-8 bg-white border border-gray-100 shadow-xl group hover:border-maroon transition-all"
          >
            <div className="w-20 h-20 bg-sky-light text-navy flex items-center justify-center rounded-full flex-shrink-0 group-hover:bg-maroon group-hover:text-white transition-colors">
              {act.icon}
            </div>
            <div className="space-y-3 text-center md:text-left">
              <span className="text-[10px] font-black uppercase text-maroon tracking-widest">{act.category}</span>
              <h3 className="text-2xl font-bold text-navy">{act.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{act.desc}</p>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default CoCurricular;
