import { motion } from 'motion/react';
import { Download, FileText } from 'lucide-react';

const Downloads = () => {
  const documents = [
    { name: 'Form 1 Admission Requirements 2026', size: '1.2 MB' },
    { name: 'Senior School Fee Structure', size: '450 KB' },
    { name: 'Rules & Regulations Handbook', size: '2.1 MB' },
    { name: 'Term One Newsletters', size: '3.4 MB' },
    { name: 'BOM Strategic Plan 2024-2028', size: '4.8 MB' },
  ];

  return (
    <div className="flex flex-col pb-20">
      <section className="bg-navy py-20 px-6 md:px-10 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
            <h4 className="text-sky font-bold uppercase tracking-[0.3em] text-xs">Resources</h4>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Resource Downloads</h1>
            <p className="max-w-2xl text-gray-400 text-lg">Access official school documents, forms, and reports.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 max-w-4xl mx-auto px-6 md:px-10">
        <div className="space-y-4">
          {documents.map((doc, idx) => (
            <motion.div
              key={doc.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="flex items-center justify-between p-6 bg-white border border-gray-100 hover:border-maroon hover:shadow-xl transition-all group"
            >
              <div className="flex items-center space-x-6">
                <div className="p-3 bg-gray-50 text-navy group-hover:bg-maroon group-hover:text-white transition-colors">
                  <FileText size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-navy uppercase tracking-tight">{doc.name}</h3>
                  <p className="text-[10px] text-gray-400 font-bold uppercase">{doc.size} | PDF Document</p>
                </div>
              </div>
              <button className="flex items-center space-x-2 text-maroon font-black text-[10px] uppercase tracking-widest hover:text-navy transition-colors">
                <Download size={14} />
                <span>Download</span>
              </button>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Downloads;
