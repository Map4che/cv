import Proyecto from "../components/proyecto";
import styled from "styled-components";

const Container = styled.div`
  background-color: rgba(15, 14, 14, 0.774);
`;

const Projects = () => {
  return (
    <Container>
      <Proyecto />
    </Container>
  );
};

export default Projects;
