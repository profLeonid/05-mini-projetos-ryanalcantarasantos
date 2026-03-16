const calcularImc = (altura, peso) =>{

    let valorAltura = Number(altura)
    let valorPeso = Number(peso)
    

    let imc = (Number(valorPeso) / (valorAltura ** 2))

    return imc

}    
    
function statusImc(imc){

    if(imc < 18.5){
        return 'abaixo'
    }else if(imc >= 18.5 && imc <= 24.9){
        return 'normal'
    }else if(imc >= 25.0 && imc <= 29.9){
        return 'acima'
    }else if(imc >= 30.0 && imc <= 34.9){
        return 'obesidade1'
    }else if(imc >= 35.0 && imc <= 39.9){
        return 'obesidade2'
    }else{
        return 'obesidade3'
    }
    
}

function handleClick(){
    const valorAltura = Number(document.getElementById('altura').value)
    const valorPeso = Number(document.getElementById('peso').value)
    const resultado = document.getElementById('resultado')

    const calcImc = calcularImc(valorAltura, valorPeso)
    const stat = statusImc(calcImc)

    resultado.textContent = `${calcImc.toFixed(2)}`
    resultado.classList.remove('abaixo', 'normal', 'acima', 'obesidade1', 'obesidade2', 'obesidade3')
    resultado.classList.add(stat)
}