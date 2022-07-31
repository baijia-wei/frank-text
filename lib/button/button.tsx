import React,{ButtonHTMLAttributes} from 'react';
import classes  from "../helpers/classes";
import './button.scss'
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
 level?:'important'|'normal'|'red'
}

const  Buttonss:React.FunctionComponent<Props> =(props)=>{
    const  {className,children,level,...restProps} =props

    return(
        <button type="button"
                className={classes( `fui-button`,`fui-button-${level}`,className)} {...restProps}>
            {children}
        </button>
    )
};
Buttonss.defaultProps={
    level:'normal'
};
export default Buttonss;