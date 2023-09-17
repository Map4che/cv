import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import "../styles/Hobbies.css";

const Hobbies = () => {
  const hobbies = [
    {
      id: 1,
      imagen: "/familia.svg",
      value: "Familia",
    },
    {
      id: 2,
      imagen: "/viajar.png",
      value: "Viajar",
    },
    {
      id: 3,
      imagen: "/trabajo.svg",
      value: "Trabajar y aprender",
    },
    {
      id: 4,
      imagen: "/juegos.svg",
      value: "Video juegos",
    },
    {
      id: 5,
      imagen: "/futbol.svg",
      value: "Deportes",
    },
    {
      id: 6,
      imagen: "/musica.svg",
      value: "Musica",
    },
  ];
  return (
    <Grid
      container
      spacing={6}
      sx={{ margin: "1rem auto 2rem", justifyContent: "center" }}
    >
      {hobbies.map((hobbie) => (
        <Grid item key={hobbie.id}>
          <CardMedia
            component="img"
            image={hobbie.imagen}
            alt={hobbie.value}
            sx={{
              height: 150,
              width: 150,
              margin: "0 auto 0",
              transition: "0.8s",
            }}
            className="imagen-hobbie"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h5"
              sx={{
                textAlign: "center",
                fontSize: "2.4rem",
                fontWeight: "600",
              }}
            >
              {hobbie.value}
            </Typography>
          </CardContent>
        </Grid>
      ))}
    </Grid>
  );
};

export default Hobbies;
