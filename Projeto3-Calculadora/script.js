//Variaveis globais
let display = document.getElementById('display')
let currentInput = ''



function addNumber(value){
    currentInput += value
    display.textContent = currentInput
}

function addOperator(operator){
    if(currentInput === '' && operator !== '-' && operator!== '+' && operator!== '.' ) return


    currentInput += operator
    display.textContent = currentInput
}

function calc(){
    try{
        let result = eval(currentInput)
        if(!Number.isInteger(result)){
            result = result.toFixed(2)
        }
        currentInput = result
        display.textContent = currentInput
    }catch(error){
        display.textContent = 'Error'
        currentInput = ''
    }
}

function clearDisplay(){
    currentInput = ''
    display.textContent = currentInput
}

function back(){
    currentInput = currentInput.slice(0, -1); 
    display.textContent = currentInput;
    
}

