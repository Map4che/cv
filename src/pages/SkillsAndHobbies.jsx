import styled from "styled-components";
import Skills from "../components/Skills";
import Hobbies from "../components/Hobbies";

const Title = styled.h1`
  color: white;
  text-align: center;
  font-size: 3.6rem;
  margin: 8rem 0 4rem;
`;

const Contenedor = styled.ul`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #4948486e;
  padding-bottom: 4rem;
`;

const SkillsAndHobbies = () => {
  return (
    <section className="skills-hobbies">
      <Container className="skills">
        <Title>Skills</Title>
        <Contenedor>
          <Skills />
        </Contenedor>
      </Container>
      <Container className="hobbies">
        <Title>Hobbies</Title>
        <Contenedor>
          <Hobbies />
        </Contenedor>
      </Container>
    </section>
  );
};

export default SkillsAndHobbies;
