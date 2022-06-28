
function Colorpallet(props){
    let numbers = [50,100,200,300,400,500,600,700,800,900]
return (
    <div className="parent-color-pallet">
        <div className="color-pallet" style={{backgroundColor:props.color}}></div>
        <span>
<site>{numbers[props.index]}</site>
<h3>{props.color}</h3>
        </span>
    </div>
)
}
export default Colorpallet