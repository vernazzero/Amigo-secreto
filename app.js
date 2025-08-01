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







