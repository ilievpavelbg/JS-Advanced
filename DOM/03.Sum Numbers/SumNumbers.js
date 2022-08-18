function calc() {
    let first = document.getElementById(`num1`);
    let second = document.getElementById(`num2`);

    let firstNumber = Number(first.value);
    let secondNumber = Number(second.value);

    let sum = firstNumber + secondNumber;

    let result = document.getElementById(`sum`);

    result.value = sum;

}


