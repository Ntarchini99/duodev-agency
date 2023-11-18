import './index.css'
import './app.css'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Works from "./components/Works";
import Nosotros from "./components/Nosotros";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Form from "./components/Form";

function App() {

  return (
    <div>
      
      <Navbar />
      <Home />
      <Works />
      <Services />
      <Form/>
      <Nosotros />
      <Footer />

    </div>
  );

};

export default App;
