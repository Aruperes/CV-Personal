import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

function Home() {
  const [home, setHome] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const homeRef = ref(db, "home");

    onValue(homeRef, (snapshot) => {
      const data = snapshot.val();
      setHome(data);
    });
  }, []);
  return (
    <section className="home" id="home">
      <div className="container home-container">
        <div className="left">
          <h3>{home.title}</h3>
          <h1>
            <span>{home.name}</span>
          </h1>
          {home.subTitle}
          <p>
            <span className="multiple-text" />
          </p>
          <Fade>
            <div className="social-icons-container">
              <div className="social-icons">
                <a href="https://www.instagram.com/rvndars/">
                  <i className="ri-instagram-line" />
                </a>
                <a href="https://www.instagram.com/rvndars/">
                  <i className="ri-twitter-line" />
                </a>
                <a href="https://github.com/Aruperes">
                  <i className="ri-github-line" />
                </a>
                <a href="https://www.linkedin.com/in/revando-aruperes-072723286/">
                  <i className="ri-linkedin-line" />
                </a>
              </div>
            </div>
          </Fade>
        </div>
        <div className="right">
          <img src={`data:image/jpeg;base64, ${home.image}`} alt="profile" />
        </div>
      </div>
    </section>
  );
}

export default Home;
