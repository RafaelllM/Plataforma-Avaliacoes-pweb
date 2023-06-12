import './css/GerarQuestoes.css';
import * as React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';   
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useNavigate } from 'react-router-dom'

import { createQuestaoAberta } from '../services/questoes.service';

export default function QuestoesAbertas() {

    const navigate = useNavigate();

    const [sliderValue, setSliderValue] = useState(0);

    const handleSliderChange = (event, newValue) => {
        setSliderValue(newValue);
  };

    const marks = [
        {
          value: 1,
          label: '1',
        },
        {
          value: 2,
          label: '2',
        },
        {
          value: 3,
          label: '3',
        },
        {
          value: 4,
          label: '4',
        },
        {
            value: 5,
            label: '5',
          },
      ];
    
    const[assunto, setAssunto] = useState('')
    const[enunciado, setEnunciado] = useState('')

    function addQuestao(e) {
        e.preventDefault();
        const dificuldade = sliderValue
        const questao = { assunto, enunciado, dificuldade };
        if (assunto === "" || enunciado === "") {
            alert("Preencha todos os campos")
        } else {
            createQuestaoAberta(questao)
            .then((res) => {
                if (res.status === 200) {
                    console.log("Questao Cadastrada com Sucesso")
                    navigate("/Docente/Questoes");
                } else if (res.status === 400) {
                    console.log("Preencha todos os campos");
                }
            })
        }
        
    }

    return (
        <section id='body'>
            <div className='conteiner-gerar-questoes'>
                <h1>Online<span style={{ color:"#2074d4"}}>Exam</span></h1>
                <div className='assunto-dificuldade-div'>
                    <div className='assunto'>
                        <TextField 
                        id="outlined-multiline-flexible"
                        label="Assunto da questão"
                        multiline
                        maxRows={4}
                        value={assunto}
                        onChange={(e)=>setAssunto(e.target.value)}
                        fullWidth
                        />
                    </div>
                    <Box className='dificuldade' sx={{ width: 300 }}>
                        <p>Dificuldade da questão: {sliderValue}</p>
                        <Slider
                            aria-label="Restricted values"
                            min={1}
                            max={5}
                            defaultValue={1}
                            valueLabelDisplay="auto"
                            marks={marks}
                            value={sliderValue}
                            onChange={handleSliderChange}
                        />
                    </Box>
                </div>
                <TextField
                id="outlined-multiline-static"
                label="Enunciado da sua questão"
                multiline
                rows={4}
                value={enunciado}
                onChange={(e)=>setEnunciado(e.target.value)}
                sx={{
                    marginTop:'10px'
                }}
                />
                <button onClick={addQuestao} className='btn-submeter'>
                    Submeter
                </button>
            </div>
        </section>
    )
}
