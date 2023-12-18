

let nombre = prompt('Bienvenido. Para ingresar, escriba su nombre.')
let saldo = 0
let puntos = 0


var productosDeCanje = [[], [], [], [], []]



class CELULAR {
    constructor(marca, modelo, espacio, ram, precio, puntos) {
        this.marca = marca
        this.modelo = modelo
        this.espacio = espacio
        this.ram = ram
        this.precio = precio
        this.puntos = puntos
        this.info = `${marca}, ${modelo}, ${espacio}, ${ram}, ${precio}, ${puntos}`
    }
}

productosDeCanje[0].push(
    new CELULAR('Samnsung', 'S10', '128g', '6g', '$150.000', 3000),
    new CELULAR('Xiamoi', 'Redmi 11', '128', '8g', '$100.000', 2000),
    new CELULAR('Iphone', '14', '256g', '8g', '$500.000', 10000)
)




class COCINA {
    constructor(producto, material, tamaño, precio, puntos) {
        this.producto = producto
        this.material = material
        this.tamaño = tamaño
        this.precio = precio
        this.puntos = puntos
        this.info = `${producto}, ${material}, ${tamaño}, ${precio}, ${puntos}`
    }
}
productosDeCanje[1].push(
    new COCINA('Olla', 'Acero inoxidable', '30cm de diámetro', '$15.000', 300),
    new COCINA('Sartén', 'Aluminio', '35 cm de diámetro', '$20.000', 400),
    new COCINA('Espátula', 'Madera', '40 cm', '$5.000', 100),
)


class HOGAR {
    constructor(tipo, color, material, precio, puntos) {
        this.tipo = tipo
        this.color = color
        this.material = material
        this.precio = precio
        this.puntos = puntos
        this.info = `${tipo}, ${color}, ${material}, ${precio}, ${puntos}`
    }
}
productosDeCanje[2].push(
    new HOGAR('Cortina', 'Negro', 'Lino', '$10.000', 200),
    new HOGAR('Almohadón', 'Beige', 'plumas', '$25.000', 500),
    new HOGAR('Silla', 'Blanco', 'Madera', '$18.000', 360),
)



class INDUMENTARIA {
    constructor(prenda, genero, color, talle, precio, puntos) {
        this.prenda = prenda
        this.genero = genero
        this.color = color
        this.talle = talle
        this.precio = precio
        this.puntos = puntos
        this.info = `${prenda}, ${genero}, ${color}, ${talle}, ${precio}, ${puntos}`
    }
}
productosDeCanje[3].push(
    new INDUMENTARIA('Remera', 'Hombre', 'Negro', '44', '$12.000', 240),
    new INDUMENTARIA('Pantalón', 'Mujer', 'Jean', '38', '$10.000', 200),
    new INDUMENTARIA('Buzo', 'Unisex', 'Azul', '40', '$19.000', 380)
)


class TECNOLOGIA {
    constructor(producto, marca, color, precio, puntos) {
        this.producto = producto
        this.marca = marca
        this.color = color
        this.precio = precio
        this.puntos = puntos
        this.info = `${producto}, ${marca}, ${color}, ${precio}, ${puntos}`
    }
}
productosDeCanje[4].push(
    new TECNOLOGIA('Auriculares', 'Samsung', 'Negro', '$24.000', 480),
    new TECNOLOGIA('Mouse gamer', 'Trust', 'Negro y rojo', '$30.000', 600),
    new TECNOLOGIA('Webcam', 'Philips', 'Negro', '$50.000', 1000),
)

let nombreUsuario = prompt(`Hola ${nombre}, por favor, cree su nombre de usuario.`)
let password = prompt('Ahora cree una contraseña alfanumérica')
alert(`Felicidades, ${nombre}, Su cuenta ha sido creada exitosamente. Inicie sesión para operar.`)


do {
    usuario = prompt('Ingrese su nombre de usuario.')
    contraseña = prompt('Ingrese su contraseña.')
} while ((usuario != nombreUsuario) || (contraseña != password));


alert('Ha iniciado sesión. Qué operación desea realizar?')
seleccionarOpcion()










// ***************** FUNCIONES******************

function seleccionarOpcion() {
    let menu = Number(prompt('1. Consultar saldo. 2. realizar un depósito. 3. Extraer dinero. 4. Canjear puntos. 5. Cambiar nombre de usuario o contraseña.'))
    
        if (menu == 1) {
            alert(`El saldo de tu cuenta es de $ ${saldo}`)
            let respuesta = confirm('Desea volver al menú anterior?')
            if (respuesta) {
                seleccionarOpcion()
            } else {
                return
            }
        } else if (menu == 2) {
            let deposito = Number(prompt('Ingrese la cantidad de dinero que desea depositar.'))
            if ((deposito <= 0) || (isNaN(deposito))) {
                alert('Por favor, debe ingresar un numero mayor que 0.')
                seleccionarOpcion()
            } else {
                alert(`Su depósito se efectuó correctamente. El saldo de su cuenta es de $ ${saldo += deposito}.`)
                puntos += deposito * 0.1
            }
            let respuesta = confirm('Desea volver al menú anterior?')
            if (respuesta) {
                seleccionarOpcion()
            } else {
                return
            }
        } else if (menu == 3) {
            let extraccion = Number(prompt('Ingresa el monto que deseas extraer'))
            if ((extraccion <= 0) || (isNaN(extraccion))) {
                alert('Por favor, ingrese un monto mayor que 0')
                seleccionarOpcion()
            } else if (extraccion > saldo) {
                alert('El saldo de tu cuenta es insuficinte para realizar la extracción. Debe ingresar un monto menor.')
                seleccionarOpcion()
            } else {
                alert(`La extración se realizó exitosamente. El saldo de tu cuenta ahora es ${saldo -= extraccion}`)
            }
            let respuesta = confirm('Desea volver al menú anterior?')
            if (respuesta) {
                seleccionarOpcion()
            } else {
                return
            }




        } else if (menu == 4) {
                                      //1000
            alert(`Llevas acumulados ${puntos} puntos`)

            for (contenedor in productosDeCanje) {
                for (let i = 0; i < 3; i++) {
                    // const element = array[i];
                    // if (productosDeCanje[contenedor][i].puntos <= puntos)
                    // console.log(productosDeCanje[contenedor][i].verInfo())
                    if (puntos >= productosDeCanje[contenedor][i].puntos){
                        console.log(`puedesde canjear tus puntos por ${productosDeCanje[contenedor][i].info}`)
                    }
                }
                
            }

            let respuesta = confirm('Desea volver al menú anterior?')
            if (respuesta) {
                seleccionarOpcion()
            } else {
                return
            }




        } else if (menu == 5) {
            alert('entraste el menu 5')
            let respuesta = confirm('Desea volver al menú anterior?')
            if (respuesta == 1) {
                seleccionarOpcion()
            } else {
                return
            }
        } else {
            alert('La opción ingresada no es válida.')
            seleccionarOpcion()
        }
    } 

