
const formu = document.getElementById('formul');

formu.addEventListener('focus',(evento)=>{evento.target.style.background="yellow"},true);
formu.addEventListener('blur',(evento)=>{evento.target.style.background=""},true);




function sumar (){

    const formul = document.getElementById('formul');

    let operandoA = formul['operandoA'];
    let operandoB = formul['operandoB'];

    let resultado= parseInt(operandoA.value) + parseInt(operandoB.value);

    if(isNaN(resultado))
        resultado = 'la operacion requiere valores numéricos';


document.getElementById('resultado').innerHTML = `El Resultado es: ${resultado}`;

}


function limpiar(){

    document.getElementById('formul').reset();
    document.getElementById('resultado').innerHTML = "";

}