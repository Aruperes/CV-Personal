import { useState, useEffect } from "react";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Portofolio from "./components/portofolio";
import Services from "./components/services";
import Container from "./components/container";
import "./config/Firebase";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loader-container">
          <ClipLoader color="#36d7b7" size={50} />
        </div>
      ) : (
        <>
          <Container />
          <Home />
          <About />
          <Portofolio />
          <Services />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;
