import styled from "styled-components";
import { Grid } from "@mui/material";
import { Recorrer } from "./MapProject";

const Title = styled.h2`
  font-size: 4rem;
  color: white;
  margin: 4rem auto 4rem;
`;

const Proyecto = () => {
  const proyectoLanding = [
    {
      id: 1,
      imagen: "/projects/orgAlura.png",
      titulo: "Organizacion Alura",
      descripcion: "Pagina de inicio",
      repo: "https://github.com/Map4che/OrganizacionAlura.git",
      enlace: "https://organizacion-alura-ozgpymsyi-map4che.vercel.app/",
    },
    {
      id: 2,
      imagen: "/projects/superCamiones.png",
      titulo: "Super Camiones",
      descripcion: "Pagina de inicio",
      repo: "https://github.com/Map4che/SuperCamiones.git",
      enlace: "https://map4che.github.io/SuperCamiones/",
    },
    {
      id: 3,
      imagen: "/projects/vetPalace.png",
      titulo: "Vet Palace",
      descripcion: "Pagina de inicio",
      repo: "https://github.com/Map4che/vetpalace.git",
      enlace: "https://vetpalace-lso3llqp9-map4che.vercel.app/",
    },
    {
      id: 4,
      imagen: "/projects/barberia.png",
      titulo: "Barberia Alura",
      descripcion: "Pagina de inicio",
      repo: "https://github.com/Map4che/Barberia_Alura.git",
      enlace: "https://map4che.github.io/Barberia_Alura/",
    },
  ];

  const proyectoReto = [
    {
      id: 1,
      imagen: "/projects/reto3.png",
      titulo: "Age calculator",
      descripcion: "Calcula tu edad",
      repo: "https://github.com/Map4che/age-calculator.git",
      enlace: "https://map4che.github.io/age-calculator/",
    },
    {
      id: 2,
      imagen: "/projects/codificar.png",
      titulo: "Encriptador de texto",
      descripcion: "Codifica tus mensajes",
      repo: "https://github.com/Map4che/Encriptador-de-texto.git",
      enlace: "https://map4che.github.io/Encriptador-de-texto/",
    },
    {
      id: 3,
      imagen: "/projects/reto1.png",
      titulo: "Newsletter landing page",
      descripcion: "Reto sobre landing page",
      repo: "https://github.com/Map4che/newsletterLandingPage.git",
      enlace: "https://map4che.github.io/newsletterLandingPage/",
    },
    {
      id: 4,
      imagen: "/projects/reto2.png",
      titulo: "Reto formulario",
      descripcion: "Formulario del newsletter",
      repo: "https://github.com/Map4che/newsletterChallenge.git",
      enlace: "https://map4che.github.io/newsletterChallenge/",
    },
  ];

  const proyectoJuego = [
    {
      id: 1,
      imagen: "/projects/ahorcado.png",
      titulo: "Ahorcado",
      descripcion: "Juego del ahorcado",
      repo: "https://github.com/Map4che/ahorcado.git",
      enlace: "https://ahorcado-75b4f97a5-map4che.vercel.app/",
    },
    {
      id: 2,
      imagen: "/projects/tiro.png",
      titulo: "Tiro",
      descripcion: "Juego de tiro al blanco",
      repo: "https://github.com/Map4che/juegoDisparo.git",
      enlace: "https://map4che.github.io/juegoDisparo/",
    },
  ];

  const proyectoOtros = [
    {
      id: 1,
      imagen: "/projects/temas.png",
      titulo: "Cambio tema",
      descripcion: "Cambio modo luz u oscuro",
      repo: "https://github.com/Map4che/TemaOscuroYClaro.git",
      enlace: "https://tema-oscuro-y-claro-imtyo4s6v-map4che.vercel.app/",
    },
    {
      id: 2,
      imagen: "/projects/materialUIForm.png",
      titulo: "Formulario",
      descripcion: "Formulario con Material UI",
      repo: "https://github.com/Map4che/formMaterialUI.git",
      enlace: "https://form-material-5su9flkd3-map4che.vercel.app/",
    },
    {
      id: 3,
      imagen: "/projects/validacion1.png",
      titulo: "Fomulario",
      descripcion: "Validación de formulario",
      repo: "https://github.com/Map4che/validacionesForm.git",
      enlace: "https://validaciones-form-206lph04k-map4che.vercel.app/",
    },
  ];

  return (
    <Grid
      container
      sx={{
        diplay: "flex",
        flexDirection: "column",
      }}
    >
      <Title>Landing pages</Title>
      <Recorrer option={proyectoLanding} />
      <Title>Retos</Title>
      <Recorrer option={proyectoReto} />
      <Title>Juegos</Title>
      <Recorrer option={proyectoJuego} />
      <Title>Otros</Title>
      <Recorrer option={proyectoOtros} />
    </Grid>
  );
};

export default Proyecto;

/*
{proyectoLanding.map((proyectoL) => (
    <Grid item key={proyectoL.id}>
      <Card
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "70%",
          padding: "4rem",
          margin: "0 auto 0",
          background: "none",
          alignItems: "center",
        }}
      >
        <CardMedia
          component="img"
          image={proyectoL.imagen}
          alt={proyectoL.titulo}
          sx={{
            width: "70rem",
          }}
        />
        <CardContent
          sx={{ order: proyectoL.id % 2 === 0 ? -1 : "inherit" }}
        >
          <Typography sx={{ color: "white", fontSize: "3rem" }}>
            {proyectoL.titulo}
          </Typography>
          <Typography sx={{ color: "white", fontSize: "2rem" }}>
            {proyectoL.descripcion}
          </Typography>

          <Button1>
            <a href={proyectoL.repo} style={{ color: "#247bec" }}>
              Repositorio
            </a>
          </Button1>
          <Button2>
            <a href={proyectoL.enlace} style={{ color: "white" }}>
              Ver demo
            </a>
          </Button2>
        </CardContent>
      </Card>
    </Grid>
  ))}*/
