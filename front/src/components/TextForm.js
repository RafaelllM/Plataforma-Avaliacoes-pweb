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
import { Link } from 'react-router-dom'


import "./TextForm.css";




export default function BasicTextFields() {
  const[nome, setNome] = useState('')
  const[email, setEmail] = useState('')
  const[senha, setSenha] = useState('')
  const[discente_docente, setDiscente_Docente] = useState('')

  const loginlink = {color:"#2074d4", textAlign:"left", fontWeight:500, textDecoration:'none'}

  const login = {padding:'20px', textAlign:"left"}

  const [showPassword, setShowPassword] = useState(false);

  function radioEvent (event){
    setDiscente_Docente(event.target.value);
  }

  const handleClick= async ()=>{
    const user={nome, email, senha, discente_docente}
    try{
    fetch("http://localhost:8080/cadastro",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(user)
    }).then(()=>{
      console.log("Novo usuário criado")
    }) } catch (Error) {
      console.log(Error)
    }
    console.log(user);
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
                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
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
                <FormLabel id="">Ocupação</FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="Discente"
                      name="discente_docente"
                      style={{paddingLeft:'20px'}}
                    >
                      <FormControlLabel value="Discente" checked={discente_docente === "Discente"} control={<Radio />} label="Discente"
                      onChange={radioEvent} />

                      <FormControlLabel value="Docente" checked={discente_docente === "Docente"} control={<Radio />} label="Docente"
                      onChange={radioEvent} />
                      
                    </RadioGroup>
                    <Link style={{textDecoration:'none'}} to={`/${discente_docente}`} >
                      <Button variant="contained" color="primary" onClick={handleClick} sx={{
                        width: '400px',
                        }}>
                          <span>Cadastro</span>
                      </Button>
                    </Link>
                    
                    <p style={login}>Já tem uma conta? <a style={loginlink} href={() => false}>login</a></p>
                
            </Box>
          </div>
      </section>
  );
}
