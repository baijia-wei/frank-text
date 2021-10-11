import React from "react";
import "./choice.scss";
interface Props {
    visible: string[];
    choicedata: string[];
    bool: Boolean;
    onClicksw:(item:string[])=>void
}


const Choice: React.FunctionComponent<Props> = (props) => {
    // 单选函数
    const singleChoice = (item: string, index: number) => {
        return <div key={index} className={item === props.visible[0] ? 'choice active' : 'choice'} onClick={() => props.onClicksw(calculations(item))} >{item}</div>
    }
    // 多选
    const multipleChoice = (item: string, index: number) => {


        return <div key={index} className={ props.visible.indexOf(item)!==-1 ? 'choice active' : 'choice '} onClick={() => props.onClicksw(calculation(item))} >{item}</div>
    }
// 单
    const calculations=(item:string)=>{
        if(props.visible[0]===item){
            return []
        }else{  
            return [item]
        }
    }

    // 多
    const calculation=(item:string)=>{
         const daec: string[] = [...props.visible]
        if (daec.indexOf(item) == -1) {
            daec.push(item)
        } else {
            daec.splice(daec.indexOf(item), 1); 
        }
        console.log(daec);
        return daec
    }


    return (
        <div className="choice-body">
            {props.choicedata.map((item, index) => {
                if (!props.bool) {
                    // 单选
                    return singleChoice(item, index)
                } else {
                    // 多选
                    return multipleChoice(item, index)
                }

            })}
        </div>
    )
}
export default Choice