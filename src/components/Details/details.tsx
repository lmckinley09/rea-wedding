import { SelectedPage, type PageProps } from '../../shared/types';
import { motion } from 'framer-motion';
import venue from '/venue.jpeg';
import tc from '/tc.jpg';
import corick from '/corick-house.jpg';
import './details.css';

const Details = ({ setSelectedPage }: PageProps) => {
  return (
    <section
      id="thedetails"
      className="details-section"
    >
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Details)}>
        <div className="details-container">
          <div className="details-content">
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
              <h2>Deets</h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="details-subheading">Accommodation</p>
              <p className="details-detail">
                For guests wishing to stay overnight accommodation is available at Corick House
                Hotel & Spa. Make sure to book early to avoid disappointment. We'd love for you to
                stay and celebrate with us!
              </p>

              <p className="details-subheading">Gifts</p>
              <p className="details-detail">
                We're lucky enough to have everything we need, so your presence is more than enough.
              </p>

              <p className="details-subheading">Evening Guests</p>
              <p className="details-detail">
                For those joining us in the evening, the real party kicks off from 8pm at Corick
                House Hotel. Come ready for music, dancing and a great night altogether - We'll save
                you a spot on the dance floor!
              </p>
            </motion.div>
          </div>

          <div className="details-gallery">
            {[corick, tc, venue].map((img, index) => (
              <motion.div
                key={index}
                className="gallery-item"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <img
                  src={img}
                  className="gallery-image"
                  alt={`Details ${index + 1}`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Details;
