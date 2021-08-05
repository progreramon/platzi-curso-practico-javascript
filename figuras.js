//Código del cuadrado
//console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm")

function perimetroCuadrado(lado) {
    return lado * 4;
}


//console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm")

//const areaCuadrado = ladoCuadrado * ladoCuadrado;

function areaCuadrado(lado){
    return lado * lado;
}



//console.log("El área del cuadrado es: " + areaCuadrado + "cm2")
console.groupEnd();

//Código del triángulo
//console.group("Triángulos");
//const ladoTriangulo = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;


//console.log("Los lados del triángulo miden: " 
//+ ladoTriangulo 
//+ "cm, " 
//+ ladoTriangulo2 
//+ "cm y " 
//+ baseTriangulo 
//+ "cm"
//
//);

//const alturaTriangulo = 5.5;
//console.log("El altura del triángulo es: " + alturaTriangulo + "cm")

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
//console.log("El perimetro del triángulo es: " + perimetroTriangulo + "cm")

function areaTriangulo(base,altura) {
    return (base * altura) / 2;
} 


//console.log("El área del triángulo: " + areaTriangulo+ "cm2")

//console.groupEnd();

//Código del círculo
//console.group("Círculos");

//Radio
//const radioCirculo = 4;
//console.log("El radio del círculo es " + radioCirculo + "cm")

//Diámetro
function diametroCirculo(radio){
    return radio * 2;
}
//console.log("El diámetro del círculo es " + diametroCirculo + "cm")

//PI
const PI = Math.PI;
//console.log("PI es " + PI + "cm")


//Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
} 
//console.log("La circunferencia del círculo es " + perimetroCirculo + "cm")

//Área
function areaCirculo(radio) {
    return (radio * radio) * PI;
}
//console.log("El área del círculo es " + areaCirculo + "cm2")

//console.groupEnd();


//Aquí interactuamos con HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}


function calcularAreaCuadrada() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}