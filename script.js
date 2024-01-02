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

let choices = document.querySelectorAll("#choice");
let clear = document.querySelector("#clear");
let outputBox = document.querySelector("#outputBox");

clear.addEventListener("click", () => 
{
    outputBox.innerHTML = "";
});

for(let i = 0; i < choices.length; i++)
{
    choices[i].addEventListener("click", function()
    {
        outputBox.innerText += choices[i].innerHTML;
    });
}
