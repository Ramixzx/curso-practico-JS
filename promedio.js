function calcularPromedio (lista) {
    let totalLista = 0;
    
    for (let i = 0; i < lista.length; i++) {
        totalLista = totalLista + lista[i];
    }
    // const sumaLista = lista.reduce(
    //     function (valorAcumulado = 0, nuevoElemento) {
    //         return valorAcumulado + nuevoElemento;
    //     }
    // );
    
    let promedioFinal = totalLista / lista.length;
    
    return promedioFinal;
}



