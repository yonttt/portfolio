import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Loader2, CheckCircle, XCircle } from 'lucide-react';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');

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
      value: 'alex.chen@example.com',
      href: 'mailto:alex.chen@example.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 glass rounded-full opacity-10 float-animation"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 glass rotate-45 opacity-10 float-animation" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together
            to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-dark rounded-xl p-8 hover-lift">
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always interested in new opportunities and exciting projects.
                Whether you're a company looking to hire, or you're a fellow developer
                who wants to collaborate, I'd love to hear from you.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors">
                        <Icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">{info.label}</p>
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
                        className="w-10 h-10 bg-cyan-400/10 rounded-lg flex items-center justify-center text-cyan-400 hover:bg-cyan-400/20 transition-colors hover:scale-110 transform duration-300"
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
          <div className="glass-dark rounded-xl p-8 hover-lift">
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
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
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
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
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
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  placeholder="Project Discussion"
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
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                  placeholder="Tell me about your project..."
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
                className="w-full bg-cyan-400 text-black font-semibold py-4 px-6 rounded-lg hover:bg-cyan-300 transition-all duration-300 btn-glow flex items-center justify-center gap-2 disabled:bg-gray-600 disabled:cursor-not-allowed"
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