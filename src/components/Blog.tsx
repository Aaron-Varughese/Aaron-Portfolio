import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import { ArrowRight } from 'lucide-react';

const posts = [
  {
    title: "Automating QA with Selenium and Python",
    date: "April 10, 2026",
    category: "Automation",
    excerpt: "Learn how to build robust automation scripts to reduce testing time and improve regression coverage in your CI/CD pipeline."
  },
  {
    title: "Real-time Audio Processing with AI",
    date: "March 22, 2026",
    category: "Machine Learning",
    excerpt: "Exploring speaker diarization and sentiment analysis techniques for extracting actionable insights from call audio."
  },
  {
    title: "Performance Testing with K6",
    date: "February 15, 2026",
    category: "Testing",
    excerpt: "Identifying system bottlenecks and improving application responsiveness using K6 and Grafana dashboards."
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading number="05" title="Data_Logs" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden mb-4 border border-[#222222] group-hover:border-[#00f0ff] transition-colors aspect-video bg-[#111111] relative flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="font-mono text-[#333333] text-4xl font-bold">IMG_NULL</span>
              </div>
              <div className="flex gap-4 items-center mb-2 font-mono text-xs">
                <span className="text-[#00f0ff]">{post.category}</span>
                <span className="text-[#666666]">{post.date}</span>
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-[#00f0ff] transition-colors">
                {post.title}
              </h3>
              <p className="text-[#888888] mb-4 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-2 text-sm font-mono text-white group-hover:text-[#00f0ff] transition-colors">
                READ_MORE <ArrowRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="px-6 py-3 border border-[#222222] text-white font-mono hover:border-[#00f0ff] hover:text-[#00f0ff] transition-colors">
            LOAD_MORE_LOGS()
          </button>
        </div>
      </div>
    </section>
  );
}
