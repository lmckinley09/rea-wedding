import { useEffect } from 'react';
import './rsvp.css';
import { motion } from 'motion/react';
import { SelectedPage, type PageProps } from '../../shared/types';

const RSVP = ({ setSelectedPage }: PageProps) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://toriandciaranswedding.rsvpify.com/embed';
    script.async = true;
    script.onload = () => console.log('Form script loaded!');

    document.getElementById('rsvp-form-container')?.appendChild(script);

    return () => {
      document.getElementById('rsvp-form-container')?.removeChild(script);
    };
  }, []);

  return (
    <section
      id="rsvp"
      className="rsvp-section"
    >
      <motion.div
        className="rsvp-body"
        onViewportEnter={() => setSelectedPage(SelectedPage.RSVP)}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h2 className="rsvp-title">RSVP</h2>
        </motion.div>

        <div id="rsvp-form-container" />
        <div className="rsvp-footer" />
      </motion.div>
    </section>
  );
};

export default RSVP;
