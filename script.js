var h3 = document.querySelector("h3");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.getElementById("gradient");

color1.addEventListener("input",color)
color2.addEventListener("input",color)    

function color(){
    body.style.background = "linear-gradient(to left ," +color1.value+ "," +color2.value+ ")";
    h3.textContent = body.style.background + ";";
}