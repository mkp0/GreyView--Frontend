import React from "react";

function Footer() {
  return (
    <footer className="footer-distributed">
      <div className="footer-right">
        <a href="https://www.instagram.com/laughing_luffy/">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com/laughing_luffy/">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="https://www.linkedin.com/in/imluffy/">
          <i className="fa fa-linkedin"></i>
        </a>
        <a href="https://github.com/mkp0/">
          <i className="fa fa-github"></i>
        </a>
      </div>

      <div className="footer-left">
        <p className="footer-links">
          <a
            className="link-1"
            href="https://www.instagram.com/laughing_luffy/"
          >
            Home
          </a>

          <a href="https://www.instagram.com/laughing_luffy/">Pricing</a>

          <a href="https://www.instagram.com/laughing_luffy/">About</a>

          <a href="https://www.instagram.com/laughing_luffy/">Contact</a>
        </p>

        <p>GreyView &copy; 2019</p>
      </div>
    </footer>
  );
}

export default Footer;
