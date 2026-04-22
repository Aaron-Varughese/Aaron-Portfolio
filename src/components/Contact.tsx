import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:aaronvarughesebino@gmail.com?subject=${encodeURIComponent(subject || 'Project Inquiry')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    
    try {
      // Try to open in a new tab which is sometimes allowed in iframes
      window.open(mailtoLink, '_blank');
    } catch (err) {
      // Fallback
      window.location.href = mailtoLink;
    }
    
    // Clear the form after submission
    setFormData({ name: '', email: '', subject: '', message: '' });
    setStatus('success');
    
    // Reset status after 8 seconds
    setTimeout(() => setStatus('idle'), 8000);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading number="05" title="Init_Connection" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-display font-bold text-white mb-6">Let's build something amazing together.</h3>
            <p className="text-[#888888] mb-8 text-lg">
              Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#111111] border border-[#222222] flex items-center justify-center text-[#00f0ff] group-hover:bg-[#00f0ff] group-hover:text-black transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="font-mono text-sm text-[#666666]">EMAIL</div>
                  <a href="mailto:aaronvarughesebino@gmail.com" className="text-white hover:text-[#00f0ff] transition-colors hover-trigger">aaronvarughesebino@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-[#111111] border border-[#222222] flex items-center justify-center text-[#00f0ff] group-hover:bg-[#00f0ff] group-hover:text-black transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="font-mono text-sm text-[#666666]">PHONE / WHATSAPP</div>
                  <a href="tel:+971569561529" className="text-white hover:text-[#00f0ff] transition-colors hover-trigger">+971 56 956 1529</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-[#111111] border border-[#222222] flex items-center justify-center text-[#00f0ff] group-hover:bg-[#00f0ff] group-hover:text-black transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="font-mono text-sm text-[#666666]">LOCATION</div>
                  <span className="text-white">Dubai, UAE</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="font-mono text-sm text-[#888888]">NAME</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#050505] border border-[#333333] p-3 text-white focus:outline-none focus:border-[#00f0ff] transition-colors font-mono"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="font-mono text-sm text-[#888888]">EMAIL</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#050505] border border-[#333333] p-3 text-white focus:outline-none focus:border-[#00f0ff] transition-colors font-mono"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="font-mono text-sm text-[#888888]">SUBJECT</label>
                <input 
                  type="text" 
                  id="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#050505] border border-[#333333] p-3 text-white focus:outline-none focus:border-[#00f0ff] transition-colors font-mono"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="font-mono text-sm text-[#888888]">MESSAGE</label>
                <textarea 
                  id="message" 
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#050505] border border-[#333333] p-3 text-white focus:outline-none focus:border-[#00f0ff] transition-colors font-mono resize-none"
                  placeholder="Hello Aaron..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full py-4 bg-[#00f0ff] text-black font-bold font-mono hover:bg-[#00c3cf] transition-colors flex items-center justify-center gap-2 hover-trigger"
              >
                <Send size={18} />
                TRANSMIT_MESSAGE()
              </button>

              {status === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-[#00f0ff]/10 border border-[#00f0ff] text-[#00f0ff] font-mono text-sm"
                >
                  <span className="font-bold">&gt; MESSAGE_PREPARED</span>
                  <br />
                  <span className="text-[#888888] mt-2 block">
                    If your email client didn't open automatically (due to browser preview restrictions), please open this app in a new tab or email me directly at aaronvarughesebino@gmail.com.
                  </span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
