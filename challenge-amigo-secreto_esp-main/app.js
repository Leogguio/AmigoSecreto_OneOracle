// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigosSecreto = [];

function agregarAmigo(){
    //agrega el nombre del amigo a la lista de amigos
    let nombreAmigo = document.getElementById('amigo');
    
    let amigo = nombreAmigo.value;

    if(!amigo){
        alert("Por favor, ingrese un nombre");
        return; 
    } else { if (amigosSecreto.includes(amigo)){
            alert("El amigo ya se encuentra en la lista");
            return;
        }
            amigosSecreto.push(amigo);
            nombreAmigo.value="";
            mostrarAmigos();
            return;
        }
};

function mostrarAmigos(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    for(let i = 0; i < amigosSecreto.length; i++){
        let item = document.createElement('li');
        item.textContent = amigosSecreto[i];
        listaAmigos.appendChild(item);
    }
};

function sortearAmigo(){
    if (amigosSecreto.length === 0){
        alert("No hay amigos en la lista");
        return;
    } 
    let amigoSorteado = amigosSecreto[Math.floor(Math.random() * amigosSecreto.length)];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `el amigo secreto es: ${amigoSorteado}`;

    let limpiar = document.getElementById('listaAmigos');
    limpiar.innerHTML = "";
};