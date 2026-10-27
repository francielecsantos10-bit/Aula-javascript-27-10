// let body = document.querySelector("body");
// let div = document.querySelector("div");
// body.removeChild(h1);


// let h1 = document.querySelector("#trocarCor");

// console.log(h1)


// h1.style.color = "black";
// h1.style.background = "gold";
// h1.style.height ="20xp";

// // Sempre que quiser alterar ou saber um valor do css de um elemento html
// // nomeDaTag.syle.atributo 

// body.style.backgroundColor = "magenta";

// var h1 = document.querySelector("h1");
// var paragrafo = document.querySelector("p");

// paragrafo.innerText = h1.innerText;

// function verificarCor(cor){
    
//     if(cor == "red" || cor == "blue" || cor == "yellow"){
//         return "cor primaria escolhida";
//     } else if(cor == "green" || cor == "orange" || cor == "purple"){
//         return "cor secundaria escolhida";
//     } else {
//         return "cor não encontrada";
//     }
// }

// let corUsuario = prompt("Choose background color: red, blue, yellow, green, orange, purple");
// document.body.style.backgroundColor = corUsuario;
// alert(verificarCor(corUsuario));

// let button = document.querySelector("button");

// button.addEventListener("click",function() {
//     console.log("cliquei")

// });
const botao = document.querySelector("button");

botao.addEventListener('click', () => {
  document.body.classList.toggle("modo-escuro");
});