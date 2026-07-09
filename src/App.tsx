import {
  Navbar,
  Home,
  Wedding,
  ContactUs,
  Footer,
  // Registry,
  RSVP,
} from './components';
import { useState } from 'react';
import { SelectedPage } from './shared/types';

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);

  return (
    <div>
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
      <Footer />
    </div>
  );
}

export default App;
