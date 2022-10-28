// Se crean los siguientes metodos y luego serán testeados desde el archivo coreTest.js


module.exports = {

    holaMundo: ()=> {
        return 'Hola Mundo!';
    },

    calculo: (number1, number2)=> {
        return number1 - number2; 
    },

    arrayDeNumeros: ()=> {
        return [0,1,2,3,4,5];
    }

};