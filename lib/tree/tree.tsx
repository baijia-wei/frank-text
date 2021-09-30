import { scopedClassMaker } from "../helpers/classes";
import React from "react";
import "./tree.scss"
export interface SourceDataItem {
    text: string;
    value: string;
    children?: SourceDataItem[];
   
}
interface Props {
    sourceData: SourceDataItem[],
    selectedValues:string[];
    // 第一个是你点击那个 ，第二个是关闭还是开启的
    onChange:(item:SourceDataItem,bool:boolean)=>void
}

const scw = scopedClassMaker('ands-tree')

// 递归渲染数据
const renderItem = (
    item: SourceDataItem,
    selectedValues:string[],
    onChange:(item:SourceDataItem,bool:boolean)=> void,

    level = 1) => {
    const classes = {
        ['level-' + level]: true,
        'item': true
    };
    
    // 按照层级缩进
    return <div key={item.value} className={scw(classes)}>
        <div className={scw("text")}>
            <input type="checkbox" onChange={(e)=>onChange(item,e.target.checked)} checked={selectedValues.indexOf(item.value)>=0}/>
            {item.text}</div>
        {item.children?.map(sub => {
            return renderItem(sub, selectedValues,onChange,level + 1)
        })}
    </div>
}

const Tree: React.FunctionComponent<Props> = (props) => {
    return (
        <div>
            {/* {Props.sourceData[0].text} */}
            {
                props.sourceData?.map((item, index) => {
                    return renderItem(item,props.selectedValues,props.onChange)
                })}
        </div>
    );
};


export default Tree