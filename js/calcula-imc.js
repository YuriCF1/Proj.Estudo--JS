function mudaCor(classe) {
  paciente.classList.add(classe);
}

// OBS: classList me torna em array as classes do eleemento pego pelo querySelector
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector(".info-imc");

  var pesoEhValido = validaPeso(peso);
  var alturaEhValida = validaAltura(altura);

  if (!pesoEhValido) {
    tdImc.textContent = "Peso inválido";
    mudaCor("paciente-invalido");
  }

  if (!alturaEhValida) {
    tdImc.textContent = "Altura inválida";
    mudaCor("paciente-invalido");
  }

  if (pesoEhValido && alturaEhValida) {
    var imc = calculaImc(peso, altura);
    // var imc = peso / (altura * altura);
    // toFixed = definir casas decimais
    // tdImc.textContent = imc.toFixed(2); // Mandei diratamente para a função de calcular
    tdImc.textContent = imc;
  } else if (!pesoEhValido && !alturaEhValida) {
    tdImc.textContent = "Altura e peso inválidos";
  }
}

function validaPeso(peso) {
  if (peso >= 0 && peso < 1000) {
    return true;
  } else return false
}

function validaAltura(altura) {
  if (altura > 0 && altura <= 3.00) {
    return true;
  } else return false;

}

function calculaImc(peso, altura) {
  var imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
}
