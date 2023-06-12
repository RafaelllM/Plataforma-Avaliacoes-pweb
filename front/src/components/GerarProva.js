import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';

import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';

import { createProva , createQuestaoProva  } from '../services/questoes.service';
import "./css/GerarProva.css";
import { useNavigate } from "react-router-dom";

function GerarProva() {
    const navigate = useNavigate();

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

    let prova_id = null;


    
    const [duracao, setDuracao] = useState('');
    async function CriarProva() {
        const prova = {titulo, duracao}
        console.log(prova);
            createProva(prova)
                .then(response => response.json())
                .then(data => {
                    prova_id = data;
                })
                .catch((err) => console.log(err))
                setTimeout(() => {
                    questaoAberta.map((questao) =>{
                        if (questao.selecionada) {
                            delete questao.selecionada
                            const assunto = questao.assunto
                            const dificuldade = questao.dificuldade
                            const enunciado = questao.enunciado
                            const data = questao.data
                            const questaoProva = {assunto, dificuldade, enunciado, data, prova_id}
                            createQuestaoProva(questaoProva).then((res) => {
                                console.log(questaoProva)
                            })
                        }
                        return(null)
                    })
                    questaoFechada.map((questao) =>{
                        if (questao.selecionada) {
                            delete questao.selecionada
                            const assunto = questao.assunto
                            const dificuldade = questao.dificuldade
                            const enunciado = questao.enunciado
                            const data = questao.data
                            const alternativas = questao.alternativas
                            const resposta_correta = questao.resposta_correta
                            const questaoProva = {assunto, dificuldade, enunciado, data, prova_id, alternativas, resposta_correta}
                            createQuestaoProva(questaoProva).then((res) => {
                                console.log(questaoProva)
                            })
                        }
                        return(null)
                    })
                    questaoVF.map((questao) =>{
                        if (questao.selecionada) {
                            delete questao.selecionada
                            const assunto = questao.assunto
                            const dificuldade = questao.dificuldade
                            const enunciado = questao.enunciado
                            const data = questao.data
                            const alternativas = questao.alternativas
                            const respostas = questao.respostas
                            const questaoProva = {assunto, dificuldade, enunciado, data, prova_id, alternativas, respostas}
                            createQuestaoProva(questaoProva).then((res) => {
                                console.log(questaoProva)
                            })
                        }
                        return(null)   
                    })
                    navigate("/Docente/Questoes")
                }, 1000);
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