function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    
    // alert ("Obrigado por clicar!")
}

function redirecionar(){
    window.open("https://google.com.br")
    window.location.href = "https://youtube.com"
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse"
    // document.getElementById("sobreposicao").innerHTML = "Obrigado por passar o mouse"
    // alert("trocar texto")
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui"
    // document.getElementById("sobreposicao").innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Página carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

// function soma (n1, n2){
//     return n1 + n2;
// }

// function validarIdade(idade){
//     var validar;
//     if(idade >= 18){
//         validar = true
//     }else {
//         validar = false
//     }
//     return validar;
// }

// var idade = prompt("Qual sua idade?")
// console.log(validarIdade(idade))

