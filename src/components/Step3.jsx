import { useState } from "react";
import styled from "styled-components";
import "../styles/FormStep3.css";

const Step3 = ({ updateStep, formData }) => {
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

  const Gracias = styled.h3`
    color: rgba(6, 69, 110, 0.993);
    text-align: center;
    margin: 3rem 0 1rem;
  `;

  const Respuesta = styled.p`
    text-align: center;
  `;

  return (
    <>
      <Img />
      <Gracias>Confirmar</Gracias>
      <Respuesta>
        Te respondere tan pronto sea posible. Da click en enviar, espera un
        momento y dale check a la casilla!
      </Respuesta>
      <form
        action="https://formsubmit.co/ljuan648l@gmail.com"
        method="POST"
        className="formStep3"
      >
        <input type="text" value={formData.email} name="Email" />
        <input type="text" value={formData.name} name="Name" />
        <input type="text" value={formData.phone} name="Phone" />
        <input type="text" value={formData.reason} name="Reason" />
        <textarea
          rows="4"
          cols="8"
          type="text"
          value={formData.message}
          name="Message"
        />
        <button type="submit" className="btn-form" action>
          <i class="animation"></i>Enviar<i class="animation"></i>
        </button>
      </form>
    </>
  );
};

export default Step3;
