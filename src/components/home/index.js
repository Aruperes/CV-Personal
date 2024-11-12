function Home() {
  return (
    <section className="home" id="home">
      <div className="container home-container">
        <div className="left">
          <h3>Hello, It's Me</h3>
          <h1>
            <span>Revando</span>
          </h1>
          {/* you can edit `multiple-text` into ( /assets/js/script.js ), then search and edit `strings` in TYPED Js  */}
          <p>
            I’m a 3rd-year Informatics student at Klabat University, deeply
            interested in both mobile and web application development. I am
            always excited to learn new technologies and enhance my skills in
            building responsive and efficient applications. My goal is to bridge
            innovative ideas with practical solutions to deliver impactful
            software.
            <span className="multiple-text" />
          </p>
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
        </div>
        <div className="right">
          {/* add your home or profile photo in src from assets/images/  */}
          <img src="../images/fd.jpg" alt />
        </div>
      </div>
    </section>
  );
}

export default Home;
