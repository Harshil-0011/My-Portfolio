import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactPortal = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('IDLE'); // IDLE, SENDING, SUCCESS, ERROR, COPIED
  const [copyStatus, setCopyStatus] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('harshil.gorasiya.0011@gmail.com');
    setCopyStatus(true);
    setTimeout(() => setCopyStatus(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('SENDING');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "f768b753-9133-4f99-906d-e435f9923838",
          ...formData,
          from_name: "QUANTUM_MONO_PORTAL"
        }),
      });

      if (response.ok) {
        setStatus('SUCCESS');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('IDLE'), 5000);
      } else {
        setStatus('ERROR');
      }
    } catch (err) {
      setStatus('ERROR');
    }
  };

  return (
    <section className="min-h-screen bg-obsidian flex flex-col justify-center px-8 py-32 relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
      </div>

      <div className="max-w-[1400px] mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div>
            <span className="font-mono text-xs text-safety-orange mb-8 block uppercase tracking-widest">
              [ESTABLISH_CONNECTION]
            </span>
            <h2 className="text-huge font-headline font-black text-pure-white uppercase mb-12">
              Start<br />Thread
            </h2>
            <div className="space-y-12">
               <div>
                  <p className="font-mono text-[10px] text-pure-white/40 uppercase mb-4 tracking-widest">E-Mail</p>
                  <div className="flex flex-col items-start gap-2">
                    <a href="mailto:harshil.gorasiya.0011@gmail.com" className="text-3xl font-headline font-black text-pure-white hover:text-safety-orange transition-colors uppercase">
                      harshil.gorasiya.0011@gmail.com
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="font-mono text-[10px] text-safety-orange/60 hover:text-safety-orange transition-colors uppercase tracking-widest"
                    >
                      {copyStatus ? '[COPIED_TO_CLIPBOARD]' : '[COPY_ADDRESS]'}
                    </button>
                  </div>
               </div>
               <div>
                  <p className="font-mono text-[10px] text-pure-white/40 uppercase mb-4 tracking-widest">Social_Nodes</p>
                  <div className="flex gap-8">
                    <a href="https://linkedin.com/in/harshil-gorasiya" target="_blank" rel="noreferrer" className="text-xl font-headline font-black text-pure-white hover:text-safety-orange transition-colors uppercase">LinkedIn</a>
                    <a href="https://github.com/N0t-Harshil" target="_blank" rel="noreferrer" className="text-xl font-headline font-black text-pure-white hover:text-safety-orange transition-colors uppercase">GitHub</a>
                  </div>
               </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-12 border border-pure-white/10 bg-pure-white/[0.02] backdrop-blur-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="space-y-2 group">
                <label className="font-mono text-[10px] text-pure-white/40 uppercase tracking-widest block">{'// Identity'}</label>
                <input
                  type="text"
                  required
                  placeholder="NAME_OR_ORG"
                  className="w-full bg-transparent border-b border-pure-white/10 py-4 font-headline text-2xl text-pure-white focus:outline-none focus:border-safety-orange transition-colors uppercase"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2 group">
                <label className="font-mono text-[10px] text-pure-white/40 uppercase tracking-widest block">{'// Protocol'}</label>
                <input
                  type="email"
                  required
                  placeholder="EMAIL@DOMAIN.COM"
                  className="w-full bg-transparent border-b border-pure-white/10 py-4 font-headline text-2xl text-pure-white focus:outline-none focus:border-safety-orange transition-colors uppercase"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div className="space-y-2 group">
                <label className="font-mono text-[10px] text-pure-white/40 uppercase tracking-widest block">{'// Payload'}</label>
                <textarea
                  required
                  rows="4"
                  placeholder="MESSAGE_CONTENT..."
                  className="w-full bg-transparent border-b border-pure-white/10 py-4 font-headline text-2xl text-pure-white focus:outline-none focus:border-safety-orange transition-colors uppercase resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'SENDING'}
                className="w-full magnetic-button"
              >
                {status === 'SENDING' ? 'TRANSMITTING...' : 'SEND_MESSAGE'}
              </button>

              <AnimatePresence>
                {status === 'SUCCESS' && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="font-mono text-[10px] text-safety-orange text-center tracking-widest"
                  >
                    TRANSMISSION_COMPLETE. I WILL RESPOND SHORTLY.
                  </motion.p>
                )}
                {status === 'ERROR' && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="font-mono text-[10px] text-red-500 text-center tracking-widest"
                  >
                    TRANSMISSION_FAILED. PLEASE RETRY OR USE DIRECT EMAIL.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPortal;
