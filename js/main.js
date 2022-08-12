function mudaCor(classe) {
    paciente.classList.add(classe);
}

// OBS: classList me torna em array as classes do eleemento pego pelo querySelector
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i= 0; i < pacientes.length; i++ ) {

    var paciente = pacientes[i]

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura")
var altura = tdAltura.textContent

var tdImc = paciente.querySelector(".info-imc")

var pesoEhValido = true;
var alturaEhValida = true;

if (peso <= 0 || peso >= 1000) {
    // console.log('Peso inválido');
    tdImc.textContent = 'Peso inválido';
    pesoEhValido = false;
    mudaCor("paciente-invalido");

}

if (altura <= 0 || altura >= 3.00) {
    tdImc.textContent = 'Altura inválida';
    // console.log('Altura inválida');
    alturaEhValida = false;

}

if (pesoEhValido && alturaEhValida) {
    var imc = peso / (altura * altura)
    // toFixed = definir casas decimais
    tdImc.textContent = imc.toFixed(2);
} else if (!pesoEhValido && !alturaEhValida) {
    tdImc.textContent = 'Altura e peso inválidos'

}

}

// PARTE 4
// OBS: No addEventListener, colocar o nome da função com o parentese, passa o retorno da função, e não executa ela em si
// OBS: Campos com entrada para usuário possuem o método value e outros ficam com o textContent

var botoaAdicionar = document.querySelector("#adicionar-paciente");
botoaAdicionar.addEventListener("click", function(event) {
    // Previnir comportamento padrão
    event.preventDefault();

})
