function sumTable() {

    let elements = document.querySelectorAll(`tr td`);

    let numberSum = 0;

    for (index = 1; index < elements.length - 1; index+=2) {
        
        numberSum += Number(elements[index].textContent)
        
    }

    let sum = document.getElementById(`sum`)

    sum.textContent = numberSum;

}