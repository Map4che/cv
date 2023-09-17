import "../styles/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const colores = {};
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
        <p className="animacion-nombre">&lt;</p>
        <Link className="nombre" to="/">
          Juan Pablo Londoño G
        </Link>
        <p className="animacion-nombre"> /&gt;</p>
      </div>
      <nav className="opciones-encabezado">
        <ul className="lista-encabezado">
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
