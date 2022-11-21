// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>

const p = document.querySelector('p');

let a = document.createElement('a');
a.setAttribute('id', 'cta');
a.textContent = 'Buy Now!';

p.parentNode.insertBefore(a,p.nextSibling);

// Access (read) the data-color attribute of the <img>,
// log to the console
const imgDataColor = document.querySelector('img').dataset.color; 
console.log(imgDataColor);

// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"

const itemsInList = document.querySelectorAll('ul li');
itemsInList[2].setAttribute('class', 'highlight');

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")

p.remove()