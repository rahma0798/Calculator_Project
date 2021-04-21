const screens = document.querySelector('.screen')

const updateScreen = (number) =>{
    screens.value = number;
}

let prev = '';
let opr = '';
let curNumb = '0';

const inputNumber = (number) =>{
    if (curNumb === '0'){
        curNumb = number;
    } else{
    curNumb += number;
    }
}

const numbers = document.querySelectorAll(".numb");

numbers.forEach((number)=>{
    number.addEventListener('click',(e)=>{
        inputNumber(e.target.value);
        updateScreen(curNumb);
    })
})

const inputOperator = (operator) => {
    if (opr===''){
        prev = curNumb;
    }
    opr = operator;
    curNumb = '0';
}

const operators = document.querySelectorAll('.opr')

operators.forEach((operator) => {
    operator.addEventListener('click', (e)=>{
        inputOperator(e.target.value);
    })
})

const calculate = () =>{
    let result ='';
    switch (opr){
        case "+":
            result = parseFloat(prev) + parseFloat(curNumb)
            break
        case "-":
            result = parseFloat(prev) - parseFloat(curNumb)
            break
        case "*":
            result = parseFloat(prev) * parseFloat(curNumb)
            break
        case "/":
            result = parseFloat(prev) / parseFloat(curNumb)
            break
        default:
            return
    }
    curNumb = result;
    opr = '';
}

const equalSign = document.querySelector('.equal')

equalSign.addEventListener('click', ()=>{
    calculate();
    updateScreen(curNumb);
})

const clearAll = () =>{
    prev = '';
    opr ='';
    curNumb= '0';
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', ()=>{
    clearAll();
    updateScreen(curNumb);
})

const inputDecimal = (dot) =>{
    if ( curNumb.includes('.')){
        return
    }
    curNumb += dot
}

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (e)=>{
    inputDecimal(e.target.value);
    updateScreen(curNumb);
})