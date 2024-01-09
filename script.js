function add(num1, num2)
{
    const answer = Number(num1) + Number(num2);
    return roundAnswer(answer, 3).toString();
}

function subtract(num1, num2)
{
    const answer = Number(num1) - Number(num2);
    return roundAnswer(answer, 3).toString();
}

function multiply(num1, num2)
{
    const answer = Number(num1) * Number(num2);
    return roundAnswer(answer, 3).toString();
}

function divide(num1, num2)
{
    if(num2 == 0)
    {
        return "Error";
    }
    const answer = Number(num1) / Number(num2);
    return roundAnswer(answer, 3).toString();
}

// Source for code: https://www.altcademy.com/blog/how-to-round-numbers-in-javascript/
function roundAnswer(num, decimalPlaces)
{
    const factor = Math.pow(10, decimalPlaces);
    return Math.round(num * factor) / factor;
}
// Understand above code snippet, also END copied code segment.

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
let decimalChoice = document.querySelector("#decimal");
let isDecimalClicked = false;
let isSecondNum = false;

let clear = document.querySelector("#clear");
let outputBox = "";
let operation;
outputBox = document.querySelector("#outputBox");

let equal = document.querySelector("#equals");

let fullOutput = "";


clear.addEventListener("click", () => 
{
    outputBox.innerHTML = "0";
    isSecondNum = false;
    isDecimalClicked = false;
    fullOutput = "";
});


decimalChoice.addEventListener("click" , () => 
{
    if(!isDecimalClicked)
    {
        outputBox.innerHTML += ".";
        fullOutput += ".";
        isDecimalClicked = true;
    }
});

for(let i = 0; i < operationChoices.length; i++)
{
    operationChoices[i].addEventListener("click", function()
    {
        if(isSolvable())
        {
            console.log(getFirstNum());
            console.log(getSecondNum());
            console.log(getOperator());
            fullOutput = operate(getOperator(), getFirstNum(), getSecondNum());
            outputBox.innerHTML = fullOutput;
        }
        // outputBox.innerText += operationChoices[i].innerHTML;
        isSecondNum = true;
        outputBox.innerHTML = "";
        fullOutput += operationChoices[i].innerHTML;
        operation = operationChoices[i];
        console.log(fullOutput);
    });
}

for(let i = 0; i < numChoices.length; i++)
{
    numChoices[i].addEventListener("click", function()
    {
        if(!isSecondNum)
        {
            isDecimalClicked = false;
            outputBox.innerText += numChoices[i].innerHTML;
            fullOutput += numChoices[i].innerHTML;
            console.log(fullOutput);
        }
        else
        {
            outputBox.innerText += numChoices[i].innerHTML;

            fullOutput += numChoices[i].innerHTML;
            console.log(fullOutput);
        }
    });
}

function getFirstNum()
{
    let firstNum = "";
    for(let i = 0; i < fullOutput.length; i++)
    {
        if(fullOutput[i] == "+" || fullOutput[i] == "*" || fullOutput[i] == "/" || fullOutput[i] == "-")
        {
            return firstNum;
        }
        firstNum += fullOutput[i];
    }
}

function getSecondNum()
{
    let secondNum = "";
    for(let i = fullOutput.length - 1; i >= 0; i--)
    {
        if(fullOutput[i] == "+" || fullOutput[i] == "*" || fullOutput[i] == "/" || fullOutput[i] == "-")
        {
            return secondNum;
        }
        secondNum = fullOutput[i] + secondNum;
    }
}

function getOperator()
{
    let operator = "";
    for(let i = 0; i < fullOutput.length; i++)
    {
        if(fullOutput[i] == "+" || fullOutput[i] == "*" || fullOutput[i] == "/" || fullOutput[i] == "-")
        {
            operator = fullOutput[i];
            return operator;
        }
    }
}

function isSolvable()
{
    if(getFirstNum() != null && getSecondNum() != null && getOperator() != null)
    {
        return true;
    }
    return false;
}

equal.addEventListener("click", () => 
{
    outputBox.innerHTML = operate(getOperator(), getFirstNum(), getSecondNum());
    fullOutput = outputBox.innerHTML;
    isDecimalClicked = false;
    isSecondNum = false;
});