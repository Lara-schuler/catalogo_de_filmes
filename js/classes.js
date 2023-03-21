class Ator 
{
    constructor(id,nome) {
        this.id=id;
        this.nome=nome;
    }
}

class Diretor 
{
    constructor(id,nome) {
        this.id=id;
        this.nome=nome;
    }
}

class Filme
{
    constructor(id, titulo, ano, genero, duracao, sinopse, cartaz, direcao, elenco, classificacao, avaliacao, btnDetalhes) {
        this.id=id; 
        this.titulo=titulo;
        this.ano=ano;
        this.genero=genero;
        this.duracao=duracao;
        this.sinopse=sinopse;
        this.cartaz=cartaz;
        this.direcao=direcao;
        this.elenco=elenco;
        this.classificacao=classificacao;
        this.avaliacao=avaliacao;
        this.btnDetalhes=btnDetalhes
    }

    getCard = async () => {
        let card = document.createElement('div');
        card.setAttribute('class','card');
        card.setAttribute('style','width: 30rem;');
        let imgCartaz = document.createElement('img');
        imgCartaz.setAttribute('class','card-img-topz');
        imgCartaz.setAttribute('src', this.cartaz);
        let cardBody = document.createElement('div');
        cardBody.setAttribute('class','card-body');
        let hCardTitle = document.createElement('h5');
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

        this.setBtnDetalhes();
        cardBody.appendChild(this.getBtnDetalhes());

        return card;
    }

    setBtnDetalhes = () => {
        this.btnDetalhes = document.createElement('button');
        this.btnDetalhes.appendChild(document.createTextNode("Detalhes"));
        this.btnDetalhes.setAttribute("id",this.id);
        this.btnDetalhes.setAttribute("class","btnDetalhesFilme");
    }

    getBtnDetalhes = () => {
        return this.btnDetalhes
    }

    getDetalhesFilme = () => {
        let cardDetalhes = document.createElement('div');
    card.setAttribute('class','card ');
    card.setAttribute('style','width: 22rem;');
    let img = document.createElement('img');
    img.setAttribute('class','card-img-top');
    img.setAttribute('src', this.cartaz);
    let cardBody = document.createElement('div');
    cardBody.setAttribute('class','card-body');
    let titulo = document.createElement('h5');
    titulo.setAttribute('class','card-title');
    let lista = document.createElement('ul');
    lista.setAttribute('class','list-group list-group-flush');
    let id = document.createElement('li');
    id.setAttribute('class','list-group-item');
    let ano = document.createElement('li');
    ano.setAttribute('class','list-group-item');
    let genero = document.createElement('li'); 
    genero.setAttribute('class','list-group-item');
    let duracao = document.createElement('li');
    duracao.setAttribute('class','list-group-item');
    let sinopse = document.createElement('li');
    sinopse.setAttribute('class','list-group-item');
    let direcao = document.createElement('li');
    direcao.setAttribute('class','list-group-item');
    let elenco = document.createElement('li');
    elenco.setAttribute('class','list-group-item');
    let classificacao = document.createElement('li');
    classificacao.setAttribute('class','list-group-item');
    let avaliacao = document.createElement('li');
    avaliacao.setAttribute('class','list-group-item');
    id.appendChild(createTextNode(this.id)); 
    titulo.appendChild(createTextNode(this.titulo));
    ano.appendChild(createTextNode(this.ano));
    genero.appendChild(createTextNode(this.genero));
    duracao.appendChild(createTextNode(this.duracao));
    sinopse.appendChild(createTextNode(this.sinopse));
    direcao.appendChild(createTextNode(this.direcao));
    elenco.appendChild(createTextNode(this.elenco));
    classificacao.appendChild(createTextNode(this.classificacao));
    avaliacao.appendChild(createTextNode(this.avaliacao));
    lista.appendChild(id);
    lista.appendChild(ano);
    lista.appendChild(genero);
    lista.appendChild(duracao);
    lista.appendChild(sinopse);
    lista.appendChild(direcao);
    lista.appendChild(elenco);
    lista.appendChild(classificacao);
    lista.appendChild(avaliacao);
    cardBody.appendChild(titulo);
    cardDetalhes.appendChild(img);
    cardDetalhes.appendChild(cardBody);
    cardDetalhes.appendChild(lista);

    }
}

