//array desafio complementario, se muestra las edades de menor a mayor

class Datos {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
        
    }

  
}
alert("Se pedira que ingrese el nombre, la edad y se mostraran los datos ingresados de menor a mayor")
const Edad = [];

Edad.push(new Datos(prompt("Por favor indique su nombre"),(parseInt(prompt("Por favor indique su edad")))));
Edad.push(new Datos(prompt("Por favor indique su nombre"),(parseInt(prompt("Por favor indique su edad")))));
Edad.push(new Datos(prompt("Por favor indique su nombre"),(parseInt(prompt("Por favor indique su edad")))));

Edad.sort(function (a,b) {
    if (a.edad > b.edad) {
     return 1;
    }
    if (a.edad < b.edad) {
    return -1;
    }

});




console.log(Edad);

