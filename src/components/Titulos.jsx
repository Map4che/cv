import { Grid, CardMedia, CardContent, Typography } from "@mui/material";

const Titulos = () => {
  const titulos = [
    {
      id: 1,
      imagen: "/LogoGlobant.svg",
      titulo: "Java developer",
      fecha: "2024",
      estado: "En curso",
    },
    {
      id: 2,
      imagen: "/LogoUnab.svg",
      titulo: "Técnico laboral en programacion",
      fecha: "2023",
      estado: "Finalizado",
    },
    {
      id: 3,
      imagen: "/LogoSalle.svg",
      titulo: "Medico veterinario",
      fecha: "2014",
      estado: "Finalizado",
    },
    {
      id: 4,
      imagen: "/LogoAlura.svg",
      titulo: "One oracle next education",
      fecha: "2023",
      estado: "Finalizado",
    },
    {
      id: 5,
      imagen: "/LogoGlobant.svg",
      titulo: "Full stack developer",
      fecha: "2023",
      estado: "Finalizado",
    },
    {
      id: 6,
      imagen: "/LogoMintic.svg",
      titulo: "Ruta aprendizaje 2",
      fecha: "2022",
      estado: "Finalizado",
    },
    {
      id: 7,
      imagen: "/LogoSergio.svg",
      titulo: "Desarollo de software",
      fecha: "2022",
      estado: "Finalizado",
    },
    {
      id: 8,
      imagen: "/LogoAWS.svg",
      titulo: "AWS Cloud practitioner essentials",
      fecha: "2023",
      estado: "Finalizado",
    },
    {
      id: 9,
      imagen: "/LogoPlatzi.svg",
      titulo: "Multiples",
      fecha: "2023",
      estado: "Finalizado",
    },
    {
      id: 10,
      imagen: "/LogoEfSet.svg",
      titulo: "Certificado de ingles C2",
      fecha: "2023",
      estado: "Finalizado",
    },
  ];

  return (
    <Grid
      container
      item
      xs={10}
      style={{
        backgroundColor: "#646363a9",
        margin: "0 auto 0",
        justifyContent: "space-evenly",
        borderRadius: "4rem",
      }}
    >
      {titulos.map((titulo) => (
        <Grid item key={titulo.id}>
          <CardMedia
            component="img"
            image={titulo.imagen}
            alt={titulo.titulo}
            sx={{
              height: 150,
              maxWidth: 150,
              margin: "0 auto 0",
              transition: "0.8s",
            }}
          />
          <CardContent>
            <Typography
              sx={{
                fontSize: "1.8rem",
                fontWeight: "900",
                maxWidth: "90%",
                textAlign: "center",
                flexWrap: "wrap",
                margin: "0 auto 0",
                fontFamily: "Mooli, sans-serif",
              }}
            >
              {titulo.titulo} - {titulo.fecha}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Mooli, sans-serif",
                textAlign: "center",
                fontSize: "2rem",
                fontWeight: "900",
                margin: "0 auto 0",
                animation:
                  titulo.estado === "Finalizado"
                    ? "none"
                    : "cambioColor 5s ease-in-out infinite alternate",
              }}
            >
              {titulo.estado}
            </Typography>
          </CardContent>
        </Grid>
      ))}
    </Grid>
  );
};

export default Titulos;
