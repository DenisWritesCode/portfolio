import { useState } from 'react';

import Navbar from "./components/Navbar";
import MobileNav from './components/MobileNav';
import SkillSet from './components/SkillSet';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  const [mobileShow, setmobileShow] = useState(false);

  const onHamClick = () => {
    if (!mobileShow) {
      window.scrollTo({
        top: 0,
        behaviour: 'smooth'
      });
    }
    setmobileShow(!mobileShow);
  };
  return (
    <div className="App">
      <Navbar onHamClick={onHamClick} />
      {mobileShow && <MobileNav onHamClick={onHamClick} />}
      <Hero />
      <SkillSet />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;