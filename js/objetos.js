const seguroBase = 0.005 //medio % del valor del vehículo
const comision = 0.258   //la comisión que se lleva el productor/asesor de la Cia de Seguro

//CLASES JS

class Seguro {
    constructor(marca, modelo, precio, antiguedad) {
        this.marca = marca
        this.modelo = modelo
        this.precio = precio
        this.antiguedad = antiguedad
    }
    cotizar() {
        return this.precio * seguroBase
    }
    verComisionProd() {
        return this.precio * comision
    }
}

function cotizarMoto() {
    let marca = prompt("Ingresa la marca de la moto").toUpperCase()
    let modelo = prompt("Ingresa el modelo de la moto").toUpperCase()
    let precio = parseInt(prompt("Ingresa el valor de compra"))
    let antiguedad = prompt("Ingresa la antiguedad")

    const seguroMoto = new Seguro(marca, modelo, precio, antiguedad)
        console.log("La póliza mensual de su motocicleta es $", seguroMoto.cotizar())

        let esProductor = confirm("¿Usted es productor de seguros?")
            if (esProductor) {
                console.log("Su comisión por venta es de $", seguroMoto.verComisionProd())
            }
}