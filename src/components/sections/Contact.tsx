'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { MagneticBtn } from '@/components/ui/MagneticBtn';
import { CONTACT } from '@/lib/constants';

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };

    try {
      const res = await fetch('https://agent.progresswithai.com/webhook/935cec3c-422f-4a8e-8ff1-549198447a06', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        let errorMsg = 'Failed to send';
        try {
          const json = await res.json();
          errorMsg = json.error || errorMsg;
        } catch (e) {
          // Response body is not JSON
        }
        throw new Error(errorMsg);
      }

      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      setStatus('error');
      setErrorMsg(err.message || 'Something went wrong.');
    }
  };

  return (
    <section id="contact" className="py-28 relative">
      <div className="section-container flex flex-col items-center">
        {/* Centered Heading */}
        <SectionHeading
          label="Get in Touch"
          title="Let's Build Something That Works"
          index="05"
          subtitle="Have an AI system to take from prototype to production, or a process that eats your team's hours? Tell me about it. I usually reply within a day."
          className="items-center text-center mb-16"
        />

        <div className="w-full max-w-4xl grid md:grid-cols-2 gap-12 lg:gap-20 items-stretch mt-8">
          {/* Left Side: Centered Contact Cards */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="industrial-box p-6 md:p-8 flex flex-col items-center text-center gap-4 hover:border-accent/40 transition-all">
              <span className="font-mono text-[10px] uppercase tracking-widest text-accent font-bold">Email</span>
              <a href={`mailto:${CONTACT.email}`} className="font-grotesk text-xl md:text-2xl font-bold text-text hover:text-accent transition-colors">
                {CONTACT.email}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="industrial-box p-6 md:p-8 flex flex-col items-center text-center gap-4 hover:border-accent/40 transition-all">
              <span className="font-mono text-[10px] uppercase tracking-widest text-accent font-bold">Phone</span>
              <a href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`} className="font-grotesk text-xl md:text-2xl font-bold text-text hover:text-accent transition-colors">
                {CONTACT.phone}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.75, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="industrial-box p-6 md:p-8 flex flex-col items-center text-center gap-4 hover:border-accent/40 transition-all">
              <span className="font-mono text-[10px] uppercase tracking-widest text-accent font-bold">Network</span>
              <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="font-grotesk text-xl font-bold text-accent hover:underline hover:underline-offset-8 transition-all">
                LinkedIn Profile →
              </a>
            </motion.div>
          </div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, y: 36, scale: 0.97, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="industrial-box p-6 md:p-10 hover:border-accent/40 transition-colors">
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <label htmlFor="name" className="text-xs font-mono tracking-widest text-muted/70 uppercase font-bold">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your Full Name"
                  className="input-field"
                  disabled={status === 'loading'}
                />
              </div>

              <div className="flex flex-col gap-3">
                <label htmlFor="email" className="text-xs font-mono tracking-widest text-muted/70 uppercase font-bold">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="input-field"
                  disabled={status === 'loading'}
                />
              </div>

              <div className="flex flex-col gap-3">
                <label htmlFor="message" className="text-xs font-mono tracking-widest text-muted/70 uppercase font-bold">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about the process you want to automate..."
                  className="input-field resize-none"
                  disabled={status === 'loading'}
                />
              </div>

              <div className="mt-4">
                <MagneticBtn
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full justify-center py-4 text-xs tracking-widest font-bold uppercase transition-all"
                >
                  {status === 'loading' ? 'Sending…' : 'Send message'}
                </MagneticBtn>
              </div>

              {/* Status Messages */}
              <div className="min-h-6 mt-1 text-center">
                <AnimatePresence mode="wait">
                  {status === 'success' && (
                    <motion.p
                      key="success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-success text-sm font-semibold"
                    >
                      Thanks, your message is on its way. I'll reply within a day.
                    </motion.p>
                  )}
                  {status === 'error' && (
                    <motion.p
                      key="error"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-red-600 text-sm font-semibold"
                    >
                      {errorMsg}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
