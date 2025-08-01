// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];

function agregarAmigo () {
    
    let amigo = document.querySelector("#amigo").value;
    
    limpiarCampo();

    if(amigo){
    
        nombres.push(amigo);
    
    }else if (amigo == ""){

        alert("Por favor, inserte un nombre.");
    }
    return;
}

function limpiarCampo () {
    
    let campo = document.querySelector("#amigo");
    campo.value =  "";
    campo.focus();
    return;
}





