var botaoBuscar = document.querySelector("#buscar-paciente");

botaoBuscar.addEventListener("click", function(){
    // Enredeço da API
    // http://api-pacientes.herokuapp.com/pacientes
    var xhr = new XMLHttpRequest();

    // Método open = Abre a requisição e pra onde
    // Requisição GET = Pegar dados
    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes"); //Isso aqui é como colocar o enrendeço na URL
    xhr.send(); // Isso é como clicar enter. Enviando a requisição
    xhr.addEventListener("load", function(){ //Adicionando o escutador de evento para quando os dados forem carregados
        console.log(xhr.responseText);
    });
});