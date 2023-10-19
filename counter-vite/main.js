const decrease = document.getElementsByClassName("btn")[0];
const reset = document.getElementsByClassName("btn")[1];
const increase = document.getElementsByClassName("btn")[2];

let numeroHTML = document.getElementsByClassName("count")[0];

let numero = 0;

decrease.addEventListener("click", () => {
    numero -= 1;
    numeroHTML.textContent = numero;
})

reset.addEventListener("click", () =>{
    numero = 0;
    numeroHTML.textContent = numero;
})

increase.addEventListener("click", () => {
    numero += 1;
    numeroHTML.textContent = numero;
})