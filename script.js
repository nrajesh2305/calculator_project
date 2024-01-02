function add(num1, num2)
{
    return num1 + num2;
}

function subtract(num1, num2)
{
    return num1 - num2;
}

function multiply(num1, num2)
{
    return num1 * num2;
}

function divide(num1, num2)
{
    if(num2 == 0)
    {
        return "Error";
    }
    return num1 / num2;
}

// We will get to this after making sure the operations work and pop up on the screen.
// let firstNum = document.querySelector("#first_number");
// let operator = document.querySelector("#operator");
// let secondNum = document.querySelector("#second_number");

function operate(operator, num1, num2)
{
    if(operator == "+")
    {
        add(num1, num2);
    }
    else if(operator == "-")
    {
        subtract(num1, num2);
    }
    else if(operator == "*")
    {
        multiply(num1, num2);
    }
    else
    {
        divide(num1, num2);
    }
}

function negate(num)
{
    return num * -1;
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

equal.addEventListener("click", () => 
{
    outputBox.innerHTML = "";
    outputBox.innerHTML = operate(operation, numChoices[0], numChoices[1]);// something to do with operate here. Figure something out.
});