import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import { useState } from "react";

import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";

import "./LoginForm.css";

export default function BasicTextFields() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [discente_docente, setDiscente_Docente] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleClick = async () => {
    const login = { email, senha };
    await fetch("http://localhost:8080/Login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(login)
    })
      .then((response) => {
        if (response.status === 200) {
          response.json().then(data =>{
            console.log(data)
          })
          navigate(`/${discente_docente}`);
        } else if (response.status === 400) {
          console.log("Erro ao logar usuário: ");
          navigate("/Login");
        }
      })
      .catch((error) => {
        console.log("Erro ao logar usuário:", error);
        navigate("/Login");
      });
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <section id="register">
      <div className="box-text-field">
        <h1>
          Online<span className="color-exam">Exam</span>
        </h1>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "400px" }
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="E-mail"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </FormControl>

          <Button
            variant="contained"
            color="primary"
            onClick={handleClick}
            sx={{
              width: "400px"
            }}
          >
            <span>Login</span>
          </Button>
        </Box>
      </div>
    </section>
  );
}
