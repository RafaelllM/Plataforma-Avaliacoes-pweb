import './css/GerarQuestoes.css';
import * as React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';   

export default function QuestoesAbertas() {
    
    const[assunto, setAssunto] = useState('')
    const[enunciado, setEnunciado] = useState('')

    return (
        <section id='body'>
            <div className='conteiner-gerar-questoes'>
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
                <button className='btn-submeter'>
                    Submeter
                </button>
            </div>
        </section>
    )
}
