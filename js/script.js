let codificar = document.querySelector(".botao1");
let decodificar = document.querySelector(".botao2");
let boneco = document.querySelector(".imagemBoneco");
let container = document.querySelector(".container-paragrafo");
let resultado = document.querySelector(".semMensagem");
let ocultarParagrafo = document.querySelector(".paragrafo");


function recuperarTexto(){
    let texto = document.querySelector(".container-paragrafo")
    return texto.value
}

function ocultarBoneco(){
    boneco.classList.add("ocultar");
    container.classList.add("ocultar");
    ocultarParagrafo.classList.add("ocultar");
}

function codificarTexto(mensagem){
    var texto = mensagem;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;
}

function Codificar(){
    ocultarBoneco();
    let texto = recuperarTexto()
    resultado.textContent = codificarTexto(texto);
}

function decodificarTexto(mensagem){
    let texto = mensagem;
    let textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
        
    }
    return textoFinal;
}

function Decodificar(){
    ocultarBoneco();
    let texto = recuperarTexto()
    resultado.textContent = decodificarTexto(texto);
}

const btnCopiar = document.querySelector(".btn-copiar"); 
    btnCopiar.addEventListener("click", copiar = () => {
    let conteudo = document.querySelector(".semMensagem").textContent;
    navigator.clipboard.writeText(conteudo);
    console.log("texto copiado"); 
});
  





