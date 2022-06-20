let input = document.querySelector('input[type="text"]')
let rootElm = document.querySelector('ul');

let allMovie=[];

function handleWatch(event){
event.preventDefault();
let id =event.target.getAttribute("dataset")
allMovie[id].watch=allMovie[id].watch?false:true
displayMovie(allMovie)
}

function handleDelete(event){
    event.preventDefault();
let id =event.target.getAttribute("dataset")
allMovie[id].watch?allMovie.splice(id,1):alert("movie is not watched")
displayMovie(allMovie)
}

function displayMovie(moviearr=[]){
    rootElm.innerHTML="";
    moviearr.forEach((elm,index)=>{
        let li = document.createElement('li');
        let moviename =document.createElement('p');
        let options =document.createElement('div')
       let watchbtn = document.createElement("span");
       let remove = document.createElement("span")
       watchbtn.setAttribute("dataset",index);
       remove.setAttribute("dataset",index);
       moviename.setAttribute("class","name");
       li.setAttribute("class","flex-1");
       remove.innerText = "Remove"
      moviename.innerText=elm.name
      watchbtn.innerText = elm.watch?"Watched":"To watch";
      options.append(watchbtn,remove)
      li.append(moviename,options)
      rootElm.append(li)
      watchbtn.addEventListener("click",handleWatch)
      remove.addEventListener("click",handleDelete)
    })
}



input.addEventListener("keyup",(event)=>{
    event.preventDefault()
    if(event.keyCode===13){
        allMovie.push({
        name:event.target.value,
        watch:false
        })
        event.target.value=""
        displayMovie(allMovie)
    } 
})

displayMovie(allMovie)
