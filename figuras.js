// console.group('Cuadrado');

// let ladoCuadrado = 5;

// let perimetroCuadrado = ladoCuadrado * 4;

// let areaCuadrado = ladoCuadrado ** 2;

// console.log(`Los lados del cuadrado miden ${ladoCuadrado}cm`);
// console.log(`El perímetro del cuadrado es ${perimetroCuadrado}cm`);
// console.log(`El área del cuadrado es ${areaCuadrado}cm²`);

// console.groupEnd();

// console.group('Triangulo');

// let ladoTriangulo1 = 6;

// let ladoTriangulo2 = 6;

// let baseTriangulo = 4;

// console.log(`Los lados del triángulo mide: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm, ${baseTriangulo}cm`);

// let alturaTriangulo = 5.5;

// console.log(`La altura del triángulo es de ${alturaTriangulo}cm`);

// let perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;

// console.log(`El perimetro del triángulo es ${perimetroTriangulo}cm`);

// let areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

// console.log(`El area del triángulo es de ${areaTriangulo}cm²`);

// console.groupEnd();

// Círculos 

// console.group('Círculos');

// Radio
// let radioCirculo = 4;
// console.log(`El radio del círculo es de ${radioCirculo}cm`);

// Diametro
// let diametroCirculo = radioCirculo * 2;
// console.log(`El diametro del círculo es de ${diametroCirculo}cm`);

// PI
// let PI = Math.PI;
// console.log(`PI es igual a ${PI}`);

// Circunferencia
// let circunferenciaCirculo = diametroCirculo * PI;
// console.log(`La circunferencia del círculo es de ${circunferenciaCirculo}cm`);

// Área
// let areaCirculo = (radioCirculo ** 2) * PI;
// console.log(`El área del círculo es de ${areaCirculo}cm²`);

// CTRL + K + CTRL + C || CTRL + K + CTRL + U

console.group('Cuadrados');

// function perimetroCuadrado (lado) {
//     return lado * 4;
// }

let perimetroCuadrado = lado => lado * 4;

console.log(perimetroCuadrado(5));

// function areaCuadrado (lado) {
//     return lado ** 2
// }

let areaCuadrado = lado => lado ** 2;

console.log(areaCuadrado(5));

console.groupEnd();

console.group('Triangulos');

// function perimetroTriangulo (lado1, lado2, base) {
//     return lado1 + lado2 + base;
// }

let perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;

console.log(perimetroTriangulo(6, 6, 4))

// function areaTriangulo (base, altura) {
//     return (base * altura) / 2;
// }

let areaTriangulo = (base, altura) => (base * altura) / 2;

console.log(areaTriangulo(4, 5.5));

console.groupEnd();

console.group('Circulos');

// function diametroCirculo (radio) {
//     return radio * 2;
// }

let diametroCirculo = radio => radio * 2;

console.log(diametroCirculo(4));

//PI
let PI = Math.PI;
console.log(`PI es igual a ${PI}`);

// function circunferenciaCirculo (radio) {
//     return diametroCirculo(radio) * PI
// }

let circunferenciaCirculo = radio => diametroCirculo(radio) * PI;

console.log(circunferenciaCirculo(4));

// function areaCirculo (radio) {
//     return (radio ** 2) * PI
// }

let areaCirculo = radio => (radio ** 2) * PI

console.log(areaCirculo(4));

console.groupEnd();

let calcularPerimetroCuadrado = () => {
    const input = document.getElementById('InputCuadrado');
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

let calcularAreaCuadrado = () => {
    const input = document.getElementById('InputCuadrado');
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);
}

let calcularPerimetroTriangulo = () => {
    const input1 = document.getElementById('LadoTriangulo');
    const value1 = input1.value;
    const input2 = document.getElementById('LadoTriangulo2');
    const value2 = input2.value;
    const inputb = document.getElementById('BaseTriangulo');
    const base = inputb.value;

    const perimetro = perimetroTriangulo(Number(value1), Number(value2), Number(base));
    alert(perimetro);
}

let calcularAreaTriangulo = () => {
    const inputA = document.getElementById('AlturaTriangulo');
    const altura = inputA.value;
    const inputb = document.getElementById('BaseTriangulo');
    const base = inputb.value;

    const area = areaTriangulo(base, altura);
    alert(area);
}

let calcularDiametroCirculo = () => {
    const input = document.getElementById('radioCirculo');
    const value = input.value;

    const diametro = diametroCirculo(value);
    alert(diametro);
}

let calcularCircunferenciaCirculo = () => {
    const input = document.getElementById('radioCirculo');
    const value = input.value;

    const circunferencia = circunferenciaCirculo(value);
    alert(circunferencia);
}

let calcularAreaCirculo = () => {
    const input = document.getElementById('radioCirculo');
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}