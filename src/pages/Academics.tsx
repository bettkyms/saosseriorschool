import { motion } from 'motion/react';
import { Microscope, Briefcase, Music, Laptop, BookOpen, Star } from 'lucide-react';

const Academics = () => {
  const pathways = [
    {
      title: 'STEM',
      subtitle: 'Science, Technology, Engineering & Mathematics',
      icon: <Microscope size={40} />,
      desc: 'STEM stands for Science, Technology, Engineering, and Mathematics. This pathway is perfect for students who love solving puzzles, building things, or understanding how the world works. At Saos, we bridge the gap between classroom theory and real-world innovation, preparing your child for careers in Medicine, Engineering, Architecture, and Computer Science.',
      subjects: ['Physics', 'Chemistry', 'Biology', 'Computer Science', 'Advanced Mathematics'],
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Social Sciences',
      subtitle: 'Humanities & Business Studies',
      icon: <Briefcase size={40} />,
      desc: 'Developing tomorrow leaders in policy, economics, and law. This pathway emphasizes ethical leadership and social understanding.',
      subjects: ['History', 'Geography', 'Religious Education', 'Business Studies', 'Economics'],
      image: 'https://images.unsplash.com/photo-1454165205744-3b78555e5572?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Arts & Sports',
      subtitle: 'Visual, Performing Arts & PE',
      icon: <Music size={40} />,
      desc: 'Celebrating creativity and physical excellence. We provide professional coaching and facilities for drama, music, and athletics.',
      subjects: ['Visual Arts', 'Performing Arts (Drama/Music)', 'Physical Education', 'Communication Skills'],
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090&auto=format&fit=crop'
    }
  ];

  return (
    <div className="flex flex-col pb-20">
      {/* Page Header */}
      <section className="bg-navy py-20 px-6 md:px-10 text-white border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h4 className="text-sky font-bold uppercase tracking-[0.3em] text-xs italic">Competency Based Curriculum</h4>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Academic Pathways</h1>
            <p className="max-w-2xl text-gray-400 text-lg">Transitioning students into Grade 10–12 with specialized learning tailored to individual potentials.</p>
          </motion.div>
        </div>
      </section>

      {/* Pathways Detail */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-10 space-y-32">
        {pathways.map((path, idx) => (
          <div key={path.title} className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
            <motion.div 
              initial={{ opacity: 0, x: idx % 2 !== 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 space-y-8"
            >
              <div className="text-sky">{path.icon}</div>
              <div className="space-y-4">
                <h3 className="text-4xl font-extrabold text-navy leading-none underline underline-offset-[12px] decoration-sky/30">{path.title}</h3>
                <p className="text-sky font-bold uppercase tracking-[0.1em] text-sm">{path.subtitle}</p>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">{path.desc}</p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                {path.subjects.map((sub) => (
                  <div key={sub} className="flex items-center space-x-3 text-sm font-semibold text-navy">
                    <div className="w-1.5 h-1.5 bg-sky rounded-full"></div>
                    <span>{sub}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="aspect-video bg-navy overflow-hidden shadow-[30px_30px_0px_0px_rgba(135,206,235,0.1)]">
                <img src={path.image} alt={path.title} className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700" />
              </div>
            </motion.div>
          </div>
        ))}
      </section>

      {/* Facilities Teaser */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center space-y-12">
          <div className="space-y-4">
            <h3 className="text-4xl font-bold text-navy">Exceptional Facilities</h3>
            <p className="max-w-2xl mx-auto text-gray-500">Supporting our pathways with world-class infrastructure.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { label: 'Science Labs', icon: <Laptop size={32} /> },
              { label: 'Resource Center', icon: <BookOpen size={32} /> },
              { label: 'Excellence Hub', icon: <Star size={32} /> },
              { label: 'Sports Arena', icon: <div className="text-2xl">⚽</div> },
            ].map((f) => (
              <div key={f.label} className="p-10 bg-white shadow-sm flex flex-col items-center space-y-4 border-b-2 border-transparent hover:border-maroon transition-all">
                <div className="text-navy">{f.icon}</div>
                <span className="font-bold uppercase tracking-widest text-xs">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jargon Buster Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-10 border-2 border-maroon/20 p-12 bg-gray-50/50">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-12 bg-maroon text-white flex items-center justify-center font-bold">?</div>
            <h3 className="text-3xl font-bold text-navy uppercase tracking-tighter">Academic Guide for Parents</h3>
          </div>
          
          <div className="space-y-8">
            <div className="space-y-2">
              <h4 className="text-maroon font-bold uppercase tracking-widest text-xs">What is STEM?</h4>
              <p className="text-gray-600 leading-relaxed">
                <span className="font-bold text-navy">STEM</span> stands for <span className="font-bold">Science, Technology, Engineering, and Mathematics</span>. It is an approach to learning that integrates these four subjects into a cohesive learning paradigm based on real-world applications. At Saos, we use this to prepare students for the technical demands of the 21st century.
              </p>
            </div>
            
            <div className="space-y-2">
              <h4 className="text-maroon font-bold uppercase tracking-widest text-xs">What is CBC?</h4>
              <p className="text-gray-600 leading-relaxed">
                The <span className="font-bold text-navy">Competency-Based Curriculum (CBC)</span> is the new education system in Kenya designed to emphasize the development of skills and knowledge and their application to real-life situations. In Senior School (Grade 10-12), it allows students to specialize in pathways (STEM, Social Sciences, or Arts & Sports) that match their career interests.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
