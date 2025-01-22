//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes
let amigos = [];

// Função para adicionar um nome à lista 
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome) {
        // Adiciona o nome ao array
        amigos.push(nome);

        // Atualiza a lista exibida na tela
        atualizarLista();

        // Limpa o campo de entrada
        input.value = "";
    } else {
        alert("Por favor, digite um nome válido.");
    }
}

// Função para atualizar a lista exibida na tela
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");

    // Limpa a lista atual para evitar duplicação
    lista.innerHTML = "";

    // Adiciona cada nome como um item na lista
    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${amigo}`;
        lista.appendChild(li);
    });
}

// Função para sortear apenas um nome
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista está vazia. Adicione nomes antes de sortear.");
        return;
    }

    // Gera um índice aleatório com base no tamanho do array
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const nomeSorteado = amigos[indiceSorteado];

    // Atualiza o resultado na tela
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>O amigo sorteado foi: <strong>${nomeSorteado}</strong></li>`;
}

