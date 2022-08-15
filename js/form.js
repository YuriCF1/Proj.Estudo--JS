// PARTE 4
// OBS: No addEventListener, colocar o nome da função com o parentese, passa o retorno da função, e não executa ela em si
// OBS: Campos com entrada para usuário possuem o método value e outros ficam com o textContent

var botoaAdicionar = document.querySelector("#adicionar-paciente");
// Eu poderia usar também o 'onclick', porém o lado ruim dele é que se eu quiser que outra função seja executada, ela vai sobrescrever a anterior
botoaAdicionar.addEventListener("click", function (event) {
  // Previnir comportamento padrão
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");
  // Extrindo informacções do paciente do form
  var pacienteForm = obtemInfoDoForm(form);

  // Montando a TR
  var pacienteNovo = montaTr(pacienteForm);

  // Validando o paciente
  var erros = validaPaciente(pacienteForm);
  
  if (erros.length > 0) {
    exibeMensagemDeErro(erros);

    // var mensagemErro = document.querySelector("#mensagem-erros");
    // mensagemErro.textContent = erros;
    return; //Um retorno vazio faz com que a função pare de ser executada, logo, não acrescentando na tabela
  }

  // Adicionand o paciente na tabela
  var tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(pacienteNovo);
  // Reseta os valores (value's) dos inputs do form para o valor original. NÃO APAGA
  form.reset();
  var mensagensDeErro = document.querySelector("#mensagem-erros");
  mensagensDeErro.innerHTML = ""

});

function obtemInfoDoForm(form) {
  // Essas propriedades foram pegas do atributo HTML "name"
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value),
  };

  return paciente;
}

// // Extrindo informacções do paciente do form
// var form = document.querySelector("#form-adiciona");
// var nomeDado = form.nome.value;
// var pesoDado = form.peso.value;
// var alturaDada = form.altura.value;
// var gorduraDada = form.gordura.value;

function montaTd(dado, classe) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}

function montaTr(paciente) {
  // Cria a TR do paciente
  var pacienteCriado = document.createElement("tr");
  pacienteCriado.classList.add("paciente");

  // Cria a TD do paciente
  pacienteCriado.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteCriado.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteCriado.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteCriado.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteCriado.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteCriado;
}

// var nomeNovo = document.createElement("td");
// var pesoNovo = document.createElement("td");
// var alturaNova = document.createElement("td");
// var gorduraNova = document.createElement("td");
// var imcResult = document.createElement("td");

// nomeNovo.textContent = paciente.nomeDado;
// pesoNovo.textContent = paciente.pesoDado;
// alturaNova.textContent = paciente.alturaDada;
// gorduraNova.textContent = paciente.gorduraDada;
// imcResult.textContent = paciente.imc;

// // Cria a TR do paciente
// var pacienteNovo = document.createElement("tr");
// var nomeNovo = document.createElement("td");
// var pesoNovo = document.createElement("td");
// var alturaNova = document.createElement("td");
// var gorduraNova = document.createElement("td");
// var imcResult = document.createElement("td");

// nomeNovo.textContent = nomeDado;
// pesoNovo.textContent = pesoDado;
// alturaNova.textContent = alturaDada;
// gorduraNova.textContent = gorduraDada;
// imcResult.textContent = calculaImc(pesoDado, alturaDada);

// pacienteNovo.appendChild(nomeNovo);
// pacienteNovo.appendChild(pesoNovo);
// pacienteNovo.appendChild(alturaNova);
// pacienteNovo.appendChild(gorduraNova);

// pacienteNovo.appendChild(imcResult);

function validaPaciente(paciente) {
  var erros = [];

  if (!validaPeso(paciente.peso)) erros.push("Verifique, o peso parece inválido.");
  if (!validaAltura(paciente.altura)) erros.push("Verifique, a altura parece inválida.");

  if (paciente.nome.length == 0) {
    erros.push("O nome não pode ser em branco.")

  }

  if (paciente.peso.length == 0) {
    erros.push("O peso não pode ser em branco.")

  }

  if (paciente.altura.length == 0) {
    erros.push("A altura não pode ser em branco.")
''
  }

  if (paciente.gordura.length == 0) {
    erros.push("A taxa de gordura não pode ser em branco.")

  }

  

  return erros;
}

function exibeMensagemDeErro(erros) {
  var ul = document.querySelector("#mensagem-erros");
  ul.innerHTML = "";

  erros.forEach(function(erro) {
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li)
  });

}

// PARTE 9____________

function adicionaPacienteAPI(paciente){
    var pacienteAPI = montaTr(paciente);
    var tabelaDaAPI = document.querySelector("#tabela-pacientes");
    tabelaDaAPI.appendChild(pacienteAPI); 

}