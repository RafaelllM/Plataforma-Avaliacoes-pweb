import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

function TurmaId() {

    const [turma, setTurma] = useState([]);

    const {id} = useParams();

    const loadTurma = async () => {
        const result = await axios.get(`http://localhost:8080/turma/${id}`)
        setTurma(result.data)
        console.log(result.data)
    }

    useEffect(() => {
        loadTurma()
    }, []);
    
}

export default TurmaId