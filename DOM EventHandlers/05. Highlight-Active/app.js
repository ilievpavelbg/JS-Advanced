function focused() {
    let divElements = document.querySelectorAll(`div div`)
    let inputElement = document.querySelectorAll(`[type="text"]`)



    for (const inpt of inputElement) {
        inpt.addEventListener(`click`, (e) => {

            for (const div of divElements) {
                div.classList.remove("focused")
            }

            e.currentTarget.parentElement.className = `focused`;
        })
    }

    
}