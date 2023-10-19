const decrease = document.getElementsByClassName("btn")[0];
const reset = document.getElementsByClassName("btn")[1];
const increase = document.getElementsByClassName("btn")[2];

const contadorHTML = document.getElementsByClassName("count")[0];
let contador = 0;

decrease.addEventListener("click",()=>{
    contador -= 1;
    contadorHTML.innerHTML = contador;
})

reset.addEventListener("click",()=>{
    contador = 0;
    contadorHTML.innerHTML = contador;
})

increase.addEventListener("click",()=>{
    contador += 1;
    contadorHTML.innerHTML = contador;
})