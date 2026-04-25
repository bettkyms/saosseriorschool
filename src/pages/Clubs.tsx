import { motion } from 'motion/react';
import { BookOpen, Globe, Lightbulb, Heart } from 'lucide-react';

const Clubs = () => {
  const clubs = [
    { name: 'Science & Robotics', icon: <Lightbulb />, desc: 'Innovation and discovery for the STEM pathway.' },
    { name: 'Journalism', icon: <BookOpen />, desc: 'Developing communication and reporting skills.' },
    { name: 'Environmental Club', icon: <Globe />, desc: 'Promoting sustainability and campus beautification.' },
    { name: 'CU & YCS', icon: <Heart />, desc: 'Spiritual nurturing and fellowships for students.' },
  ];

  return (
    <div className="flex flex-col pb-20">
      <section className="bg-navy py-20 px-6 md:px-10 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
            <h4 className="text-sky font-bold uppercase tracking-[0.3em] text-xs">Student Engagement</h4>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Clubs & Societies</h1>
            <p className="max-w-2xl text-gray-400 text-lg">Platform for student leadership and niche skill development.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {clubs.map((club, idx) => (
          <motion.div
            key={club.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="p-10 bg-white border-b-4 border-maroon shadow-2xl flex flex-col items-center text-center space-y-6"
          >
            <div className="text-navy">{club.icon}</div>
            <h3 className="text-xl font-extrabold text-navy uppercase tracking-tighter">{club.name}</h3>
            <p className="text-xs text-gray-500 leading-relaxed font-semibold">{club.desc}</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default Clubs;
