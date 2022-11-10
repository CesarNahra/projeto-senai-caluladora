// Seleção de elementos
let a = document.querySelector(".first-number");

let b = document.querySelector(".second-number");

const operacao = document.querySelector("#mathaccount");

const confirma = document.querySelector(".make-operation");

const exibe = document.querySelector("#screen-number");

let resultado = "Aqui fica o resultado";

// Conversão para número inteiro

a = parseInt(a);
b = parseInt(b);

// Funções matemáticas

function exibeNaTela(resultado){
    exibe.innerHTML = resultado;
}

function escolherOperacao(){
    let optionValue = operacao.options[operacao.selectedIndex];
    
    let value = optionValue.value;
    value = parseInt(value);
    let text = optionValue.text;
    
    console.log(value, text);
}
  
escolherOperacao();

realizarFuncao(a, b, value){
    if(value == 0){
        console.log("0");
    } else if(value == 1){
        console.log("1");
    } else if(value == 2){
        console.log("2");
    } else if(value == 3){
        console.log("3");
    }
}


function soma(a, b){
    return a + b;
}

function subtracao(a, b){
    return a - b;
}

function multiplicacao(a, b){
    return a * b;
}

function divisao(a, b){
    if(a > b){
        return a / b;
    } else {
        return b / a;
    }
}


// Evento

confirma.addEventListener("click", function(){
    console.log();
})


// Exibição na tela

exibeNaTela(resultado);