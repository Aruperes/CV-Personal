import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Portofolio from "./components/portofolio";
import Services from "./components/services";
import Container from "./components/container";
import "./config/Firebase";

function App() {
  return (
    <div>
      <Container />
      <Home />
      <About />
      <Portofolio />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
