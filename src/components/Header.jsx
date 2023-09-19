import "../styles/Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [active, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!active);
  };

  return (
    <header className="encabezado">
      <div className="nombre-encabezado">
        <Link to="/mostrarError">
          <img
            src="/LogoCara2.svg"
            alt="LogoMap4che"
            className="logo-Map4che"
          />
        </Link>
        <div className="nombre-con__animacion">
          <p className="animacion-nombre">&lt;</p>
          <Link className="nombre" to="/">
            Juan Pablo Londoño G
          </Link>
          <p className="animacion-nombre">/&gt;</p>
        </div>
      </div>
      <div className="container-hamburger">
        <div className="hamburguer" onClick={toggleClass}></div>
      </div>
      <nav className="opciones-encabezado">
        <ul className={`lista-encabezado ${active ? "mostrar" : ""}`}>
          <li className="lista-encabezado__item">
            <Link className="link-header" to="/about">
              Sobre mi
            </Link>
          </li>
          <li className="lista-encabezado__item">
            <Link className="link-header" to="/skillsandhobbies">
              Skills & Hobbies
            </Link>
          </li>
          <li className="lista-encabezado__item">
            <Link className="link-header" to="/education">
              Formación
            </Link>
          </li>
          <li className="lista-encabezado__item">
            <Link className="link-header" to="/projects">
              Proyectos
            </Link>
          </li>
          <li className="lista-encabezado__item">
            <Link className="link-header" to="/contact">
              Contacto y Ubicación
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
