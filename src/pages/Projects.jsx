import Proyecto from "../components/Proyecto";
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
