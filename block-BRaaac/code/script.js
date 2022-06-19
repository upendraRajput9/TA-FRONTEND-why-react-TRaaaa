let input = document.querySelector('input[type="text"]')
let rootElm = document.querySelector('ul')

let allMovie = []

function handleToggle(event) {
  event.preventDefault()
  let value = event.target.innerText
  if(value=="To watch"){
  let id = event.target.getAttribute('data-id')
  allMovie[id].watch = allMovie[id].watch ? false : true
  }else if(value=="Remove"){
    let id = event.target.getAttribute('data-id')
    allMovie[id].watch ? allMovie.splice(id, 1) : alert('movie is not watched')
  }
  displayMovie(allMovie)
}


function elm(type, attr = {}, ...children) {
  let element = document.createElement(type)
  for (let key in attr) {
    if (key.startsWith('data-')) {
      element.setAttribute(key, attr[key])
    } else {
      element[key] = attr[key]
    }
  }
  children.forEach((child) => {
    if (typeof child === 'object') {
      element.append(child)
    } else {
      let node = document.createTextNode(child)
      element.append(child)
    }
  })
  return element
}

function displayMovie(moviearr = allMovie) {
  rootElm.innerHTML = ''
  moviearr.forEach((data, index) => {
    let li = elm(
      'li',
      {className: 'flex-1'},
      elm('p', {className:"name"},data.name),
      elm('div', {}, elm('span', {"data-id":index,className:"watch"}, data.watch ? 'Watched' : 'To watch'), elm('span', {"data-id":index,className:"remove"},'Remove')),
    )
    rootElm.append(li)
    li.addEventListener('click', handleToggle)
    
  })
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
