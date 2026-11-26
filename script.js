
function runBigO() {
    const numbers = [12, 25, 37, 41, 53, 68, 74, 89, 92, 105];
    const inputVal = document.getElementById("bigOInput").value;
    const output = document.getElementById("bigOOutput");

    if (inputVal === "") {
        output.innerHTML = "Please enter a number first.";
        output.style.color = "#837F78";
        return;
    }

    const target = Number(inputVal);
    let found = false;
    let operations = 0;

    for (let i = 0; i < numbers.length; i++) {
        operations++;
        if (numbers[i] === target) {
            found = true;
            break;
        }
    }

    if (found) {
        output.innerHTML = `Number ${target} was FOUND! (Operations performed: ${operations})`;
        output.style.color = "#ffffff";
    } else {
        output.innerHTML = `Number ${target} was NOT FOUND. (Operations performed: ${operations})`;
        output.style.color = "#CE1A1E";
    }
}

function runBigOmega() {
    const numbers = [15, 22, 34, 48, 51, 63, 77, 80, 95, 110];
    const target = numbers[0];
    let operations = 0;

    for (let i = 0; i < numbers.length; i++) {
        operations++;
        if (numbers[i] === target) {
            break;
        }
    }

    const output = document.getElementById("bigOmegaOutput");
    output.innerHTML = `Number ${target} found immediately at index 0! (Operations performed: ${operations})`;
    output.style.color = "#ffffff";
}

function runBigTheta() {
    const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
    let sum = 0;
    let operations = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
        operations++;
    }

    const output = document.getElementById("bigThetaOutput");
    output.innerHTML = `Total Sum: ${sum} | Total operations performed: ${operations}`;
    output.style.color = "#ffffff";
}