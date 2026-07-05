import { type PageProps, SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import "./home.css";
import cherub from "/cherub.png";
import AnchorLinkDefault from "react-anchor-link-smooth-scroll";

const AnchorLink = (AnchorLinkDefault as any)?.default ?? AnchorLinkDefault;

const Home = ({ setSelectedPage }: PageProps) => {
  return (
    <section id="home" className="home-section">
      <img src={cherub} className="cherub-right" alt="cherub" loading="eager" />

      <motion.div
        className="home-container"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        initial="hidden"
        animate="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="home-header">
          <div>
            <h1 className="main-heading">
              Tori <span className="alt-font">& </span>Ciaran
            </h1>
            <span className="subheading">Thursday 29 October 2026</span>
          </div>

          <motion.div
            className="home-button-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <AnchorLink className="rsvp-button" href={`#rsvp`}>
              RSVP
            </AnchorLink>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
