const display= document.querySelector("input");
const numbers = document.querySelectorAll(".num");
const operations = document.querySelectorAll(".operation");
const egual = document.querySelector(".egual");
const clear = document.querySelector(".clear");

let haveDot = false;

numbers.forEach(number => {
    number.addEventListener("click", () => {
        if(number.innerText === "." && !haveDot){
           haveDot = true;
        }else if(number.innerText === "." && haveDot){
            return;
        }
     display.value = display.value !== "0" ? display.value +
     number.innerText : number.innerText
    });
})

clear.addEventListener("click", () => {
    display.value = "0";
})