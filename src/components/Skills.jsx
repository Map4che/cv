import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import "../styles/Skills.css";

const Skills = () => {
  const skills = [
    {
      id: 1,
      imagen: "/logoJS.svg",
      value: "Javascript",
    },
    {
      id: 2,
      imagen: "/logoReact.svg",
      value: "React",
    },
    {
      id: 3,
      imagen: "/logoNode.svg",
      value: "NodeJs",
    },
    {
      id: 4,
      imagen: "/logoJava.svg",
      value: "Java",
    },
    {
      id: 5,
      imagen: "/logoHtml.svg",
      value: "HTML",
    },
    {
      id: 6,
      imagen: "/logoCss.svg",
      value: "CSS",
    },
    {
      id: 7,
      imagen: "/logoMaterialUI.svg",
      value: "Material UI",
    },
    {
      id: 8,
      imagen: "/logoTailwind.svg",
      value: "Tailwind",
    },
    {
      id: 9,
      imagen: "/logoMongoDB.svg",
      value: "MongoDB",
    },
    {
      id: 10,
      imagen: "/logoGithub.png",
      value: "Github",
    },
  ];

  return (
    <Grid
      container
      spacing={2}
      sx={{ justifyContent: "center", maxWidth: "60%" }}
    >
      {skills.map((skill) => (
        <Grid item key={skill.id}>
          <Card
            sx={{
              maxWidth: 200,
              transition: "0.8s",
              backgroundColor: "#5553538d",
            }}
            className="skills-container"
          >
            <CardMedia
              component="img"
              image={skill.imagen}
              alt={skill.value}
              sx={{
                height: "80px",
                width: "90px",
                backgroundSize: "cover",
                backgroundPosition: "center",

                "@media screen and (min-width:1000px)": {
                  height: "140px",
                  width: "140px",
                  marginRight: "2rem",
                },
              }}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h5"
                sx={{
                  fontFamily: "Mooli, sans-serif",
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  color: "#bebaba",

                  "@media screen and (min-width:1000px)": {
                    fontSize: "1.6rem",
                  },
                }}
              >
                {skill.value}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Skills;
