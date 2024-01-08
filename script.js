function add(num1, num2)
{
    return (Number(num1) + Number(num2)).toString();
}

function subtract(num1, num2)
{
    return (Number(num1) - Number(num2)).toString();
}

function multiply(num1, num2)
{
    return (Number(num1) * Number(num2)).toString();
}

function divide(num1, num2)
{
    if(num2 == 0)
    {
        return "Error";
    }
    return (Number(num1) / Number(num2)).toFixed(3).toString();
}

function operate(operator, num1, num2)
{

    if(operator == null && num2 == null)
    {
        return num1.toString();
    }

    if(operator == "+")
    {
        return add(num1, num2);
    }
    else if(operator == "-")
    {
        return subtract(num1, num2);
    }
    else if(operator == "*")
    {
        return multiply(num1, num2);
    }
    else
    {
        return divide(num1, num2);
    }
}

let numChoices = document.querySelectorAll("#choice");
let operationChoices = document.querySelectorAll("#operation");

let clear = document.querySelector("#clear");
let outputBox = "";
let operation;
outputBox = document.querySelector("#outputBox");

let equal = document.querySelector("#equals");

clear.addEventListener("click", () => 
{
    outputBox.innerHTML = "";
});

for(let i = 0; i < operationChoices.length; i++)
{
    operationChoices[i].addEventListener("click", function()
    {
        outputBox.innerText += operationChoices[i].innerHTML;
        operation = operationChoices[i];
    });
}

for(let i = 0; i < numChoices.length; i++)
{
    numChoices[i].addEventListener("click", function()
    {
        outputBox.innerText += numChoices[i].innerHTML;
    });
}

function getFirstNum()
{
    let firstNum = "";
    for(let i = 0; i < outputBox.innerText.length; i++)
    {
        if(outputBox.innerText[i] == "+" || outputBox.innerText[i] == "*" || outputBox.innerText[i] == "/" || outputBox.innerText[i] == "-")
        {
            return firstNum;
        }
        firstNum += outputBox.innerText[i];
    }
}

function getSecondNum()
{
    let secondNum = "";
    for(let i = outputBox.innerText.length - 1; i >= 0; i--)
    {
        if(outputBox.innerText[i] == "+" || outputBox.innerText[i] == "*" || outputBox.innerText[i] == "/" || outputBox.innerText[i] == "-")
        {
            return secondNum;
        }
        secondNum = outputBox.innerText[i] + secondNum;
    }
}

function getOperator()
{
    let operator = "";
    for(let i = 0; i < outputBox.innerText.length; i++)
    {
        if(outputBox.innerText[i] == "+" || outputBox.innerText[i] == "*" || outputBox.innerText[i] == "/" || outputBox.innerText[i] == "-")
        {
            operator = outputBox.innerText[i];
            return operator;
        }
    }
}

equal.addEventListener("click", () => 
{
    console.log(getOperator());
    console.log(getFirstNum());
    console.log(getSecondNum());
    console.log(operate(getOperator(), parseInt(getFirstNum()), parseInt(getSecondNum())));
    outputBox.innerHTML = operate(getOperator(), getFirstNum(), getSecondNum());
});