import React from 'react';
import { Header } from './Components/Header';
import { Home } from './pages/Home'
import { Info } from './pages/Info'
import { FooterHome } from './Components/HomeFooter';
import { FooterInfo } from './Components/InfoFooter'
import { SecondHome } from './pages/SecondHome'
import { Footer } from './Components/Footer'

function App() {
  return (
   <div className="main" >
     <Header />
      <Home />
       <FooterHome />
       <Info />
       <FooterInfo />
       <SecondHome />
       <Footer />

   </div> 
  )
}

export default App;
