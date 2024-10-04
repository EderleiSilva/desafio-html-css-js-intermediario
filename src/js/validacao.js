const nome = document.getElementById("nome");
const avisoNome = document.querySelector(".avisoNome");

const email = document.getElementById("email");
const avisoEmail = document.querySelector(".avisoEmail");

const telefone = document.getElementById("telefone");
const avisoTelefone = document.querySelector(".avisoTelefone");

const mensagem = document.getElementById("mensagem");
const avisoMensagem = document.querySelector(".avisoMensagem");

const removerCampo = document.querySelector(".campo");
const removerAviso = document.querySelector(".aviso");

const botaoConfirmar = document.getElementById("botao");


function nomePreechido(){
    if( nome.value.trim() === ""){
        nome.classList.add("vermelho");
        avisoNomeExibe();
    }else{
        nome.classList.add("verde");
    }
}

function avisoNomeExibe(){
    avisoNome.classList.add("ativo");
}

function emailPreechido(){
    if( email.value.trim() === ""){
        email.classList.add("vermelho");
        avisoEmailExibe();
    }else{
        email.classList.add("verde");
    }
}

function avisoEmailExibe(){
    avisoEmail.classList.add("ativo");
}

function telefonePreechido(){
    if( telefone.value.trim() === ""){
        telefone.classList.add("vermelho");
        avisoTelefoneExibe();
    }else{
        telefone.classList.add("verde");
    }
}

function avisoTelefoneExibe(){
    avisoTelefone.classList.add("ativo");
}

function mensagemPreechido(){
    if( mensagem.value.trim() === ""){
        mensagem.classList.add("vermelho");
        avisoMensagemExibe();
    }else{
        mensagem.classList.add("verde");
    }
}

function avisoMensagemExibe(){
    avisoMensagem.classList.add("ativo");
}


botaoConfirmar.addEventListener('click', function(){

    const classCampo = document.querySelectorAll(".campo")
    const classAviso = document.querySelectorAll(".aviso");

    
    for(let index = 0; index <= 3; index++){

        if(classCampo[index].classList.contains("vermelho")){
            classCampo[index].classList.remove("vermelho");
        }

        if(classCampo[index].classList.contains("verde")){
            classCampo[index].classList.remove("verde");
        }
    }

    for(let index = 0; index <= 3; index++){
        if(classAviso[index]){
            classAviso[index].classList.remove("ativo");
        }
    }

    event.preventDefault();
    nomePreechido();
    emailPreechido();
    telefonePreechido();
    mensagemPreechido();
})
