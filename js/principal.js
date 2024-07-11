// console.log(document.querySelector("h1 class titulo"));
//vai aparecer <h1>texto aqui</h1>
// console.log(titulo);
// vai aparecer somente oque tem dentro do H1
// console.log(titulo.textContent);
//alterando o conteudo do H1
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = document.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");
var imc = peso / (altura * altura); 
tdImc.textContent = imc;

console.log(paciente); // tr
console.log(tdPeso); //td que tem o peso
console.log(peso); //Obter 100
console.log(altura);
console.log(imc);