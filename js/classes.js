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
        card.setAttribute('style','width: 22rem;');
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
}

