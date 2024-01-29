class Animal {
    #patas = 4;
    constructor(patas) {
        this.#patas = patas;
    }
    get patas() {
        return this.#patas;
    }
}

class Mamifero extends Animal {
    constructor(patas) {
        // cuando se hace la herencia, es obligatorio esto:
        super(patas);
    }
}

class Pez extends Animal {
    constructor(patas) {
        // cuando se hace la herencia, es obligatorio esto:
        super(patas);
    }
}

class Reptil extends Animal {
    constructor(patas) {
        // cuando se hace la herencia, es obligatorio esto:
        super(patas);
    }
}

class Ave extends Animal {
    constructor(patas) {
        // cuando se hace la herencia, es obligatorio esto:
        super(patas);
    }
}

// Creación de instancias
const Pez = new Pez(0);
console.log(Pez.patas);
const mam = new Mamifero(2);
console.log(man.patas);