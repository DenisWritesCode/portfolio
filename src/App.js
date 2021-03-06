import { useState } from 'react';

import Navbar from "./components/Navbar";
import MobileNav from './components/MobileNav';
import SkillSet from './components/SkillSet';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';

function App() {
  const [mobileShow, setmobileShow] = useState(false);

  const onHamClick = () => {
    setmobileShow(!mobileShow);   
  };
  return (
    <div className="App">
      <Navbar onHamClick={onHamClick} />
      {mobileShow && <MobileNav />}
      <Hero />
      <SkillSet />
      <Testimonials />
    </div>
  );
}

export default App;