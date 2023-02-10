//Facturacion de insumos
alert("Bienvenido!")
//Articulos:
let urea
let dap
let map

//Precios
let precioUrea = 800
let precioDap = 950
let precioMap = 900
let insumo = prompt("Que vas a facturar? Urea, Dap o Map?")
let cantidad = Number(prompt("Ingrese cantidad a facturar"))

//funcion de iva


if(insumo=="urea"){
    document.write("Factura de "+ insumo + " " + "=" + " ")
    document.write(precioUrea * cantidad);
}else if(insumo=="dap"){
    document.write("Factura de  "+ insumo + " " + "=" + " ")
    document.write(precioDap * cantidad);
}else if(insumo=="map"){
    document.write("Factura de  "+ insumo + " " + "=" + " ")
    document.write(precioMap * cantidad);
}else{
    alert("Facturar otro insumo")
}

let metodoPago = prompt("Elija medio de pago (canje, cheque o efectivo")

switch(metodoPago){
    case "canje":
        document.write (" usted va a cancelar con " + metodoPago);
        break;
    case "cheque":
        document.write (" usted va a cancelar con " + metodoPago);
        break;
    case "efectivo":
        document.write(" usted va a cancelar con "+ metodoPago);
        break;
}








































