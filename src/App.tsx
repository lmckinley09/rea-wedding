import {
  Navbar,
  Home,
  Wedding,
  ContactUs,
  Footer,
  // Registry,
  RSVP,
  EntryForm,
} from './components';
import { useState } from 'react';
import { SelectedPage } from './shared/types';
import { motion } from 'framer-motion';

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSuccessfulAuth = () => {
    // Scroll to top for most browsers
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Fallback for mobile browsers
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    setIsAuthenticated(true);
  };

  return (
    <div>
      {isAuthenticated ? (
        <>
          <Navbar
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Home setSelectedPage={setSelectedPage} />
          {/* <Story setSelectedPage={setSelectedPage} /> */}
          <Wedding setSelectedPage={setSelectedPage} />
          {/* <Registry setSelectedPage={setSelectedPage} /> */}
          <ContactUs setSelectedPage={setSelectedPage} />
          <RSVP setSelectedPage={setSelectedPage} />
        </>
      ) : (
        <>
          <motion.div
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
            <EntryForm onSuccess={handleSuccessfulAuth} />
          </motion.div>
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
