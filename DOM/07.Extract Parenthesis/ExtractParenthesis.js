function extract(content) {

    let text = document.getElementById(`content`);

    let regex = '\(([^()]+)\)';
    let regex1 = `\([^()]+\)`

    let repelacedText = text.textContent;

    let find = repelacedText.match(regex);


    console.log(find[0]);
    
}