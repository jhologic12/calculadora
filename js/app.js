

function sumar (){

    const formul = document.getElementById('formul');

    let operandoA = formul['operandoA'];
    let operandoB = formul['operandoB'];

    let resultado= parseInt(operandoA.value) + parseInt(operandoB.value);

    if(isNaN(resultado))
        resultado = 'la operacion requiere valores numéricos';


document.getElementById('resultado').innerHTML = `El Resultado es: ${resultado}`;
}