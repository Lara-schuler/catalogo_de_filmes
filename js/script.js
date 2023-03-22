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

}*/

let inputBuscarFilme = document.querySelector('#input-buscar-filme');
let btnBuscarFilme = document.querySelector('#btn-buscar-filme');


btnBuscarFilme.onclick = async () => {
    console.log("0");
    if (inputBuscarFilme.value.length == '') {
        alert('Preencha o campo!');
        return;
    }
    else if (inputBuscarFilme.value.length > 0) {
        let filmes = new Array();
        fetch('https://www.omdbapi.com/?apikey=8c76fa7d&s=' + inputBuscarFilme.value, { mode: "cors" })
            .then((resp) => resp.json())
            .then((resp) => {
                if (resp.Response == 'False') {
                    alert("Nenhum filme encontrado");
                    return;
                }
                resp.Search.forEach((item) => {
                    console.log(item);
                    let filme = new Filme(
                        item.imdbID,
                        item.Title,
                        item.Year,
                        null,
                        null,
                        null,
                        item.Poster,
                        null,
                        null,
                        null,
                        null
                    );
                    filmes.push(filme);
                });
                listarFilmes(filmes);
            });
    }

    return false;

}
let listarFilmes = async (filmes) => {
    let listaFilmes = await document.querySelector('#lista-filmes');
    listaFilmes.style.display = "flex";
    listaFilmes.innerHTML = "";
    document.querySelector("#mostrar-filme").innerHTML = "";
    document.querySelector("#mostrar-filme").style.display = "none";
    console.log(listaFilmes);
    if (filmes.length > 0) {
        filmes.forEach(async (filme) => {
            listaFilmes.appendChild(await filme.getCard());
            filme.getBtnDetalhes().onclick = () => {
                detalhesFilme(filme.id);
            }
        });
    }
}

let detalhesFilme = async (id) => {
    fetch('https://www.omdbapi.com/?apikey=8c76fa7d&i=' + id)
        .then((resp) => resp.json())
        .then((resp) => {
            console.log(resp)
            let filme = new Filme(
                resp.imdbID,
                resp.Title,
                resp.Year,
                resp.Genre.split(","),
                resp.Runtime,
                resp.Plot,
                resp.Poster,
                resp.Director,
                resp.Actors.split(","),
                resp.Rated,
                resp.imdbRating,
                //resp.btnDetalhes
            );
            console.log(filme);
            document.querySelector("#mostrar-filme").appendChild(filme.getDetalhesFilme());
            document.querySelector("#lista-filmes").style.display = "none";
            document.querySelector("#mostrar-filme").style.display = "flex";

        });

    let salvar = (filme) => {
        ('filme', JSON.stringify(filme));
        // Receber a string
        let filmeString = localStorage.getItem('filme');
        // transformar em objeto novamente
        let filmeObj = JSON.parse(filmeString);
        console.log(filmeObj.Title);
    }
}
