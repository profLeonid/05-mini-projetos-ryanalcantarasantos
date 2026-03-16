'use strict'

const calcularMedia = (nota1, nota2, nota3) =>{

    let media = (Number(nota1) + Number(nota2) + Number(nota3)) / 3

    return media
}

function definirStatus(media){

    if(media >= 7){
        return 'aprovado'
    }else if(media >= 5){
        return 'recuperacao'
    }else{
        return 'reprovado'
    }
}

function handleClick(){
    const nota1 = Number(document.getElementById('nota1').value)
    const nota2 = Number(document.getElementById('nota2').value)
    const nota3 = Number(document.getElementById('nota3').value)
    const resultado = document.getElementById('resultado')

    const calcMedia = calcularMedia(nota1, nota2, nota3)
    const cor = definirStatus(calcMedia)

    resultado.textContent = `${calcMedia.toFixed(2)}`
    resultado.classList.remove('aprovado', 'recuperacao', 'reprovado')
    resultado.classList.add(cor)
}