import Stack from "@mui/material/Stack";
import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useLogin, useNotify } from "react-admin";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [password, setPassword] = useState(null);
  const login = useLogin();
  const notify = useNotify();

  function validEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleOnChangeEmail = (event) => {
    if (!validEmail(event.target.value)) {
      setError("Invalid Email");
    } else {
      setError(null);
    }

    setEmail(event.target.value);
  };

  const handleOnChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password }).catch(() => notify("Invalid email or password"));
  };

  return (
    <div
      style={{
        height: "45vh",
        margin: "2rem",
      }}
    >
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
          height: "100%",
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
    </div>
  );
};
