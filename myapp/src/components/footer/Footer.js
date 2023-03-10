import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      &copy; Copyright 2023
      <div className="redes">
        <a className="vinculo-c" href="https://twitter.com/?lang=es">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a className="vinculo-c" href="https://www.instagram.com/">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a className="vinculo-c" href="https://www.gmail.com/mail/help/intl/es/about.html?iframe">
          <i className="fa-solid fa-envelope"></i>
        </a>
      </div>
    </div>
  );
};
export default Footer;
