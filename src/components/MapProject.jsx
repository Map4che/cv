import styled from "styled-components";
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";

const Button1 = styled.button`
  color: #247bec;
  border: 2px solid #247bec;
  padding: 2rem;
  margin: 2rem 2rem;
  border-radius: 2rem;
  font-size: 2rem;
`;

const Button2 = styled.button`
  background: #247bec;
  color: #fff;
  padding: 2rem;
  margin: 2rem 2rem;
  border: none;
  border-radius: 2rem;
  font-size: 2rem;
`;

export const Recorrer = ({ option }) => {
  return option.map((o) => (
    <Grid item key={o.id}>
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
          image={o.imagen}
          alt={o.titulo}
          sx={{
            width: "70rem",
          }}
        />
        <CardContent sx={{ order: o.id % 2 === 0 ? -1 : "inherit" }}>
          <Typography sx={{ color: "white", fontSize: "3rem" }}>
            {o.titulo}
          </Typography>
          <Typography sx={{ color: "white", fontSize: "2rem" }}>
            {o.descripcion}
          </Typography>

          <Button1>
            <a href={o.repo} style={{ color: "#247bec" }}>
              Repositorio
            </a>
          </Button1>
          <Button2>
            <a href={o.enlace} style={{ color: "white" }}>
              Ver demo
            </a>
          </Button2>
        </CardContent>
      </Card>
    </Grid>
  ));
};
