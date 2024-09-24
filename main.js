// Exibindo uma mensagem no console
console.log('Olá mundo!');

// Criando um novo elemento <h1>
let novoElemento = document.createElement('h1');

// Alterando o conteúdo de texto do elemento
novoElemento.innerText = 'Hello, World! English! (Inglês) Ok?!';

// Selecionando o elemento body
let elementoBody = document.body;

// Colocando o novo elemento no body
elementoBody.appendChild(novoElemento);

// Estilizando o novo elemento
novoElemento.style.backgroundColor = 'red';
novoElemento.style.color = 'black';
novoElemento.style.textAlign = 'center'; // Centraliza o texto
novoElemento.style.padding = '20px'; // Adiciona um padding

// Função para criar corações coloridos
function criarCoracao(cor) {
    let coracao = document.createElement('span');
    coracao.innerText = '❤️'; // Coração
    coracao.style.fontSize = '40px'; // Tamanho do coração
    coracao.style.color = cor; // Cor do coração
    coracao.style.margin = '5px'; // Margem entre corações
    elementoBody.appendChild(coracao); // Adiciona o coração ao body
}

// Cores para os corações
const cores = ['red'];

// Criar 10 corações com cores aleatórias
for (let i = 0; i < 10; i++) {
    let corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    criarCoracao(corAleatoria);
}
