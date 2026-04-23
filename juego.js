let num1 = 0;
let num2 = 0;
let signo = 0;
let b = false;
let entrada = '';
function add(n){
    if(n === '+' || n === '-' || n === '*' || n === '/'){
        signo = n;
        b = true;
        entrada = '';
    } else if(!b){
        entrada += n;
        num1 = parseInt(entrada);
    } else {
        entrada += n;
        num2 = parseInt(entrada);
    }
    document.getElementById("pantalla").value = (b ? num1 + signo + entrada : entrada);
}

function sumar(a, b){
    return a + b;
}
function restar(a, b){
    return a - b;
}
function multiplicar(a, b){
    return a * b;
}
function dividir(a, b){
    return a / b;
}
let cont = 0;
function resultado(){
    let res = 0;
    if(signo === '+'){
        res = sumar(num1, num2);
    }
    if(signo === '-'){
        res = restar(num1, num2);
    }
    if(signo === '*'){
        res = multiplicar(num1, num2);
    }
    if(signo === '/'){
        res = dividir(num1, num2);
    }
    document.getElementById("pResultado").value = "R: " + res;
    entrada = res.toString();
    num1 = res;
    num2 = 0;
    b = false;
}
function limpiar(){
    num1 = 0;
    num2 = 0;
    b = false;
    entrada = '';
    document.getElementById("pResultado").value = entrada;
    document.getElementById("pantalla").value = '';
}
function sumaValores(){
    let n1 = Number(document.getElementById("primerNumber").value);
    let n2 = Number(document.getElementById("segundoNumber").value);
    document.getElementById("resultado").value = n1 + n2;
}