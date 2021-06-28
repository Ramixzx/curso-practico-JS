function calcularPrecioConDescuento (precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = precio * porcentajePrecioConDescuento / 100;
    
    return precioConDescuento;
}

function finalPrice () {
    const inputP = document.getElementById('InputPrice');
    const valueP = inputP.value;

    const inputD = document.getElementById('InputDiscount');
    const valueD = inputD.value;

    const precioFinal = calcularPrecioConDescuento(valueP, valueD);

    const resultP = document.getElementById('ResultP');
    resultP.innerText = `El precio con descuento es de $${precioFinal}`;
}