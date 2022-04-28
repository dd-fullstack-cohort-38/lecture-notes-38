function createH2() {
  const names = ['Bob', 'Jim', 'Matt', 'Mary', 'Suzy', 'Sarah']
  const callback = (previousValue, currentValue)=>{
    console.log(previousValue)
    previousValue = `${previousValue} 
<h2>${currentValue}</h2>`
    return previousValue
  }
  const namesInTags = names.reduce(callback, '')
  document.getElementById('target').innerHTML = namesInTags
}
