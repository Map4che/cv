import styled from "styled-components";
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";

const Button1 = styled.button`
  color: #247bec;
  border: 2px solid #247bec;
  padding: 1rem;
  margin: 2rem 2rem;
  border-radius: 2rem;
  font-size: 1.4rem;

  @media screen and (min-width: 1000px) {
    padding: 2rem;
    font-size: 2rem;
  }
`;

const Button2 = styled.button`
  background: #247bec;
  color: #fff;
  padding: 1rem;
  margin: 2rem 2rem;
  border: none;
  border-radius: 2rem;
  font-size: 1.4rem;

  @media screen and (min-width: 1000px) {
    padding: 2rem;
    font-size: 2rem;
  }
`;

export const Recorrer = ({ option }) => {
  return option.map((o) => (
    <Grid item key={o.id}>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "star",
          width: "100%",
          padding: "1rem",
          background: "none",

          "@media screen and (min-width:1000px)": {
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: "4rem",
          },
        }}
      >
        <CardMedia
          component="img"
          image={o.imagen}
          alt={o.titulo}
          sx={{
            width: "30rem",
            borderRadius: "3rem",
            margin: "0 auto 0",

            "@media screen and (min-width:600px)": {
              width: "50rem",
            },

            "@media screen and (min-width:1000px)": {
              width: "70rem",
              margin: "0",
            },
          }}
        />
        <CardContent
          sx={{
            "@media screen and (min-width:1000px)": {
              order: o.id % 2 === 0 ? -1 : "inherit",
            },
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: "2rem",
              marginLeft: "2rem",
              "@media screen and (min-width:600px)": {
                marginLeft: "3rem",
              },
              "@media screen and (min-width:1000px)": {
                fontSize: "3rem",
              },
            }}
          >
            {o.titulo}
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: "1.4rem",
              marginLeft: "2rem",
              "@media screen and (min-width:600px)": {
                marginLeft: "3rem",
              },
              "@media screen and (min-width:1000px)": {
                fontSize: "3rem",
              },
            }}
          >
            {o.descripcion}
          </Typography>

          <Button1>
            <a href={o.repo} style={{ color: "#247bec" }} target="_blank">
              Repositorio
            </a>
          </Button1>
          <Button2>
            <a href={o.enlace} style={{ color: "white" }} target="_blank">
              Ver demo
            </a>
          </Button2>
        </CardContent>
      </Card>
    </Grid>
  ));
};
