var botaoBuscar = document.querySelector("#buscar-paciente");

botaoBuscar.addEventListener("click", function(){
    // Enredeço da API
    // http://api-pacientes.herokuapp.com/pacientes

    // Esse nome de protocolo hoje consegue trazer vários outros tipos de arquivo
    var xhr = new XMLHttpRequest();

    // Método open = Abre a requisição e pra onde
    // Requisição GET = Pegar dados
    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes"); //Isso aqui é como colocar o enrendeço na URL
    xhr.send(); // Isso é como clicar enter. Enviando a requisição
    xhr.addEventListener("load", function(){ //Adicionando o escutador de evento para quando os dados forem carregados
        var resposta = xhr.responseText;
        var pacientesAPI = JSON.parse(resposta)


        pacientesAPI.forEach( function(paciente) {
            adicionaPacienteAPI(paciente)
        });

        console.log(pacientesAPI);
        // console.log( typeof resposta ); // typeof = OPERADOR que retorna o tipo
        
    });
});