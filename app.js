// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let valor = "";
let amigosInsertados = [];

// funcion para agregar amigos a la lista 

function agregarAmigo(nombre){
    let inputAmigo = document.getElementById('amigo');
    if (inputAmigo.value == "") {
        alert("Debe ingresar un nombre");
    } else {
        valor = inputAmigo.value;// obtengo el valor del input
        amigosInsertados.push(valor);// agrego el valor al array
        console.log(amigosInsertados);
        agregarLista(amigosInsertados);// agrego el valor a la lista
        document.getElementById('amigo').value = "";// limpio el input
    }
    return amigosInsertados;
}

// funcion para agregar la lista de amigos al html

function agregarLista(lista) {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";
    for (let i = 0; i < lista.length; i++) {
        listaAmigos.innerHTML += `<li>${lista[i]}</li>`;// concatenación de la lista
    }
}

// funcion para sortear un amigo de la lista amigosInsertados

function sortearAmigo() {
    let numeroAleatorio = 0;
    if (amigosInsertados.length != 0){
        numeroAleatorio = Math.floor(Math.random()* amigosInsertados.length);
        let resultado = document.getElementById('resultado')
        resultado.innerHTML = `<li>${amigosInsertados[numeroAleatorio]}</li>`;
    } else {
        alert("Debe ingresar al menos un amigo");
    }
}
