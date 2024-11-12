function About() {
  return (
    <section className="about" id="about">
      <div className="container about-container">
        <div className="left">
          {/* add your photo in src for About page from assets/images/ */}
          <img src="../images/profile.jpg" alt />
        </div>
        <div className="right">
          <div className="title">
            <h2>
              About <span>Me</span>
            </h2>
          </div>
          <h3>
            Hello! I'm a passionate Front-end Web Developer with a keen eye for
            creating visually appealing, user-friendly websites and web
            applications. With a strong foundation in HTML, CSS, and JavaScript,
            along with expertise in modern frameworks like React, I strive to
            bring seamless digital experiences to life.
          </h3>
          <div className="container">
            <div className="progress-bar">
              <div className="outer-circle">
                <div className="inner-circle">
                  <div className="html-number number">
                    <h4>JavaScript</h4>
                  </div>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="160px"
                height="160px"
              >
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stopColor="#9b2fff" />
                    <stop offset="100%" stopColor="#ff2f48" />
                  </linearGradient>
                </defs>
                <circle cx={80} cy={80} r={70} strokeLinecap="round" />
              </svg>
            </div>
            <div className="progress-bar">
              <div className="outer-circle">
                <div className="inner-circle">
                  <div className="html-number number">
                    <h4>React js</h4>
                  </div>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="160px"
                height="160px"
              >
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stopColor="#9b2fff" />
                    <stop offset="100%" stopColor="#ff2f48" />
                  </linearGradient>
                </defs>
                <circle cx={80} cy={80} r={70} strokeLinecap="round" />
              </svg>
            </div>
            <div className="progress-bar">
              <div className="outer-circle">
                <div className="inner-circle">
                  <div className="html-number number">
                    <h4>Tailwind</h4>
                  </div>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="160px"
                height="160px"
              >
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stopColor="#9b2fff" />
                    <stop offset="100%" stopColor="#ff2f48" />
                  </linearGradient>
                </defs>
                <circle cx={80} cy={80} r={70} strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
