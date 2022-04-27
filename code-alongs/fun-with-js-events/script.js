function clicked () {
  console.log("I've been clicked")
  let paragraph1 = document.getElementById('paragraph1')
  console.log(paragraph1.style.transform.slice(7, -4))
  let angle = parseInt(paragraph1.style.transform.slice(7, -4), 10) || 0
  angle = angle === 360 ? 0 : angle
  console.log(angle)
  if(paragraph1.style.backgroundColor === 'red'){
    paragraph1.style.backgroundColor = 'white'
    paragraph1.style.color = 'black'
    paragraph1.style.transform = `rotate(${angle + 10}deg)`
  }else {
    paragraph1.style.backgroundColor = 'red'
    paragraph1.style.color = 'white'
    paragraph1.style.transform = `rotate(${angle + 10}deg)`
  }
  console.log(paragraph1)
}