import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';
import { SvgIcon } from "@mui/material";
import Assignment from '@mui/icons-material/Assignment';
import { useNavigate } from 'react-router-dom'

import "./css/ListaProvas.css";


function ListaProvas() {
    const navigate = useNavigate();

    const [provas, setProvas] = useState([]);

    const loadProvas = async () => {
        const result = await axios.get("http://localhost:8080/prova") 
        setProvas(result.data)
    }

    useEffect(() => {
        loadProvas()
    }, []);

    function navigateProva(id) {
        navigate(`/Docente/Questoes/Prova/${id}/Selecionar`)
    }

    return (
        <>
            {
            provas.map((prova) => {
                const id = prova.id
                return (
                    <div key={prova} id="exibir-prova">
                        <div onClick={() => navigateProva(id)} className="exibir-prova-display">
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
            })
        }
        </>  
    )
}

export default ListaProvas