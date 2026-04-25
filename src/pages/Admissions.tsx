import { motion } from 'motion/react';
import { FileText, CreditCard, HelpCircle, PhoneCall } from 'lucide-react';

const Admissions = () => {
  return (
    <div className="flex flex-col pb-20">
      <section className="bg-navy py-20 px-6 md:px-10 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h4 className="text-sky font-bold uppercase tracking-[0.3em] text-xs">Join Our Community</h4>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Admissions</h1>
            <p className="max-w-2xl text-gray-400 text-lg">Your journey to becoming a leader starts here.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Requirements */}
        <div className="lg:col-span-2 space-y-12">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-navy flex items-center space-x-3">
              <FileText className="text-sky" />
              <span>Admission Requirements</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {[
                'Certified Copy of Birth Certificate',
                'Original KCPE Result Slip',
                'Official Admission Letter (NEMIS/MoE)',
                'Previous School Leaving Certificate',
                'Medical Assessment Form',
                'Passport Size Photographs (4)',
              ].map((item) => (
                <div key={item} className="p-6 bg-gray-50 border-l-4 border-navy hover:bg-sky-light transition-colors">
                  <p className="font-semibold text-navy text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 pt-8 border-t">
            <h3 className="text-3xl font-bold text-navy flex items-center space-x-3">
              <CreditCard className="text-sky" />
              <span>Financial Information</span>
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg pb-6">
              Saos Senior School is a public institution. We strive to provide accessible and high-quality education. For the most current fee structure based on your selected pathway, please get in touch with our accounts office directly.
            </p>
            <div className="bg-navy p-8 text-white relative overflow-hidden group">
               <div className="relative z-10 space-y-6">
                  <p className="text-sky font-bold uppercase tracking-widest text-xs">Direct Support</p>
                  <p className="text-xl font-medium">To receive the current 2026 Fee Structure PDF via email or WhatsApp:</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="tel:+254745259359" className="flex items-center space-x-3 bg-white text-navy px-6 py-3 rounded-sm font-bold text-sm tracking-widest hover:bg-sky hover:text-white transition-all">
                      <PhoneCall size={18} />
                      <span>CALL +254 745 259359</span>
                    </a>
                  </div>
               </div>
               <div className="absolute top-0 right-0 w-32 h-32 bg-sky/10 rounded-full translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700"></div>
            </div>
          </div>
        </div>

        {/* Inquiry Form */}
        <div className="space-y-8">
          <div className="p-10 bg-white shadow-2xl border-t-8 border-sky sticky top-32">
            <h3 className="text-2xl font-bold text-navy mb-2">Online Inquiry</h3>
            <p className="text-gray-500 text-sm mb-8 italic">Interested? Send us your details and we'll call you back.</p>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-[10px] uppercase font-black text-gray-400 tracking-widest mb-2">Student Full Name</label>
                <input type="text" className="w-full border-b-2 border-gray-100 py-3 focus:outline-none focus:border-sky transition-colors text-sm font-medium" placeholder="Ex: John Doe" />
              </div>
              <div>
                <label className="block text-[10px] uppercase font-black text-gray-400 tracking-widest mb-2">Target Grade/Pathway</label>
                <select className="w-full border-b-2 border-gray-100 py-3 focus:outline-none focus:border-sky transition-colors text-sm font-medium bg-transparent">
                  <option>Grade 10 - STEM</option>
                  <option>Grade 10 - Social Sciences</option>
                  <option>Grade 10 - Arts & Sports</option>
                  <option>Other / Transfer</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] uppercase font-black text-gray-400 tracking-widest mb-2">Parent Phone Number</label>
                <input type="tel" className="w-full border-b-2 border-gray-100 py-3 focus:outline-none focus:border-sky transition-colors text-sm font-medium" placeholder="+254 7..." />
              </div>
              <button disabled className="w-full bg-navy text-white font-bold py-4 uppercase tracking-[0.2em] text-xs hover:bg-sky transition-all mt-4 cursor-not-allowed">
                Submit Inquiry
              </button>
            </form>
          </div>
          
          <div className="flex items-center space-x-4 p-6 bg-gray-50 border border-gray-100">
            <HelpCircle className="text-sky flex-shrink-0" />
            <p className="text-xs text-gray-500 leading-normal">
              For walk-in admissions, visit our offices Monday to Friday, 8:00 AM — 4:00 PM.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
