import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading number="01" title="System_Profile" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00f0ff] to-transparent"></div>
            <p className="text-lg text-[#e0e0e0] mb-6 leading-relaxed">
              Computer Science and Engineering graduate with 1 year of experience in Software Development and Automation QA. Skilled in developing and testing web/software applications using Selenium, K6, Grafana, Python, HTML, CSS, and SQL.
            </p>
            <p className="text-lg text-[#e0e0e0] mb-6 leading-relaxed">
              Experienced in automated and performance testing, regression testing, QA process improvement, and test case management. Knowledgeable in UI/UX design, data visualization, and monitoring dashboards.
            </p>
            <p className="text-lg text-[#e0e0e0] leading-relaxed">
              Skilled in machine learning, data analysis, and AI-powered system development. Passionate about leveraging AI/ML, Automation QA, and Robotics for efficient, user-centric solutions. Strong problem-solving, critical thinking, and collaboration skills with experience delivering projects in Agile environments.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="glass-panel p-6 flex items-center gap-4 border-l-4 border-l-[#00f0ff] hover-trigger">
              <div className="text-4xl font-display font-bold text-[#00f0ff]">2+</div>
              <div className="font-mono text-sm text-[#888888] uppercase">Years of<br/>Experience</div>
            </div>
            <div className="glass-panel p-6 flex items-center gap-4 border-l-4 border-l-blue-500 hover-trigger">
              <div className="text-4xl font-display font-bold text-blue-500">B.Tech</div>
              <div className="font-mono text-sm text-[#888888] uppercase">Computer Science<br/>& Engineering</div>
            </div>
            <div className="glass-panel p-6 flex items-center gap-4 border-l-4 border-l-purple-500 hover-trigger">
              <div className="text-4xl font-display font-bold text-purple-500">AI/ML</div>
              <div className="font-mono text-sm text-[#888888] uppercase">Passionate about<br/>Intelligent Systems</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
