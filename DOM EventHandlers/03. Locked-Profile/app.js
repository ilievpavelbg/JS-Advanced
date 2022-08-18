function lockedProfile() {
    let buttonElements = Array.from(document.querySelectorAll(`button`))

       buttonElements.forEach(x => x.addEventListener(`click`, hideUnhide))

    document.getElementsByName
    function hideUnhide(ev) {

        let hidden = ev.target.parentNode.querySelector(`div`)
        let radio = ev.target.parentNode.querySelector(`input[type="radio"]`).checked

        if (!radio) {
            if (ev.target.textContent == `Show more`) {

                hidden.style.display = `block`

                ev.target.textContent = `Hide it`
            } else {

                hidden.style.display = `none`

                ev.target.textContent = `Show more`
            }
        }

    }
}