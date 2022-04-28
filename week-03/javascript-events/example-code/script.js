function handleClick() {
  const element = document.getElementById('target')
  if(element.innerHTML === "Click Me") {
    element.innerHTML = "I have been clicked"
  }
  else {
    element.innerHTML = "Click Me"
  }

}