var botaoBuscar = document.querySelector("#buscar-paciente");
var mensagemErro = document.querySelector("#erro-ajax");

botaoBuscar.addEventListener("click", function () {
  // Enredeço da API
  // http://api-pacientes.herokuapp.com/pacientes

  // Esse nome de protocolo hoje consegue trazer vários outros tipos de arquivo
  var xhr = new XMLHttpRequest();

  // Método open = Abre a requisição e pra onde
  // Requisição GET = Pegar dados
  xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes"); //Isso aqui é como colocar o enrendeço na URL
  xhr.addEventListener("load", function () {
    //Adicionando o escutador de evento para quando os dados forem carregados
    if (xhr.status === 200) {
      //Verifica se a requisão foi um sucesso
      var resposta = xhr.responseText;
      var pacientesAPI = JSON.parse(resposta);

      pacientesAPI.forEach(function (paciente) {
        adicionaPacienteAPI(paciente);

        mensagemErro.classList.remove("invisivel-erro");
        mensagemErro.classList.add("invisivel");
      });
      // console.log( typeof resposta ); // typeof = OPERADOR que retorna o tipo
    } else {
      //Exibe o código do erro e o texto que o acompanha
      // window.location.href = "http://www.alura.com.br";
      console.log(xhr.status);
      console.log(xhr.responseText);

      mensagemErro.classList.remove("invisivel");
      mensagemErro.classList.add("invisivel-erro");
    }
  });
  xhr.send(); // Isso é como clicar enter. Enviando a requisição. Nesse caso, ele também pode ficar antes do evenListenner
});
