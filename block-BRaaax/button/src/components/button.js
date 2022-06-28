import {buttonSize,buttonType} from "./buttonInfo" 

function Button(props){
    let {label="Button", onClickHandler} = props
    function getStyle(){
        let {type=buttonType.PRIMARY,size=buttonSize.MEDIUM} = props;
        return (
            `button button--${type} button--${size}`
        )
    }
    
    return (
       <button className={getStyle()} onClick={onClickHandler} disabled={props.disabled}>{label}</button>
    )
}

export default Button