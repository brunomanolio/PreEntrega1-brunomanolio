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

//enumerar las facturas de insumos
console.log("-----------Cantidad de Facturas-----------")
for(let facturas=1; facturas<=10; facturas+=1){
    if(facturas===5){
        break;
    }
    console.log("Factura Numero " + facturas)
}   


// cuantas facturas de insumos
console.log("----------Monto Facturas-----------")
let montofactura = 10

while (montofactura<100){
    console.log("El monto es " + montofactura)
    montofactura +=20;
}

// sumar dos facturas
console.log("----------Monto total de Facturas:------------")
let factura1 = 100
let factura2 = 100
let factura3 = 50 

let sumarfacturas = function(){
    console.log(factura1+factura2+factura3)
}

sumarfacturas()









































