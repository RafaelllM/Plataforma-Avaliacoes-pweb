import './css/GerarQuestoes.css';
import * as React from 'react';
import TextField from '@mui/material/TextField';   
import { useState } from 'react';

import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { createQuestaoVF } from '../services/questoes.service';

export default function QuestoesFechadas() {

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
        const stringcheck1 = check1.toString();
        const stringcheck2 = check2.toString();
        const stringcheck3 = check3.toString();
        const stringcheck4 = check4.toString();
        const stringcheck5 = check5.toString();
        const alternativas = [[alternativa1, stringcheck1], [alternativa2, stringcheck2], [alternativa3, stringcheck3], [alternativa4, stringcheck4], [alternativa5, stringcheck5]]
        const questao = { assunto, enunciado, alternativas };
        createQuestaoVF(questao)
        .then((res) => {
            if (res.status === 200) {
                console.log("Questao Cadastrada com Sucesso")
            } else if (res.status === 400) {
                console.log('Erro ao cadastrar questao');
            }
        })
        console.log(questao)
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

