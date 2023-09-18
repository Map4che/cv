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
      imagen: "/logoJS.png",
      value: "Javascript",
    },
    {
      id: 2,
      imagen: "/logoReact.png",
      value: "React",
    },
    {
      id: 3,
      imagen: "/logoNode.png",
      value: "NodeJs",
    },
    {
      id: 4,
      imagen: "/logoJava.png",
      value: "Java",
    },
    {
      id: 5,
      imagen: "/logoHtml.png",
      value: "HTML",
    },
    {
      id: 6,
      imagen: "/logoCss.png",
      value: "CSS",
    },
    {
      id: 7,
      imagen: "/logoMaterialUI.png",
      value: "Material UI",
    },
    {
      id: 8,
      imagen: "/logoTailwind.png",
      value: "Tailwind",
    },
    {
      id: 9,
      imagen: "/logoMongoDB.png",
      value: "MongoDB",
    },
    {
      id: 10,
      imagen: "/logoGithub.png",
      value: "Git and Hithub",
    },
  ];

  return (
    <Grid
      container
      spacing={5}
      sx={{ justifyContent: "center", maxWidth: "60%" }}
    >
      {skills.map((skill) => (
        <Grid item key={skill.id}>
          <Card
            sx={{ maxWidth: 200, transition: "0.8s" }}
            className="skills-container"
          >
            <CardMedia
              component="img"
              image={skill.imagen}
              alt={skill.value}
              sx={{
                height: 140,
                width: 140,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h5"
                sx={{ fontSize: "1.6rem", fontWeight: 600 }}
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
