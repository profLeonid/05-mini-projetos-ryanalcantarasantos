'use strict'

function capturarNumeros(){
    const precoOriginal = document.getElementById('precoOriginal')
    const desconto = document.getElementById('desconto')

    calculoSaida(precoOriginal, desconto)

    return precoOriginal, desconto
}

function calculoSaida(precoOriginal, desconto){

    const calcularFinal = ((100-desconto.value)/100)*precoOriginal.value

    economiaDesconto(precoOriginal, desconto)

    return calcularFinal
}

function economiaDesconto(precoOriginal, desconto){

    const economiaFinal = ((desconto.value / 100) * precoOriginal)

    resultadoFinal(precoOriginal, desconto)

    return economiaFinal
}