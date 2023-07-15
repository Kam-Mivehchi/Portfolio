import './App.css';
import React, { lazy } from 'react';
const Navigation = lazy(() => import('./components/navigation'))
const Footer = lazy(() => import('./components/footer'))
const Home = lazy(() => import('./components/home'))
function App() {
  return (
    < div className=" bg-fixed min-h-screen bg-gradient-to-r from-black via-gray-900 to-gray-900 max-w-screen overflow-hidden relative " >
      <Navigation />
      <Home />
      <Footer />

    </div >
  );
}

export default App;
