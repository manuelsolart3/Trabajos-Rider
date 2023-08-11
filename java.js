// ------- EJERCICIO 1 - FORMULARIO RETORNADO CON FUNCIÓN ---------

const botondatos = document.getElementById("Datos");
const formulario = document.getElementById("formula");
const formulario2 = document.getElementById("formula2");



// botondatos.addEventListener("click", function(mes ) {

//     const mes = document.getElementById("mes").value;
//     const año = document.getElementById("año").value;
//     const trimestre = document.getElementById("trimestre").value;
//     const resultado = document.querySelector('input[name="resultado"]:checked').value;
//     const competencia = document.getElementById("comp").value;

   

//   const ingresodatos = `Mes: ${mes}\nAño: ${año}\nTrimestre: ${trimestre}\n resultado: ${resultado}\nCompetencia: ${competencia}`;

//    document.getElementById("textoingresado").innerText= ingresodatos
   
// });



// ------- EJERCICIO 2 - FORMULARIO RETORNADO CON FUNCIÓN, PERO COMO PARÁMETROS, TOMADOS DESDE EL HTML ---------

// function valores(mes, año, trimestre, resultado,comp) {
    
//     let datos = [mes, año, trimestre, resultado,  comp];

//     alert (datos);
//     return datos;
//   }
  



// ------- EJERCICIO 3 - FORMULARIO RETORNADO CON FUNCIÓN, PERO CON ARRAY ---------

function valores(mes, año, trimestre, resultado) {
  let datos = [mes, año, trimestre, resultado];
  return datos;
}

  const mostrarDatos = ()=>  {
  const mes = document.getElementById('mes').value;
  const año = document.getElementById('año').value;
  const trimestre = document.getElementById('trimestre').value;
  const fecha = document.getElementById('fecha').value;
  const resultado = document.querySelector('input[name=resultado]:checked').value;
  const competencia = document.getElementById('comp').value
 
  const datosArray = [mes, año, trimestre,fecha, resultado , competencia];

  const datosParrafo = document.createElement('p');
 console.log(datosParrafo)
  datosParrafo.textContent = `Mes: ${datosArray[0]}, Año: ${datosArray[1]}, Trimestre: ${datosArray[2]},Fecha: ${datosArray[3]} ,Resultado: ${datosArray[4]}Competencia: ${datosArray[5]} `;
  formula.appendChild(datosParrafo);
   
  let divisiones = fecha.slice(5,7)

    
  };

//CALCULAMOS LA SUMA DE LAS 3 NOTAS Y LA MOSTRAOS EN EL INDEX
//HACIENDOLO CON FUNCION FLECHA
//   const calcularNotas= ()=> {
//     const notaUno = parseInt(document.querySelector("#Nota1").value);
//     const notaDos = parseInt(document.querySelector("#Nota2").value);
//     const notaTres = parseInt(document.querySelector("#Nota3").value);
    
//     const arrayNotas = [notaUno, notaDos, notaTres];
//     const miDefinitiva = calcular(arrayNotas);
    
//     const datosNotas = document.createElement("p");
//     datosNotas.textContent = `Nota1: ${arrayNotas[0]}, Nota2: ${arrayNotas[1]}, Nota3: ${arrayNotas[2]} NOTADEFINITIVA:${miDefinitiva} `;
//     formulario2.appendChild(datosNotas);
//     alert(`La calificación final es: ${miDefinitiva}`);
// }

// function calcular(arrayNotas) {
//     let sumaNotas = 0;
//     for (let i = 0; i < arrayNotas.length; i++) {
//         sumaNotas = sumaNotas + arrayNotas[i];
//     }
//     const definitiva = sumaNotas / arrayNotas.length;
//     return definitiva;
// }
   
//EJEMPLO DE CALLBACK
//NO OLVIDES CREAR UN EVENTO O UN ONCLICK PARA QUE FUNCIONE (LLAMA LA FUNCION EN UN SUBMIT)

// const general = ( )=>{
//   alert('MI FUNCION')
//   funcionquellamo(funcionA); //funcion intermediaria llamando la funcion secundaria
    
  
// }
// //funcion intermediaria que sirve para ponerla en la funcion general y llamar desde los parametros a la funcion secundaria
// funcionquellamo = (funciona)=>{
//   funciona();
// }



// const  funcionA= ()=>{
//   alert('Yo estoy llamado por la funcion general')
// }


//     let notaUno;
//     let notaDos ;
//     let notaTres;
//     let arrayNotas = [];


//   //mismo con callbacks
//   const calcularNotas= ()=> {
//     notaUno = parseInt(document.querySelector("#Nota1").value);
//     notaDos = parseInt(document.querySelector("#Nota2").value);
//     notaTres   =  parseInt(document.querySelector("#Nota3").value);
//     arrayNotas = [notaUno, notaDos, notaTres];
    
//     const miDefinitiva = calcular(arrayNotas,calcularPorcentajes);
    
