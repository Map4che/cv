import { Box, Stepper, Step, StepLabel, Typography } from "@mui/material";

const StepperComponent = (props) => {
  const steps = ["Datos usuario", "Motivo", "Complete"];
  return (
    <Box
      sx={{
        "@media screen and (max-width:1000)": { width: "80%" },
        "@media screen and (min-width:1000)": { width: "100%" },
      }}
    >
      <Stepper activeStep={props.step}>
        {steps.map((step) => (
          <Step key={step}>
            <StepLabel sx={{ height: "8rem" }}>
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  fontWeight: 500,
                  "@media screen and (min-width:1000)": {
                    fontSize: "1.8rem",
                    fontWeight: 600,
                  },
                }}
              >
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
