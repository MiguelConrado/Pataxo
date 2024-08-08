let janelaMenu = document.getElementById('menu-hamburguer');
const titulo = document.getElementById('titulo')
const header = document.getElementById('header')

function abrirMenu() {

    let navegacao = document.querySelector('.navegacao-container');
    let html = document.documentElement;

    if (navegacao.style.display === 'block') {
        navegacao.style.display = 'none';
        header.style.justifyContent = 'space-between';
        titulo.style.display = 'block';

        html.style.scrollbarWidth = '';
    } else {
        navegacao.style.display = 'block';
        titulo.style.display = 'none';

        header.style.justifyContent = 'flex-end';
        html.style.scrollbarWidth = 'none';
    }
}
janelaMenu.addEventListener('click', abrirMenu);

// ---------------------- PARAGRAFOS E TITULOS -------------------------
function criarParagrafo(texto,classe){
    const paragrafos = document.createElement('p')
    paragrafos.classList.add(classe)
    paragrafos.innerText = texto

    return paragrafos
}
function criarTitulos(texto,classe){
    const titulo = document.createElement('h3')
    titulo.innerText = texto
    titulo.classList.add(classe)

    return titulo
}

//----------------------- IMAGENS DO SOBRE NÓS -------------------------

let containerEstrutura = document.querySelector('#container-estrutura');

function criarBlocoImg(elemento, classeElemento, url, classeImg, titulo, paragrafos,) {
    const img = document.createElement('img');
    img.classList.add(classeImg);
    img.src = url;

    const bloco = document.createElement(elemento);
    bloco.classList.add(classeElemento);
    bloco.appendChild(img);
    bloco.appendChild(paragrafos)
    bloco.appendChild(titulo)

    return bloco;
}


const textos = [
    {url: '../img/area-externa.jpg',  texto: 'Área externa com muito espaço!', titulo:'Área Externa'},
    {url: '../img/beleza-noturna.jpg',texto: 'Muito verde onde podemos fazer atividades indigenas!', titulo:'Muito Verde!'},
    {url: '../img/gramado.jpg',       texto: 'Muita Grama onde podemos deitar para apreciar o céu!', titulo:'Gramado'},
    {url: '../img/muito-verde.jpg',   texto: 'Uma beleza Noturna descomunal!', titulo:'Beleza Noturna'},
    {url: '../img/musica.jpg',        texto: 'Musica para apreciar o momento!', titulo:'Musica'},
    {url: '../img/salao-aberto.jpg',  texto: 'Um salão aberto para conversas!', titulo:'Salão aberto'},
]

for (let i = 0; i < textos.length; i++){
    const containerBlocosEstrutura = document.querySelector('.container-blocos-estrutura')
    const {url, texto, titulo} = textos[i]

    containerBlocosEstrutura.appendChild(criarBlocoImg('div', 'container-img', url, 'img-estrutura', 
        criarParagrafo(texto,'paragrafo-img'),criarTitulos(titulo, 'titulo-img'))
    );
}








