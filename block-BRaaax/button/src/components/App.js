import Button from "./button";
import {buttonSize,buttonType} from "./buttonInfo" 

function App(){
    return(
        <>
       <Button
  label="Click Me!"
/>
<br/>
<Button
  size={buttonSize.SMALL}
  label="Click Me!"
  type={buttonType.PRIMARY}
/>
<br/>
<Button
  size={buttonSize.MEDIUM}
  label="Click Me!"
  type={buttonType.SECONDARY}
/>
<br/>
<Button
size={buttonSize.LARGE}
label="Click Me!"
type={buttonType.TERTIARY}
onClickHandler={() => alert("You Clicked Me!")}
/>
<br/>
<Button disabled/>
</>
    )
}
export default App