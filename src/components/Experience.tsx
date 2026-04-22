import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';

const experiences = [
  {
    role: "Junior Software Developer & QA Tester",
    company: "Topaz",
    location: "Dubai, UAE",
    period: "Feb 2025 - Present",
    description: [
      "Performed manual and automated QA tests on web and software applications, ensuring high-quality deliverables and minimal defects.",
      "Developed and maintained automation scripts using Selenium WebDriver and Python, reducing testing time and improving regression coverage.",
      "Designed and executed performance tests using K6, identifying system bottlenecks and improving application responsiveness."
    ],
    techStack: ["Selenium", "K6", "Grafana", "Python", "HTML", "CSS", "SQL", "Git", "Azure DevOps"]
  },
  {
    role: "Software Developer Intern",
    company: "Topaz",
    location: "Dubai, UAE",
    period: "Oct 2024 – Feb 2025",
    description: [
      "Developed user-friendly UI and UX designs, enhancing website usability and overall user experience.",
      "Built Python-based projects for web applications, improving functionality and performance.",
      "Completed Call Audio Transcription & Translation (ML) project: Transcribed and translated call audio in real-time (Arabic to English).",
      "Performed speaker diarization, topic extraction, and sentiment analysis for actionable insights."
    ]
  },
  {
    role: "Data Science Intern",
    company: "Luminar Technolab",
    location: "Kerala, India",
    period: "July 2024 - Oct 2024",
    description: [
      "Conducted data analysis and statistical modeling to extract actionable insights.",
      "Expanded knowledge in AI, ML, and Power BI for improved data-driven reporting."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading number="03" title="Work_Log" />
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
                <div className="mb-4 md:mb-0 md:col-span-1 md:text-right pt-1">
                  <div className="font-mono text-[#00f0ff] font-bold">{exp.period}</div>
                  <div className="font-mono text-sm text-[#888888]">{exp.location}</div>
                </div>
                
                <div className="md:col-span-3 glass-panel p-6 relative hover-trigger">
                  {/* Timeline dot */}
                  <div className="absolute -left-[39px] md:-left-[25px] top-6 w-4 h-4 rounded-full bg-[#00f0ff] border-4 border-[#050505] z-10 hidden md:block"></div>
                  
                  <h3 className="text-2xl font-display font-bold text-white mb-1">{exp.role}</h3>
                  <h4 className="text-lg font-mono text-[#aaaaaa] mb-4">{exp.company}</h4>
                  
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-[#cccccc] flex gap-2">
                        <span className="text-[#00f0ff] mt-1">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {exp.techStack && (
                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-[#222222]">
                      {exp.techStack.map(tech => (
                        <span key={tech} className="text-xs font-mono text-[#888888]">#{tech}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
