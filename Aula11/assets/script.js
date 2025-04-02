/* alert("Hello world!");

console.log("Hello World!");

let nome = prompt("Qual é seu nome?"); //let, const, var

alert("Seja bem vindo " + nome);

console.log("Seja bem vindo " + nome);
 */


function alterar(){
    let p = document.getElementById("paragrafo");

    p.innerHTML = "Texto"; //innerText e innerHTML
    
    p.style.border= "1px solid red";
    p.style.display = "none";

    console.log(p);

}

function acende(){
    let p = document.getElementById("lampada").src="assets/pic_bulbon.gif";
    
    
}

function apaga(){
    let p = document.getElementById("lampada").src="assets/pic_bulboff.gif";;
}