function HexaColors(n1,n2,n3) {
	n1 >=0 && n1 <= 255 && n2 >=0 && n2 <= 255 && n3 >=0 && n3 <= 255 ? color = (n1.toString(16) + n2.toString(16) + n3.toString(16)) : alert("color no valido!!");
	console.log(color);
};
var c1 = prompt ("Color Red: ");
var c2 = prompt ("Color Green: ");
var c3 = prompt ("Color Blue: ");
n1= parseInt(c1);
n2= parseInt(c2);
n3= parseInt(c3);
HexaColors(n1,n2,n3);
