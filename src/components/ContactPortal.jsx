import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactPortal = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('IDLE'); // IDLE, SENDING, SUCCESS, ERROR

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('SENDING');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "f768b753-9133-4f99-906d-e435f9923838",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Contact from Portfolio: ${formData.name}`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('SUCCESS');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('IDLE'), 5000);
      } else {
        setStatus('ERROR');
      }
    } catch (error) {
      console.error("Form error:", error);
      setStatus('ERROR');
    }
  };

  return (
    <section id="portal" className="py-40 px-10 bg-space-950 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">

        <div>
          <h2 className="text-7xl font-headline font-black text-silver uppercase mb-8 leading-[0.85]">
            Establish<br />
            <span className="text-cyan-glow">Connection</span>
          </h2>
          <p className="font-body text-xl text-silver/40 max-w-md leading-relaxed mb-12">
            Ready to integrate advanced intelligence into your infrastructure? Initialize the communication protocol below.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-12 h-12 glass flex items-center justify-center group-hover:bg-cyan-glow/10 transition-colors">
                <span className="text-cyan-glow font-mono text-xs">01</span>
              </div>
              <div>
                <p className="font-mono text-[10px] text-silver/20 uppercase tracking-widest mb-1">Direct Comms</p>
                <p className="font-headline font-bold text-lg text-silver group-hover:text-cyan-glow transition-colors">harshil.gorasiya.0011@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-12 h-12 glass flex items-center justify-center group-hover:bg-cyan-glow/10 transition-colors">
                <span className="text-cyan-glow font-mono text-xs">02</span>
              </div>
              <div>
                <p className="font-mono text-[10px] text-silver/20 uppercase tracking-widest mb-1">Secure Line</p>
                <p className="font-headline font-bold text-lg text-silver group-hover:text-cyan-glow transition-colors">+49 155 6351 7346</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="glass p-12 relative"
        >
          <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-cyan-glow/30 uppercase">
            Protocol: HTTPS // AES-256
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-2">
              <label className="font-mono text-[10px] text-silver/40 uppercase tracking-widest ml-1">Identity // Name</label>
              <input
                required
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-space-950 border border-silver/10 p-4 font-body text-silver focus:border-cyan-glow/50 outline-none transition-colors"
                placeholder="SYSTEM_ENTITY_ID"
              />
            </div>

            <div className="space-y-2">
              <label className="font-mono text-[10px] text-silver/40 uppercase tracking-widest ml-1">Archive // Email</label>
              <input
                required
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-space-950 border border-silver/10 p-4 font-body text-silver focus:border-cyan-glow/50 outline-none transition-colors"
                placeholder="CONTACT_NODES@DOMAIN.COM"
              />
            </div>

            <div className="space-y-2">
              <label className="font-mono text-[10px] text-silver/40 uppercase tracking-widest ml-1">Protocol // Message</label>
              <textarea
                required
                rows="4"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-space-950 border border-silver/10 p-4 font-body text-silver focus:border-cyan-glow/50 outline-none transition-colors resize-none"
                placeholder="INPUT_COMMUNICATION_DATA..."
              />
            </div>

            <button
              disabled={status === 'SENDING'}
              className="btn-premium w-full mt-4 flex items-center justify-center gap-4"
            >
              <AnimatePresence mode="wait">
                {status === 'IDLE' && <motion.span key="idle">Send Transmission</motion.span>}
                {status === 'SENDING' && <motion.span key="sending">Transmitting...</motion.span>}
                {status === 'SUCCESS' && <motion.span key="success" className="text-green-400">Success: Data Synchronized</motion.span>}
                {status === 'ERROR' && <motion.span key="error" className="text-red-400">Error: Uplink Failed</motion.span>}
              </AnimatePresence>
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactPortal;
