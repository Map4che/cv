import "../styles/Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [active, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!active);
    scrollTo(0, 0);
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
      <div class={`hamburguer-bt ${active ? "on" : ""}`}>
        <div
          class="hamburguer-bt__stripe hamburguer-bt__stripe__top"
          onClick={toggleClass}
        ></div>
        <div
          class="hamburguer-bt__stripe hamburguer-bt__stripe__middle"
          onClick={toggleClass}
        ></div>
        <div
          class="hamburguer-bt__stripe hamburguer-bt__stripe__bottom"
          onClick={toggleClass}
        ></div>
      </div>

      <nav className="opciones-encabezado">
        <ul className={`lista-encabezado ${active ? "mostrar" : ""}`}>
          <li className="lista-encabezado__item">
            <Link className="link-header" to="/about" onClick={toggleClass}>
              Sobre mi
            </Link>
          </li>
          <li className="lista-encabezado__item">
            <Link
              className="link-header"
              to="/skillsandhobbies"
              onClick={toggleClass}
            >
              Skills & Hobbies
            </Link>
          </li>
          <li className="lista-encabezado__item">
            <Link className="link-header" to="/education" onClick={toggleClass}>
              Formación
            </Link>
          </li>
          <li className="lista-encabezado__item">
            <Link className="link-header" to="/projects" onClick={toggleClass}>
              Proyectos
            </Link>
          </li>
          <li className="lista-encabezado__item">
            <Link className="link-header" to="/contact" onClick={toggleClass}>
              Contacto y Ubicación
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
