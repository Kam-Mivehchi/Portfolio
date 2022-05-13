import './App.css';
import Navigation from './components/navigation'
import Footer from './components/footer'
import Home from './components/home'
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <ParallaxProvider>

      <div className="font-['Lato'] bg-fixed min-h-screen bg-gradient-to-r from-black via-gray-900 to-gray-900 " >
        <Navigation />
        <Home />
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

export default App;
