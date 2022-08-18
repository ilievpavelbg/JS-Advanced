function addItem() {
   let inputElement = document.getElementById(`newItemText`);
   let ulElements = document.getElementById(`items`);

   let newLiElement = document.createElement(`li`)
   let ancorElement = document.createElement(`a`);

   newLiElement.textContent = inputElement.value;

   inputElement.value = ``

   ancorElement.href = "#";
   ancorElement.textContent = "[Delete]"
   ancorElement.addEventListener(`click`, (e) => {
    e.currentTarget.parentElement.remove();
   })

   newLiElement.appendChild(ancorElement);

   ulElements.appendChild(newLiElement);

}