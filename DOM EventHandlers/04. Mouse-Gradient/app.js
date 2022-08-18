function attachGradientEvents() {
    let gradientElement = document.getElementById(`gradient`);
    let resultElement = document.getElementById(`result`);

    gradientElement.addEventListener(`mousemove`, (e)=>{

        let persentage = Math.floor((e.offsetX / e.target.offsetWidth) * 100);
        persentage = persentage.toString();
        resultElement.textContent = `${persentage}%`;

console.log(typeof persentage);
    })
}