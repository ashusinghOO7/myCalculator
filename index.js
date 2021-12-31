var s ="";
function one(){
    s += "1";
    document.getElementById("str").innerText = s;
}
function two(){
    s += "2";
    document.getElementById("str").innerText = s;
}function three(){
    s += "3";
    document.getElementById("str").innerText = s;
}function four(){
    s += "4";
    document.getElementById("str").innerText = s;
}function five(){
    s += "5";
    document.getElementById("str").innerText = s;
}function six(){
    s += "6";
    document.getElementById("str").innerText = s;
}function seven(){
    s += "7";
    document.getElementById("str").innerText = s;
}function eight(){
    s += "8";
    document.getElementById("str").innerText = s;
}function nine(){
    s += "9";
    document.getElementById("str").innerText = s;
}function zero(){
    s += "0";
    document.getElementById("str").innerText = s;
}function doubleZero(){
    s += "00";
    document.getElementById("str").innerText = s;
}function dot(){
    s += ".";
    document.getElementById("str").innerText = s;
}function plus(){
    s += "+";
    document.getElementById("str").innerText = s;
}function minus(){
    s += "-";
    document.getElementById("str").innerText = s;
}function divide(){
    s += "/";
    document.getElementById("str").innerText = s;
}function multiply(){
    s += "*";
    document.getElementById("str").innerText = s;
}function dlt(){
    s = "";
    document.getElementById("str").innerText = s;
}function openBracket(){
    s += "(";
    document.getElementById("str").innerText = s;
}function closeBracket(){
    s += ")";
    document.getElementById("str").innerText = s;
}
function equal(){
    console.log(eval(s));
    document.getElementById("str2").innerText =" = " + eval(s);
}