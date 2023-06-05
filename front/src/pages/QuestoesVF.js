import './css/GerarQuestoes.css';
import * as React from 'react';
import TextField from '@mui/material/TextField';   
import { useState } from 'react';

import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { createQuestaoVF } from '../services/questoes.service';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import { useNavigate } from 'react-router-dom'

export default function QuestoesFechadas() {

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

    const[check1, setcheck1] = useState(false)
    const[check2, setcheck2] = useState(false)
    const[check3, setcheck3] = useState(false)
    const[check4, setcheck4] = useState(false)
    const[check5, setcheck5] = useState(false)

    const[alternativa1, setAlternativa1] = useState('')
    const[alternativa2, setAlternativa2] = useState('')
    const[alternativa3, setAlternativa3] = useState('')
    const[alternativa4, setAlternativa4] = useState('')
    const[alternativa5, setAlternativa5] = useState('')

    function addQuestao(e) {
        e.preventDefault();
        const dificuldade = sliderValue
        const alternativas = [alternativa1, alternativa2, alternativa3, alternativa4, alternativa5]
        const respostas = [check1, check2, check3, check4, check5]
        const questao = { assunto, enunciado, dificuldade, alternativas, respostas };
        createQuestaoVF(questao)
        .then((res) => {
            if (res.status === 200) {
                console.log("Questao Cadastrada com Sucesso")
                navigate("/Docente/Questoes");
            } else if (res.status === 400) {
                console.log('Erro ao cadastrar questao');
                alert('Erro ao cadastrar questao')
            }
        })
        console.log(questao)
    }

    return (
        <section id='body'>
            <form className='conteiner-gerar-questoes'>
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
                    label="Enunciado da questão"
                    multiline
                    rows={4}
                    value={enunciado}
                    onChange={(e)=>setEnunciado(e.target.value)}
                    sx={{
                        marginTop:'10px'
                    }}
                    />

                    <span className='span-questoes'>Alternativas:</span>

                    <div className='container-alternativas-resposta'>

                    <div className='conteiner-resposta-certa'>

                    <FormGroup
                    sx={{
                        marginLeft:'30px'
                    }}>
                        <FormControlLabel control={<Checkbox/>} 
                        checked={check1} 
                        onChange={(e)=> setcheck1(!check1)}
                        sx={{
                            marginTop:'8px'
                        }}
                        />
                        <FormControlLabel control={<Checkbox/>} 
                        checked={check2} 
                        onChange={(e)=> setcheck2(!check2)}
                        sx={{
                            marginTop:'22px'
                        }}
                        />
                        <FormControlLabel control={<Checkbox/>} 
                        checked={check3} 
                        onChange={(e)=> setcheck3(!check3)}
                        sx={{
                            marginTop:'22px'
                        }}
                        />
                        <FormControlLabel control={<Checkbox/>} 
                        checked={check4} 
                        onChange={(e)=> setcheck4(!check4)}
                        sx={{
                            marginTop:'25px'
                        }}
                        />
                        <FormControlLabel control={<Checkbox/>} 
                        checked={check5} 
                        onChange={(e)=> setcheck5(!check5)}
                        sx={{
                            marginTop:'25px'
                        }}
                        />
                    </FormGroup>

                    </div>

                        <div className='conteiner-alternativas'>

                            <TextField
                            id="outlined-multiline-flexible"
                            label="Primeira Alternativa"
                            multiline
                            maxRows={4}
                            value={alternativa1}
                            onChange={(e)=> setAlternativa1(e.target.value)}
                            />
                            <TextField
                            id="outlined-multiline-flexible"
                            label="Segunda Alternativa"
                            multiline
                            maxRows={4}
                            value={alternativa2}
                            onChange={(e)=> setAlternativa2(e.target.value)}
                            sx={{
                                marginTop:'10px'
                            }}
                            />
                            <TextField
                            id="outlined-multiline-flexible"
                            label="Terceita Alternativa"
                            multiline
                            maxRows={4}
                            value={alternativa3}
                            onChange={(e)=> setAlternativa3(e.target.value)}
                            sx={{
                                marginTop:'10px'
                            }}
                            />
                            <TextField
                            id="outlined-multiline-flexible"
                            label="Quarta Alternativa"
                            multiline
                            maxRows={4}
                            value={alternativa4}
                            onChange={(e)=> setAlternativa4(e.target.value)}
                            sx={{
                                marginTop:'10px'
                            }}
                            />
                            <TextField
                            id="outlined-multiline-flexible"
                            label="Quinta Alternativa"
                            multiline
                            maxRows={4}
                            value={alternativa5}
                            onChange={(e)=> setAlternativa5(e.target.value)}
                            sx={{
                                marginTop:'10px'
                            }}
                            />

                        </div>

                </div>
            
                <button onClick={addQuestao} className='btn-submeter'>
                    Submeter
                </button>
            </form>
        </section>
    )
}

