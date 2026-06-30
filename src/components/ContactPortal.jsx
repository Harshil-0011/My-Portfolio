import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const ContactPortal = () => {
  const { t } = useLanguage();
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
      // NOTE: To receive emails at your own address, get a free access key from https://web3forms.com/
      // and replace the 'access_key' value below.
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: "f768b753-9133-4f99-906d-e435f9923838",
          ...formData,
          subject: "New Message from Portfolio",
          from_name: "QUANTUM_MONO_PORTAL",
          botcheck: ""
        }),
      });

      if (response.ok) {
        setStatus('SUCCESS');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('IDLE'), 5000);
      } else {
        setStatus('ERROR');
      }
    } catch {
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
              {t('portal.connection')}
            </span>
            <h2 className="text-huge font-headline font-black text-pure-white uppercase mb-12">
              {t('portal.title').split(' ')[0]}<br />{t('portal.title').split(' ')[1]}
            </h2>
            <div className="space-y-12">
               <div>
                  <p className="font-mono text-[10px] text-pure-white/40 uppercase mb-4 tracking-widest">{t('portal.email')}</p>
                  <div className="flex flex-col items-start gap-2">
                    <a href="mailto:harshil.gorasiya.0011@gmail.com" className="text-3xl font-headline font-black text-pure-white hover:text-safety-orange transition-colors uppercase">
                      harshil.gorasiya.0011@gmail.com
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="font-mono text-[10px] text-safety-orange/60 hover:text-safety-orange transition-colors uppercase tracking-widest"
                    >
                      {copyStatus ? t('portal.copied') : t('portal.copy')}
                    </button>
                  </div>
               </div>
               <div>
                  <p className="font-mono text-[10px] text-pure-white/40 uppercase mb-4 tracking-widest">{t('portal.socials')}</p>
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
                <label className="font-mono text-[10px] text-pure-white/40 uppercase tracking-widest block">{t('portal.identity')}</label>
                <input
                  type="text"
                  required
                  placeholder={t('portal.placeholderName')}
                  className="w-full bg-transparent border-b border-pure-white/10 py-4 font-headline text-2xl text-pure-white focus:outline-none focus:border-safety-orange transition-colors uppercase"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2 group">
                <label className="font-mono text-[10px] text-pure-white/40 uppercase tracking-widest block">{t('portal.protocol')}</label>
                <input
                  type="email"
                  required
                  placeholder={t('portal.placeholderEmail')}
                  className="w-full bg-transparent border-b border-pure-white/10 py-4 font-headline text-2xl text-pure-white focus:outline-none focus:border-safety-orange transition-colors uppercase"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div className="space-y-2 group">
                <label className="font-mono text-[10px] text-pure-white/40 uppercase tracking-widest block">{t('portal.payload')}</label>
                <textarea
                  required
                  rows="4"
                  placeholder={t('portal.placeholderMessage')}
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
                {status === 'SENDING' ? t('portal.transmitting') : t('portal.send')}
              </button>

              <AnimatePresence>
                {status === 'SUCCESS' && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="font-mono text-[10px] text-safety-orange text-center tracking-widest"
                  >
                    {t('portal.success')}
                  </motion.p>
                )}
                {status === 'ERROR' && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="font-mono text-[10px] text-red-500 text-center tracking-widest"
                  >
                    {t('portal.error')}
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
