let bienevidos = alert("bienvedino@ a la tienda Cali") 

 //regitro de usuario/

let nombredeUsuario = prompt("Registrese, coloque nombre de usuario")
let contraseña = prompt ("ingrese almenos 8 carecteres (letras y numero)")

if ((nombredeUsuario != '') && (contraseña != ''))
alert ("tu usuario" + nombredeUsuario + "\ncontraseña" +contraseña)
alert (" seleccione el codigo de prenda")

console.log("su usuario fue registrado con exito" + nombredeUsuario + contraseña ) 

function mostrarPrecio (codigo) {
    switch(codigo) {
        case 1:
            alert("Buzo crop $20.000")
            costoPrenda = 20000
            break
        case 2:
            alert("buzo oversize $25.000")
            costoPrenda = 25000
            break
        case 3:
            alert("Remera mega $8.000")
            costoPrenda = 8000
            break
        case 4:
            alert("vestido mila $12.000")
            costoPrenda = 12000
            break
        case 5:    
            alert("Falda larga $15.000")
            costoPrenda = 15000
            break
        default:
            alert("🤔 No entendimos tu selección.")
            break
    }
}

function consultarPrendas() {
    let codigoPrenda = prompt("Ingresa el código numérico de la prenda a consultar:")
    if (codigoPrenda) {
        mostrarPrecio(parseInt(codigoPrenda))
        mostrarCuotas()
        let respuesta = prompt("Seleccione la cantidad de cuotas")
        if (respuesta === true) {
            let mostrarCuotas
        }
        
    } else {
        console.warn("Debes ingresar un código válido.")
    }

}

function mostrarCuotas() {
    console.log("Puedes pagar en:")
    for (let i = 1; i <= 6; i++) {
        console.log(i, "cuota(s) de " + (costoPrenda / i).toFixed(2))
    }
    console.log("Sin intereses.")
}







