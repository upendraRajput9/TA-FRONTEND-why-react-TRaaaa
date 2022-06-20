let input = document.querySelector('input[type="text"]')
let rootUl = document.querySelector('ul')

let allMovie = localStorage.getItem("allMovie")
?JSON.parse(localStorage.getItem("allMovie")):[];

function handleToggle(event) {
    console.log(event.target.innerText)
  event.preventDefault()
  let value = event.target.innerText
  if(value=="To watch"||value=="Watched"){
  let id = event.target.getAttribute('data-id')
  allMovie[id].watch = allMovie[id].watch ? false : true
  }else if(value=="Remove"){
    let id = event.target.getAttribute('data-id')
    allMovie[id].watch ? allMovie.splice(id, 1) : alert('movie is not watched')
  }
  displayMovie(allMovie)
}


rootUl.addEventListener("click",handleToggle)
function displayMovie(moviearr = allMovie) {
 let rootUI= moviearr.map((data, index) => {
    let li = React.createElement(
      'li',
      {className: 'flex-1'},
      React.createElement('p', {className:"name"},data.name),
      React.createElement('div', {}, React.createElement('span', {"data-id":index,className:"watch"}, data.watch ? 'Watched' : 'To watch'), React.createElement('span', {"data-id":index,className:"remove"},'Remove')),
    )
  
    return li
  })
 
  ReactDOM.render(rootUI,rootUl)
 
}

input.addEventListener('keyup', (event) => {
  event.preventDefault()
  if (event.keyCode === 13) {
      if(!event.target.value==""){
        allMovie.push({
            name: event.target.value,
            watch: false,
        })
      }
   
    event.target.value = ''
    displayMovie(allMovie)
  }
})

displayMovie(allMovie)
