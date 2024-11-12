function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="title">
        <h2>
          Contact <span>Me</span>
        </h2>
      </div>
      <div className="contact-content">
        <div className="row">
          <div className="box">
            <div className="box-icon">
              <i className="ri-home-line" />
            </div>
            <div className="box-info">
              <h4>Address</h4>
              <span>Langowan, North Sulawesi - Indonesia</span>
            </div>
          </div>
          <div className="box">
            <div className="box-icon">
              <i className="ri-phone-line" />
            </div>
            <div className="box-info">
              <h4>Phone Number</h4>
              <span>+6289698035966</span>
            </div>
          </div>
          <div className="box">
            <div className="box-icon">
              <i className="ri-mail-line" />
            </div>
            <div className="box-info">
              <h4>Email Address</h4>
              <span>revandoaruperes6@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="row">
          <form action className="contact-form">
            <div className="form-box">
              <input type="text" placeholder="Enter Your Name" required />
            </div>
            <div className="form-box">
              <input type="email" placeholder="Enter Your Email" required />
            </div>
            <div className="form-box">
              <input type="text" placeholder="Email Subject" required />
            </div>
            <div className="form-box">
              <textarea
                name="Message"
                id
                cols={10}
                rows={10}
                placeholder="Your Message"
                defaultValue={""}
              />
            </div>
            <button type="submit" className="btn overlay">
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
