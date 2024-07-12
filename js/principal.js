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
        console.log("Peso inválido");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        //adicionaldo falso caso ela nao atenda a condição do if
    }

    if(altura <= 0 || altura >= 3.00){
        console.log("Altura inválida");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida!";
        //adicionaldo falso caso ela nao atenda a condição do if
    }
 
    if(alturaEhValida && pesoEhValido){
        var imc = peso / (altura * altura); 
        tdImc.textContent = imc.toFixed(2);
    }

}


console.log(paciente); // tr
console.log(tdPeso); //td que tem o peso
console.log(peso); //Obter 100
console.log(altura);
console.log(imc);