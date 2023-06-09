import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { create_turma } from '../services/professor.service';

import "./css/ListaTurmas.css";

function ListaTurmas(){
    const navigate = useNavigate();

    function createTurma() {
        const data = { nome_disciplina, descricao_disciplina }
        create_turma(data).then((res) => {
            loadTurmas();
        })
      }

    const [showPopup, setShowPopup] = useState(false);

    const [nome_disciplina, setNome_disciplina] = useState('')
    const [descricao_disciplina, setDescricao_disciplina] = useState('')

    function navigateTurma(id) {
        navigate(`/Docente/Turma/${id}`)
    }
    
    const handleChange1 = (e) => {
        setNome_disciplina(e.target.value);
      }
    
      const handleChange2 = (e) => {
        setDescricao_disciplina(e.target.value);
      }
    
    
      const handleClose = () => {
        setShowPopup(!showPopup);
      };


    const [turmas, setTurmas] = useState([]);
    
    const loadTurmas = async () => {
        const result = await axios.get("http://localhost:8080/turma")
        setTurmas(result.data)
    }

    useEffect(() => {
        loadTurmas()
    }, []);

    function Popup() {
        return (
          <div className="popup_adicionarturma">
              <TextField id="outlined-basic" label="Nome da turma" variant="outlined" sx={{width:"380px"}}
              value={nome_disciplina}
              onChange={handleChange1}
              />
              <TextField id="outlined-basic" label="Descrição da turma" variant="outlined" sx={{width:"380px"}}
              value={descricao_disciplina}
              onChange={handleChange2}
              />
              <Fab onClick={createTurma} color="primary" variant="extended"
                  sx={{
                      mt: '10px',
                      color: "white"
                  }}>
                  <AddIcon sx={{ mr: 1 }} />
                  Adicionar Turma
              </Fab>
          </div>
        );
      }

    return (
        <>
        <div id="exibicao_turmas">
            {
            turmas.map((turma, index) => {
                const id = turma.id
                return(
                    <div key={index} className="turma" onClick={() => navigateTurma(id)}>
                        <h3>{turma.nome_disciplina}</h3>
                        <p>{turma.descricao_disciplina}</p>
                    </div>
                );
            })
            }
        </div>

        <Box>
        {showPopup && <Popup onClose={handleClose} />}
        <SpeedDial
            className='btnfixed'
            onClick={handleClose}
            ariaLabel="SpeedDial openIcon example"
            icon={<SpeedDialIcon openIcon={<EditIcon />} />}
            >
            </SpeedDial>
        </Box>
        </>
    )

}

export default ListaTurmas;