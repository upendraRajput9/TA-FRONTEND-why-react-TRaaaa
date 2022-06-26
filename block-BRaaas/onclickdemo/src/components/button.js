let fruits = [
    { id: 'apple', value: '🍎 apple' },
    { id: 'orange', value: '🍊 orange' },
    { id: 'grape', value: '🍇 grape' },
    { id: 'pear', value: '🍐 pear' },
  ];

  function handle(value){
    alert(value)
  }
function Fruit(){
    return (
        <>
{fruits.map((fruit)=>
    <Card key={fruit.id} {...fruit}/>
)}</>
    )
}

function Card(props){
    return (
        <>
        <button onClick={()=>handle(props.value)}>{props.id}</button>
        </>
    )
}
export default Fruit