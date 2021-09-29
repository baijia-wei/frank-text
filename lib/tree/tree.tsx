import React from "react";

interface SourceDataItem{
    text:string;
    value:string;
    children?:SourceDataItem[]
}
interface Props{
    sourceData:SourceDataItem[]
}
const Tree:React.FunctionComponent<Props>=(Props)=>{
    return (
        <div>
           {/* {Props.sourceData[0].text} */}
           {
               Props.sourceData.map((item,index)=>{
                return <div key={index}> {item.text}
                        {item.children?.map(item2=>{
                            return <div> { item2.text}</div>
                        })}
                </div>
               })
           }
        </div>
    );
};


export default Tree