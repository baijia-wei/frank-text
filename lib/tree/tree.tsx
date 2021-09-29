import React from "react";

interface SourceDataItem {
    text: string;
    value: string;
    children?: SourceDataItem[]
}
interface Props {
    sourceData: SourceDataItem[]
}

const x=(item:SourceDataItem)=>{
    return <div key={item.value}>
        {item.text}
        {item.children?.map(sub=>{
            return x(sub)
        })}
    </div>
}
const Tree: React.FunctionComponent<Props> = (props) => {
    return (
        <div>
            {/* {Props.sourceData[0].text} */}
            {
                props.sourceData?.map((item, index) => {
                    return x(item)
                })}
        </div>
    );
};


export default Tree