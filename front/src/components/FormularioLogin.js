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
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";

import { login_aluno_professor } from '../services/professor.service';

import "./css/FormularioLogin.css";

export default function FormularioLogin() {
  const navigate = useNavigate();

  const loginlink = {color:"#2074d4", marginLeft:'-15px', fontWeight:500, textDecoration:'none'}

  const login = {padding:'20px'}

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  let discente_docente = null;

  const [showPassword, setShowPassword] = useState(false);

  const handleClick = async () => {
    const user = { email, senha };
    login_aluno_professor(user).then((response) => {
        if (response.status === 200) {
          response.json().then(data =>{
            discente_docente = data[1]
            })
            setTimeout(() => {
              navigate(`/${discente_docente}`)
            }, 200);
        } else if (response.status === 404) {
          alert("Email não encontrado");
          navigate("/Login");
        }else if (response.status === 400) {
          alert("Senha inválida");
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
      <div className="formulariologin">
        <h1>
          Online<span className="color-exam">Exam</span>
        </h1>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { 
            m: 1,
            width: "400px"
          }
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
                width: "400px",
              }}
            >
            <span>Login</span>
            </Button>

            <div className='teste'>
              <span style={login}>Esqueceu sua senha?</span><Link style={loginlink} to="/Login">resgatar senha</Link>
            </div>

        </Box>
      </div>
    </section>
  );
}