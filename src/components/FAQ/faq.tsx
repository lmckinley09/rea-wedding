import { motion } from 'framer-motion';
import { type PageProps, SelectedPage } from '../../shared/types';
import { ChevronDownIcon, ChevronUpIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/solid';
import './faq.css';
import { useState } from 'react';

// Expandable FAQ item component
const FaqItem: React.FC<{
  question: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}> = ({ question, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div
      className="faq-item"
      onClick={() => setOpen((v) => !v)}
      aria-expanded={open}
    >
      <div className="faq-header">
        <h3 className="faq-question">
          <QuestionMarkCircleIcon className="faq-icon" />
          {question}
        </h3>

        {open ? (
          <ChevronUpIcon className="chevron-icon" />
        ) : (
          <ChevronDownIcon className="chevron-icon" />
        )}
      </div>
      {open && <div className="faq-answer">{children}</div>}
    </div>
  );
};

const FAQ = ({ setSelectedPage }: PageProps) => {
  return (
    <section
      id="faqs"
      className="faq-section"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Faqs)}
        className="faq-container"
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
          <div className="faq-title">
            <div className="faq-header-content">
              <h2>Frequently Asked Questions</h2>
            </div>
          </div>
        </motion.div>

        <div className="faq-content">
          <FaqItem question="Is there parking available?">
            Yes, there is free parking available at the{' '}
            <a
              className="faq-link"
              href="https://maps.app.goo.gl/2bvcAphc29PNWA8S7"
              target="_blank"
              rel="noopener noreferrer"
            >
              venue
            </a>
            .
          </FaqItem>

          <FaqItem question="What is the dress code?">
            Our wedding is semi-formal, no need for a tuxedo or ballgown.
          </FaqItem>
          <FaqItem question="Can I bring a plus one?">
            Unfortunately no, please do not arrive with someone who was not included on your
            invitation. There will not be a seat or food available for them.
          </FaqItem>
          <FaqItem question="Can I update my RSVP?">
            Yes, you can update your RSVP at any time until the 20th September. We understand that plans
            can change, so please let us know if you need to make any adjustments after this date.
            You can also contact us at{' '}
            <a
              href="mailto:vrea624@gmail.com"
              className="email-link"
            >
              vrea624@gmail.com
            </a>
            .
          </FaqItem>

          {/* <FaqItem question="Is there accomodation nearby?">
            Yes, there are several hotels near the venue, including: Yes, there
            are several hotels near the venue, including:
            <ul>
              <li>
                <a
                  className="faq-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://theryandale.com/accomodation/"
                >
                  Ryandale Moy
                </a>
              </li>
              <li>
                <a
                  className="faq-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://charlemonthouse.com/"
                >
                  Charlemont Manor Moy
                </a>
              </li>
              <li>
                <a
                  className="faq-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://spicecottages.com/"
                >
                  Spice Cottages Moy
                </a>
              </li>
            </ul>
          </FaqItem> */}
        </div>
      </motion.div>
    </section>
  );
};

export default FAQ;
