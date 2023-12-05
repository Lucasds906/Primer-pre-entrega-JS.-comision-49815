// Lista de palabras para el juego
const PALABRA = ["dinosaurio", "programacion", "desarrollo", "parlante", "exito", "catapulta", "estuario", "maremoto", "cuadrado", "helicoptero", "parangaricutirimicuaro", "fantasma", "universo", "aleatorio", "manuscrito", "hiperbole", "parasito", "barbacoa", "tradicionalmente"]


// Aquí se selecciona la palabra aleatoriamente
const PALABRASELECCIONADA = PALABRA[Math.floor(Math.random() * PALABRA.length)]

//Lista de variables
let palabraOculta = new Array(PALABRASELECCIONADA.length).fill('_')
let intentos = 5
let letrasIncorrectas = []
let inputValido = /^[a-zA-Z]$/

// Inicia el juego
while (intentos && (palabraOculta.join('') !== PALABRASELECCIONADA)) {
    jugar(prompt('Elige una letra').toLowerCase())
}


// Función para actualizar la palabra adivinada con la letra correcta
function actualizarPalabra(letra) {
    for (let i = 0; i < PALABRASELECCIONADA.length; i++) {
        if (PALABRASELECCIONADA[i] === letra) {
            palabraOculta[i] = letra
        }
    }
}


// Función para jugar
function jugar(letra) {
    if (!inputValido.test(letra)) {
        console.log('Por favor ingresa solo una letra')
        return
    }

    if (palabraOculta.includes(letra) || letrasIncorrectas.includes(letra)) {
        console.log('Ya has intentado con esa letra. Intenta con otra.')
    } else if (PALABRASELECCIONADA.includes(letra)) {
        actualizarPalabra(letra)
        console.log('Muy bien! La letra está en la palabra.')
    } else {
        letrasIncorrectas.push(letra)
        intentos--
        console.log('Oops! La letra no está en la palabra.')
    }

    // Mostrar estado de la partida
    console.log(`Palabra: ${palabraOculta.join(' ')}`)
    console.log(`Te quedan ${intentos} intentos`)
    console.log(`Letras incorrectas: ${letrasIncorrectas.join(', ')}`)
    console.log(`   *************   `)

    // Verificar si el jugador ganó o perdió
    if (palabraOculta.join('') === PALABRASELECCIONADA) {
        console.log('Felicidades! Has adivinado la palabra.')
    } else if (!intentos) {
        console.log('Lo siento. No has adivinado la palabra. La palabra era:', PALABRASELECCIONADA)
    }
}

