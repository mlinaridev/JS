//FUNCIONES
let nombreCompleto = "Coder House"

function saludar(usuario) {
    console.log("🙋🏻‍♂️ Bienvenid@", usuario)
}

function login() {
    let huella = "Ingresas con huella?";
        if (confirm(huella) == true) {
            console.log("🙋🏻‍♂️ Bienvenid@")
        } else {
            let usuario = prompt("Ingresa tu nombre de usuario:").trim()

        if (usuario !== "" && usuario.length > 2) {
            saludar(usuario)
        } else {
            console.warn("No se reconoce el dato ingresado.")
        }
        }
    
}


function consultarStock() {
    
    let codigoProducto = prompt("Ingresa el nro. del codigo del producto para consultar stock: \n")
    switch (parseInt(codigoProducto)) {
        case 1111:
            console.log("Hay stock!")
            break;
        case 2222:
            console.log("Hay stock!")
            break;
        case 3333:
            console.log("Hay stock!")
            break;
        case 3333:
            console.log("Hay stock!")
            break;
        case 4444:
            console.log("Hay stock!")
            break;
        default:
            console.error("Por el momento no disponemos de stock")
    }
    let continuar = confirm("¿Desea consultar el stock de otro producto?")
    if (continuar) {
        consultarStock()
    }
}

/*function verProductos() {
    let productos = "Productos disponibles: \n" +
                    "1) Notebook Asus 17 Gamer \n" +
                    "2) Macbook Air 13 \n" +
                    "3) iPad Air 10.1"

    let respuesta = prompt("Ingresa el nro. del codigo del producto para consultar stock: \n" + productos)
    switch (parseInt(respuesta)) {
        case 1:
            console.log("Producto elegido 'Notebook Asus 17 Gamer'. Su precio es de $ 580.000")
            break;
        case 2:
            console.log("Producto elegido 'Macbook Air 13'. Su precio es de $ 290.000")
            break;
        case 3:
            console.log("Producto elegido 'iPad Air 10.1'. Su precio es de $ 180.000")
            break;
        default:
            console.error("No se reconoce el producto ingresado.")
    }
    let continuar = confirm("¿Desea consultar el valor de otro producto?")
    if (continuar) {
        verProductos()
    }
}*/