import { motion } from 'motion/react';
import { ArrowRight, Award, GraduationCap, Users, Map } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const stats = [
    { label: 'Students', value: '546+', icon: <Users size={24} /> },
    { label: 'Cluster Rank', value: 'C2', icon: <Award size={24} /> },
    { label: 'CBC Pathways', value: '3', icon: <GraduationCap size={24} /> },
    { label: 'School Spirit', value: 'Excellence', icon: <Map size={24} /> },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gray-50 flex flex-row">
          <div className="w-full lg:w-1/2 p-6 md:p-16 lg:p-24 flex flex-col justify-center space-y-8 z-10 bg-white shadow-2xl lg:shadow-none">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block px-4 py-1.5 bg-sky-light border border-sky text-navy text-[11px] font-bold uppercase tracking-[0.2em] w-fit"
            >
              Extra County School | Baringo County
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold leading-[1.1] text-navy"
            >
              Empowering <br />
              <span className="text-maroon">Next Gen</span> <br />
              Leaders.
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-lg font-medium"
            >
              Saos Senior School provides holistic, quality education that equips students with competency skills for self-reliance in a rapidly evolving world.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-5 pt-4"
            >
              <Link to="/admissions" className="bg-maroon text-white px-10 py-4 rounded-sm font-bold uppercase tracking-wider shadow-xl hover:bg-opacity-90 transition-all flex items-center justify-center space-x-2">
                <span>Admission 2026</span>
                <ArrowRight size={18} />
              </Link>
              <Link to="/academics" className="border-2 border-navy text-navy px-10 py-4 rounded-sm font-bold uppercase tracking-wider hover:bg-navy hover:text-white transition-all flex items-center justify-center">
                Explore Pathways
              </Link>
            </motion.div>
          </div>
          
          <div className="hidden lg:flex w-1/2 bg-navy relative items-center justify-center p-12 overflow-hidden">
            <motion.div 
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="w-full h-full border-8 border-white shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-navy opacity-20"></div>
              <img 
                src="https://lh3.googleusercontent.com/d/1uglsjzWrnrWpbyNBdotBdKWWC204QvK7" 
                alt="Saos Senior School Main Gate" 
                className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" 
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-navy to-transparent text-white">
                <p className="text-xs uppercase tracking-[0.3em] opacity-80 mb-3 underline underline-offset-8 decoration-maroon">Modern Academic Facilities</p>
                <h3 className="text-3xl font-bold mt-2">Excellence Hub</h3>
              </div>
            </motion.div>
            
            {/* Geometric Accents */}
            <div className="absolute top-0 right-0 p-8">
              <div className="w-16 h-16 border-t-2 border-r-2 border-maroon/30"></div>
            </div>
            <div className="absolute bottom-0 left-0 p-8">
              <div className="w-16 h-16 border-b-2 border-l-2 border-maroon/30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section with Bus */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="w-full lg:w-1/2 relative">
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="aspect-video bg-gray-100 shadow-2xl relative border-4 border-white"
            >
              <img 
                src="https://lh3.googleusercontent.com/d/1XuOhNBqDyt6ZEwGfAKCIofFwTEXVWzkP" 
                alt="Saos Senior School Transport" 
                className="w-full h-full object-cover shadow-inner" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-4 -left-4 bg-maroon text-white p-4 font-bold text-xs uppercase tracking-widest shadow-lg">
                Safe & Reliable Transport
              </div>
            </motion.div>
          </div>
          
          <div className="w-full lg:w-1/2 space-y-6">
            <h4 className="text-maroon font-extrabold uppercase tracking-widest text-sm">Excellence in Infrastructure</h4>
            <h3 className="text-4xl font-bold text-navy">Tailored for Senior School Learning</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Transitioning to the CBC framework requires more than just classrooms. We have specialized our campus as an Excellence Hub with dedicated laboratories for the STEM pathway and collaborative spaces for Social Sciences. Our school transport system is fully integrated to support off-campus academic excursions and safe transit for our student body.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {['Specialized Science Labs', 'Integrated ICT Center', 'Secure Campus Hub', 'Termly Transit Support'].map(f => (
                <div key={f} className="flex items-center space-x-2 text-sm font-semibold text-navy">
                  <div className="w-2 h-2 bg-maroon"></div>
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-navy py-16 md:py-20 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-10 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-2 border-b lg:border-b-0 lg:border-l border-white/10 lg:pl-8 pb-8 lg:pb-0"
            >
              <div className="text-sky mb-2">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-extrabold text-sky tracking-tighter">{stat.value}</div>
              <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-semibold text-white/70">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Principal Welcome */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/3 relative">
            <div className="aspect-[4/5] bg-navy overflow-hidden shadow-2xl relative">
              <img 
                src="https://lh3.googleusercontent.com/d/13UeyUCVTrmU92UxPGPfbKfVBiexzzSoY" 
                alt="Principal Agwenge Clement Nyawara" 
                className="w-full h-full object-cover hover:scale-105 transition-all duration-700" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border-[12px] border-white/10"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-sky p-6 shadow-xl hidden md:block">
              <div className="text-navy font-black text-xl uppercase leading-none">Leadership</div>
            </div>
          </div>
          
          <div className="w-full lg:w-2/3 space-y-8">
            <div className="space-y-4">
              <h4 className="text-sky font-bold uppercase tracking-[0.2em] text-sm italic">Message from the Office</h4>
              <h3 className="text-4xl font-bold text-navy leading-tight">Welcome to the New Era of Senior School Education</h3>
            </div>
            
            <div className="text-gray-600 text-lg leading-relaxed flex flex-col space-y-6">
              <p className="italic font-medium">
                "Our transition to a Senior School marks a significant milestone in our journey toward academic excellence. We are committed to nurturing not just students, but future-ready leaders equipped with character and technical competencies."
              </p>
              <div className="h-px bg-gray-200 w-24"></div>
              <div>
                <p className="font-bold text-navy text-xl">Agwenge Clement Nyawara</p>
                <p className="text-sm font-semibold text-sky uppercase tracking-[0.1em]">Principal, Saos Senior School</p>
              </div>
            </div>
            
            <Link to="/about" className="inline-flex items-center space-x-3 text-navy font-bold uppercase tracking-widest text-xs border-b-2 border-navy pb-1 hover:text-sky hover:border-sky transition-all group">
              <span>Our Vision & Values</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pathways Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h4 className="text-sky font-bold uppercase tracking-[0.2em] text-sm">Specialized Learning</h4>
            <h3 className="text-4xl md:text-5xl font-bold text-navy tracking-tight">Our CBC Pathways</h3>
            <p className="text-gray-500 text-lg">As a Senior School, we offer three main pathways designed to nurture individual talents and career aspirations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'STEM', desc: 'Science, Technology, Engineering, and Mathematics. Focus on innovation, inquiry, and global problem-solving.', color: 'border-sky' },
              { title: 'Social Sciences', desc: 'Humanities and Business Studies. Developing critical thinkers and ethical entrepreneurs.', color: 'border-navy' },
              { title: 'Arts & Sports', desc: 'Visual/Performing Arts and Physical Education. Nurturing creative expression and athletic talent.', color: 'border-gray-200' },
            ].map((pathway, idx) => (
              <motion.div
                key={pathway.title}
                whileHover={{ y: -10 }}
                className={`p-10 border-t-4 ${pathway.color} bg-white shadow-lg space-y-6 flex flex-col h-full transition-all`}
              >
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-navy font-bold">{idx + 1}</div>
                <h4 className="text-2xl font-bold text-navy">{pathway.title}</h4>
                <p className="text-gray-500 leading-relaxed flex-grow">{pathway.desc}</p>
                <Link to="/academics" className="text-navy font-bold text-xs uppercase tracking-widest flex items-center space-x-2 group">
                  <span>Learn More</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
