// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []
const input = document.querySelector('#amigo')
const ulresult = document.querySelector("#resultado")
const lista = document.querySelector("#listaAmigos")

function agregarAmigo(){
    if(input.value === ""){
        alert('Por favor, inserte un nombre.')
        return
    }
    if(amigos.includes(input.value)){
        alert('Por favor, inserte un nombre unico.')
        return
    }
    
    amigos.push(input.value)    
    lista.innerHTML = ""
    let html = "";
    for (let index = 0; index < amigos.length; index++) {
        html += `<li> ${amigos[index]}</li>`;
    }
    lista.innerHTML = html;

    input.value = ""
}

function sortearAmigo(){
    if(amigos.length < 2){
        alert('Por favor, inserte al menos 2 nombres.')
        return
    }

    const ganador = amigos[Math.floor(Math.random() * amigos.length)]
    ulresult.textContent = `El ganador es: ${ganador}`
}