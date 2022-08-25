// * functions
function mostrarLista(lista) {
  if (lista.length > 0) {
    console.log(lista);
  } else {
    console.log("lista vacía");
  }
}

mostrarLista([1, 2, 3]);
mostrarLista([]);

(function (lista) {
  if (lista.length > 0) {
    console.log(lista);
  } else {
    console.log("lista vacía");
  }
})([4, 5, 6]);

// * ejercicios

function crearMultiplicador(num1) {
  const num2fuc = (num2) => {
    return num1 * num2;
  };
  return num2fuc;
}
let dup = crearMultiplicador(2);
let trip = crearMultiplicador(3);
console.log(trip(5));

// * Clases

class Persona {
  // global

  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  saludo() {
    console.log(`hola, soy ${this.nombre}`);
  }
  // color() {
  //   return this.nombre;
  // }
}

let hola = new Persona('lucia',20)
console.log(hola.saludo())


// let hola = console.log(Persona.color());
