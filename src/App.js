import './css/style.css'
import Header from './components/Header';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
