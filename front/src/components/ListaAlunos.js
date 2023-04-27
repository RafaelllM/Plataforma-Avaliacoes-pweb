import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import Fab from '@mui/material/Fab';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useEffect, useState } from "react";

import { SvgIcon } from "@mui/material";
import "./css/ListaAlunos.css";
import { create, update } from '../services/alunos.service';


function ListaAlunos() {

    const AddAluno = 'AddAluno';
    const btnaddaluno = 'btn-add-aluno';

    const [active, setActive] = useState(false);
    const [desapear, setDesapear] = useState(false);
    const handleClick = () => {
        setDesapear(!desapear);
        setActive(!active);
    };

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')

    function reset() {
        setNome('');
        setEmail('');
    }

    function createAluno() {
        const senha = '123456'
        const discente_docente = 'Discente'
        const user = { nome, email, senha, discente_docente };

        create(user)
            .then((response) => {
                if (response.status === 200) {
                    console.log("Usuário Cadastrado com Sucesso")
                    handleClick();
                    loadAlunos();
                }
                else if (response.status === 400) {
                    console.log('Erro ao cadastrar usuário: ');
                }
            })
            .catch((error) => {
                console.log('Erro ao cadastrar usuário:', error);
            })
        reset();
    }

    var nAlunos = 0;

    const [alunos, setAlunos] = useState([]);

    useEffect(() => {
        loadAlunos()
    }, []);

    const loadAlunos = async () => {
        const result = await axios.get("http://localhost:8080/turma")
        setAlunos(result.data)
    }

    function setAlunoData(index, key, value) {
        const newAlunos = [...alunos];
        newAlunos[index][key] = value;

        setAlunos(newAlunos);
    }

    function saveAluno(aluno) {
        console.log(aluno);
        update(aluno)
            .then((res) => {
                console.log(res);
                loadAlunos();
            })
            .catch((err) => console.log(err))
    }

    return (
        <>
            <div id="Turma">
                <div className="container-table">

                    <div className="EditAluno">

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
                                            <td><strong>{nAlunos += 1}</strong></td>
                                            <td>
                                                {!aluno.edition && aluno.nome}
                                                {aluno.edition && (
                                                    <TextField
                                                        id="standard-basic"
                                                        label="Nome do Aluno"
                                                        variant="outlined"
                                                        fullWidth
                                                        value={aluno.nome}
                                                        onChange={(event) => setAlunoData(index, "nome", event.target.value)}
                                                    />
                                                )}
                                            </td>
                                            <td>
                                                {!aluno.edition && aluno.email}
                                                {aluno.edition && (
                                                    <TextField
                                                        id="standard-basic"
                                                        label="Email do Aluno"
                                                        variant="outlined"
                                                        fullWidth
                                                        value={aluno.email}
                                                        onChange={(event) => setAlunoData(index, "email", event.target.value)}
                                                    />
                                                )}
                                            </td>
                                            <td>
                                                <SvgIcon
                                                    color={aluno.edition ? 'success' : 'disabled'}
                                                    component={aluno.edition ? CheckIcon : EditIcon}
                                                    onClick={() => {
                                                        if (aluno.edition) {
                                                            saveAluno(aluno);
                                                        }

                                                        setAlunoData(index, "edition", true);
                                                    }}
                                                    sx={{ cursor: 'pointer' }}
                                                />
                                            </td>
                                            <td>
                                                <SvgIcon
                                                    component={aluno.edition ? CloseIcon : PersonRemoveIcon}
                                                    onClick={() => setAlunoData(index, "edition", false)}
                                                    sx={{ color: '#d9534f', cursor: 'pointer' }}
                                                />
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
                                        label="Nome do Aluno"
                                        value={nome}
                                        onChange={(e) => setNome(e.target.value)}
                                        size="small"
                                    />
                                </td>
                                <td>
                                    <TextField id="outlined-basic" variant="outlined"
                                        label="Email do Aluno"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        size="small"
                                    />
                                </td>
                                <td><CheckIcon onClick={createAluno} color="success" sx={{ cursor: 'pointer' }} /></td>
                                <td><CloseIcon onClick={handleClick} sx={{ color: '#d9534f', cursor: 'pointer' }} /></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className={`${btnaddaluno}${desapear ? 'desapear' : ''}`}>
                        <Fab color="primary" variant="extended"
                            className={desapear ? 'desapear' : ''}
                            onClick={handleClick}
                            sx={{
                                mt: '10px',
                                color: "white"
                            }}>
                            <AddIcon sx={{ mr: 1 }} />
                            Adicionar Aluno
                        </Fab>
                    </div>
                </div>
            </div>
            {/* {
                alert.active && (
                    <Alert variant="outlined" severity="success">
                        This is a success alert — check it out!
                    </Alert>
                )
            } */}
        </>
    )
}

export default ListaAlunos;