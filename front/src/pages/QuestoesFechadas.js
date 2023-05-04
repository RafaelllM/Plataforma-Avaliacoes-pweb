import './css/GerarQuestoes.css';
import * as React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';   

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import { create } from '../services/questoes.service';

export default function QuestoesFechadas() {

    const[assunto, setAssunto] = useState('')
    const[enunciado, setEnunciado] = useState('')
    const[resposta, setResposta] = useState('')
    function radioResposta (event){
        setResposta(event.target.value);
      }
    const[alternativa1, setAlternativa1] = useState('')
    const[alternativa2, setAlternativa2] = useState('')
    const[alternativa3, setAlternativa3] = useState('')
    const[alternativa4, setAlternativa4] = useState('')
    const[alternativa5, setAlternativa5] = useState('')

    function addQuestao() {
        const alternativas = [alternativa1, alternativa2, alternativa3, alternativa4, alternativa5]
        const questao = { assunto, enunciado, alternativas, resposta };
        create(questao).then((res) => {
            if (res.status === 200) {
                console.log("Questao Cadastrada com Sucesso")
            } else if (res.status === 400) {
                console.log('Erro ao cadastrar questao');
            }
        })
    }

    return (
        <section id='body'>
            <form className='conteiner-gerar-questoes'>
                    <h1>Online<span style={{ color:"#2074d4"}}>Exam</span></h1>
                    <TextField
                    id="outlined-multiline-flexible"
                    label="Digite o assunto da sua questão"
                    multiline
                    maxRows={4}
                    value={assunto}
                    onChange={(e)=>setAssunto(e.target.value)}
                    />
                    <TextField
                    id="outlined-multiline-static"
                    label="Digite o enunciado da sua questão"
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

                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultChecked={1}
                                name="resposta"
                                sx={{
                                    marginLeft:'15px'
                                }}
                                >
                                <FormControlLabel value={'A'} label='A' control={<Radio />}
                                onChange={radioResposta}
                                defaultChecked
                                sx={{
                                    marginTop: '5px'
                                }}
                                />
                                <FormControlLabel value={'B'} label='B' control={<Radio />}
                                onChange={radioResposta}
                                sx={{
                                    marginTop: '25px'
                                }}
                                />
                                <FormControlLabel value={'C'} label='C' control={<Radio />}
                                onChange={radioResposta}
                                sx={{
                                    marginTop: '25px'
                                }}
                                />
                                <FormControlLabel value={'D'} label='D' control={<Radio />}
                                onChange={radioResposta}
                                sx={{
                                    marginTop: '25px'
                                }}
                                />
                                <FormControlLabel value={'E'} label='E' control={<Radio />}
                                onChange={radioResposta}
                                sx={{
                                    marginTop: '22px'
                                }}
                                />
                            </RadioGroup>

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
