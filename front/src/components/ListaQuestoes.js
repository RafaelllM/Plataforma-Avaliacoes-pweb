import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';

import TextField from '@mui/material/TextField';
import { SvgIcon } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import Delete from '@mui/icons-material/Delete'

import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

import { createQuestaoAberta, deleteQuestaoAberta ,createQuestaoFechada, deleteQuestaoFechada, createQuestaoVF, deleteQuestaoVF } from '../services/questoes.service';

import "./css/ListaQuestoes.css";

function ListaQuestoes() {
    const [questaoAberta, setQuestaoAberta] = useState([]);
    const [questaoFechada, setQuestaoFechada] = useState([]);
    const [questaoVF, setQuestaoVF] = useState([]);
    
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

    const[newenunciadovf, setEnunciadovf] = useState('')
    const[newassuntovf, setAssuntovf] = useState('')
    const[alternativa0vf, setAlternativa0vf] = useState('')
    const[alternativa1vf, setAlternativa1vf] = useState('')
    const[alternativa2vf, setAlternativa2vf] = useState('')
    const[alternativa3vf, setAlternativa3vf] = useState('')
    const[alternativa4vf, setAlternativa4vf] = useState('')

    const[check1, setcheck1] = useState(false)
    const[check2, setcheck2] = useState(false)
    const[check3, setcheck3] = useState(false)
    const[check4, setcheck4] = useState(false)
    const[check5, setcheck5] = useState(false)

    const[newenunciado, setEnunciado] = useState('')
    const[newassunto, setAssunto] = useState('')
    const[alternativa0, setAlternativa0] = useState('')
    const[alternativa1, setAlternativa1] = useState('')
    const[alternativa2, setAlternativa2] = useState('')
    const[alternativa3, setAlternativa3] = useState('')
    const[alternativa4, setAlternativa4] = useState('')
    const[newresposta_correta, setResposta_correta] = useState('')

    function UpdateQuestaoA(questao) {
        console.log(questao);
        createQuestaoAberta(questao)
            .then((res) => {
                console.log(res);
                loadQuestoes();
            })
            .catch((err) => console.log(err))
    }

    function DeleteQuestaoA(questao) {
        console.log(questao);
        deleteQuestaoAberta(questao)
            .then((res) => {
                console.log(res);
                loadQuestoes();
            })
            .catch((err) => console.log(err) )
    }

    function UpdateQuestaoF(questao) {
        console.log(questao);
        createQuestaoFechada(questao)
            .then((res) => {
                console.log(res);
                loadQuestoes();
            })
            .catch((err) => console.log(err))
    }

    function DeleteQuestaoF(questao) {
        console.log(questao);
        deleteQuestaoFechada(questao)
            .then((res) => {
                console.log(res);
                loadQuestoes();
            })
            .catch((err) => console.log(err) )
    }

    function UpdateQuestaoVF(questao) {
        console.log(questao);
        createQuestaoVF(questao)
            .then((res) => {
                console.log(res);
                loadQuestoes();
            })
            .catch((err) => console.log(err))
    }

    function DeleteQuestaoVF(questao) {
        console.log(questao);
        deleteQuestaoVF(questao)
            .then((res) => {
                console.log(res);
                loadQuestoes();
            })
            .catch((err) => console.log(err) )
    }


    return (
        <>
        <div id="exibicao_questeos">
            <h3>Questões Abertas:</h3>
            {
            questaoAberta.map((questaoAberta, index) => {
                const data = "Criada: " + questaoAberta.data.toLocaleString();
                return(
                    <div key={index} className="questao">
                        <h4>
                            {!questaoAberta.edition && questaoAberta.enunciado}
                            {questaoAberta.edition && (
                                                    <TextField
                                                        id="standard-basic"
                                                        label="Nome do Aluno"
                                                        variant="outlined"
                                                        fullWidth
                                                        value={questaoAberta.enunciado}
                                                        onChange={(event) => setQuestoesAData(index, "enunciado", event.target.value)}
                                                    />
                                                )}
                        </h4>
                        <span>
                            {!questaoAberta.edition&& questaoAberta.assunto}
                            {questaoAberta.edition && (
                                                    <TextField
                                                        id="standard-basic"
                                                        label="Nome do Aluno"
                                                        variant="outlined"
                                                        fullWidth
                                                        value={questaoAberta.assunto}
                                                        onChange={(event) => setQuestoesAData(index, "assunto", event.target.value)}
                                                    />
                                                )}
                        </span>
                        <span>
                            {!questaoAberta.edition&& data}
                            {questaoAberta.edition && ("")}
                        </span>
                        <SvgIcon
                                                    className="svgicon"
                                                    color={questaoAberta.edition ? 'success' : 'disabled'}
                                                    component={questaoAberta.edition ? CheckIcon : EditIcon}
                                                    onClick={() => {
                                                        if (questaoAberta.edition) {
                                                            UpdateQuestaoA(questaoAberta);
                                                        }

                                                        setQuestoesAData(index, "edition", true);
                                                    }}
                                                    sx={{ cursor: 'pointer' }}
                                                />
                        <SvgIcon
                                                    className="svgicon"
                                                    component={questaoAberta.edition ? CloseIcon : Delete}
                                                    onClick={() => {
                                                        if (questaoAberta.edition) {
                                                            setQuestoesAData(index, "edition", false)
                                                        }
                                                        else if (!questaoAberta.edition){
                                                            DeleteQuestaoA(questaoAberta);
                                                        }
                                                    }}
                                                    sx={{ color: '#d9534f', cursor: 'pointer' }}
                                                />
                    </div>
                );
            })
            }
            <h3>Questões Fechadas:</h3>
            {
            questaoFechada.map((questaoFechada, index) => {
                const alternativas = [questaoFechada.alternativas]
                const data = "Criada: " + questaoFechada.data.toLocaleString();
                return(
                    <div key={index} className="questao">
                        <h4>
                        {!questaoFechada.edition && questaoFechada.enunciado}
                            {questaoFechada.edition && (
                                                    <TextField
                                                        id="standard-basic"
                                                        label={questaoFechada.enunciado}
                                                        variant="outlined"
                                                        fullWidth
                                                        value={newenunciado}
                                                        onChange={(e) => setEnunciado(e.target.value)}
                                                    />
                                                )}
                        </h4>
                        <span>
                        {!questaoFechada.edition&& questaoFechada.assunto}
                            {questaoFechada.edition && (
                                                    <TextField
                                                        id="standard-basic"
                                                        label={questaoFechada.assunto}
                                                        variant="outlined"
                                                        fullWidth
                                                        value={newassunto}
                                                        onChange={(e) => setAssunto(e.target.value)}
                                                    />
                                                )}
                        </span>
                        <span>
                            {
                            }
                            {!questaoFechada.edition&& data}
                            {questaoFechada.edition && ("")}
                        </span>
                        <h5>A - 
                            {!questaoFechada.edition && questaoFechada.alternativas[0]}
                            {questaoFechada.edition && (
                                                    <TextField
                                                        id="standard-basic"
                                                        label={alternativas[0][0]}
                                                        variant="outlined"
                                                        fullWidth
                                                        value={alternativa0}
                                                        onChange={(e) => setAlternativa0(e.target.value)}
                                                    />
                                                )}
                        </h5>
                        <h5>B - 
                        {!questaoFechada.edition && questaoFechada.alternativas[1]}
                            {questaoFechada.edition && (
                                                    <TextField
                                                        id="standard-basic"
                                                        label={alternativas[0][1]}
                                                        variant="outlined"
                                                        fullWidth
                                                        value={alternativa1}
                                                        onChange={(e) => setAlternativa1(e.target.value)}
                                                    />
                                                )}
                        </h5>
                        <h5>C - 
                        {!questaoFechada.edition && questaoFechada.alternativas[2]}
                            {questaoFechada.edition && (
                                                    <TextField
                                                        id="standard-basic"
                                                        label={alternativas[0][2]}
                                                        variant="outlined"
                                                        fullWidth
                                                        value={alternativa2}
                                                        onChange={(e) => setAlternativa2(e.target.value)}
                                                    />
                                                )}
                        </h5>
                        <h5>D - 
                        {!questaoFechada.edition && questaoFechada.alternativas[3]}
                            {questaoFechada.edition && (
                                                    <TextField
                                                        id="standard-basic"
                                                        label={alternativas[0][3]}
                                                        variant="outlined"
                                                        fullWidth
                                                        value={alternativa3}
                                                        onChange={(e) => setAlternativa3(e.target.value)}
                                                    />
                                                )}
                        </h5>
                        <h5>E - 
                        {!questaoFechada.edition && questaoFechada.alternativas[4]}
                            {questaoFechada.edition && (
                                                    <TextField
                                                        id="standard-basic"
                                                        label={alternativas[0][4]}
                                                        variant="outlined"
                                                        fullWidth
                                                        value={alternativa4}
                                                        onChange={(e) => setAlternativa4(e.target.value)}
                                                    />
                                                )}
                        </h5>
                        {questaoFechada.edition && (
                            <TextField
                            id="standard-basic"
                            label={questaoFechada.resposta_correta}
                            variant="outlined"
                            fullWidth
                            value={newresposta_correta}
                            onChange={(e) => setResposta_correta(e.target.value)}
                        />
                        )}
                        <SvgIcon
                                                    className="svgicon"
                                                    color={questaoFechada.edition ? 'success' : 'disabled'}
                                                    component={questaoFechada.edition ? CheckIcon : EditIcon}
                                                    onClick={() => {
                                                        if (questaoFechada.edition) {
                                                            const id = questaoFechada.id
                                                            const enunciado = newenunciado
                                                            const assunto = newassunto
                                                            const dificuldade = questaoFechada.dificuldade
                                                            const alternativas = [alternativa0, alternativa1, alternativa2, alternativa3, alternativa4]
                                                            const resposta_correta = newresposta_correta
                                                            const data = questaoFechada.data
                                                            const newquestao = { id,  assunto, dificuldade, enunciado, data , alternativas, resposta_correta } 
                                                            UpdateQuestaoF(newquestao);
                                                        }

                                                        setQuestoesFData(index, "edition", true);
                                                    }}
                                                    sx={{ cursor: 'pointer' }}
                                                />
                        <SvgIcon
                                                    className="svgicon"
                                                    component={questaoFechada.edition ? CloseIcon : Delete}
                                                    onClick={() => {
                                                        if (questaoFechada.edition) {
                                                            setQuestoesFData(index, "edition", false)
                                                        }
                                                        else if (!questaoFechada.edition){
                                                            DeleteQuestaoF(questaoFechada);
                                                        }
                                                    }}
                                                    sx={{ color: '#d9534f', cursor: 'pointer' }}
                                                />
                    </div>
                );
            })
            }
            <h3>Questões V/F:</h3>
            {
            questaoVF.map((questaoVF, index) => {
                const alternativas = [questaoVF.alternativas]
                const data = "Criada: " + questaoVF.data.toLocaleString();
                return(
                    <div key={index} className="questao">
                            <h4>
                                {!questaoVF.edition && questaoVF.enunciado}
                                    {questaoVF.edition && (
                                                            <TextField
                                                                id="standard-basic"
                                                                label={questaoVF.enunciado}
                                                                variant="outlined"
                                                                fullWidth
                                                                value={newenunciadovf}
                                                                onChange={(e) => setEnunciadovf(e.target.value)}
                                                            />
                                                        )}
                                </h4>
                                <span>
                                {!questaoVF.edition&& questaoVF.assunto}
                                    {questaoVF.edition && (
                                                            <TextField
                                                                id="standard-basic"
                                                                label={questaoVF.assunto}
                                                                variant="outlined"
                                                                fullWidth
                                                                value={newassuntovf}
                                                                onChange={(e) => setAssuntovf(e.target.value)}
                                                            />
                                                        )}
                                </span>
                                <span>
                                    {!questaoVF.edition&& data}
                                    {questaoVF.edition && ("")}
                                </span>
                                <div className="displayVF"> 
                                <div> 
                                {questaoVF.edition && (
                                <FormGroup
                                sx={{
                                    marginLeft:'30px'
                                }}>
                                    <FormControlLabel control={<Checkbox/>} 
                                    checked={check1} 
                                    onChange={(e)=> setcheck1(!check1)}
                                    sx={{
                                        marginTop:'35px'
                                    }}
                                    />
                                    <FormControlLabel control={<Checkbox/>} 
                                    checked={check2} 
                                    onChange={(e)=> setcheck2(!check2)}
                                    sx={{
                                        marginTop:'35px'
                                    }}
                                    />
                                    <FormControlLabel control={<Checkbox/>} 
                                    checked={check3} 
                                    onChange={(e)=> setcheck3(!check3)}
                                    sx={{
                                        marginTop:'35px'
                                    }}
                                    />
                                    <FormControlLabel control={<Checkbox/>} 
                                    checked={check4} 
                                    onChange={(e)=> setcheck4(!check4)}
                                    sx={{
                                        marginTop:'35px'
                                    }}
                                    />
                                    <FormControlLabel control={<Checkbox/>} 
                                    checked={check5} 
                                    onChange={(e)=> setcheck5(!check5)}
                                    sx={{
                                        marginTop:'35px'
                                    }}
                                    />
                                </FormGroup>
                            )}
                            </div>
                            <div> 
                                <h5>[] - 
                                    {!questaoVF.edition && questaoVF.alternativas[0]}
                                    {questaoVF.edition && (
                                                            <TextField
                                                                className="widthVF"
                                                                id="standard-basic"
                                                                label={alternativas[0][0]}
                                                                variant="outlined"
                                                                value={alternativa0vf}
                                                                onChange={(e) => setAlternativa0vf(e.target.value)}
                                                            />
                                                        )}
                                </h5>
                                <h5>[] - 
                                {!questaoVF.edition && questaoVF.alternativas[1]}
                                    {questaoVF.edition && (
                                                            <TextField
                                                                className="widthVF"
                                                                id="standard-basic"
                                                                label={alternativas[0][1]}
                                                                variant="outlined"
                                                                value={alternativa1vf}
                                                                onChange={(e) => setAlternativa1vf(e.target.value)}
                                                            />
                                                        )}
                                </h5>
                                <h5>[] - 
                                {!questaoVF.edition && questaoVF.alternativas[2]}
                                    {questaoVF.edition && (
                                                            <TextField
                                                                className="widthVF"
                                                                id="standard-basic"
                                                                label={alternativas[0][2]}
                                                                variant="outlined"
                                                                value={alternativa2vf}
                                                                onChange={(e) => setAlternativa2vf(e.target.value)}
                                                            />
                                                        )}
                                </h5>
                                <h5>[] - 
                                {!questaoVF.edition && questaoVF.alternativas[3]}
                                    {questaoVF.edition && (
                                                            <TextField
                                                                className="widthVF"
                                                                id="standard-basic"
                                                                label={alternativas[0][3]}
                                                                variant="outlined"
                                                                value={alternativa3vf}
                                                                onChange={(e) => setAlternativa3vf(e.target.value)}
                                                            />
                                                        )}
                                </h5>
                                <h5>[] - 
                                {!questaoVF.edition && questaoVF.alternativas[4]}
                                    {questaoVF.edition && (
                                                            <TextField
                                                                className="widthVF"
                                                                id="standard-basic"
                                                                label={alternativas[0][4]}
                                                                variant="outlined"
                                                                value={alternativa4vf}
                                                                onChange={(e) => setAlternativa4vf(e.target.value)}
                                                            />
                                                        )}
                                </h5>
                            </div>
                        </div>
                        <SvgIcon
                                                    className="svgicon"
                                                    color={questaoVF.edition ? 'success' : 'disabled'}
                                                    component={questaoVF.edition ? CheckIcon : EditIcon}
                                                    onClick={() => {
                                                        if (questaoVF.edition) {
                                                            const id = questaoVF.id
                                                            const enunciado = newenunciadovf
                                                            const assunto = newassuntovf
                                                            const dificuldade = questaoVF.dificuldade
                                                            const alternativas = [alternativa0vf, alternativa1vf, alternativa2vf, alternativa3vf, alternativa4vf]
                                                            const respostas = [check1, check2, check3, check4, check5]
                                                            const data = questaoVF.data
                                                            const newquestao = { id, assunto, dificuldade, enunciado, data,  alternativas, respostas } 
                                                            UpdateQuestaoVF(newquestao);
                                                        }

                                                        setQuestoesVFData(index, "edition", true);
                                                    }}
                                                    sx={{ cursor: 'pointer' }}
                                                />
                        <SvgIcon
                                                    className="svgicon"
                                                    component={questaoVF.edition ? CloseIcon : Delete}
                                                    onClick={() => {
                                                        if (questaoVF.edition) {
                                                            setQuestoesVFData(index, "edition", false)
                                                        }
                                                        else if (!questaoVF.edition){
                                                            DeleteQuestaoVF(questaoVF);
                                                        }
                                                    }}
                                                    sx={{ color: '#d9534f', cursor: 'pointer' }}
                                                />
                    </div>
                );
            })
            }
        </div>
        </>
    )
}

export default ListaQuestoes;