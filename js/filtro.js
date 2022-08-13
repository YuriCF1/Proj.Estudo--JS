var campoFiltro = document.querySelector("#filtrar-tabela");

// O Event 'input' é cada interação que eu tenho com o campo. No caso, digitar qualuqer coisa
campoFiltro.addEventListener("input", function(){
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0) {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome")
            var nome = tdNome.textContent;
            
            if (nome != this.value) { //This.value = conteudeo de texto do input
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
                
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel")


        }

    }


    });
    