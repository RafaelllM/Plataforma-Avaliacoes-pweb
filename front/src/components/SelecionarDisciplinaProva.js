import axios from 'axios';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';

import "./css/SelecionarDisciplinaProva.css";

function SelecionarDisciplinaProva() {


    const {id} = useParams();
    
    const [turmas, setTurmas] = useState([]);
    
    const loadTurmas = async () => {
        const result = await axios.get("http://localhost:8080/turma")
        setTurmas(result.data)
    }

    function setTurmaData(index, key, value) {
        const turma = [...turmas];
        turma[index][key] = value;

        setTurmas(turma);
    }

    useEffect(() => {
        loadTurmas()
    }, []);


    const [inicio, setInicio] = useState('');
    const [fim, setFim] = useState('');
    

    const SelecionarProva= async(e) => {
        const selecionada = []
        turmas.map((turma) => {
            if (turma.selecionada) {
                selecionada.push(turma.id);
            }

        })
        if(selecionada.length > 1) {
            alert("Selecione apenas uma turma")
        } else{
            const turma_id = selecionada[0]
            console.log(turma_id)
            await axios.post(`http://localhost:8080/prova/${id}/selecionar`, {turma_id});
        }
        return(null);
    }

    return (
        <>
        <div id="Selecionar-Turma">
            {
            turmas.map((turma, index) => {
                return(
                    <div key={index} className={`turma ${turma.selecionada ? 'questao-border' : ''}`}
                    onClick={() => {
                        if (turma.selecionada) {
                            setTurmaData(index, "selecionada", false)
                        } else {
                            setTurmaData(index, "selecionada", true)
                        }
                    }}>
                        <h3>{turma.nome_disciplina}</h3>
                        <p>{turma.descricao_disciplina}</p>
                    </div>
                );
            })
            }
        </div>
        
        <Button variant="contained" color="primary" onClick={SelecionarProva}
                       sx={{
                        display: "block",
                        marginInline: 'auto',
                        width: '400px',
                        mb: '50px',
                        mt: '50px'
                        }}>
                          <span>Selecionar</span>
            </Button>
        </>
    )
}

export default SelecionarDisciplinaProva;