import styled from "styled-components";

const Step3 = ({ updateStep }) => {
  const Img = styled.img`
    display: flex;
    justify-content: center;
    margin: 1rem auto 2rem;
    background-image: url("/Map4che.jpg");
    width: 12rem;
    height: 12rem;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    border: none;
    border-radius: 50%;

    @media screen and (min-width: 960px) {
      width: 20rem;
      height: 20rem;
    }
  `;

  return (
    <>
      <Img />
      <h3>Gracias</h3>
      <p>Te responderemos tan pronto sea posible</p>
    </>
  );
};

export default Step3;
