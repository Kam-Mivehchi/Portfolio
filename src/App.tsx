import './App.css';
import React, { lazy } from 'react';
const Navigation = lazy(() => import('./components/navigation'));
const Footer = lazy(() => import('./components/footer'));
const Home = lazy(() => import('./components/home'));
function App() {
  return (
    <div className=" bg-fixed   relative ">
      <Navigation />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
