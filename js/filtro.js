var campoFiltro = document.querySelector("#filtrar-tabela");

// O Event 'input' é cada interação que eu tenho com o campo. No caso, digitar qualuqer coisa
campoFiltro.addEventListener("input", function () {
  var pacientes = document.querySelectorAll(".paciente");

  if (this.value.length > 0) {
    for (var i = 0; i < pacientes.length; i++) {
      var paciente = pacientes[i];
      var tdNome = paciente.querySelector(".info-nome");
      var nome = tdNome.textContent;

      var expressao = new RegExp(this.value, "i") //insenstive = não se importar com maiúsculo ou minúsculo

      if (!expressao.test(nome)) {
        //This.value = conteudeo de texto do input
        paciente.classList.add("invisivel");
      } else {
        paciente.classList.remove("invisivel");
      }
    }
  } else {
    for (var i = 0; i < pacientes.length; i++) {
      var paciente = pacientes[i];
      paciente.classList.remove("invisivel");
    }
  }
});
 

// OUTRA MANEIRA DE FAZER A BUSCA. USANDO MÉTODO SUBSTRING
// var comparavel = nome.substr(0, this.value.length);
// var comparavelMinusculo = comparavel.toLowerCase();
// var valorDigitadoMinusculo = this.value.toLowerCase();

// if (!(valorDigitadoMinusculo == comparavelMinusculo)) {
//     paciente.classList.add("invisivel");
// } else{
//     paciente.classList.remove("invisivel");
// }