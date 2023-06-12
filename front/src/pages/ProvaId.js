import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

function ProvaId() {

    const [prova, setProva] = useState([]);

    const {id} = useParams();

    const loadProva = async () => {
        const result = await axios.get(`http://localhost:8080/prova/${id}`)
        setProva(result.data)
        console.log(result.data)
    }

    useEffect(() => {
        loadProva()
    }, []);
    
}

export default ProvaId