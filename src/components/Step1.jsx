import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import styled from "styled-components";

const Step1 = ({ updateStep, formData, setFormData }) => {
  const [name, setName] = useState({ value: "", valid: null });
  const [email, setEmail] = useState({ value: "", valid: null });
  const [phone, setPhone] = useState({ value: "", valid: null });

  const validarNombre = (nombre) => {
    return nombre.length >= 3 && nombre.length <= 50 ? true : false;
  };

  const validarEmail = (email) => {
    return email.length >= 3 && email.length <= 50 && email.includes("@")
      ? true
      : false;
  };

  const validarTelefono = (phone) => {
    return phone.length >= 7 && phone.length <= 15 ? true : false;
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
      }}
      onSubmit={(e) => {
        e.preventDefault();
        if (name.valid && email.valid && phone.valid) {
          setFormData((prevData) => ({
            ...prevData,
            name: name.value,
            email: email.value,
            phone: phone.value,
          }));
          updateStep(1);
        } else {
          console.log("Invalido");
        }
      }}
    >
      <TextField
        name="Nombre"
        fullWidth
        margin="normal"
        label="Nombre"
        variant="outlined"
        value={name.value}
        onChange={(e) => {
          const value = e.target.value;
          const valid = validarNombre(value);
          setName({ value, valid });
        }}
        error={name.valid === false}
        helperText={
          name.valid === false &&
          "Debe contener al menos 3 caracteres y maximo 50"
        }
      />
      <TextField
        name="Email"
        fullWidth
        margin="normal"
        label="Correo Electronico"
        variant="outlined"
        type="email"
        value={email.value}
        onChange={(e) => {
          const value = e.target.value;
          const valid = validarEmail(value);
          setEmail({ value, valid });
        }}
        error={email.valid === false}
        helperText={
          email.valid === false && "Debe ser un correo electronico valido"
        }
      />
      <TextField
        name="Telefono"
        fullWidth
        margin="normal"
        type="number"
        label="WhatsApp"
        variant="outlined"
        value={phone.value}
        onChange={(e) => {
          const value = e.target.value;
          const valid = validarTelefono(value);
          setPhone({ value, valid });
        }}
        error={phone.valid === false}
        helperText={phone.valid === false && "Ingrese un número valido"}
      />
      {name.valid && email.valid && phone.valid ? (
        <Button variant="contained" type="submit">
          Continuar
        </Button>
      ) : (
        <Button variant="contained" disabled>
          Continuar
        </Button>
      )}
    </Box>
  );
};

export default Step1;
