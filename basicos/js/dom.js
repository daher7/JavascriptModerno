// Método Anterior
/*
const cliente = {
    nombre: 'David',
    saldo: 2000,
    tipoCliente: function () {
        let tipo;

        if (this.saldo >= 1000) {
            tipo = 'Gold';
        } else {
            tipo = 'Normal';
        }

        return tipo;
    }
}
console.log(cliente.tipoCliente());
*/


//Método Actual para objetos.

function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.tipoCliente = function () {
        let tipo;

        if (this.saldo > 1000) {
            tipo = 'Premium';
        } else if (this.saldo > 500) {
            tipo = 'Gold';
        } else {
            tipo = 'Normal';
        }
        return tipo;
    }
}

const cliente = new Cliente('David', 90000);
console.log(cliente);
console.log(cliente.tipoCliente());

const cliente2 = new Cliente('Jessica', 70000);
console.log(cliente2);
console.log(cliente2.tipoCliente());
console.log('**************************');


//Clases:
class Persona {

    constructor(nombre, apellido, saldo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.saldo = saldo;
    }

    //Métodos:
    imprimirSaldo() {
        return `Hola ${this.nombre}, tu saldo actual es ${this.saldo}`;
    }

    tipoCliente() {
        let tipo;

        if (this.saldo > 50000) {
            tipo = 'Premium';
        } else if (this.saldo > 25000) {
            tipo = 'Gold';
        } else {
            tipo = 'Normal';
        }
        return tipo;
    }

    retirarSaldo(retiro){
        return this.saldo -= retiro;
    }

    static bienvenida(){
        return `Bienvenid@ al cajero`;
    }
}

const david = new Persona ('David', 'Herrera', 90000);
console.log(david);
console.log(david.tipoCliente());
console.log(david.retirarSaldo(2000));
console.log(Persona.bienvenida());