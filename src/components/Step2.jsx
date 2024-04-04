import { useState } from "react";
import { TextField, Select, Box, Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

const Step2 = ({ updateStep, formData, setFormData, handleSubmit }) => {
  const [reason, setReason] = useState("");
  const [message, setMessage] = useState({ value: "", valid: null });

  const validarMensaje = (mensaje) => {
    return mensaje.length >= 5 && mensaje.length <= 500 ? true : false;
  };

  return (
    <Box
      component="form"
      autoComplete="on"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: "2rem",
      }}
      onSubmit={(e) => {
        e.preventDefault();
        if (message.valid) {
          setFormData((prevData) => ({
            ...prevData,
            reason: reason,
            message: message.value,
          }));
          updateStep(2);
        } else {
          console.log("Invalido");
        }
      }}
    >
      <FormControl fullWidth>
        <InputLabel>Motivo consulta</InputLabel>
        <Select
          name="Motivo"
          fullWidth
          label="Motivo contacto"
          value={reason}
          onChange={(e) => {
            setReason(e.target.value);
          }}
        >
          <MenuItem value={"Informacion"}>Información</MenuItem>
          <MenuItem value={"Proyecto"}>Proyecto</MenuItem>
          <MenuItem value={"Cotizar"}>Cotizar</MenuItem>
          <MenuItem value={"Saludo"}>Saludo</MenuItem>
        </Select>
      </FormControl>

      <TextField
        name="Mensaje"
        label="Mensaje o proyecto"
        multiline
        maxRows={4}
        fullWidth
        margin="normal"
        value={message.value}
        onChange={(e) => {
          const value = e.target.value;
          const valid = validarMensaje(value);
          setMessage({ value, valid });
        }}
        error={message.valid === false}
        helperText={
          message.valid === false &&
          "El mensaje debe contener al menos 5 caracteres y maximo 500"
        }
        sx={{ fontSize: "4rem !important" }}
      />
      {message.valid ? (
        <Button variant="contained" type="submit" onClick={handleSubmit}>
          Finalizar
        </Button>
      ) : (
        <Button variant="contained" disabled>
          Finalizar
        </Button>
      )}
    </Box>
  );
};

export default Step2;
