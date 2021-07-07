function calcularPromedioMedia (lista) {

    
    let totalLista = 0;
    
    for (let i = 0; i < lista.length; i++) {
        totalLista = totalLista + lista[i];
    }
    
    let promedioFinal = totalLista / lista.length;
    
    return promedioFinal;
}

function calcularMedia (lista) {
    
    lista.sort(
        function (elementoA, elementoB) {
            return elementoA - elementoB;
        }
    );

    let mitadLista = parseInt(lista.length / 2);
    
    function esPar(cantidad) {      
        if (cantidad % 2 === 0) {
            return true;
        }else {
            return false;
        }
    }
    
    let mediana; 
    
    if (esPar(lista.length)) {
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];
    
    const promedioElemento1y2 = calcularPromedioMedia([
      elemento1,
      elemento2,
    ]);
    
        mediana = promedioElemento1y2;
        console.log(mediana)
    
    } else {
    
    mediana = lista[mitadLista];
    console.log(mediana);
    }
    
}

const listaP = [2000, 700, 800, 100, 300, 10000, 5000]


