var svg = document.getElementById("s");
var USA = document.getElementById("USA");
var norway = document.getElementById("Norway");
var usa_medals = [ 9, 8, 6]
var nor_medals = [14, 14 ,11]





var generate_usa = function(){
    var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    var c2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    var c3 = document.createElementNS("http://www.w3.org/2000/svg", "circle");

    var i = 0;
    while (i < 3){
    }
    
    
    
    
    
}

var drawCircle = function(e){
    mouseX = e.offsetX.toString();
    mouseY = e.offsetY.toString();
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("fill", "black");
    circle.setAttribute("cx", mouseX);    
    circle.setAttribute("cy", mouseY);
    circle.setAttribute("r", "10");
    svg.appendChild(circle);
    circle.addEventListener("click", clickType);
    
}

var clickType = function(e){
    if (this.getAttribute("fill") == "red"){
	svg.removeChild(this);
	e.stopPropagation();
	drawRandom();
    }
    else {
	changeColor(this);
	e.stopPropagation();
	console.log(svg);
    }
}

var drawRandom = function(){
    circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", (Math.floor(Math.random() * 500)).toString());
    circle.setAttribute("cy", (Math.floor(Math.random() * 500)).toString());
    circle.setAttribute("r", "10");
    circle.setAttribute("fill", "black");
    svg.appendChild(circle);
    circle.addEventListener("click", clickType);
}

var changeColor = function(c){
    c.setAttribute("fill" , "red");
}



USA.addEventListener("click", generate_usa);
norway.addEventListener("click", generate_nor);
