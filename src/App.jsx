import './index.css'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Works from "./components/Works";
import Nosotros from "./components/Nosotros";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {

  return (
    <div>
      
      <Navbar />
      <Home />
      <Works />
      <Services />
      <Nosotros />
      <Footer />

    </div>
  );

};

export default App;
