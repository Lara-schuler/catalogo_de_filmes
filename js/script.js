/*let ator = new Ator(1, "JOHN WAYNE");
console.log(ator);

let diretor = new Diretor(1,"Alfred Hitchock");
console.log(diretor);
console.log("");

let direcao = [
    new Diretor(1,"Lana Wachowski"),
    new Diretor(2,"Lili Wachowski"),
];

let elenco = [
    new Ator(1, "Keanu Reeves"),
    new Ator(2, "Carrie-Anne Moss"),
    new Ator(3, "Laurence Fishburne"),
    new Ator(4,"Joe Pantoliano"),
    new Ator(5, "Hugo Weaving"),
    new Ator(6, "Antony Ray Parker"),
]

let sinopse = "Um jovem programador é atormnetado por estranhos pesaelos nos quais sempre está resolvendo bugs";
let cartaz = "https://www.radiorock.com.br/wp-content/uploads/2019/08/matrix.jpg";

let filme = new Filme(
    1,
    "Matrix",
    1999,
    102,
    sinopse,
    cartaz,
    direcao,
    elenco,
    14,
    null
    
);

console.log(filme);

//consumindo API

const formPesquisa = document.querySelector('.d-flex');
const apikey =  '8c76fa7d';


formPesquisa.onsubmit = (evento) => {
    evento.preventDefault();

    const pesquisa = evento.target.pesquisa.value;
    console.log(pesquisa)
    const url = `https://www.omdbapi.com/?s=${pesquisa}&apikey=${apikey}`;

    if(pesquisa == '') {
        alert('Preencha o campo!');
        return;
    }

    fetch(url)
    .then(result => result.json())
    .then(json => carregaLista(json));
}

const carregaLista = (json) =>{
    const lista = document.querySelector('div.lista');
    lista.innerHTML = '';

    if(json.Response == 'False'){
        alert("Nenhum filme encontrado");
        return;
    }

    json.Search.forEach(element => {

        let item = document.createElement('div.card');
        item.classList.add('item');

        item.innerHTML = 
        `<div class="card" style="width: 18rem;">
        <img  src='${element.Poster}' class="card-img-top"/>
        <div class="card-body">
        <h5 class="card-title">${element.Title}</h5>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">${element.Year}</li>
        <li class="list-group-item">${element.Genre}</li>
        <li class="list-group-item">${element.Rated}</li>
        </ul>
        </div>`;

        lista.appendChild(item);
        
    });
}*/

let inputBuscarFilme = document.querySelector('#input-buscar-filme');
let btnBuscarFilme = document.querySelector('#btn-buscar-filme');
const apikey =  '8c76fa7d';

btnBuscarFilme.onclick = () => {
    if(inputBuscarFilme.value.length > 0) {
       fetch('https://www.omdbapi.com/?&apikey=8c76fa7d&s='+inputBuscarFilme.value, {mode:"cors"})
       .then((resp) => resp.json()) 
       .then((resp) => {
            console.log(resp);
       })
    }
    return false;
}

getCard = async () => {
    let card = document.createElement('div');
    card.setAttribute('class','card');
    let imgCartaz = document.createElement('img');
    imgCartaz.setAttribute('class','card-img-topz');
    imgCartaz.setAttribute('src', this.cartaz);
    let cardBody = document.createElement('div');
    cardBody.setAttribute('class','card-body');
    hCardTitle = document.createElement('h5');
    hCardTitle.setAttribute('class','card-title');
    let divDetalhes = document.createElement('div');
    divDetalhes.setAttribute('style','display:flex; justify-content:space-around;');
    let divGenero = document.createElement('div');
    divGenero.setAttribute('style', 'flex-grow:1;');
    let divAnoDeProducao = document.createElement('div');
    divAnoDeProducao.setAttribute('style', 'flex-grow:1;');
    let divClassificacao = document.createElement('div');
    divClassificacao.setAttribute('style', 'flex-grow:1;');
    hCardTitle.appendChild(document.createTextNode(this.titulo));
    divGenero.appendChild(document.createTextNode(this.genero));
    divAnoDeProducao.appendChild(document.createTextNode(this.ano));
    divClassificacao.appendChild(document.createTextNode(this.classificacao));
    divDetalhes.appendChild(divGenero);
    divDetalhes.appendChild(divAnoDeProducao);
    divDetalhes.appendChild(divClassificacao);
    card.appendChild(imgCartaz);
    card.appendChild(cardBody);
    cardBody.appendChild(hCardTitle);
    cardBody.appendChild(divDetalhes);
    return card;


}

