fetch('https://baconipsum.com/api/?type=meat-and-filler')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    for(let paragraph of data){
      let target = document.getElementById('target')
      console.log(target)
      target.innerHTML = `${target.innerHTML} <p>${paragraph}</p>`
    }
  });
