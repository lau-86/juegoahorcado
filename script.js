const palabras = ["tijera", "portaminas", "cuadernola", "perforadora", "adhesivo", "colores", "acuarela"];
let palabra;
let letrasAdivinadas;
let intentosRestantes;

function comenzar() {
    palabra = palabras[Math.floor(Math.random() * palabras.length)];
    letrasAdivinadas = [];
    intentosRestantes = 6;
}

function mostrar() {
    let estado = "";
    for (let i = 0; i < palabra.length; i++) {
        if (letrasAdivinadas.includes(palabra[i])) {
            estado += palabra[i] + " ";
        } else {
            estado += "_ ";
        }
    }
    return estado.trim();
}

function actualizar(letra) {
    if (!letrasAdivinadas.includes(letra)) {
        letrasAdivinadas.push(letra);
        if (!palabra.includes(letra)) {
            intentosRestantes--;
        }
    }
}

function verificar() {
    if (intentosRestantes === 0) {
        alert(`Perdiste. La palabra era: ${palabra}`);
        return false;
    } else if (!mostrar().includes("_")) {
        alert("¡Felicidades! Ganaste.");
        return false;
    }
    return true;
}

function jugar() {
    alert("Bienvenido!");

    while (intentosRestantes > 0) {
        let palabraActual = mostrar();
        let adivinanza = prompt("Palabra: " + palabraActual + "\nIntentos restantes: " + intentosRestantes + "\nIngresa una letra:").toLowerCase();

        if (adivinanza && adivinanza.length === 1 && adivinanza.match(/[a-z]/)) {
            actualizar(adivinanza);
            if (!verificar()) {
                break;
            }
        } else {
            alert("Por favor, ingresa una letra válida.");
        }
    }

    if (confirm("¿Volver a jugar?")) {
        inicio();
    } else {
        alert("Gracias por jugar.");
    }
}

function inicio() {
    comenzar();
    jugar();
}

document.getElementById("startButton").addEventListener("click", inicio);
