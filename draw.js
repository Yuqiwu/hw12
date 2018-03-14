var svg = document.getElementById("s");
var tog = document.getElementById("switch");
var p = document.getElementById("p1");

// raw data
var usa_medals = [9, 8, 6];
var nor_medals = [14, 14 ,11];

// global variables
var width = parseInt( svg.getAttribute("width") );
var height = parseInt( svg.getAttribute("height") );
var stat = true;

var newCircle = function(x, y, r, fill){
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", x );
    c.setAttribute("cy", y );
    c.setAttribute("r", r );    
    c.setAttribute("fill", fill );
    return c;
}

var c1 = newCircle( width / 2, height / 3, 1, "gold");
var c2 = newCircle( width / 3, height / 2, 1, "silver");
var c3 = newCircle( width * 2 / 3, height * 2 / 3, 1, "#8C7853");

svg.appendChild( c1 );
svg.appendChild( c2 );
svg.appendChild( c3 );

var draw = function(){
    var circles = d3.selectAll("circle");
    if (stat == true){
	circles.data(usa_medals);
	p.innerHTML = "USA!";
    }
    else{
	circles.data(nor_medals);
	p.innerHTML = "NORWAY!";
    }	
    circles.attr("r", function(d){
	return d * 2;
    });
}

var toggle = function(){
    if (stat == true){
	stat = false;
    }
    else{
	stat = true;
    }
    draw();
}

draw();

tog.addEventListener("click", toggle);

