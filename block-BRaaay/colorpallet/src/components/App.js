import Colorpallet from './Colorbox'
import colors from './colors.json'

function App() {
  let colorArr = Object.keys(colors)

  return (
    <main className='container'>
      {colorArr.map((color) => (
        <Card keys={color} name={color} />
      ))}
    </main>
  )
}
function Card(props) {
  console.log(props.name)
  return (
    <section>
      <h2>{props.name.toUpperCase()}</h2>
      <article>
        {colors[props.name].map((color,index) => (
          <Colorpallet keys={color} color={color} index={index} />
        ))}
      </article>
    </section>
  )
}

export default App
