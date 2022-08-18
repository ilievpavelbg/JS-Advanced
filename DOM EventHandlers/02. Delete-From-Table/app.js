function deleteByEmail() {
    let mailElements = document.querySelectorAll(`td:nth-child(2)`);
    
    let inputElement = document.querySelector(`input[name = "email"]`);

    let array = Array.from(mailElements);
    let targetElement = array.find(x => x.textContent == inputElement.value);

    console.log(array);

    // let resultElement = document.getElementById(`result`)

    // if (targetElement) {
    //     targetElement.parentNode.remove();

    //     resultElement.textContent = `Deleted.`
    // }else{
    //     resultElement.textContent = `Not found.`
    // }
}