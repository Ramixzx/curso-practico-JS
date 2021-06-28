const cuponesDescuento = [
    {
        name: 'Primer_Aniversario',
        value: 15,
    },

    {
        name: 'Cliente_Frecuente',
        value: 10,
    },

    {
        name: 'Feliz_Cumple',
        value: 10,
    },
];

// const cupones = ['Primer_Aniversario', 'Cliente_Frecuente', 'Feliz_Cumple'];

function calcularPrecioConDescuento (precio, cupon) {
    const porcentajePrecioConDescuento = 100 - cupon;
    const precioConDescuento = precio * porcentajePrecioConDescuento / 100;
    
    return precioConDescuento;
}

function finalPrice () {
    const inputP = document.getElementById('InputPrice');
    const valueP = inputP.value;

    const inputC = document.getElementById("InputCoupon");
    const valueC = inputC.value;

    // let descuento;

    // switch(valueC) {
    //     case('Primer_Aniversario'):
    //         descuento = 15;
    //         break;
    //     case ('Cliente_Frecuente'):
    //         descuento = 10;
    //         break;
    //     case('Feliz_Cumple'):
    //     descuento = 10;
    //     break;
    // }

    // if (!cupones.includes(valueC)) {
    //     alert(`El cupón ${valueC} no es valido`)
    // } 
    // else if (valueC === 'Primer_Aniversario') {
    //     descuento = 15;
    // }
    // else if (valueC === 'Cliente_Frecuente') {
    //     descuento = 10;
    // }
    // else if (valueC === 'Feliz_Cumple') {
    //     descuento = 10;
    // }

    const esUnCuponValido = function (cuponesDescuento) {
        return cuponesDescuento.name === valueC;
    }

    const usarCupon = cuponesDescuento.find(esUnCuponValido);

    if (!usarCupon) {
        alert(`El cupón ${valueC} no es valido`);
    }
    else {
        const descuento = usarCupon.value;
        const precioFinal = calcularPrecioConDescuento(valueP, descuento);
    
    
        // Primero traigo el parrafo del HTML, para escribir sobre él el "PrecioFinal" del producto.
        const resultP = document.getElementById('ResultP');
        resultP.innerText = `El precio con descuento es de $${precioFinal}`;
    }

}