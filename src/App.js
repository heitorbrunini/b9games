import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import About from "./components/About";
import Games from "./components/Games";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <div className="App" id="background">
      <NavBar/>
      <Carousel/>
      <About/>
      <Games/>
      <Footer/>
    </div>
  );
}

export default App;
