function extractText() {
    let list = document.getElementById(`items`)

    let result = document.getElementById(`result`);
    result.textContent = list.textContent;

};