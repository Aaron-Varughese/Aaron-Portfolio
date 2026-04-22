import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';

const skillCategories = [
  {
    title: "Programming",
    skills: ["Python", "C#", "JavaScript", "HTML", "CSS", "SQL"]
  },
  {
    title: "Automation & QA Tools",
    skills: ["Selenium WebDriver", "K6", "Grafana", "Postman", "JIRA", "Azure DevOps"]
  },
  {
    title: "Frameworks & Libraries",
    skills: ["PyTest", "Pandas", "NumPy", "Scikit-learn", "OpenCV", "Flask"]
  },
  {
    title: "Cloud & DevOps",
    skills: ["Azure", "Docker", "CI/CD", "Git", "GitHub", "SVN"]
  },
  {
    title: "UI/UX & Design",
    skills: ["Figma", "Flutter", "Responsive Web Design", "HTML/CSS Design Patterns"]
  },
  {
    title: "Soft Skills",
    skills: ["Problem Solving", "Communication", "Team Collaboration", "Critical Thinking", "Agile Methodologies"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading number="02" title="Tech_Stack" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-6 hover-trigger group"
            >
              <h3 className="font-mono text-lg font-bold text-white mb-4 group-hover:text-[#00f0ff] transition-colors">
                &gt; {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-[#1a1a1a] border border-[#333333] text-sm font-mono text-[#aaaaaa] rounded-sm"
                  >
                    {skill}
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
