// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let valor = "";
let amigosInsertados = [];

// funcion para agregar amigos a la lista

function agregarAmigo(nombre){
    let inputAmigo = document.getElementById('amigo');
    if (inputAmigo.value == "") {
        alert("Debe ingresar un nombre");
        return;
    } else {
        valor = inputAmigo.value;// obtengo el valor del input
        amigosInsertados.push(valor);// agrego el valor al array
        console.log(amigosInsertados);
        document.getElementById('amigo').value = "";// limpio el input
    } 
}