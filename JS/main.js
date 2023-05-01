var formulario = document.querySelector("#novoItem")

formulario.addEventListener("submit", (evento)=>{

    evento.preventDefault()

    console.log(evento.target[0].value) //--> Mostra o valor do input 0, ou seja, dentro do form tem dois inputs, e quando o form for acionado, vai mostrar o valor de dentro do input 

    console.log(evento.target.elements['nome'].value) //--> Pega o nome do input de name="nome"
    console.log(evento.target.elements['quantidade'].value) //--> Pega o numero do input com name="quantidade" 

    var containerParaCriarLI = document.querySelector(".lista")
    var criaLI = document.createElement("li")
    
    var nome = evento.target.elements['nome'].value
    var quantidade = evento.target.elements['quantidade'].value

    if(quantidade >= 1){
        criaLI.innerHTML = `<strong>${quantidade}</strong> ${nome}`
        criaLI.classList.add("item")
        containerParaCriarLI.appendChild(criaLI)
        document.querySelector(".apagar").style.transition = "10s"
        document.querySelector(".apagar").style.display = "block"
    }else if(nome == Number(nome)){
        alert("Dê um nome para o seu item!")
    } else{
        alert("Defina uma quantidade para o seu item!")
    }
})



// Apagar
var lista = document.querySelector("ul")

var quantidadeLista = document.querySelectorAll("ul li").length

if(quantidadeLista < 1){
    document.querySelector(".apagar").style.display = "none"
}

var verifica = console.log(`A sua lista possui ${quantidadeLista}`);

lista.addEventListener("dblclick", (evento)=>{

    var paiDoevento = evento.target;
    paiDoevento.classList.add("demora")

    setTimeout(()=>{
    var paiDoevento = evento.target;

    paiDoevento.remove()
    },1000)
    
})

function apagarMensagem(){
    alert("Dê dois toques no elemento que você quer remover")
}


