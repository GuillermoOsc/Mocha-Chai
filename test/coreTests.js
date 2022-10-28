const assert = require('chai').assert;
const core = require('../core');

// Resultados

const holaMundoTexto = core.holaMundo();
const calculoResultado = core.calculo(4,2);
const arrayDeNumerosTest = core.arrayDeNumeros();

describe('Suite principal', ()=>{

    describe('Metodos exclusivos al metodo Hello World', ()=>{
        it('Texto esperado es Hello World', ()=>{
            assert.equal(holaMundoTexto, 'Hola Mundo!');
        });
        it('Validar tipo de dato', ()=>{
            assert.typeOf(holaMundoTexto, 'string', 'El mensaje esperado es un string');
        });
    });
});

