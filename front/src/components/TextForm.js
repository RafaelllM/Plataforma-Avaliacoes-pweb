import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import * as React from 'react';

import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';


export default function BasicTextFields() {
  const[nome, setNome] = React.useState('')
  const[email, setEmail] = React.useState('')
  const[senha, setSenha] = React.useState('')

  const forgotpass = {padding:'10px',color:"#2074d4", textAlign:"left", fontWeight:500, textDecoration:'none'}

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  }

  
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': {m:1, width:'400px'},
      }}
      noValidate
      autoComplete="off"
    >
        <TextField id="outlined-basic" label="Nome" variant="outlined" 
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
          <a style={forgotpass} href='#' >Esqueceu a senha?</a>
        </FormControl>
        <FormLabel id="">Ocupação</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Discente"
              name="discente_docente"
              style={{paddingLeft:'20px'}}
            >
              <FormControlLabel value="Discente" control={<Radio />} label="Discente" />
              <FormControlLabel value="Docente" control={<Radio />} label="Docente" />
            </RadioGroup>
        
    </Box>
  );
}
