const baseUrl = "http://localhost:8080";
const headers = { "Content-Type": "application/json" };

export async function createQuestaoAberta(data) {
    return await fetch(`${baseUrl}/questoes/aberta`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data)
    });
};

export async function deleteQuestaoAberta(data) {
    return await fetch(`${baseUrl}/questoes/aberta`, {
        method: "DELETE",
        headers: headers,
        body: JSON.stringify(data)
    });
};

export async function createQuestaoFechada(data) {
    console.log(JSON.stringify(data))
    return await fetch(`${baseUrl}/questoes/fechada`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data)
    });
};

export async function deleteQuestaoFechada(data) {
    return await fetch(`${baseUrl}/questoes/fechada`, {
        method: "DELETE",
        headers: headers,
        body: JSON.stringify(data)
    });
};

export async function createQuestaoVF(data) {
    return await fetch(`${baseUrl}/questoes/vf`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data)
    });
};

export async function deleteQuestaoVF(data) {
    return await fetch(`${baseUrl}/questoes/vf`, {
        method: "DELETE",
        headers: headers,
        body: JSON.stringify(data)
    });
};

export async function createQuestaoProva(data) {
    return await fetch(`${baseUrl}/questoes/prova`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data)
    });
};

export async function createProva(data) {
    return await fetch(`${baseUrl}/prova`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data)
    });
};
