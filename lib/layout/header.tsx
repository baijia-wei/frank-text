import React from "react";
import {scopedClassMaker} from "../helpers/classes";


interface  Props extends React.HtmlHTMLAttributes<HTMLElement>{}
const  sc =scopedClassMaker("gu-layout")
const  Header:React.FunctionComponent<Props>=(props)=>{
    const  {className,...rest}=props
    return(
        <div className={sc('header',{extra:className})} {...rest}>
            {props.children}

        </div>
    )
}
export  default  Header;
