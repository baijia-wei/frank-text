import React from 'react';
import classes  from "../helpers/classes";
import './button.scss'
interface ButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
    type?: string;
    className?:string;
    disabled?:boolean
}

const  Buttonss:React.FunctionComponent<ButtonProps> =(props)=>{
    const  {type,children,className,...restProps} =props
    console.log(props)
    return(
        <button type="button" className={classes( `fui-button`,type,className)} {...restProps}>{children}</button>
    )
}
export default Buttonss;