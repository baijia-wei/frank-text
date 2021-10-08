import React, { useState } from "react";
import  "./choice.scss";
interface Props {
    visible: string[];
    choicedata:string[]
    onClicksw:any;
}


const Choice: React.FunctionComponent<Props> = (props) => {
    const dsatws=(item:any)=>{
        return <div className={ [item]===props.visible ?'choice active':'choice'} onClick={()=>props.onClicksw(item)} >{item}</div>
    }
    
    return (
        <div className="choice-body">
            {props.visible}
            {props.choicedata.map((item,index)=>(
                dsatws(item)
            ))}
        </div>
    )
}
export default Choice