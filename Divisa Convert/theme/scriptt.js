const change = document.getElementById("inp");
const buttons = document.getElementById("buttons");
const fondo = document.body;

function invert(){
    if(buttons.value == "white"){
        fondo.style.background = "black";
        buttons.setAttribute("value", "black")
    }
    else if(buttons.value == "black"){
        fondo.style.background = "white";
        buttons.setAttribute("value", "white")
    }
    
}

change.addEventListener("click", invert)