function create(words) {

   let content = document.getElementById(`content`)

   for (const word of words) {

      let p = document.createElement(`p`)
      let div = document.createElement(`div`)

      p.textContent = word
      p.style.display = `none`
      div.appendChild(p)
      div.addEventListener(`click`, (e)=>{
         e.target.firstChild.style.display = `block`
      })
      content.appendChild(div)
   }

}
