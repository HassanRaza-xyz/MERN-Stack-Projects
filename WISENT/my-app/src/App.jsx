import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import Test from '../components/test';
import Appp from '../components/App';
import Faqq from '../components/Faq';
import Card from '../components/cards';
import Footer from '../components/Fotter';
import TechSection from '../components/minicard';
import Textmiddle from '../components/text';
import Headerbutton from '../components/hdbutton';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);

  return (
    <>
      <div data-aos="">
        <Test />
      </div>
      <div data-aos="">
        <Headerbutton />
      </div>
      <div data-aos="fade-up">
        <TechSection />
      </div>
      <div data-aos="fade-up">
        <Appp />
      </div>
      <div data-aos="fade-up">
        <Faqq />
      </div>
      <div data-aos="fade-up">
        <Card />
      </div>
      <div data-aos="fade-up">
        <Textmiddle />
      </div>
      <div data-aos="fade-up">
        <Footer />
      </div>
    </>
  );
}

export default App;