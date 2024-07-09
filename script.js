
let firstNumber =0
let secondNumber = 0
let operator = ''
let result = ''

document.getElementById('result').innerHTML = firstNumber

// calculator operations 
function operation(operator) {
    switch (operator) {
        case '+':
            firstNumber += secondNumber
            break;
        case '-':
            firstNumber -= secondNumber
            break

        case 'x':
            firstNumber *= secondNumber
            break;
        case '/':
            firstNumber /= secondNumber
            break;
        case '%':
            firstNumber %= secondNumber
            break;
        default:
            console.log("no operator");
            break;
    }
}


function display(value) {
    
    if (typeof value !== "string"|| value==='.') {
        result = result + value
        document.getElementById('result').innerHTML = result
    }

    else {
        if (firstNumber === 0) {
            firstNumber = +result
        }
        else {
            secondNumber = +result
            operation(operator)
        }
        result = ''
        operator = value
        secondNumber = 0
        document.getElementById('result').innerHTML = value
    }


}

// to show final result
function getResult() {
    secondNumber = +result
    operation(operator)
    
    console.log(firstNumber,secondNumber);
    document.getElementById('result').innerHTML = firstNumber
    result=''
     operator = ''
    secondNumber = 0
}

// to reset
function reset() {
    firstNumber = 0
    secondNumber = 0
    operator = ''
    result = ''
    document.getElementById('result').innerHTML = firstNumber
}

//to delete previous entered value
function getdelete(){
  if (result==='') {
   operator=''
    document.getElementById('result').innerHTML = firstNumber?firstNumber:0
  
   
  }
  else{
   result=result.slice(0,-1)
   if (result=='') {
    document.getElementById('result').innerHTML = operator?operator:firstNumber
   } else {
    document.getElementById('result').innerHTML = result
   }
   
  }

}

