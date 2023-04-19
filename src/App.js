import './App.css';
import { useState } from 'react'
import Navigation from './components/navigation'
import Footer from './components/footer'
import Home from './components/home'
function App() {
  return (
    < div className=" bg-fixed min-h-screen bg-gradient-to-r from-black via-gray-900 to-gray-900 max-w-screen overflow-hidden" >
      <Navigation />
      <Home />
      <Footer />

    </div >
  );
}

export default App;
