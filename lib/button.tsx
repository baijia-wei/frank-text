import React from 'react';
import classes  from "./helpers/classes";
import './button.scss'
interface ButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
    type?: string;

}

const  Buttonss:React.FunctionComponent<ButtonProps> =(props)=>{
    const  {type,children,...restProps} =props
    return(
        <button  className={classes( `fui-button`,type)} {...restProps}>{children}</button>
    )
}

export default Buttonss;