import './index.css'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Works from "./components/Works";
import Reviews from "./components/Reviews";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <Works />
      <Services />
      <Reviews />
      <Footer />

    </div>
  );

};

export default App;
