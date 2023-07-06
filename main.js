function go(){

var dosis =document.getElementById("dosis").value; 
var peso =document.getElementById("peso").value; 
var cantidad =document.getElementById("cantidad").value; 

var resultado=dosis*peso*cantidad;
document.getElementById("resultado").value=(resultado);
document.getElementById("resultado1").value=(resultado/1000000);
}