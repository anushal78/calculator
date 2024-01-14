
const body = document.body
const theme = document.getElementById('theme');

// to toggle to dark theme
theme.addEventListener ('click', ()=> {
    body.classList.toggle('dark');
})

//to toggle to light theme
theme1.addEventListener ('click', ()=> {
    body.classList.toggle('light');
})

const inputOne = document.getElementById('input-one');
const inputTwo = document.getElementById('input-two');
const operator = document.getElementById('operator');
const equalbtn = document.getElementById('equal-btn');
const computation = document.getElementById('computation');
const history = document.getElementById('history');


//event listener
equalbtn.addEventListener('click', ()=>{
   
    const inputOneVal = parseInt(inputOne.value);
    const inputTwoVal = parseInt(inputTwo.value);

    let result = 0;
    switch(operator.value) {

        case '+' :
            result = inputOneVal+inputTwoVal;
            break;
        case '-':
            result = inputOneVal-inputTwoVal;
            break;
        case '*':
                result = inputOneVal*inputTwoVal;
                break;
        case '/':
                result = inputOneVal/inputTwoVal;
                break;
        default:
            result = "select valid operotor";
}

    computation.innerText = "Ans:" + result;

    const historyString = inputOne.value + ' '+ operator.value + ' ' + inputTwo.value + '=' + ' ' + result;
    const listItem = document.createElement('li');
    listItem.innerText = historyString;
    listItem.style.listStyleType = 'none';
    history.appendChild(listItem);
    

    inputOne.value = null;
    inputTwo.value = null;
})