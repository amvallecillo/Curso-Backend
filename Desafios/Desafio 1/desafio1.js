class Usuario{
    constructor(nombre,apellido,libros,mascotas){
        this.nombre=nombre;
        this.apellido=apellido;
        this.libros=libros;
        this.mascotas=mascotas
    }
    getFullName(){
        return `Nombre completo: ${this.nombre} ${this.apellido}`
    }
    addMascota(nuevaMascota){
        this.mascotas.push(nuevaMascota);
    }
    countMascotas(){
        return this.mascotas.length;
    }
    addBook(libro,autor){
        this.libros.push({libro,autor});
    }
    getBookNames(){
        return this.libros.map(({libro})=>libro)
    }
}
let mascotas=['perro','gato','raton']

let libros =[
    {
        libro: 'El señor de los Anillos',
        autor: 'JR Tolkien',
    },
    {
        libro:'Juego de Tronos',
        autor:'George R Martin',
    },
    {
        libro:'Las casualidades no existen',
        autor: 'Borja Vilaseca',
    }
]
let usuario1 = new Usuario('Andres','Vallecillo',libros,mascotas);

usuario1.addBook('Como funciona el Mundo', 'Noam Chomsky')

usuario1.addMascota('serpiente');

console.log(usuario1)//Nos da el usuario

console.log(usuario1.getFullName())//Obtenemos el nombre Completo

console.log(`Cantidad de mascotas: ${usuario1.countMascotas()}`)//Nos da la cantidad de mascotas

console.log(usuario1.getBookNames())// Retorna nombre de los libros
