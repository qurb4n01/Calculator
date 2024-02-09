let screen  = document.querySelector("#calculatorScreen")
const numbers = document.querySelectorAll(".number");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const devide = document.querySelector("#devide");
const multiplication = document.querySelector("#multiplication");
const clear = document.querySelector("#clear");
const deletion = document.querySelector("#delete");
const equal = document.querySelector("#equal");
const point = document.querySelector("#point");




for (let i = 0; i<numbers.length; i++){
    numbers[i].addEventListener("click", ()=>{
        screen.textContent += numbers[i].textContent;
    })
}
plus.addEventListener("click", ()=>{
    screen.textContent += "+";
})
minus.addEventListener("click", ()=>{
    screen.textContent += "-";
})
devide.addEventListener("click", ()=>{
    screen.textContent += "/";
})
multiplication.addEventListener("click", ()=>{
    screen.textContent += "*";
})
equal.addEventListener("click", ()=>{
    let expression = document.querySelector("#calculatorScreen").textContent;
    screen.textContent = eval(expression);
})
point.addEventListener("click", ()=>{
    screen.textContent += ".";
})
deletion.addEventListener("click", ()=>{
    screen.textContent = screen.textContent.slice(0,-1);
})
clear.addEventListener("click", ()=>{
    screen.textContent = "";
})