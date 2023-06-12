import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';
import { SvgIcon } from "@mui/material";
import Assignment from '@mui/icons-material/Assignment';

import "./css/ListaProvas.css";


function ListaProvas() {

    const [turmas, setTurmas] = useState([]);
    
    const loadTurmas = async () => {
        const result = await axios.get("http://localhost:8080/turma")
        setTurmas(result.data)
    }

    const [provas, setProvas] = useState([]);

    const loadProvas = async () => {
        const result = await axios.get("http://localhost:8080/prova") 
        setProvas(result.data)
    }

    useEffect(() => {
        loadProvas()
        loadTurmas()
    }, []);

    return (
        <>
            {
            turmas.map((turma, index) => {
                const turma_id = turma.id
                return (
                    <>
                    <h4>{turma.nome_disciplina}</h4>
                    {
                        provas.map((prova) => {
                            if (prova.id === turma_id){
                                return (
                                    <div key={prova} id="exibir-prova">
                                        <div className="exibir-prova-display">
                                            <div>
                                                <h2>{prova.titulo}</h2>
                                                <p>{prova.data}</p>
                                            </div>
                                            <div>
                                                <SvgIcon
                                                className="svgicon"
                                                component={Assignment}
                                                sx={{
                                                    fontSize: "40px",
                                                    color: "#2074d4"
                                                }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                            
                        })
                    }
                    </>
                );
            })
        }
        </>  
    )
}

export default ListaProvas