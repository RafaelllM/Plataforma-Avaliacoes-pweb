const baseUrl = "http://localhost:8080";
const headers = { "Content-Type": "application/json" };

export async function createQuestaoAberta(data) {
    return await fetch(`${baseUrl}/questoes/aberta`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data)
    });
};

export async function createQuestaoFechada(data) {
    return await fetch(`${baseUrl}/questoes/fechada`, {
        method: "POST",
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