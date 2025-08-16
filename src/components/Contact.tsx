import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, Facebook, Loader2, CheckCircle, XCircle, Instagram } from 'lucide-react';

// Custom TikTok icon component
const TikTokIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  useEffect(() => {
    const handleInteraction = (clientX: number, clientY: number) => {
      if (!sectionRef.current) return;
      
      const { innerWidth, innerHeight } = window;
      
      const xPercent = Math.abs((clientX / innerWidth - 0.5) * 2);
      const yPercent = Math.abs((clientY / innerHeight - 0.5) * 2);
      
      const elements = sectionRef.current.querySelectorAll('.interactive-3d');
      elements.forEach((element, index) => {
        const intensity = (index + 1) * 0.1;
        const scale = 1 + (xPercent + yPercent) * intensity * 0.1;
        
        (element as HTMLElement).style.transform = `scale(${scale})`;
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      handleInteraction(e.clientX, e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        handleInteraction(touch.clientX, touch.clientY);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        handleInteraction(touch.clientX, touch.clientY);
      }
    };

    // Add both mouse and touch event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('touchmove', handleTouchMove, { passive: true });
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchstart', handleTouchStart);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus('sending');
    setFeedbackMessage('');

    emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then((result) => {
          console.log('SUCCESS!', result.text);
          setStatus('success');
          setFeedbackMessage('Your message has been sent successfully!');
          setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
      }, (error) => {
          console.log('FAILED...', error.text);
          setStatus('error');
          setFeedbackMessage('An error occurred. Please try again later.');
      });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'yonathantambani109@gmail.com',
      href: 'mailto:yonathantambani109@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '081386080431',
      href: 'tel:+62081386080431'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Indonesia, Bekasi',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/ynthn_mrcll/', label: 'Instagram' },
    { icon: TikTokIcon, href: 'https://www.tiktok.com/@yonttt', label: 'TikTok' },
    { icon: Facebook, href: 'https://www.facebook.com/yonathan.marcello.3/?locale=id_ID', label: 'Facebook' }
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-20 relative overflow-hidden">
      {/* Interactive 3D Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 glass rounded-full opacity-15 float-animation interactive-3d"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 glass opacity-10 float-animation interactive-3d" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-60 right-10 w-20 h-20 glass opacity-12 float-animation interactive-3d" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-60 left-20 w-16 h-16 glass rounded-full opacity-8 float-animation interactive-3d" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-40 left-1/2 w-16 h-16 glass opacity-14 float-animation interactive-3d" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 glass rounded-full opacity-9 float-animation interactive-3d" style={{ animationDelay: '5s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have a question or want to get in touch?
            Feel free to reach out anytime.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-dark rounded-xl p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-400/20">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always open to connecting with new people and discussing various topics.
                don't hesitate to reach out.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-all duration-300 group hover:translate-x-2 hover:scale-105"
                    >
                      <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center group-hover:bg-cyan-400/20 transition-all duration-300 group-hover:scale-110">
                        <Icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">{info.label}</p>
                        <p className="text-sm">{info.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-800">
                <p className="text-gray-300 mb-4">Follow me on social media:</p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        className="w-10 h-10 bg-cyan-400/10 rounded-lg flex items-center justify-center text-cyan-400 hover:bg-cyan-400/20 transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                        aria-label={social.label}
                      >
                        <Icon size={18} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-dark rounded-xl p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-400/20">
            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                {/* Add this hidden input. It will be sent automatically. */}
                <input 
                    type="hidden" 
                    name="time" 
                    value={new Date().toLocaleString('en-US', { dateStyle: 'long', timeStyle: 'short' })} 
                />
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    placeholder="John Doe"
                    required
                    disabled={status === 'sending'}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    placeholder="john@example.com"
                    required
                    disabled={status === 'sending'}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  placeholder="Subject of your message"
                  required
                  disabled={status === 'sending'}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                  placeholder="Write your message here..."
                  required
                  disabled={status === 'sending'}
                />
              </div>

              {/* Feedback Message */}
              {feedbackMessage && (
                 <div className={`p-3 rounded-lg flex items-center gap-2 text-sm ${
                    status === 'success' ? 'bg-green-900/50 text-green-300' : 
                    status === 'error' ? 'bg-red-900/50 text-red-300' : ''
                 }`}>
                  {status === 'success' && <CheckCircle size={18} />}
                  {status === 'error' && <XCircle size={18} />}
                  {feedbackMessage}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-cyan-400 text-black font-semibold py-4 px-6 rounded-lg hover:bg-cyan-300 transition-all duration-300 btn-glow flex items-center justify-center gap-2 disabled:bg-gray-600 disabled:cursor-not-allowed hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-400/30"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;