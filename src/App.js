import { useEffect } from 'react';
import Aos from 'aos';
import './App.css';
import Header from './header/Header';
import { Hero } from './UI/Hero';
import Exercise from './UI/Exercise';
import Start from './UI/Start';
import Pricing from './UI/Pricing';
import Testimonials from './UI/Testimonials';
import Footer from './UI/Footer';


function App() {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <>
    <Header /> 
    <Hero />
    <Exercise />
    <Start/>
    <Pricing />
    <Testimonials />
    <Footer />

    </>
      
  );
}

export default App;
