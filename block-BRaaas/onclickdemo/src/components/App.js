import Fruit from "./button"

function handleClick1(){
    alert(`Hello React Event`)
}
function handleClick2(){
    alert("To learn React use https://reactjs.org")
    alert("React and ReactDOM works together")
    alert("Babel helps in writing JSX")
}
function handleClick3(name){
    alert(`Hello name`)
}




function App(){
    return (
        <>
       <button onClick={handleClick1} >ClicK me!</button>
       <button onClick={handleClick2} >How can I help you?</button>
       <button onClick={()=>handleClick3("Arya")} >Arya</button>
       <button onClick={()=>handleClick3("John")} >John</button>
       <button onClick={()=>handleClick3("Bran")} >Bran</button>
       <Fruit/>
       </>
    )
}

export default App