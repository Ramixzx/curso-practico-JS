// Durante este taller aprendimos a calcular el área y perímetro de un triángulo conociendo la longitud de sus 3 lados y también su altura.

// En este ejercicio debes crear una función para calcular la altura de un triángulo isósceles.

// La función debe recibir, como parámetros, la longitud de los 3 lados del triángulo.  ****
// La función debe validar que la longitud de los 3 lados del triángulo corresponden a un triángulo isósceles.
// La función debe retornar la altura del triángulo.
// Pista: la función Math.sqrt de JavaScript puede ayudarte a calcular raíces cuadradas.


function alturaTriangulo (lado1, lado2, base) { 
    if (lado1 == lado2 && lado1 !== base) {
        console.log(`La altura de tu triangulo es de ${Math.sqrt((lado1 ** 2) - ((base ** 2)/ 4))}cm`);
    }
    else {
        console.log('Puede que ese no sea un triangulo isosceles o que no estes respetando el orden de los parametros. Primero pon la medida del lado 1, luego la del lado 2 y por ultimo la medida de la base');
    }
}
console.log(alturaTriangulo(30, 30, 50));

//Arrow-Function

let alturaTriangulo = (lado1, lado2, base) => {
    if (lado1 == lado2 && lado1 !== base) {
        console.log(`La altura de tu triangulo es de ${Math.sqrt((lado1 ** 2) - ((base ** 2)/ 4))}cm`);
    }
    else {
        console.log('Puede que ese no sea un triangulo isosceles o que no estes respetando el orden de los parametros. Primero pon la medida del lado 1, luego la del lado 2 y por ultimo la medida de la base');
    }
}