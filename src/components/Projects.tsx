import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Call Audio Transcription & Translation (ML)",
    period: "Oct 2024 – Jan 2025",
    context: "Topaz, Dubai",
    description: "Developed AI-powered system to transcribe and translate call audio in real-time. Implemented speaker diarization, topic extraction, and sentiment analysis for actionable insights.",
    tags: ["Python", "Machine Learning", "AI", "NLP", "Audio Processing"]
  },
  {
    title: "CalmGuard — Live Stress Monitoring",
    period: "Dec 2023 – May 2024",
    context: "Amal Jyothi College of Engineering",
    description: "Built web application to detect real-time stress levels and monitor eye strain using AI and Computer Vision.",
    tags: ["Python", "Computer Vision", "AI", "Web App"]
  },
  {
    title: "Agape — Canteen Food Ordering App",
    period: "Academic Project",
    context: "Amal Jyothi College of Engineering",
    description: "Developed a comprehensive canteen food ordering application to streamline the ordering process for students and staff.",
    tags: ["Flutter", "Dart", "Mobile App", "Firebase"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading number="04" title="Execute_Projects" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-6 flex flex-col h-full group hover-trigger"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="font-mono text-xs text-[#00f0ff]">{project.period}</div>
                <div className="flex gap-2">
                  <a href="#" className="text-[#888888] hover:text-white transition-colors"><Github size={18} /></a>
                  <a href="#" className="text-[#888888] hover:text-white transition-colors"><ExternalLink size={18} /></a>
                </div>
              </div>
              
              <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-[#00f0ff] transition-colors">
                {project.title}
              </h3>
              <div className="font-mono text-sm text-[#888888] mb-4">{project.context}</div>
              
              <p className="text-[#cccccc] mb-6 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-mono text-[#666666]">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
