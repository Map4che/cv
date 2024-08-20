import "../styles/Page404.css";

export function Page404() {
  return (
    <>
      <div className="top">
        <h1 className="h1-error">404</h1>
        <h3 className="h3-error">Pagina no encontrada</h3>
      </div>
      <div className="container-error">
        <div className="ghost-copy">
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
          <div className="four"></div>
        </div>
        <div className="ghost">
          <div className="face">
            <div className="eye"></div>
            <div className="eye-right"></div>
            <div className="mouth"></div>
          </div>
        </div>
        <div className="shadow"></div>
      </div>
      <div className="bottom">
        <p className="p-error">¡Lo sentimos esta pagina no existe!</p>
        <p className="p-error p-error_info">
          Este enlace muestra el error 404 intencionalmente para mostrar el
          manejo del status 404 NOT FOUND
        </p>
      </div>
    </>
  );
}
