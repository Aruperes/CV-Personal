import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
function Container() {
  const [Container, setContainer] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const headerRef = ref(db, "container");

    onValue(headerRef, (snapshot) => {
      const data = snapshot.val();
      setContainer(data);
    });
  }, []);
  return (
    <nav>
      <div className="container nav-container">
        <a href="index.html" className="logo">
          {Container.title}
          <span>{Container.subTitle}</span>
        </a>
        <ul className="navlist">
          <li>
            <a href="#home">home</a>
          </li>
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#services">services</a>
          </li>
          <li>
            <a href="#portfolio">portfolio</a>
          </li>
          <li>
            <a href="#contact">contact</a>
          </li>
        </ul>
        <div className="nav-icons">
          <div id="menu-btn" className="ri-menu-line" />
        </div>
      </div>
    </nav>
  );
}

export default Container;
