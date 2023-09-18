import Titulos from "../components/Titulos";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(15, 14, 14, 0.774);
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 4rem;
`;

const Title = styled.h2`
  color: white;
  font-size: 3.2rem;
  margin: 2rem auto 4rem;
  text-align: center;
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
