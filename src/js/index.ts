function sayHello(name) {
    return `Hello from ${name}`;
}
function showHello(divName, name) {
    const elt = document.getElementById(divName);
    elt.innerText = sayHello(name);
}

showHello("greeting", "the Express-News!");