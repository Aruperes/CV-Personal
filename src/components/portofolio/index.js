import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
function Portofolio() {
  const [porto, setPorto] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const portoRef = ref(db, "porto");

    onValue(portoRef, (snapshot) => {
      const data = snapshot.val();
      setPorto(data);
    });
  }, []);
  return (
    <section className="portfolio" id="portfolio">
      <div className="title">
        <h2>
          {porto.title} <span>{porto.subTitle}</span>
        </h2>
      </div>
      <div className="container portfolio-container">
        <div className="portfolio-buttons">
          <button className="btn portfolio-tab active" onclick="tabOpen('all')">
            {porto.wp}
          </button>
        </div>
        <div className="tab-content active-content" id="all">
          {/* add your image or mockup project in src for tab-content all  from assets/images/ */}
          <div className="image">
            <img src="../images/tomat.png" alt />
          </div>
          <div className="image">
            <img src="../images/rat.png" alt />
          </div>
          <div className="image">
            <img src="../images/vd.png" alt />
          </div>
          <div className="image">
            <img src="../images/inter.png" alt />
          </div>
          <div className="image">
            <img src="../images/img12.png" alt />
          </div>
          <div className="image">
            <img src="../images/img10.png" alt />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portofolio;
