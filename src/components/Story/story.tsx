import { SelectedPage, type PageProps } from '../../shared/types';
import { motion } from 'framer-motion';
import './story.css';
// import couple from "/couple.png";

const Story = ({ setSelectedPage }: PageProps) => {
  return (
    <section
      id="ourstory"
      className="story"
    >
      <div className="story-section">
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Story)}>
          <motion.div
            className="story-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.2 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <h2 className="story-title">Our Story</h2>
            <div className="story-container">
              <div className="story-text">
                {/* <p>The story</p>
                <p>fill in</p> */}
                <p>
                  "Your love and support over the years has truly been appreciated, and we thank you
                  all for choosing to share this special day with us. See you in September!" - Tori
                  & Ciaran
                </p>
              </div>
              <div className="story-image">
                {/* <img src={couple} alt="Couple Photo" className="couple-image" /> */}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Story;
