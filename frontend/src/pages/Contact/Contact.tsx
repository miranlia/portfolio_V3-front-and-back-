// frontend/src/pages/Contact/Contact.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '../../components/ContactForm/ContactForm';
import Terminal from '../../components/Terminal/Terminal';
import Section from '../../components/Section/Section';

const Contact: React.FC = () => {
  const terminalLines = [
    { type: 'command' as const, content: 'investor@unicorn:~$ miranda --hire' },
    { 
      type: 'output' as const, 
      content: '✅ Ready to join your rocket ship. Let\'s talk equity, impact, and changing the world.',
      highlight: true 
    },
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'miranda@buildsomething.epic',
      action: () => window.open('mailto:miranda@buildsomething.epic'),
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'Vancouver, BC, Canada',
      action: () => {},
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Response Time',
      value: '< 24 hours',
      action: () => {},
    },
  ];

  return (
    <div className="pt-20">
      <Section className="py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="section-title mb-4">
            LET'S BUILD TOGETHER
          </h1>
          <p className="section-subtitle">
            Ready to turn your idea into the next unicorn?
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Terminal Preview */}
            <Terminal lines={terminalLines} className="mb-8" />

            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary uppercase tracking-wider">
                GET IN TOUCH
              </h3>
              
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  onClick={info.action}
                  className={`flex items-center gap-4 p-4 bg-secondary/50 border border-gray rounded-lg transition-all duration-300 ${
                    info.action !== (() => {}) ? 'hover:border-primary cursor-pointer hover:bg-secondary/70' : ''
                  }`}
                >
                  <div className="text-accent">{info.icon}</div>
                  <div>
                    <p className="font-semibold text-light">{info.title}</p>
                    <p className="text-gray-light">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary rounded-lg p-6"
            >
              <h4 className="text-xl font-bold text-primary mb-4">
                💡 Looking for a co-founder?
              </h4>
              <p className="text-gray-light mb-4">
                I'm always open to the right opportunity. If you're building something 
                that could change the world, let's talk.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="bg-success/20 text-success px-3 py-1 rounded-full">
                  ✓ Equity discussions
                </span>
                <span className="bg-warning/20 text-warning px-3 py-1 rounded-full">
                  ✓ Technical leadership
                </span>
                <span className="bg-accent/20 text-accent px-3 py-1 rounded-full">
                  ✓ Full-stack development
                </span>
              </div>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-center p-6 border border-gray rounded-lg"
            >
              <p className="text-gray-light mb-2">Recent response rate</p>
              <div className="text-3xl font-bold text-success">100%</div>
              <p className="text-xs text-gray mt-1">within 24 hours</p>
            </motion.div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
