import { Box, Stepper, Step, StepLabel } from "@mui/material";

const StepperComponent = (props) => {
  const steps = ["Datos usuario", "Motivo", "Complete"];
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={props.step}>
        {steps.map((step) => (
          <Step key={step}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default StepperComponent;
