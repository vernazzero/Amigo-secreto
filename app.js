// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


function agregarAmigo () {
    
    let nombre = document.querySelector("#amigo").value;
    if(nombre === ""){
        
        alert("Por favor, inserte un nombre.");
        return;
    }
    amigos.push(nombre);
    limpiarCampo();
}

function limpiarCampo () {
    
    document.querySelector("#amigo").value = "";
    document.querySelector("#amigo").focus();
}







