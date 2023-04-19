import './Provas.css'

import { React,  useState } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import TextField from '@mui/material/TextField';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';

import Fab from '@mui/material/Fab';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import Slider from '@mui/material/Slider';

  


function Provas() {

    const marks = [
        {
          value: 0,
          label: '1',
        },
        {
          value: 25,
          label: '2',
        },
        {
          value: 50,
          label: '3',
        },
        {
            value: 75,
            label: '4',
          },
          {
            value: 100,
            label: '5',
          },
      ];


    const [input, setInput] = useState('');
    const[tipo_questao, setTipo_questao] = useState('');

    function mudarquestaoEvent (event){
        setTipo_questao(event.target.value);
      }
    

    const [questao, setQuestao] = useState([]);

    const [Alternativas, setAlternativas] = useState([]);

    var numeroRadio = 0;

    const addAlternativa = () => {
        setAlternativas([...Alternativas],
            <FormControlLabel value={numeroRadio+1} control={<Radio />} label='teste' />
            )
    }

    const addQuestao = () => {


        if(tipo_questao === "Aberta") {

            setQuestao([...questao, 
                <div key={questao.length} className="generated-question">
                    <p>{input}</p>
                    <TextField
                    id="outlined-multiline-static"
                    label="Resposta"
                    multiline
                    rows={4}
                    fullWidth
                    sx={{
                        marginBottom:'10px'
                    }}
                    />
                </div>]);

        } else if (tipo_questao === "Fechada"){

            setQuestao([...questao, 
                <div key={questao.length} className="generated-question">
                    <p>{input}</p>
                    
                    <FormControl className='Closed-questions'>
                    <FormLabel id="demo-radio-buttons-group-label">Alternativas:</FormLabel>
                        <TextField
                        id="outlined-multiline-flexible"
                        label="Elabore a alternativa da questão"
                        multiline
                        rows={1}
                        sx={{
                            mt:"10px"
                        }}
                        />
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                        >
                            {Alternativas}
                        </RadioGroup>
                    </FormControl>

                    <Fab onClick={addAlternativa} color="primary" aria-label="add"
                    sx={{
                        marginTop:'30px',
                        marginLeft:'10px'
                    }}>
                        <AddIcon />
                    </Fab>

                </div>]);

        } else if (tipo_questao === "VF"){

        setQuestao([...questao, 
            <div key={questao.length} className="generated-question">
                <p>{input}</p>
            </div>]);
      }
      setInput('');
      setTipo_questao('');
    };

    return (
        <header id="provas-header">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={10}>
                    <TextField
                    id="outlined-multiline-flexible"
                    label="Elabore a pergunta da questão"
                    multiline
                    fullWidth
                    value={input}
                    onChange={e=> setInput(e.target.value)}
                    />
                    <FormControl sx={{m:1, width:'100%'}}>
                    <FormLabel id="demo-row-radio-buttons-group-label" style={{color:"#333333"}}>Modelo de resposta:</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        sx={{
                            display:'flex',
                            justifyContent:'space-evenly',
                            
                        }}
                    >
                        <FormControlLabel value="Aberta" control={<Radio />} label="Questão Aberta" 
                        checked={tipo_questao === "Aberta"}
                        onChange={mudarquestaoEvent}/>
                        <FormControlLabel value="Fechada" control={<Radio />} label="Questão Fechada" 
                        checked={tipo_questao === "Fechada"}
                        onChange={mudarquestaoEvent}/>
                        <FormControlLabel value="VF" control={<Radio />} label="Verdadeiro ou Falso" 
                        checked={tipo_questao === "VF"}
                        onChange={mudarquestaoEvent}/>
                    </RadioGroup>
                    </FormControl>

                    <p style={{color:"#333333"}}>Nível de Dificuldade da questão:</p>

                    <Box sx={{ width: 300 }}>
                    <Slider
                        aria-label="Always visible"
                        defaultValue={0}
                        step={25}
                        marks={marks}
                    />
                    </Box>

                    </Grid>
                    <Grid item xs={2} sx={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'center'
                    }}>
                    <Fab onClick={addQuestao} className='btn-gerar' variant="extended" color="primary" aria-label="add" sx={{width:'100%', height:'50%'}}>
                        <EditIcon sx={{ m: 1 }} />
                        Gerar
                        </Fab>
                    </Grid>
                </Grid>
            </Box>
            {questao}
        </header>
        
    )
}

export default Provas;