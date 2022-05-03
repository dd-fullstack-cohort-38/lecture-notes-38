function changeTextColor () {
  let paragraph1 = document.getElementById('paragraph1')
  console.log(paragraph1.style.color)
  let r = Math.floor(Math.random() * 255)
  let g = Math.floor(Math.random() * 255)
  let b = Math.floor(Math.random() * 255)
  let a = Math.random()
  paragraph1.style.color = `rgba(${r}, ${g}, ${b}, ${a})`
  console.log(paragraph1.style.color)
}

function changeFont () {
  let paragraph1 = document.getElementById('paragraph1')
  console.log(paragraph1.style.fontFamily)
  paragraph1.style.fontFamily = 'cursive'
}

highlight = () => {
  let paragraph1 = document.getElementById('paragraph1')
  let highlightButton = document.getElementById('highlightButton')
  if (paragraph1.style.backgroundColor === 'yellow') {
    paragraph1.style.backgroundColor = ''
    highlightButton.innerText = 'highlight'
  } else {
    paragraph1.style.backgroundColor = 'yellow'
    highlightButton.innerText = 'un-highlight'
  }
}

function findAndReplace () {
  console.log('hello world')
  let text = document.getElementById('find-replace')
  let searchTerm = document.getElementById('text-find').value
  let replaceTerm = document.getElementById('text-replace').value
  const headache = new RegExp(searchTerm, 'gi')
  document.getElementById('find-replace').innerText = text.innerText.replaceAll(headache, replaceTerm)
}

function highlightFind () {
  let pTag = document.getElementById('find-replace')
  let searchTerm = document.getElementById('text-find').value
  let arrayOfWords = pTag.innerText.split(' ')
  let newArrayOfWords = arrayOfWords.map(
    word => {
      word.toLowerCase() === searchTerm.toLowerCase() ? `<span class="highlight">${searchTerm}</span>` : word
    })
  document.getElementById('find-replace').innerText = ''
  document.getElementById('find-replace').innerHTML = newArrayOfWords.join(' ')
}

function shuffleWords () {
  let pTag = document.getElementById('find-replace')
  let arrayOfWords = pTag.innerText.split(' ')
  arrayOfWords.forEach((word, index) => {
    let currentWord = word
    let indexToSwap = Math.floor(Math.random() * (arrayOfWords.length - 1))
    let swapWord = arrayOfWords[indexToSwap]
    arrayOfWords[index] = swapWord
    arrayOfWords[indexToSwap] = currentWord
  })
  document.getElementById('find-replace').innerText = arrayOfWords.join(' ')
}

function scrollDelete () {
  let paragraph1 = document.getElementById('paragraph1')
  let arrayOfWords = paragraph1.innerText.split(' ')
  arrayOfWords.pop()
  paragraph1.innerText = arrayOfWords.join(' ')
}

function encrypt () {
  console.log('a ', 'a'.charCodeAt(0))
  let pTag3 = document.getElementById('encryptMe')
  let paragraph = pTag3.innerText
  let codedParagraph = paragraph.split('').map(character => {
    if (character.toLowerCase().charCodeAt(0) < 97 || character.toLowerCase().charCodeAt(0) > 123) {
      return character
    }else if(character.toLowerCase().charCodeAt(0) > 109) {
      return String.fromCharCode(character.toLowerCase().charCodeAt(0) - 13)
    }else{
      return String.fromCharCode(character.toLowerCase().charCodeAt(0) + 13)
    }
  })
  pTag3.innerText = codedParagraph.join('')
}


fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => document.getElementById('jsonPlaceholder').innerText = json.title)