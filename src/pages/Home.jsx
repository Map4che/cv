import { Link } from "react-router-dom";
import "../styles/Home.css";
import "../styles/EfectoLogos.css";

const Home = () => {
  return (
    <section className="home">
      <img src="/inicioC.jpg" alt="Foto Inicio" className="foto-inicio" />
      <div className="fotos-container">
        <a
          className="enlace-red-social"
          href="https://www.linkedin.com/in/juanpablolondonog/"
          target="_blank"
        >
          <img
            src="/logoLinkedIn.svg"
            alt="Linkedin"
            id="Linkedin"
            className="img-red-social"
          />
        </a>
        <a
          className="enlace-red-social"
          href="https://github.com/Map4che"
          target="_blank"
        >
          <img
            src="/LogoGithub.svg"
            alt=""
            id="github"
            className="img-red-social"
          />
        </a>
        <a
          className="enlace-red-social"
          href="https://api.whatsapp.com/send?phone=573015596219"
          target="_blank"
        >
          <img
            src="/logoWhatsApp.svg"
            alt=""
            id="whatsapp"
            className="img-red-social"
          />
        </a>
        <a className="enlace-red-social" href="mailto:ljuan648l@gmail.com">
          <img
            src="/logoGmail.svg"
            alt=""
            id="gmail"
            className="img-red-social"
          />
        </a>
      </div>
    </section>
  );
};

export default Home;
