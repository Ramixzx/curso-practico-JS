console.group('Cuadrado');

let ladoCuadrado = 5;

let perimetroCuadrado = ladoCuadrado * 4;

let areaCuadrado = ladoCuadrado ** 2;

console.log(`Los lados del cuadrado miden ${ladoCuadrado}cm`);
console.log(`El perímetro del cuadrado es ${perimetroCuadrado}cm`);
console.log(`El área del cuadrado es ${areaCuadrado}cm²`);

console.groupEnd();

console.group('Triangulo');

let ladoTriangulo1 = 6;

let ladoTriangulo2 = 6;

let baseTriangulo = 4;

console.log(`Los lados del triángulo mide: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm, ${baseTriangulo}cm`);

let alturaTriangulo = 5.5;

console.log(`La altura del triángulo es de ${alturaTriangulo}cm`);

let perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;

console.log(`El perimetro del triángulo es ${perimetroTriangulo}cm`);

let areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

console.log(`El area del triángulo es de ${areaTriangulo}cm²`);

console.groupEnd();

//Círculos 

console.group('Círculos');

//Radio
let radioCirculo = 4;
console.log(`El radio del círculo es de ${radioCirculo}cm`);

//Diametro
let diametroCirculo = radioCirculo * 2;
console.log(`El diametro del círculo es de ${diametroCirculo}cm`);

//PI
let PI = Math.PI;
console.log(`PI es igual a ${PI}`);

//Circunferencia
let circunferenciaCirculo = diametroCirculo * PI;
console.log(`La circunferencia del círculo es de ${circunferenciaCirculo}cm`);

//Área
let areaCirculo = (radioCirculo ** 2) * PI;
console.log(`El área del círculo es de ${areaCirculo}cm²`);
