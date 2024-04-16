//Logical assignment operators are ES2020.
let x=5;
let y=3;
x &&= y	;
document.write(x)




/*
Operator	Example	             Same As
&&=	        x &&= y	             x = x && (x = y)
||=	        x ||= y	             x = x || (x = y)
??=	        x ??= y	             x = x ?? (x = y)
*/