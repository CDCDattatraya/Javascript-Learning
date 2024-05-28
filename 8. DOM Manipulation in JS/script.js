// DOM is programming interface
// In JS there if document object which includes properties and methods.
// We can capture user actions by using JS Events.
let el = document.getElementById("abc"); // node type object
// Accessing HTML Element : DOM helps us to access HTML Element of webpage in the form of JS Object.
let els = document.getElementsByClassName("xyz");
let ell = document.getElementsByTagName("li");
let elq = document.querySelectorAll(".xyz")  // This are methods of DOM

// Properties of DOM

alert(el.innerHTML);
el.innerHTML = "Document Object Model";
el.style.color = "green" ;