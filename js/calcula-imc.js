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

  var pesoEhValido = true;
  var alturaEhValida = true;

  if (peso <= 0 || peso >= 1000) {
    // console.log('Peso inválido');
    tdImc.textContent = "Peso inválido";
    pesoEhValido = false;
    mudaCor("paciente-invalido");
  }

  if (altura <= 0 || altura >= 3.0) {
    tdImc.textContent = "Altura inválida";
    // console.log('Altura inválida');
    alturaEhValida = false;
  }

  if (pesoEhValido && alturaEhValida) {
    var imc = calculaImc(peso, altura)
    // var imc = peso / (altura * altura);
    // toFixed = definir casas decimais
    // tdImc.textContent = imc.toFixed(2); // Mandei diratamente para a função de calcular
    tdImc.textContent = imc;
  } else if (!pesoEhValido && !alturaEhValida) {
    tdImc.textContent = "Altura e peso inválidos";
  }
}

function calculaImc(peso, altura) {
    var imc = 0 ;
    imc = peso / (altura * altura);
    return imc.toFixed(2);

}