//     const datosNotas = document.createElement("p");
//     datosNotas.textContent = `Nota1: ${arrayNotas[0]}, Nota2: ${arrayNotas[1]}, Nota3: ${arrayNotas[2]} NOTADEFINITIVA:${miDefinitiva} `;
//     formulario2.appendChild(datosNotas);
//     alert(`La calificación final es: ${miDefinitiva}`);
// }

// function calcular(arrayNotas,calcularPorcentajes) {
//   calcularPorcentajes();
//   calcularPorcentajes(arrayNotas)
//     let sumaNotas = 0;
//     for (let i = 0; i < arrayNotas.length; i++) {
//         sumaNotas = sumaNotas + arrayNotas[i];
//     }
//     const definitiva = sumaNotas / arrayNotas.length;
//     return definitiva;
// }



  
// const calcularPorcentajes = (arrayNotas) => {

//   const porcentajeN1 = 0.3;
//   const porcentajeN3 = 0.4;

//   const porcentajes = [
//       arrayNotas[0] * porcentajeN1,
//       arrayNotas[1] * porcentajeN1,
//       arrayNotas[2] * porcentajeN3
//   ];

//   return porcentajes;
// }



let notaUno;
let notaDos;
let notaTres;
let arrayNotas = [];

//mismo con callbacks

const calcularNotas = () => {
    notaUno = parseInt(document.querySelector("#Nota1").value);
    notaDos = parseInt(document.querySelector("#Nota2").value);
    notaTres = parseInt(document.querySelector("#Nota3").value);
    arrayNotas = [notaUno, notaDos, notaTres];

    const miDefinitiva = calcular(arrayNotas, Porcentajes);

    const datosNotas = document.createElement("p");
    datosNotas.textContent = `Nota1: ${arrayNotas[0]}, Nota2: ${arrayNotas[1]}, Nota3: ${arrayNotas[2]} NOTADEFINITIVA:${miDefinitiva} `;
    formulario2.appendChild(datosNotas);
    alert(`La calificación final es: ${miDefinitiva}`);
}

function calcular(arrayNotas, Porcentajes) {
    const porcentajesresultado = Porcentajes(arrayNotas);
    console.log(" porcentajes:", `porcentaje de la primera nota:${porcentajesresultado[0]} , porcentaje de la segunda nota:${porcentajesresultado[1]} , porcentaje de la tercera nota:${porcentajesresultado[2]}`); 
    let sumaNotas = 0;
    for (let i = 0; i < arrayNotas.length; i++) {
        sumaNotas = sumaNotas + arrayNotas[i];
    }
    const definitiva = sumaNotas / arrayNotas.length;
    return definitiva;
}



//RETORNA EL PORCENTAJE DE CADA NOTA TOMANDO COMO PARAMETRO EL ARRAY Y LO RECORRE PARA SACAR EL PORCENTAJE
const Porcentajes = (arrayNotas) => {
    const porcentajeN1 = 0.3;
    const porcentajeN3 = 0.4;

    const porcentajes = [
        arrayNotas[0] * porcentajeN1,
        arrayNotas[1] * porcentajeN1,
        arrayNotas[2] * porcentajeN3
    ];

    return porcentajes;
}































  

 
//   function obtenerNombreMes(divisiones) {
//     let nombreMes = "";
//     switch (numero) {
//       case 1:
//         nombreMes = "Enero";
//         break;
//       case 2:
//         nombreMes = "Febrero";
//         break;
//       case 3:
//         nombreMes = "Marzo";
//         break;
//       case 4:
//         nombreMes = "Abril";
//         break;
//       case 5:
//         nombreMes = "Mayo";
//         break;
//       case 6:
//         nombreMes = "Junio";
//         break;
//       case 7:
//         nombreMes = "Julio";
//         break;
//       case 8:
//         nombreMes = "Agosto";
//         break;
//       case 9:
//         nombreMes = "Septiembre";
//         break;
//       case 10:
//         nombreMes = "Octubre";
//         break;
//       case 11:
//         nombreMes = "Noviembre";
//         break;
//       case 12:
//         nombreMes = "Diciembre";
//         break;
//       default:
//         nombreMes = "Mes inválido";
//     }
//     return nombreMes;
//   }
//   // Obtener el nombre del mes utilizando la función obtenerNombreMes()
//   const nombreMes = obtenerNombreMes(divisiones);

//   // Crear un div contenedor para mostrar los datos
//   const datosContenedor = document.createElement('div');

//   // Crear un párrafo para mostrar los datos
//   const datosParrafo1 = document.createElement('p');

//   // Asignar el contenido del párrafo con los datos ingresados
//   datosParrafo1.textContent = `Fecha: ${fecha}, Mes: ${nombreMes}`;
  
// }
  // Lo que hicimos, se deben almacenar en un arreglo, ese arreglo tiene que retornarse algun lado, y luego de eso, lso datos tienen que imprimirse dentro de un párrafo



  //Crear funcion para retornar valor de las 3 notas

 


