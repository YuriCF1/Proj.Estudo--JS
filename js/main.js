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
// Eu poderia usar também o 'onclick', porém o lado ruim dele é que se eu quiser que outra função seja executada, ela vai sobrescrever a anterior
botoaAdicionar.addEventListener("click", function(event) {
    // Previnir comportamento padrão
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    
    // Essas propriedades foram pegas do atributo HTML "name"
    var nomeDado = form.nome.value;
    var pesoDado = form.peso.value;
    var alturaDada = form.altura.value;
    var gorduraDada = form.gordura.value;

    var pacienteNovo = document.createElement("tr");
    var nomeNovo = document.createElement("td");
    var pesoNovo = document.createElement("td");
    var alturaNova = document.createElement("td");
    var gorduraNova = document.createElement("td");

    nomeNovo.textContent = nomeDado;
    pesoNovo.textContent = pesoDado;
    alturaNova.textContent = alturaDada;
    gorduraNova.textContent = gorduraDada;

    pacienteNovo.appendChild(nomeNovo)
    pacienteNovo.appendChild(pesoNovo)
    pacienteNovo.appendChild(alturaNova)
    pacienteNovo.appendChild(gorduraNova)

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteNovo)

})