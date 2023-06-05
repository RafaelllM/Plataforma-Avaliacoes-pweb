import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

import Button from '@mui/material/Button';
import {Link, useNavigate } from 'react-router-dom'
import {create_professor, create_aluno } from '../services/professor.service';


import './css/FormularioCadastro.css';




export default function Cadastro() {
  const navigate = useNavigate();

  const[nome, setNome] = useState('')
  const[email, setEmail] = useState('')
  const[senha, setSenha] = useState('')
  const[discente_docente, setDiscente_Docente] = useState('')

  const loginlink = {color:"#2074d4", marginLeft:'-15px', fontWeight:500, textDecoration:'none'}

  const login = {padding:'20px'}

  const [showPassword, setShowPassword] = useState(false);

  function radioEvent (event){
    setDiscente_Docente(event.target.value);
  }

  const handleClick = async () => {
    const user={nome, email, senha, discente_docente}
    if (discente_docente === "Docente") {
      create_professor(user)
            .then((response) => {
                if (response.status === 200) {
                    console.log("Usuário Cadastrado com Sucesso")
                    navigate(`/${discente_docente}`);
                }
                else if (response.status === 400) {
                    console.log('Erro ao cadastrar usuário: Desconhecido');
                    setNome('')
                    setEmail('')
                    setSenha('')
                    setDiscente_Docente('')
                    navigate("/")
                }
                else if (response.status === 409) {
                  console.log('Erro ao cadastrar usuário: Email já cadastrado');
                  setNome('')
                  setEmail('')
                  setSenha('')
                  setDiscente_Docente('')
                  navigate("/")
                  alert("Email já cadastrado");
              }
            })
            .catch((error) => {
                console.log('Erro ao cadastrar usuário:', error);
            })

    } else if (discente_docente ==="Discente"){
      create_aluno(user)
            .then((response) => {
                if (response.status === 200) {
                    console.log("Usuário Cadastrado com Sucesso")
                    navigate(`/${discente_docente}`);
                }
                else if (response.status === 400) {
                    console.log('Erro ao cadastrar usuário: ');
                    setNome('')
                    setEmail('')
                    setSenha('')
                    setDiscente_Docente('')
                    navigate("/")
                }
            })
            .catch((error) => {
                console.log('Erro ao cadastrar usuário:', error);
            })
    }
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  }

  
  return (
    <section id="register">
        <div className="box-text-field">
          <h1>Online<span className='color-exam'>Exam</span></h1>
            <Box
              component="form"
              sx={{
                '& > :not(style)': {m:1, width:'400px'},
              }}
              noValidate
              autoComplete="off"
            >
                <TextField id="outlined-basic" label="Nome Completo" variant="outlined" 
                value={nome}
                onChange={(e)=>setNome(e.target.value)}
                />

                <TextField id="outlined-basic" label="E-mail" variant="outlined" 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />

                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
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
                    onChange={(e)=>setSenha(e.target.value)}
                  />
                </FormControl>
                <FormLabel>Ocupação</FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="Discente"
                      name="discente_docente"
                      style={{paddingLeft:'20px'}}
                    >
                      <FormControlLabel value="Discente" checked={discente_docente === "Discente"} control={<Radio />} label="Discente" defaultChecked
                      onChange={radioEvent} />

                      <FormControlLabel value="Docente" checked={discente_docente === "Docente"} control={<Radio />} label="Docente"
                      onChange={radioEvent} />
                      
                    </RadioGroup>
                      <Button variant="contained" color="primary" onClick={handleClick}
                       sx={{
                        width: '400px',
                        mb: '50px'
                        }}>
                          <span>Cadastro</span>
                      </Button>

                    <div className='teste'>
                      <span style={login}>Já tem uma conta?</span><Link style={loginlink} to="/Login">login</Link>
                    </div>
                    
                
            </Box>
          </div>
      </section>
  );
}
