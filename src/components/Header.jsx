import "../styles/Header.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const [active, setActive] = useState(false);
  const [celu, setCelu] = useState(false);

  const toggleClass = () => {
    setActive(!active);
    scrollTo(0, 0);
  };

  const subir = () => {
    scrollTo(0, 0);
    setActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      const sc = window.innerWidth < 1000;
      setCelu(sc);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="encabezado">
      <div className="nombre-encabezado">
        <Link to="/">
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
      <div className={`hamburguer-bt ${active ? "on" : ""}`}>
        <div
          className="hamburguer-bt__stripe hamburguer-bt__stripe__top"
          onClick={toggleClass}
        ></div>
        <div
          className="hamburguer-bt__stripe hamburguer-bt__stripe__middle"
          onClick={toggleClass}
        ></div>
        <div
          className="hamburguer-bt__stripe hamburguer-bt__stripe__bottom"
          onClick={toggleClass}
        ></div>
      </div>

      <nav className="opciones-encabezado">
        <ul className={`lista-encabezado ${active ? "mostrar" : ""}`}>
          <li className="lista-encabezado__item">
            <Link
              className="link-header"
              to="/about"
              onClick={celu ? toggleClass : subir}
            >
              Sobre mi
            </Link>
          </li>
          <li className="lista-encabezado__item">
            <Link
              className="link-header"
              to="/skillsandhobbies"
              onClick={celu ? toggleClass : subir}
            >
              Skills & Hobbies
            </Link>
          </li>
          <li className="lista-encabezado__item">
            <Link
              className="link-header"
              to="/education"
              onClick={celu ? toggleClass : subir}
            >
              Formación
            </Link>
          </li>
          <li className="lista-encabezado__item">
            <Link
              className="link-header"
              to="/projects"
              onClick={celu ? toggleClass : subir}
            >
              Proyectos
            </Link>
          </li>
          <li className="lista-encabezado__item">
            <Link
              className="link-header"
              to="/contact"
              onClick={celu ? toggleClass : subir}
            >
              Contacto y Ubicación
            </Link>
          </li>
          <li className="lista-encabezado__item">
            <Link
              className="link-header"
              to="/error"
              onClick={celu ? toggleClass : subir}
            >
              Mostrar error
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
