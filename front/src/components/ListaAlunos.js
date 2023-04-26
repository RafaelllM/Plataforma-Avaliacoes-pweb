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

    const [edit, setEdit] = useState(false)

    const [editnome, setEditNome] = useState('')
    const [editemail, setEditEmail] = useState('')

    function EditClick(nome, email) {
        setEditNome(nome)
        setEditEmail(email)
        setEdit(!edit);
        return (
                <>
                <table className="table-alunos">
                    <tbody>
                    <td><strong>#</strong></td>
                    <td>
                        <TextField id="standard-basic" variant="standard" fullWidth
                        value={editnome}/>
                    </td>
                    <td>
                        <TextField id="standard-basic" variant="standard" fullWidth
                        value={editemail}/>
                    </td>
                    <td>
                        <CheckIcon  sx={{color: '#d9534f', cursor:'pointer' }}/>
                    </td>
                    <td>
                        <CloseIcon onClick={CancelClick} sx={{ color: '#292b2c', cursor:'pointer' }}/>  
                    </td>
                    </tbody>
                </table>
                </>
        )
    }
    
    function SaveClick(nome, email) {
        console.log(nome, email)
    }

    const CancelClick = () => {
        setEdit(!edit);
    }
    
    function DeleteAluno (aluno) {
        console.log(aluno)
    }
    
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

    var nAlunos = 0;

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

                    <div className="EditAluno">
                        {edit &&  (<EditClick/>)}
                    </div>
                    
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
                                alunos.map((aluno, index) => {
                                    if (aluno.discente_docente !== "Discente") {
                                        return null;
                                      }

                                    return (
                                        <tr key={index}>
                                                <td><strong>{nAlunos+=1}</strong></td>
                                                <td>{aluno.nome}</td>
                                                <td>{aluno.email}</td>
                                                <td>
                                                    <EditIcon onClick={EditClick(aluno.nome, aluno.email)} sx={{cursor:'pointer'}} />
                                                </td>
                                                <td>
                                                    <PersonRemoveIcon onClick={DeleteAluno(aluno)} sx={{ color: '#d9534f', cursor:'pointer' }}/>
                                                </td>
                                        </tr>
                                    );
                                })
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
                                <td><CloseIcon onClick={handleClick} sx={{ color: '#d9534f', cursor:'pointer' }} /></td>
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