//dynamic date js code
const d = new Date();
let text = d.toLocaleDateString();
document.getElementByID("today").innerHTML = text;
