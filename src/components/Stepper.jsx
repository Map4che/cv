import { Box, Stepper, Step, StepLabel, Typography } from "@mui/material";

const StepperComponent = (props) => {
  const steps = ["Datos usuario", "Motivo", "Complete"];
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={props.step}>
        {steps.map((step) => (
          <Step key={step}>
            <StepLabel sx={{ height: "6rem" }}>
              <Typography sx={{ fontSize: "1.8rem", fontWeight: 600 }}>
                {step}
              </Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default StepperComponent;
