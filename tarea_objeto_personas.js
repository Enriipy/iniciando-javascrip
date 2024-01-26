function crearPersona(nombre, apodo, cedula, altura) {
    this.nombre = nombre;
    this.apodo = apodo;
    this.cedula = cedula;
    this.altura = altura;
}

let carlos = new crearPersona("Carlos", "Enri", "123456", 1.89)
carlos.cedula = "123456";

class Persona {
    constructor(nombre, apodo, cedula, altura) {
        this.nombre = nombre;
        this.apodo = apodo;
        this.cedula = cedula;
        this.altura = altura;
        this.sexo = "";
        this.amigos = [];
    }
    agregarAmigo(amigo) {
        if(amigo) {
            this.amigos.push(amigo);
        }
    }
}


let sebastian = new Persona("Sebastian", "seba", "500000", 1.81);
sebastian.sexo = "M";
let kevin = new Persona("Kevin", "Xordon", "222333", 1.85);
kevin.sexo = "M";
let luna = new Persona("Luna", "Oyuki", "333222", 1.60);
luna.sexo = "F";
let mari = new Persona("Maria", "Ana", "111444", 1.72);
mari.sexo = "F";
carlos = new Persona("Carlos", "Enri", "123456", 1.89);
carlos.sexo = "M";

carlos.agregarAmigo(luna);
carlos.agregarAmigo(kevin);
carlos.agregarAmigo(sebastian);
carlos.agregarAmigo(mari);

console.log(carlos)