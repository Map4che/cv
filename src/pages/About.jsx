import "../styles/About.css";

const About = () => {
  const bio = `Técnico laboral en habilidades en programación con énfasis en 
  aplicaciones web de la Universidad Autónoma de Bucaramanga y Médico Veterinario 
  egresado de la Universidad de La Salle. Egresé como médico veterinario en 2014. 
  Mi esposa y yo iniciamos nuestra propia empresa, Vet Palace, un colegio 
  para mascotas, donde ambos ejercimos e hicimos crecer la empresa. Debido a 
  la pandemia y con la gran noticia de que nuestra hija estaba en camino, 
  decidí emprender nuevos caminos. Tomé la decisión de trabajar en un 
  call center bilingüe, donde desempeñé el cargo como Agente de Ventas y 
  Servicio al Cliente, alcanzando además la posición de SME backup, apoyando 
  a todos nuestros compañeros en la resolución de problemas.

  Al mismo tiempo y en busca de mejores oportunidades para mi familia, 
  comencé a estudiar programación en 2021. Desde entonces, tuve la 
  oportunidad de trabajar en varios proyectos con Distrito Click, una 
  empresa dedicada al diseño de páginas web. Además, me destaqué como uno de 
  los mejores estudiantes en el estudio de programación, lo que llevó a que 
  mi docente me acogiera y tuviera la oportunidad de trabajar para la empresa 
  Audio Tools, colaborando en equipo, en diversos proyectos. Actualmente trabajo 
  como freelancer y continúo creciendo, estudiando programación en cursos con la 
  empresa Globant y Alura, mientras sigo laborando en el call center. Además, 
  seguimos trabajando en nuestra empresa Vet Palace. 
  
  Con el objetivo de desarrollarme y crecer como programador.`;

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
            <iframe src="https://drive.google.com/file/d/1H_n2FOOywo66se4RakUydjHvp3hwOB4d/preview"></iframe>

            <a
              href="https://drive.google.com/file/d/1H_n2FOOywo66se4RakUydjHvp3hwOB4d/view?usp=drive_link"
              target="_blank"
              download
            >
              Descargar{" "}
            </a>
          </li>
          <li className="listaHojadeVida">
            <h2>Hoja de vida en ingles</h2>
            <iframe src="https://drive.google.com/file/d/1vKFQNMHMtiRiq5VnnLFRfNq5dmM8GN1T/preview"></iframe>
            <a
              href="https://drive.google.com/file/d/1vKFQNMHMtiRiq5VnnLFRfNq5dmM8GN1T/view?usp=drive_link"
              target="_blank"
              download
            >
              Descargar{" "}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
