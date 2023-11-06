const Contact = () => {
  return (
    <div id="contact" className="section dark1">
      <div className="container contact">
        <div className="section-title">
          <h1>
            Contact <span className="color-primary">Me</span>
          </h1>
          <p className="width70">
            Feel free to get in touch with me. I am always open to discuss new
            projects, creative ideas or opportunities to be part of your
            visions.
          </p>
        </div>
        <div>
          <div>
            <ul className="social-icons">
              <li>
                <a
                  href="https://www.facebook.com/hassanismail11"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/hassanismail111"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/hassanismail11/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-instagram"></i>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="social-icons">
              <li>
                <a
                  href="https://github.com/hassanismail11"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-github"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/hassanismail11/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/201149949175"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-whatsapp"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="columns">
          <div className="column contact-box service">
            <a href="mailto:hihassanismail11@gmail.com">
              <div className="service-content">
                <h3>Email Me</h3>
                <i className="bi bi-envelope icon service-icon"></i>
                <p>Hihassanismail11@gmail.com</p>
              </div>
            </a>
          </div>
          <div className="column contact-box service">
            <a href="tel:+201149949175">
              <div className="service-content">
                <h3>Call Me</h3>
                <i className="bi bi-telephone-inbound icon service-icon"></i>
                <p>+2011 499 49 175</p>
              </div>
            </a>
          </div>
        </div>

        <div>
          <form
            className="contact-form"
            action="https://formsubmit.io/send/hihassanismail11@gmail.com"
            method="POST"
          >
            <input
              name="_redirect"
              type="hidden"
              id="name"
              value="https://hassanismail11.github.io/"
            ></input>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required
            />
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Your phone number"
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              required
            />
            <textarea
              rows="5"
              id="message"
              name="message"
              placeholder="Your message"
              required
            />
            <button type="submit" className="button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
