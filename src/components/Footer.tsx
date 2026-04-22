import { Github, Linkedin, Mail, Phone, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#222222] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <a href="#home" className="font-display font-bold text-xl tracking-tighter text-white flex items-center gap-2 mb-2">
            <span className="text-[#00f0ff]">&lt;</span>
            AARON
            <span className="text-[#00f0ff]">/&gt;</span>
          </a>
          <p className="text-[#666666] font-mono text-sm">
            © {new Date().getFullYear()} Aaron Varughese Bino. All rights reserved.
          </p>
        </div>
        
        <div className="flex gap-6">
          {[
            { icon: <Github size={20} />, href: "https://github.com/Aaron-Varughese", label: "GitHub" },
            { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/aaronvarughesebino", label: "LinkedIn" },
            { icon: <Mail size={20} />, href: "mailto:aaronvarughesebino@gmail.com", label: "Email" },
            { icon: <Phone size={20} />, href: "tel:+971569561529", label: "Phone" },
            { icon: <Instagram size={20} />, href: "#", label: "Instagram" }
          ].map((social, index) => (
            <a 
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-[#666666] hover:text-[#00f0ff] transition-colors"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
