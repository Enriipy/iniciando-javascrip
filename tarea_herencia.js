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

class Elefante extends Animal {
    constructor(patas) {
        // cuando se hace la herencia, es obligatorio esto:
        super(patas);
    }
}

class Perro extends Animal {
    constructor(patas) {
        // cuando se hace la herencia, es obligatorio esto:
        super(patas);
    }
}

class Gaviota extends Animal {
    constructor(patas) {
        // cuando se hace la herencia, es obligatorio esto:
        super(patas);
    }
}

class Paloma extends Animal {
    constructor(patas) {
        // cuando se hace la herencia, es obligatorio esto:
        super(patas);
    }
}


const Pez = new Pez(0);
console.log(Pez.patas);
const Ave = new Ave(2);
console.log(Ave.patas);
const man = new Mamifero(2);
console.log(man.patas);
const Gaviota = new Gaviota(2);
console.log(Gaviota.patas);
const Paloma = new Paloma(2);
console.log(Paloma.patas);