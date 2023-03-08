let ator = new Ator(1, "JOHN WAYNE");
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
    .then(json => console.log(json));
}


