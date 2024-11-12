function Portofolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="title">
        <h2>
          Latest <span>Project</span>
        </h2>
      </div>
      <div className="container portfolio-container">
        <div className="portfolio-buttons">
          <button className="btn portfolio-tab active" onclick="tabOpen('all')">
            Web and App
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
