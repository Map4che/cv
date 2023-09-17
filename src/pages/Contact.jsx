import { useState } from "react";
import { TextField, Button } from "@mui/material";
import styled from "styled-components";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import Stepper from "../components/Stepper";
import "../styles/Map.css";

const Form = styled.div`
  background-color: white;
  width: 80%;
  padding: 4rem;
  margin: 4rem auto 0;
  border-radius: 4rem;
  font-size: 2.4rem;

  @media screen and (min-width: 960px) {
    width: 40%;
  }
`;

const Contact = () => {
  const [step, setStep] = useState(0);

  const updateStep = (step) => {
    setStep(step);
  };

  const steps = {
    0: <Step1 updateStep={updateStep} />,
    1: <Step2 updateStep={updateStep} />,
    2: <Step3 updateStep={updateStep} />,
  };

  return (
    <>
      <Form>
        {step < 2 && <Stepper step={step} />}
        {steps[step]}
      </Form>
      <div className="container-mapa">
        <h1 className="mapa-title">Zipáquira Colombia</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d8837.438127977684!2d-74.06196524964449!3d4.987370617758388!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1689467554486!5m2!1ses!2sco"
          style={{ border: "0" }}
          loading="lazy"
          className="mapa"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
