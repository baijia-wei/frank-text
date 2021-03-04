import React, {ReactElement} from 'react';
import {scopedClassMaker} from "../helpers/classes";
import  "./layout.scss"
import Aside from './aside';

interface  Props extends React.HtmlHTMLAttributes<HTMLElement>{}
const  sc =scopedClassMaker("gu-layout")
const  Layout:React.FunctionComponent<Props>=(props)=>{
    const {className, ...rest} = props;
    const children = props.children as Array<ReactElement>;
    const hasAside = 'length' in children &&
        children.reduce((result, node) => result || node.type === Aside, false)
    return(
        <div className={sc({'': true, hasAside}, {extra: className})} {...rest}>
            {props.children}
        </div>
    )
}

export  default  Layout;
export  { Layout}
export  {default as Header} from './header'
export  {default as Content} from './content'
export  {default as Footer} from './footer'
export  {default as Aside} from "./aside"



