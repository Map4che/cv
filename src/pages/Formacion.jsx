import Titulos from "../components/Titulos";
import styled from "styled-components";

const Container = styled.div`
  background: gr#4d4b4bd1;
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
`;

const Title = styled.h2`
  color: white;
  font-size: 3.2rem;
  margin-top: 4rem;
`;

const Formacion = () => {
  return (
    <Container>
      <Title>Formación</Title>
      <Titulos />
    </Container>
  );
};

export default Formacion;
