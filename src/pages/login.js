import Stack from "@mui/material/Stack";
import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useLogin, useNotify } from "react-admin";

export const Login = () => {
  var [email, setEmail] = useState("");
  var [error, setError] = useState(null);
  var [password, setPassword] = useState(null);
  const login = useLogin();
  const notify = useNotify();

  function validEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  var handleOnChangeEmail = (event) => {
    if (!validEmail(event.target.value)) {
      setError("Invalid Email");
    } else {
      setError(null);
    }

    setEmail(event.target.value);
  };

  var handleOnChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    login({ email, password }).catch(() => notify("Invalid email or password"));
  };

  return (
    <Stack
      spacing={2}
      sx={{
        textAlign: "center",
        width: "30%",
        margin: "auto",
        padding: "2rem",
        border: "1px solid ",
        borderColor: "grey.500",
        borderRadius: "10px",
      }}
    >
      <Typography variant="h3">Sign In</Typography>
      <TextField
        required
        label="Email-Address"
        type="email"
        onChange={handleOnChangeEmail}
      ></TextField>
      {error && (
        <Typography variant="h8" style={{ color: "red", textAlign: "left" }}>
          {error}
        </Typography>
      )}
      <TextField
        required
        label="Password"
        type="password"
        onChange={handleOnChangePassword}
      ></TextField>
      <Button variant="contained" onClick={handleSubmit}>
        Login
      </Button>
    </Stack>
  );
};
