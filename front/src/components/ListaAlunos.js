import { useEffect, useState } from "react";
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import TextField from '@mui/material/TextField';
import axios from "axios"

import "./css/ListaAlunos.css";


function ListaAlunos() {

    const AddAluno = 'AddAluno';
    const btnaddaluno = 'btn-add-aluno';

    const [active, setActive] = useState(false);
    const [desapear, setDesapear] = useState(false);
    const handleClick = () => {
        setDesapear(!desapear);
        setActive(!active);
      };

    const[nome, setNome] = useState('')
    const[email, setEmail] = useState('')

    const postAluno = async () => {
        const senha = '123456'
        const discente_docente = 'Discente'
        const user={nome, email, senha, discente_docente}
        await fetch("http://localhost:8080/cadastro",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(user)
      }).then((response) => {
        if (response.status === 200) {
          console.log("Usuário Cadastrado com Sucesso")
          handleClick();
          loadAlunos();
          setNome('');
          setEmail('');
        } 
        else if(response.status === 400) {
          console.log('Erro ao cadastrar usuário: ');
          setNome('')
          setEmail('')
        }
      })
      .catch((error) => {
        console.log('Erro ao cadastrar usuário:', error);
        setNome('');
        setEmail('');
      })
      };


    var index = 0;

    const [alunos, setAlunos] = useState([]);

    useEffect( () => {
        loadAlunos();
    }, []);

    const loadAlunos = async () =>{
        const result = await axios.get("http://localhost:8080/turma")
        setAlunos(result.data)
    }

    return (
            <div id="Turma">
                <div className="container-table">
                    <table className="table-alunos">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nome</th>
                                <th>Email</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                alunos.map((aluno) =>
                                aluno.discente_docente === "Discente" ? (
                                <tr>
                                <td key={index}><strong>{index += 1}</strong></td>
                                <td>{aluno.nome}</td>
                                <td>{aluno.email}</td>
                                <td>
                                    <EditIcon sx={{ color: '#292b2c', cursor:'pointer' }}/>
                                </td>
                                <td>
                                    <PersonRemoveIcon sx={{ color: '#d9534f', cursor:'pointer' }}/>
                                </td>
                                </tr>
                                ): null)
                            }
                            <tr className={`${AddAluno}${active ? 'active' : ''}`}>
                                <td>
                                    #
                                </td>
                                <td>
                                    <TextField id="outlined-basic" variant="outlined" 
                                    value={nome}
                                    onChange={(e)=>setNome(e.target.value)}
                                    size="small"
                                    />
                                </td>
                                <td>
                                    <TextField id="outlined-basic" variant="outlined" 
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                    size="small"
                                    />
                                </td>
                                <td><CheckIcon onClick={postAluno} color="success" sx={{cursor:'pointer'}} /></td>
                                <td><CloseIcon sx={{ color: '#d9534f', cursor:'pointer' }} onClick={handleClick}/></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className={`${btnaddaluno}${desapear ? 'desapear' : ''}`}>
                        <Fab color="primary" variant="extended"
                        className={desapear ? 'desapear' : ''}
                        onClick={handleClick}
                        sx={{
                            mt:'10px',
                            color:"white"
                        }}>
                            <AddIcon sx={{ mr: 1 }} />
                            Adicionar Aluno
                        </Fab>
                    </div>
                </div>
            </div>
    )
}

export default ListaAlunos;