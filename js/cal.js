let theInput = document.querySelector("#screen");
let btnNumber = document.querySelectorAll(".num");
let btnOperator = document.querySelectorAll(".sign");
let equal = document.querySelector(".equal");
let clear = document.querySelector(".clear");



function calculate(expression){
    try{
        return new Function(`return ${expression}`)();
    }catch{
        return "Error";
    }
}


document.addEventListener("click", (e) => {

    let lastChar = theInput.value.slice(-1);

    if(e.target.classList.contains("num")){
        theInput.value += e.target.innerHTML;
    }
    if(e.target.classList.contains("sign")){
        if(!["+", "-", "*", "/"].includes(lastChar)){
            theInput.value += e.target.innerHTML;
        }
        
    }
    if(e.target.classList.contains("equal")){
        
        theInput.value = calculate(theInput.value);
        
    }
    if(e.target.classList.contains("clear")){
        theInput.value = "";
    }
})


document.addEventListener("keydown", (e) =>{
    let KeyBoard = "1234567890+-*/.()";

    if(KeyBoard.includes(e.key)){
        theInput.value += e.key;
    }
    if(e.key === "Enter"){
        // e.preventDefault();
        theInput.value = calculate(theInput.value);
    }
    if(e.key === "Backspace"){
        theInput.value = theInput.value.slice(0, -1);
    }
    if(e.key === "Escape"){
        theInput.value = "";
    }
})
