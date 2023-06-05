import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';

import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';

import { createProva , createQuestaoProva  } from '../services/questoes.service';
import "./css/GerarProva.css";

function GerarProva() {
    const [questaoAberta, setQuestaoAberta] = useState([]);
    const [questaoFechada, setQuestaoFechada] = useState([]);
    const [questaoVF, setQuestaoVF] = useState([]);

    function setQuestoesAData(index, key, value) {
        const newQuestoes = [...questaoAberta];
        newQuestoes[index][key] = value;

        setQuestaoAberta(newQuestoes);
    }

    function setQuestoesFData(index, key, value) {
        const newQuestoes = [...questaoFechada];
        newQuestoes[index][key] = value;

        setQuestaoFechada(newQuestoes);
    }

    function setQuestoesVFData(index, key, value) {
        const newQuestoes = [...questaoVF];
        newQuestoes[index][key] = value;

        setQuestaoVF(newQuestoes);
    }
    
    const loadQuestoes = async () => {
        const result1 = await axios.get("http://localhost:8080/questoes/aberta")
        setQuestaoAberta(result1.data)
        const result2 = await axios.get("http://localhost:8080/questoes/fechada")
        setQuestaoFechada(result2.data)
        const result3 = await axios.get("http://localhost:8080/questoes/vf")
        setQuestaoVF(result3.data)
    }

    useEffect(() => {
        loadQuestoes()
    }, []);

    const [titulo, setTitulo] = useState('');
    /*
    const [inicio, setInicio] = useState('');
    const [fim, setFim] = useState('');
    */
    const [duracao, setDuracao] = useState('');

    function CriarProva() {
        const QuestaoProva = []
        questaoAberta.map((questao) =>{
            if (questao.selecionada) {
                delete questao.selecionada
                createQuestaoProva(questao).then((res) => {
                    QuestaoProva.push(questao)
                })
            }
            return(null)
        })
        questaoFechada.map((questao) =>{
            if (questao.selecionada) {
                delete questao.selecionada
                createQuestaoProva(questao).then((res) => {
                    QuestaoProva.push(questao)
                })
            }
            return(null)
        })
        questaoVF.map((questao) =>{
            if (questao.selecionada) {
                delete questao.selecionada
                createQuestaoProva(questao).then((res) => {
                    QuestaoProva.push(questao)
                })
            }
            return(null)
        })
        const prova = {titulo, duracao, QuestaoProva}
        console.log(prova);
            createProva(prova)
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => console.log(err))
        }

    return (
        <>
        <section id="background-gerarprova">
            <div id="exibicao_questeos">
            <h1>Online<span style={{ color:"#2074d4"}}>Exam</span></h1>
                <TextField
                    id="standard-basic"
                    label="Titulo da Prova"
                    variant="outlined"
                    fullWidth
                    value={titulo}
                    onChange={(event) => setTitulo(event.target.value)}
                    sx={{
                        marginTop:"20px"
                    }}
                />
                { /*
                <h4>
                    Data de Inicio
                </h4>
                
                <input type="date" className="data-gerar" name="data" min={dataAtual} max="2023-12-31" value={inicio}
                onChange={(e)=> setInicio(e.target.value)}></input>
                <h4>
                    Data de Fim
                </h4>
                <input type="date" className="data-gerar" name="data" min={dataAtual} max="2023-12-31" value={fim}
                onChange={(e)=> setFim(e.target.value)}></input>
                */ }
                <h4>
                    Duração da Prova
                </h4>
                <TextField
                id="outlined-number"
                label="Tempo da prova em minutos"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                value={duracao}
                onChange={(e)=> setDuracao(e.target.value)}
                sx={{
                    width: "300px"
                }}
                />
                <h3>Questões Abertas:</h3>
                {
                questaoAberta.map((questaoAberta, index) => {
                    const data = "Criada: " + questaoAberta.data.toLocaleString();
                    return(
                        <div key={index} className={`questao ${questaoAberta.selecionada ? 'questao-border' : ''}`}
                        onClick={() => {
                            if (questaoAberta.selecionada) {
                                setQuestoesAData(index, "selecionada", false)
                            } else {
                                setQuestoesAData(index, "selecionada", true)
                            }
                        }}>
                            <h4>
                                {questaoAberta.enunciado}
                            </h4>
                            <span>
                                {questaoAberta.enunciado}
                            </span>
                            <span>
                                {data}
                            </span>
                        </div>
                    );
                })
                }
                <h3>Questões Fechadas:</h3>
                {
                questaoFechada.map((questaoFechada, index) => {
                    const data = "Criada: " + questaoFechada.data.toLocaleString();
                    return(
                        <div key={index} className={`questao ${questaoFechada.selecionada ? 'questao-border' : ''}`}
                        onClick={() => {
                            if (questaoFechada.selecionada) {
                                setQuestoesFData(index, "selecionada", false)
                            } else {
                                setQuestoesFData(index, "selecionada", true)
                            }
                        }}>
                            <h4>
                                {questaoFechada.enunciado}
                            </h4>
                            <span>
                                {questaoFechada.assunto}
                            </span>
                            <span>
                                {data}
                            </span>
                            <h5>A - 
                                {questaoFechada.alternativas[0]}
                            </h5>
                            <h5>B - 
                                {questaoFechada.alternativas[1]}
                            </h5>
                            <h5>C - 
                                {questaoFechada.alternativas[2]}
                            </h5>
                            <h5>D - 
                                {questaoFechada.alternativas[3]}
                            </h5>
                            <h5>E - 
                                {questaoFechada.alternativas[4]}
                            </h5>
                        </div>
                    );
                })
                }
                <h3>Questões V/F:</h3>
                {
                questaoVF.map((questaoVF, index) => {
                    const data = "Criada: " + questaoVF.data.toLocaleString();
                    return(
                        <div key={index} className={`questao ${questaoVF.selecionada ? 'questao-border' : ''}`}
                        onClick={() => {
                            if (questaoVF.selecionada) {
                                setQuestoesVFData(index, "selecionada", false)
                            } else {
                                setQuestoesVFData(index, "selecionada", true)
                            }
                        }}>
                            <h4>
                                {questaoVF.enunciado}
                            </h4>
                            <span>
                                {questaoVF.assunto}
                            </span>
                            <span>
                                {data}
                            </span>
                            <h5>A - 
                                {questaoVF.alternativas[0]}
                            </h5>
                            <h5>B - 
                                {questaoVF.alternativas[1]}
                            </h5>
                            <h5>C - 
                                {questaoVF.alternativas[2]}
                            </h5>
                            <h5>D - 
                                {questaoVF.alternativas[3]}
                            </h5>
                            <h5>E - 
                                {questaoVF.alternativas[4]}
                            </h5>
                        </div>
                    );
                })
                }
                <Button variant="contained" color="primary" onClick={CriarProva}
                       sx={{
                        marginInline: 'auto',
                        width: '400px',
                        mb: '50px',
                        mt: '50px'
                        }}>
                          <span>Criar prova</span>
                      </Button>
            </div>
        </section>
        </>
    )

}

export default GerarProva;