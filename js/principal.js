var titulo = document.querySelector("h1");
console.log(titulo);
console.log(titulo.textContent);
titulo.textContent = ("Aparecida Nutricionista");

// var pacientes = document.querySelectorAll(".paciente");

// for (var i = 0; i < pacientes.length; i++){
//     // onde ela ira começar ; ate´onde ir; somar de 1 em 1
 
//     var paciente = pacientes[i]; 

//     var tdPeso = document.querySelector(".info-peso");
//     var peso = tdPeso.textContent;

//     var tdAltura = document.querySelector(".info-altura");
//     var altura = tdAltura.textContent;

//     var tdImc = paciente.querySelector(".info-imc");
    
//     var pesoEhValido = true;
//     var alturaEhValida = true;

//     if (peso <= 0 || peso >= 1000) {
//         console.log("Peso inválido");
//         pesoEhValido = false;
//         tdImc.textContent = "Peso inválido!";
//     }

//     if (altura <= 0 || altura >= 3.00) {
//         console.log("Altura inválida!");
//         alturaEhValida = false;
//         tdImc.textContent = "Altura Inválida!";
//     }

//     if (alturaEhValida && pesoEhValido){
//         var imc = peso / (altura * altura); 
//         tdImc.textContent = imc;
//     }
// }

// 21/10
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
    }

  if (alturaEhValida && pesoEhValido) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc;
    }
}






