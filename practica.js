// PRIMERA FUNCION
// function sumar(a, b) {
//     const resultado = a + b;
//     console.log("El resultado de la suma es: " + resultado);
// }

//   sumar(5,10);

//  SEGUNDA FUNCION
//     function checkParImpar(number) {
//     if (number % 2 === 0) {
//         console.log("El número " + number + " es par.");
//     } else {
//         console.log("El número " + number + " es impar.");
//     }
// }

// checkParImpar(10); 
// checkParImpar(50); 
// TERCERA FUNCIONn
// function mayorDeTres(num1, num2, num3) {
//     let mayor = num1;

//     if (num2 > mayor) {
//         mayor = num2;
//     }

//     if (num3 > mayor) {
//         mayor = num3;
//     }

//     console.log("El mayor de los tres números es: " + mayor);
// }

// // Ejemplo de uso:
// mayorDeTres(40, 10, 35);   
// mayorDeTres(10, 2, 16);     
// mayorDeTres(7, 7, 7);   
// CUARTA FUNCION
// function calcularPromedio(examen1, examen2, examen3, examen4) {
//     const suma = examen1 + examen2 + examen3 + examen4;
//     const promedio = suma / 4;
//     if (promedio >= 11){
        
//         console.log("El alumno esta aprobado con una nota promedio de " + promedio);
    
//     }
//     else{
//         console.log("El alumno no esta aprobado con una nota promedio de " + promedio);
//     }
// }
   

// // Ejemplo de uso:
// calcularPromedio(20, 10, 13, 11);  
// calcularPromedio(11, 11, 5, 9); 
// QUINTA FUNCION
// function calcularAreaRectangulo(base, altura) {
//     const area = base * altura;
//     console.log("El área del rectángulo es: " + area);
// }
// calcularAreaRectangulo(10, 5);
//SEXTA FUNCION
// function calcularAreaTriangulo(base, altura) {
//     const area = (base * altura) / 2;
//     console.log("El área del triángulo es: " + area);
// }

// // Ejemplo de uso:
// calcularAreaTriangulo(10, 5);
// SEPTIMA FUNCION
// function calcularAreaCircunferencia(radio) {
//     const pi = 3.14;
//     const area = pi * Math.pow(radio, 2);
//     console.log("El área de la circunferencia es: " + area);
// }

// // Ejemplo de uso:
// calcularAreaCircunferencia(10);
// OCTAVA FUNCION 
// function verificarNumero(numero) {
//     if (numero > 0) {
//         console.log("El número es positivo.");
//     } else if (numero < 0) {
//         console.log("El número es negativo.");
//     } else {
//         console.log("El número es cero.");
//     }
// }


// verificarNumero(30);  
// verificarNumero(-2); 
// verificarNumero(0); 
// NOVENA FUNCION
// function mostrarMenorNumero() {
    
//     const numero1 = parseFloat(prompt("Ingresa el primer número:"));
//     const numero2 = parseFloat(prompt("Ingresa el segundo número:"));

   
//     if (numero1 < numero2) {
//         console.log("El número menor es: " + numero1);
//     } else if (numero2 < numero1) {
//         console.log("El número menor es: " + numero2);
//     } else {
//         console.log("Los números son iguales, no se considerará este caso.");
//     }
// }

// mostrarMenorNumero();
// DECIMA FUNCION
// function verificarDivisibilidadPorDos() {
    
//     let numero = parseFloat(prompt("Ingresa un número:"));

   
//     if (numero % 2 === 0) {
//         console.log(numero + " es divisible entre 2.");
//     } else {
//         console.log(numero + " no es divisible entre 2.");
//     }
// }

// verificarDivisibilidadPorDos();
// ONCEAVA FUNCION
// function verificarDia(dia) {
//     dia = dia.toLowerCase();
//     if (dia === "sábado" || dia === "domingo") {
//         console.log(dia.charAt(0).toUpperCase() + dia.slice(1) + " es un día de fin de semana.");
//     } else if (dia === "lunes" || dia === "martes" || dia === "miércoles" || dia === "jueves") {
//         console.log(dia.charAt(0).toUpperCase() + dia.slice(1) + " es un día laborable.");
//     }else if
//         (dia === "viernes"){
//             console.log(dia.charAt(0).toUpperCase() + dia.slice(1) + " es un día laborable, pero ya falta poco aguanta un poco mas")
//         }
//      else {
//         console.log("Por favor, ingresa un día válido de la semana.");
//     }
// }


// let diaIngresado = prompt("Ingresa un día de la semana:");


// verificarDia(diaIngresado);
// DOCEAVA FUNCION
// function verificarDivisibilidadPor3y5(numero) {
    
//     if (numero % 3 === 0 && numero % 5 === 0) {
//         console.log("El número " + numero + " es divisible por 3 y por 5.");
//     } else {
//         console.log("El número " + numero + " no es divisible por 3 y por 5.");
//     }
// }


// let numeroIngresado = parseFloat(prompt("Ingresa un número:"));
// verificarDivisibilidadPor3y5(numeroIngresado);
// TRECEAVA FUNCION
// function verificarMultiplo(numero) {

//     if (numero % 2 === 0 && numero % 3 === 0) {
//         console.log("El número " + numero + " es múltiplo de 2 y de 3.");
//     } else if (numero % 2 === 0) {
//         console.log("El número " + numero + " es múltiplo de 2.");
//     } else if (numero % 3 === 0) {
//         console.log("El número " + numero + " es múltiplo de 3.");
//     } else {
//         console.log("El número " + numero + " no es múltiplo ni de 2 ni de 3.");
//     }
// }

// let numeroIngresado = parseFloat(prompt("Ingresa un número:"));
// verificarMultiplo(numeroIngresado);
// CATORCEAVA FUNCION
// function calcularEdad(añoNacimiento) {
//     let añoActual = new Date().getFullYear();
//     let edad = añoActual - añoNacimiento;
//     console.log("La edad de la persona nacida en " + añoNacimiento + " es " + edad + " años.");
// }

// let añoNacimientoIngresado = parseInt(prompt("Ingresa el año en que naciste:"));
// calcularEdad(añoNacimientoIngresado);
// QUINCEAVA FUNCION
// function calcularBono(antiguedad) {
//     let bono;
//     if (antiguedad >= 1 && antiguedad <= 5) {
//         bono = antiguedad * 100;
//     } else if (antiguedad > 5) {
//         bono = 1000;
//     } else {
//         console.log("La antigüedad debe ser al menos 1 año.");
//         return;
//     }
//     console.log("El bono para " + antiguedad + " años de antigüedad es: $" + bono);
// }

// let antiguedadIngresada = parseInt(prompt("Ingresa los años de antigüedad:"));
// calcularBono(antiguedadIngresada);
// DIECISEISAVA FUNCION
function puedeVotar(anoNacimiento) {
    const anoElecciones = 2026;
    
    const anoActual = new Date().getFullYear();

    const edadEnElecciones = anoElecciones - anoNacimiento;
  
    if (edadEnElecciones >= 18) {
        console.log("Cumpliras tu deber civico en el año " + anoElecciones + ".");
    } else {
        console.log("No cumpliras el deber civico en el año " + anoElecciones + "  sigue intentando.");
    }
}
let anoNacimientoIngresado = parseInt(prompt("Hola ingresa tu año de nacimiento:"));

puedeVotar(anoNacimientoIngresado);