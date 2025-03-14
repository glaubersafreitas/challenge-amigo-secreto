let listaAmigos = [];

function adicionarAmigo() {
    let nomeInput = document.getElementById("amigo");
    let nome = nomeInput.value.trim();

    if (nome === "") {
            alert("Por favor, digite um nome válido!");
            return;
    }
    
    if (listaAmigos.includes(nome)) {
            alert("Esse nome já foi adicionado ao Sorteio!");
            return;
    }
  
      listaAmigos.push(nome);
      atualizarLista();
      nomeInput.value ="";
   
}

function atualizarLista() {
    let ul = document.getElementById ("listaAmigos");
    ul.innerHTML = "";
    listaAmigos.forEach(nome => { 
        let li = document.createElement("li");
        li.textContent = nome;
        ul.appendChild(li);
    });
}

function sortearAmigo() {
    if(listaAmigos.length < 2) {
        alert("Adicione pelo menos dois amigos para realizar o Sorteio");
        return;
    }

    let sorteio = [...listaAmigos];
    let resultado = [];

    for (let i = 0; i < listaAmigos.length; i++) {
        let amigoDisponivel = sorteio.filter (nome => nome !== listaAmigos[i]);

        if (amigoDisponivel.length === 0) {
            alert("Não foi possível realizar sortear sem repetições. Tente novamente")
        }
        let sorteado = amigoDisponivel[Math.floor(Math.random() *amigoDisponivel.length)];
        resultado.push (`${listaAmigos[i]} -> ${sorteado}`);

        sorteio.splice(sorteio.indexOf(sorteado), 1);
    }

    exibirResultado(resultado);
}

function exibirResultado(resultado) {
    let ul = document.getElementById("resultado");
    ul.innerHTML="";
    resultado.forEach(par => {
        let li = document.createElement("li");
        li.textContent = par;
        ul.appendChild(li);
    });
}



