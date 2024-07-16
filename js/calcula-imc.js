// console.log(document.querySelector("h1 class titulo"));
//vai aparecer <h1>texto aqui</h1>
// console.log(titulo);
// vai aparecer somente oque tem dentro do H1
// console.log(titulo.textContent);
//alterando o conteudo do H1
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida nutricionista";

var pacientes = document.querySelectorAll(".paciente");


for( var i =0; i < pacientes.length; i++){

    var paciente = pacientes[i];

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;


var tdImc = paciente.querySelector(".info-imc");

// iniciando variaveis como verdadeiras
var pesoEhValido = true;
var alturaEhValida = true;

    if(peso <= 0 || peso >= 1000){
        //adicionaldo falso caso ela nao atenda a condição do if
        console.log("Peso inválido");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        // adicionando o color a linha paciente
        // paciente.style.color = "red";

        // adicionando cor de fundo pro paciente.
        // style.backgroundColor = "Lightcoral";

        //  adicionando uma nova classe ao paciente
        paciente.classList.add("paciente-invalido");
    }

    if(altura <= 0 || altura >= 3.00){
        //adicionaldo falso caso ela nao atenda a condição do if
        console.log("Altura inválida");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida!";
        
        paciente.classList.add("paciente-invalido");
    }
 
    if(alturaEhValida && pesoEhValido){
        var imc = calculaImc(peso,altura); 
        tdImc.textContent = imc;
    }

}


function calculaImc(peso,altura){
     var imc = 0;

     imc = peso / (altura * altura);

     return imc.toFixed(2);
}


// chamando função de mandeira anonima
// titulo.addEventListener("click", function(){
//     console.log("Olha só posso chamar função anonima");
// });


// Criandando função de mensagem
// function mostraMensagem(){
//     console.log("Olá eu fui clicado!");
// }

console.log(paciente); // tr
console.log(tdPeso); //td que tem o peso
console.log(peso); //Obter 100
console.log(altura);
console.log(imc);