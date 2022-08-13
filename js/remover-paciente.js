// var pacientesTabela = document.querySelectorAll(".paciente");
// console.log(pacientesTabela);

// pacientesTabela.forEach(function(paciente) {
//     paciente.addEventListener("dblclick", function(){
//         this.remove(); //this é o dono do evento, puxando o callback

//     })

// });

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function (event) {
  // this.remove(); // Não funciona o this nesse caso, pois o 'dono' do evento é a tabela toda
  var alvo = event.target;
  var paiAlvo = alvo.parentNode; //Ou parentElemento, é quase a mesma coisa. Um retorna o nó, outro o elemento

  paiAlvo.classList.add("fade-out");
  setTimeout(function () {
    paiAlvo.remove();
  }, 350);
});
