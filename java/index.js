let bienevidos = alert("bienvenid@ a la tienda Cali") 


 //regitro de usuario/

let nombredeUsuario = prompt("Registrese, coloque nombre de usuario")
let contraseña = prompt ("ingrese almenos 8 carecteres (letras y numero)")
let metodoPago = prompt(`Los mismos pueden ser abonado con efectivo o tarjeta ¿Que opcion eliges?:
1: Efectivo
2: Tarjeta
`);

if ((nombredeUsuario != '') && (contraseña != ''))
alert ("tu usuario: " + nombredeUsuario + "\ncontraseña: " +contraseña)
alert (" seleccione el codigo de prenda")

console.log("su usuario fue registrado con exito" + nombredeUsuario + contraseña ) 

switch(metodoPago){
    case "1":
        alert("Pagando en efectivo obtienes un %10 de descuento");
        break;
    case "2":
        alert("Pagando con tarjeta usted puede hacerlo en 3 cuotas, 6 cuotas o 12 cuotas");
        break;
}

const carrito = []
const prendas = [{ codigo: 1, nombre: 'buzo crop', precio: 20000},
                 { codigo: 2, nombre: 'buzo oversize', precio:25000 },
                 { codigo: 3, nombre: 'Remera mega', precio: 8000},
                 { codigo: 4, nombre: 'vestido mila ', precio: 12000},
                 { codigo: 5, nombre: 'camisa', precio: 25000 }, 
                ];

function buscarPrenda(codigo) {
    let prendaSeleccionada = prendas.find((prenda)=> prenda.codigo === codigo)
    return prendaSeleccionada
}

function consultarPrendas() {
    let codigo = prompt("Ingresa el código numérico de la prenda a consultar:")
    let prendaElegida = buscarPrenda(parseInt(codigo))

    if (prendaElegida !== undefined) {
        carrito.push(prendaElegida)
        let respuesta = confirm("¿Deseas elegir otra prenda?")
        if (respuesta === true) {
            consultarPrendas()
        } else{ 
            const shop = new Compra(carrito)
            let subtotal = shop.obtenerSubtotal()
            console.table(carrito)
            prompt("✅ El costo total es de $ " + subtotal + "¿Desea quitar alguna prenda?" + quitarPrenda)
        }
        
        
        
    } else {
        alert("⛔️ Error en el código de prenda ingresado. Refresca para comenzar de nuevo.")
    }


}

function quitarPrenda (){
    prendaElegida.pop();
    console.table(carrito);
}




/* function consultarPrendas() {
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

/*  pop: Eliminar un elemento al final del Array */
/* prendas.pop();
console.log(prendas); */