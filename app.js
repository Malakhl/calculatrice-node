// app.js

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

// Important ! Exporter les fonctions pour les tests
module.exports = { add, subtract };