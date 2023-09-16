import "../styles/About.css";

const About = () => {
  const bio = `Tecnico laboral en programación en habilidades en 
  aplicaciones web de la Universidad Autnoma de Bucaramanga y 
  Medico Veterinario egresado de la Universidad de la Salle. 
  Egresado como medico veterinario desde el 2014, iniciamos justo con 
  mi esposa nuestra propia empresa, Vet Palace, un colegio para mascotas,
   allí ambos ejercimos e hicimos crecer la empresa. Debido a la pandemia,
    y con la gran noticia de nuestra hija en camino, decidí empezar 
    nuevos caminos. Tomamos la decisión de trabajar en un call center 
    bilingue, en este desempeñe el cargo como Agente en ventas y servicio
     al cliente, además alcanzando la posicion de SME backup apoyando a 
     todos nuestros compañeros en resolución de problemas. Al mismo 
     tiempo y por buscar mejores alternativas por mi familia, empece a 
     estudiar programación en el 2021, desde ese momento tuve la 
     oportunidad de trabajar en varios proyectos con Distrito Click, 
     empresa dedicada al diseño de paginas web, además de destacar como 
     uno de los mejores estudiantes en el estudio de programación, 
     por lo que mi docente me acogio, y tuve la oportunidad de trabajar 
     para la empresa Bido, trabajando en un equipo en varios proyectos. 
     Actualmente trabajo como freelance, sigo en crecimiento, etudiando 
     sobre programación en cursos con la empresa Globant y Alura, 
     trabajando en el call center, con nuestra empresa Vet Palace  
     encaminado a desarrollarme y crecer como programador. `;

  return (
    <section className="about">
      <div className="aboutMe">
        <div className="about-info">
          <ul className="lista-about">
            <li className="lista-about__item">
              <h1 className="about-title">Juan Pablo Londoño Gonzalez.</h1>
            </li>
            <li className="lista-about__item">
              <p className="nacionalidad">Zipaquira - Colombia</p>
            </li>
            <li className="lista-about__item">
              <p className="bio-info">{bio}</p>
            </li>
          </ul>
        </div>
        <div className="container-info__img">
          <img src="/FotoCara.jpg" alt="" className="img-about" />
        </div>
      </div>

      <div className="container-curriculum">
        <ul>
          <li className="listaHojadeVida">
            <h2>Hoja de vida en Español</h2>
            <iframe src="https://drive.google.com/file/d/1PlH5-0g_ZBOUSn9d11FWigK3bChxLkN0/preview"></iframe>

            <a
              href="https://drive.google.com/file/d/1PlH5-0g_ZBOUSn9d11FWigK3bChxLkN0/view?usp=share_link"
              target="_blank"
              download
            >
              Decargar{" "}
            </a>
          </li>
          <li className="listaHojadeVida">
            <h2>Hoja de vida en ingles</h2>
            <iframe src="https://drive.google.com/file/d/1RKfkuy2-Qr_cNi3bH6uvWt-XK81sfOXo/preview"></iframe>
            <a
              href="https://drive.google.com/file/d/1RKfkuy2-Qr_cNi3bH6uvWt-XK81sfOXo/view?usp=share_link"
              target="_blank"
              download
            >
              Decargar{" "}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
