//Ativar Links do Menu
const links = document.querySelectorAll('.header-menu a')
function ativado(link){
    const url = location.href;
    const href = link.href;
    if(url.includes(href)){
        link.classList.add('ativo');
    }

}
links.forEach(ativado);

//Ativar Item do Orçamento

const parametros = new URLSearchParams(location.search); 

function ativarProduto(parametro){
    const elemento = document.getElementById(parametro);
    if(elemento){
        elemento.checked = true;
    }
}
parametros.forEach(ativarProduto);


//Perguntas Frequentes

const perguntas = document.querySelectorAll('.perguntas button');

function ativarPergunta(event){
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute('aria-controls');
    const resposta = document.getElementById(controls);

    resposta.classList.toggle('ativo')
    const ativo = resposta.classList.contains('ativo');
    pergunta.setAttribute('aria-expanded', ativo);
}

function eventosPerguntas(pergunta){
    pergunta.addEventListener('click', ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

//Animções

if(window.SimpleAnime){
    new SimpleAnime();
}
