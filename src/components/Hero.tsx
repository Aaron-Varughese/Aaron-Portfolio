import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Phone, Instagram, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden tech-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050505] z-0"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-block px-4 py-1.5 rounded-full border border-[#00f0ff]/30 bg-[#00f0ff]/10 text-[#00f0ff] font-mono text-sm"
            >
              SYS.INIT: ONLINE
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter mb-6 uppercase"
            >
              Aaron <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-blue-500">
                Varughese
              </span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl text-lg md:text-xl text-[#888888] mb-10 font-mono"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.8 }}
              >
                &gt; Software Developer & Automation QA Engineer.
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1, delay: 1.5 }}
              >
                &gt; Building AI-powered systems & robust web applications.
              </motion.span>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto justify-center lg:justify-start"
            >
              <a 
                href="#contact"
                className="px-8 py-4 bg-[#00f0ff] text-black font-bold font-mono hover:bg-[#00c3cf] transition-colors flex items-center justify-center gap-2 hover-trigger"
              >
                INITIALIZE_CONTACT()
              </a>
              <a 
                href="/resume.pdf"
                download
                className="px-8 py-4 bg-transparent border border-[#222222] text-white font-bold font-mono hover:border-[#00f0ff] hover:text-[#00f0ff] transition-colors flex items-center justify-center gap-2 hover-trigger"
              >
                <Download size={18} />
                DOWNLOAD_RESUME
              </a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex gap-6 justify-center lg:justify-start"
            >
              {[
                { icon: <Github size={24} />, href: "https://github.com/Aaron-Varughese", label: "GitHub" },
                { icon: <Linkedin size={24} />, href: "https://linkedin.com/in/aaronvarughesebino", label: "LinkedIn" },
                { icon: <Mail size={24} />, href: "mailto:aaronvarughesebino@gmail.com", label: "Email" },
                { icon: <Phone size={24} />, href: "tel:+971569561529", label: "Phone/WhatsApp" },
                { icon: <Instagram size={24} />, href: "#", label: "Instagram" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-[#888888] hover:text-[#00f0ff] hover:scale-110 transition-all hover-trigger"
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
          >
            <div className="absolute inset-0 bg-[#00f0ff] blur-[100px] opacity-20 rounded-full"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Techie decorative elements */}
              <div className="absolute -inset-4 border border-[#00f0ff]/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute -inset-8 border border-[#00f0ff]/10 border-dashed rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              
              {/* Image container */}
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#00f0ff] bg-[#111111] relative z-10 group">
                <img 
                  src="/profile.png" 
                  alt="Aaron Varughese Bino" 
                  className="w-full h-full object-cover transition-all duration-500"
                  onError={(e) => {
                    // Fallback if image not found
                    (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/aaron/400/400';
                  }}
                />
                <div className="absolute inset-0 transition-colors duration-500 mix-blend-overlay"></div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute bottom-4 -right-4 bg-[#050505] border border-[#00f0ff] text-[#00f0ff] px-3 py-1 font-mono text-xs z-20 shadow-[0_0_10px_rgba(0,240,255,0.3)]">
                STATUS: ACTIVE
              </div>
              <div className="absolute top-8 -left-8 bg-[#050505] border border-[#00f0ff] text-[#00f0ff] px-3 py-1 font-mono text-xs z-20 shadow-[0_0_10px_rgba(0,240,255,0.3)]">
                LVL: 2+
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
