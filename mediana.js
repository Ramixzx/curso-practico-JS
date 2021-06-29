function calcularPromedioMedia (lista) {
    
    let totalLista = 0;
    
    for (let i = 0; i < lista.length; i++) {
        totalLista = totalLista + lista[i];
    }

    let promedioFinal = totalLista / lista.length;
    
    return promedioFinal;
}
const listaP = [100, 300, 700, 800, 2000, 10000]

let mitadListaP = parseInt(listaP.length / 2);

function esPar(cantidad) {      
    if (cantidad % 2 === 0) {
        return true;
    }else {
        return false;
    }
}

let mediana; 

if (esPar(listaP.length)) {
    const elemento1 = listaP[mitadListaP - 1];
    const elemento2 = listaP[mitadListaP];

const promedioElemento1y2 = calcularPromedioMedia([
  elemento1,
  elemento2,
]);

    mediana = promedioElemento1y2;
    console.log(mediana)

} else {

mediana = listaP[mitadListaP];
console.log(mediana);
}
