import { useState } from 'react';

import Navbar from "./components/Navbar";
import MobileNav from './components/MobileNav';
import Resume from './components/Resume';
import Hero from './components/Hero';
import HeroFull from './components/HeroFull';

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
      <Resume />
    </div>
  );
}

export default App;