
interface AlumnoS { 
  nombre: string; 
  edad: number; 
  calificaciones: number[]; 
} 
 
const alumnos: AlumnoS[] = [ 
  { 
    nombre: 'Sofia', 
    edad: 18, 
    calificaciones: [7, 4, 10], 
  }, 
  { 
    nombre: 'Lenny', 
    edad: 22, 
    calificaciones: [9, 5, 1], 
  }, 
  { 
    nombre: 'Pablo', 
    edad: 28, 
    calificaciones: [5, 1, 10 ], 
  }, 
]; 
 
function calcularPromedio(calificaciones: number[]): number { 
  if (calificaciones.length === 0) return 0; 
 
  const suma = calificaciones.reduce((total, calificacion) => total + calificacion, 0); 
  return suma / calificaciones.length; 
} 
 
function promedioGeneral(alumnos: AlumnoS[]): number { 
  const totalCalificaciones = alumnos.reduce((total, alumno) => { 
    return total + calcularPromedio(alumno.calificaciones); 
  }, 0); 
 
  return totalCalificaciones / alumnos.length; 
} 
 
export const ArregloObjetos = () => { 
  const promedio = promedioGeneral(alumnos); 
 
  const listaAlumnos = alumnos.map((alumno, index) => ( 
    <li key={index}> 
      <p>Nombre: {alumno.nombre}</p> 
      <p>Edad: {alumno.edad}</p> 
      <p>Calificaciones: {alumno.calificaciones.join(', ')}</p> 
      <p>Promedio: {calcularPromedio(alumno.calificaciones).toFixed(2)}</p> 
    </li> 
  )); 
 
  return ( 
    <div> 
      <h3>Crear un arreglo con objetos "alumno" y sus propiedades son nombre, edad y calificaciones. Luego, escribir una función que calcule el promedio de las calificaciones. </h3> 
      <ul> 
        {listaAlumnos} 
      </ul> 
      <p>Promedio general: {promedio.toFixed(2)}</p> 
    </div> 
  ); 
};