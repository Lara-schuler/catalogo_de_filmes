class Ator {
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
    }
}

class Diretor {
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
    }
}

class Filme {
    constructor(id, titulo, ano, genero, duracao, sinopse, cartaz, direcao, elenco, classificacao, avaliacao, btnDetalhes) {
        this.id = id;
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.duracao = duracao;
        this.sinopse = sinopse;
        this.cartaz = cartaz;
        this.direcao = direcao;
        this.elenco = elenco;
        this.classificacao = classificacao;
        this.avaliacao = avaliacao;
        this.btnDetalhes = btnDetalhes
    }

    getCard = async () => {
        let card = document.createElement('div');
        card.setAttribute('class', 'card');
        card.setAttribute('style', 'width: 24rem;');
        let imgCartaz = document.createElement('img');
        imgCartaz.setAttribute('class', 'card-img-topz');
        imgCartaz.setAttribute('src', this.cartaz);
        let cardBody = document.createElement('div');
        cardBody.setAttribute('class', 'card-body');
        let hCardTitle = document.createElement('h5');
        hCardTitle.setAttribute('class', 'card-title');
        let divDetalhes = document.createElement('div');
        divDetalhes.setAttribute('style', 'display:flex; justify-content:space-around;');
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
        this.btnDetalhes.setAttribute('class', 'btn btn-primary');
        this.btnDetalhes.appendChild(document.createTextNode("Detalhes"));
        this.btnDetalhes.setAttribute("id", this.id);
        this.btnDetalhes.setAttribute("class", "btn btn-primary");
    }

    getBtnDetalhes = () => {
        return this.btnDetalhes
    }

    getDetalhesFilme = () => {
        let cardDetalhes = document.createElement('div');
        cardDetalhes.setAttribute('class', 'card m-4');
        cardDetalhes.setAttribute('style', 'max-width: 540px;');
        let divRow = document.createElement('div');
        divRow.setAttribute('class', 'row g-0');
        let divImg = document.createElement('div');
        divImg.setAttribute('class', 'col-md-4');
        let img = document.createElement('img');
        img.setAttribute('class', 'img-fluid rounded-start');
        img.setAttribute('src', this.cartaz);
        let divConteudo = document.createElement('div');
        divConteudo.setAttribute('class', 'col-md-8');
        let cardBody = document.createElement('div');
        cardBody.setAttribute('class', 'card-body');
        let titulo = document.createElement('h5');
        titulo.setAttribute('class', 'card-title');
        let ano = document.createElement('p');
        ano.setAttribute('class', 'card-text');
        let genero = document.createElement('p');
        genero.setAttribute('class', 'card-text');
        let duracao = document.createElement('p');
        duracao.setAttribute('class', 'card-text');
        let sinopse = document.createElement('p');
        sinopse.setAttribute('class', 'card-text');
        let direcao = document.createElement('p');
        direcao.setAttribute('class', 'card-text');
        let elenco = document.createElement('p');
        elenco.setAttribute('class', 'card-text');
        let classificacao = document.createElement('p');
        classificacao.setAttribute('class', 'card-text');
        let avaliacao = document.createElement('p');
        avaliacao.setAttribute('class', 'card-text');
        let btnSalvar = document.createElement('a');
        btnSalvar.setAttribute('class','btn btn-primary');
        btnSalvar.setAttribute('onclick',`salvar(${this})`);
        titulo.appendChild(document.createTextNode(this.titulo));
        ano.appendChild(document.createTextNode(this.ano));
        genero.appendChild(document.createTextNode(this.genero));
        duracao.appendChild(document.createTextNode(this.duracao));
        sinopse.appendChild(document.createTextNode(this.sinopse));
        direcao.appendChild(document.createTextNode(this.direcao));
        elenco.appendChild(document.createTextNode(this.elenco));
        classificacao.appendChild(document.createTextNode(this.classificacao));
        avaliacao.appendChild(document.createTextNode(this.avaliacao));
        btnSalvar.appendChild(document.createTextNode('Salvar'));
        divImg.appendChild(img);
        divRow.appendChild(divImg);
        cardBody.appendChild(titulo);
        cardBody.appendChild(ano);
        cardBody.appendChild(genero);
        cardBody.appendChild(duracao);
        cardBody.appendChild(sinopse);
        cardBody.appendChild(direcao);
        cardBody.appendChild(elenco);
        cardBody.appendChild(classificacao);
        cardBody.appendChild(avaliacao);
        cardBody.appendChild(btnSalvar);
        divConteudo.appendChild(cardBody);
        divRow.appendChild(cardBody);
        cardDetalhes.appendChild(divRow);
        return cardDetalhes;
    }

    
    


}

