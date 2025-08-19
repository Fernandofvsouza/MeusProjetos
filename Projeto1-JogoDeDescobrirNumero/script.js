let numero = 0;
let tentativas = 0;

function numeroAleatorio(){
    numero = parseInt(Math.random() * 100 + 1)
    return numero
}

function meuNumero(){
    let resultado = document.getElementById('resultado')
    let inputField = document.getElementById('number')
    let inputNumero = inputField.value
    if (inputNumero > 100 || inputNumero < 1){
        alert('Aposta Invalida')
        return
    }

    if(inputNumero === ''){
        alert('Numero Invalido')
        return
    }

    if(inputNumero > numeroAleatorio()){
        tentativas++
        alert('O Numero é menor')
    }else if (inputNumero < numeroAleatorio()){
        tentativas++
        alert('O Numero é maior')
    }else{
        resultado.innerHTML = `Parabens voce acertou o numero com ${tentativas} tentativas`

        inputField.value = ''
        numeroAleatorio()
        tentativas = 0;
    }

}


numeroAleatorio()
