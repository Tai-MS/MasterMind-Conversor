const selector = document.getElementById("selector");
const selector2 = document.getElementById("selector2");
const number = document.getElementById("number");
const result = document.getElementById("result");
const button = document.getElementById("convert")


function convertM(){
    let resultado = number.value
    if(selector.value == "dolar" && selector2.value == "euro"){
        resultado *= 0.93;
        result.innerText = "The value is: " + resultado;
        console.log("El valor es: " + resultado);
        return true
    }
    else if(selector.value == "euro" && selector2.value == "dolar"){
        resultado *= 1.07;
        result.innerText = "The value is: " + resultado;
        console.log("El valor es: " + resultado);
        return true
    }
    else if(selector.value == "dolar" && selector2.value == "pesoArg"){
        resultado *= 200;
        result.innerText = "The value is: " + resultado;
        console.log("El valor es: " + resultado);
        return true;
    }
    else if(selector.value == "pesoArg" && selector2.value == "dolar"){
        resultado /= 200;
        result.innerText = "The value is: " + resultado;
        console.log("El valor es: " + resultado);
        return true;
    }
    else if(selector.value == "pesoArg" && selector2.value == "euro"){
        resultado /= 250;
        result.innerText = "The value is: " + resultado;
        console.log("El valor es: " + resultado);
        return true;
    }
    else if(selector.value == "euro" && selector.value == "pesoArg"){
        resultado *= 250;
        result.innerText = "The value is: " + resultado;
        console.log("El valor es: " + resultado);
        return true;
    }
    else{
        result.innerText = "The value is: " + resultado;
        console.log("El valor es: " + resultado);
        return true;
    }
    return true;
}

button.addEventListener("click", convertM);