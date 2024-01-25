// Crear objetos Yeti
const yeti = {
    pelo: ""
    , nroDeCuernos: null
    , nroDeExtremidades: null
    , tieneMascara: false
    , peso: null
    , altura: null
    , tieneOjos: false
    , daño: null
    , vida: null
    , tiempoDeCrecimiento: ""
    , tieneYetimitas: false
    , nroDeYetimitas: 0
    , multiplicarYetimitas: function() {}
    , ganaNiveles: () => {}
    , moverseAVelocidad: function() {}
    , recibirDaño: () => {}
    , atacarEdificios: function() {}
}

yeti.tieneMascara = true;
yeti.nroDeCuernos = 2;
yeti.nroDeExtremidades = 4;
yeti.peso = 500;

console.log(yeti);