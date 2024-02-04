import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Category from './components/Category'
import Promo from './components/Promo'
import About from './components/About'
import Menu from './components/Menu'
import Review from './components/Review'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {

  const [isScrolled, setIsScrolled ] = useState(false);

  const [isMode, setIsMode ] = useState(false);

  useEffect(()=>{

    window.addEventListener('scroll', handleScroll);

    return ()=> window.removeEventListener('scroll', handleScroll);

  }, [isScrolled])


  function handleScroll(e){
    // console.log(window.scrollY);
    if(window.scrollY>50){
      setIsScrolled(true);
    }else{
      setIsScrolled(false);
    }
  }

  const isScrolledClass = isScrolled ? 'bottom-4' : "-bottom-1/2";

  const isModeClass = isMode ? 'dark' : '';

  return (
    <div className={`main ${isModeClass}`}>

      <a href='#' className={`fixed right-4  bg-secondaryColor shadow-sm inline-block px-4 py-2 rounded-full text-xl text-black z-50 hover:-translate-y-1 ease-linear duration-500 ${isScrolledClass}`}>
      <i className="fa-solid fa-arrow-up"></i>
      </a>

      <Header isScrolled={isScrolled} isMode={isMode} setIsMode={setIsMode} />

      <Hero />

      <Category />

      <Promo /> 

      <About />

      <Menu />

      <Review />

      <Contact />

      <Footer />

    </div>
  )
}

export default App