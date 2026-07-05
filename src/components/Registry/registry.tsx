import { type PageProps, SelectedPage } from '../../shared/types';
import { motion } from 'framer-motion';
// import japan from "/japan.png";
import './registry.css';
import { useState } from 'react';

const Registry = ({ setSelectedPage }: PageProps) => {
  const [showBankDetails, setShowBankDetails] = useState(false);

  return (
    <section
      id="registry"
      className="registry-section"
    >
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Registry)}>
        <motion.div
          className="registry-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="registry-content">
            <div>
              <h2>Registry</h2>
              <p className="registry-text">
                We are so grateful to have you celebrate our special day with us. We won’t be having
                a traditional gift registry; however, if you’d like to mark the occasion with a
                gift, we would be incredibly grateful for a contribution towards our honeymoon fund.
                This will help us create wonderful memories as we start our married life together!
              </p>

              <button
                className="registry-button"
                onClick={() => setShowBankDetails(!showBankDetails)}
              >
                Details
              </button>
              {showBankDetails && (
                <div className="registry-details">
                  <p>
                    <b>Name: </b> Ciaran Tazzioli
                  </p>
                  <p>
                    <b>Bank Name: </b> Starling Bank
                  </p>
                  <p>
                    <b>Sort Code: </b> 60-83-71
                  </p>
                  <p>
                    <b>Account Number: </b> 10721346
                  </p>
                </div>
              )}
            </div>
            <div className="registry-image-container">
              {/* <img src={japan} alt="Registry Icon" className="registry-image" /> */}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Registry;
