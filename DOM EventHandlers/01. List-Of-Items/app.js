function addItem() {
    let inputElement = document.getElementById(`newItemText`);

    let liElement = document.createElement(`li`);

    liElement.textContent = inputElement.value;

    inputElement.value  = ``;

    console.log(liElement.textContent);

    let listElemets = document.getElementById(`items`);

    console.log(listElemets);

    listElemets.appendChild(liElement);

}