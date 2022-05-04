function displayCards () {
  fetch('https://ddc-web-student.cnm.edu/apis/')
    .then(response => {
      return response.json()
    }).then(json => {

    const cards = json.data.reduce((accumulator, currentValue) => {
      return (
        `${accumulator}
<div class="col">
     <div class="card">
        <div class="card-title">${currentValue.title}</div>
        <div class="card-body">${currentValue.body}</div>
    </div>   
</div>
       `
      )
    }, '')
//     let cards = ''
//     for (let currentValue of json.data) {
//       cards =      `${cards}
// <div class="col">
//      <div class="card">
//         <div class="card-title">${currentValue.title}</div>
//         <div class="card-body">${currentValue.body}</div>
//     </div>
// </div>
//        `
//     }
    document.getElementById('target').innerHTML = cards
  })


}



