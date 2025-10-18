var titulo = document.querySelector("h1");
console.log(titulo);
console.log(titulo.textContent);
titulo.textContent = ("Aparecida Nutricionista");

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++){
   console.pacientes[i];
    var paciente = pacientes[i]; 

    var tdNome = document.querySelector(".info-nome");
    var nome = tdNome.textContent; 

    var tdPeso = document.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = document.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");
    
    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura Inválida!";
    }

    if (alturaEhValida && pesoEhValido){
        var imc = peso / (altura * altura); 
        tdImc.textContent = imc.toFixed(2);
    }
}

// 21/10






