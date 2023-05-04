import './css/GerarQuestoes.css';
import * as React from 'react';
import TextField from '@mui/material/TextField';   

import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function QuestoesFechadas() {

    return (
        <section id='body'>
            <form className='conteiner-gerar-questoes'>
                    <h1>Online<span style={{ color:"#2074d4"}}>Exam</span></h1>
                    <TextField
                    id="outlined-multiline-flexible"
                    label="Digite o assunto da sua questão"
                    multiline
                    maxRows={4}
                    />
                    <TextField
                    id="outlined-multiline-static"
                    label="Digite o enunciado da sua questão"
                    multiline
                    rows={4}
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
                        sx={{
                            marginTop:'8px'
                        }}
                        />
                        <FormControlLabel control={<Checkbox/>} 
                        sx={{
                            marginTop:'22px'
                        }}
                        />
                        <FormControlLabel control={<Checkbox/>} 
                        sx={{
                            marginTop:'22px'
                        }}
                        />
                        <FormControlLabel control={<Checkbox/>} 
                        sx={{
                            marginTop:'25px'
                        }}
                        />
                        <FormControlLabel control={<Checkbox/>} 
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
                            />
                            <TextField
                            id="outlined-multiline-flexible"
                            label="Segunda Alternativa"
                            multiline
                            maxRows={4}
                            sx={{
                                marginTop:'10px'
                            }}
                            />
                            <TextField
                            id="outlined-multiline-flexible"
                            label="Terceita Alternativa"
                            multiline
                            maxRows={4}
                            sx={{
                                marginTop:'10px'
                            }}
                            />
                            <TextField
                            id="outlined-multiline-flexible"
                            label="Quarta Alternativa"
                            multiline
                            maxRows={4}
                            sx={{
                                marginTop:'10px'
                            }}
                            />
                            <TextField
                            id="outlined-multiline-flexible"
                            label="Quinta Alternativa"
                            multiline
                            maxRows={4}
                            sx={{
                                marginTop:'10px'
                            }}
                            />

                        </div>

                </div>
            
                <button className='btn-submeter'>
                    Submeter
                </button>
            </form>
        </section>
    )
}

