import React, { useState } from "react";
import Tree, { SourceDataItem } from "./tree";
const TreeExample: React.FunctionComponent = () => {
    const [array, setArray] = useState([{
        text: '一职中',
        value: "1",
        children: [
            {
                text: "一直用1.1", value: "1.1", children: [
                    { text: "一直用1.1.1", value: "1.1.1" },
                    { text: "一直用1.1.2", value: '1.1.2' },
                    { text: "一直用1.1.3", value: '1.1.3' },
                    { text: "一直用1.1.4", value: '1.1.4' },
                ]
            },
            { text: "一直用1.2", value: '1.2' },
            { text: "一直用1.3", value: '1.3' },
            {
                text: "一直用1.4", value: '1.4', children: [
                    { text: "一直用1.4.1", value: "1.4.1" },
                    { text: "一直用1.4.2", value: '1.4.2' },
                    { text: "一直用1.4.3", value: '1.4.3' },
                    {
                        text: "一直用1.4.4", value: '1.4.4', children: [
                            { text: "一直用1.4.4.1", value: "1.4.4.1" },
                            { text: "一直用1.4.4.2", value: '1.4.4.2' },
                            { text: "一直用1.4.4.3", value: '1.4.4.3' },
                            { text: "一直用1.4.4.4", value: '1.4.4.4' },
                        ]
                    },
                ]
            },

        ]
    },
    {
        text: '二职中',
        value: "2",
        children: [
            {
                text: "二直用1", value: "2.1", children: [
                    {
                        text: "二直用2.1.1", value: "2.1.1", children: [
                            { text: "二直用2.1.1", value: "2.1.1" },

                        ]
                    },
                ]
            },
            {
                text: "二直用2", value: '2.2', children: [
                    { text: "二直用2.2.1", value: "2.2.1" },

                ]
            },
            {
                text: "二直用3", value: '2.3', children: [
                    { text: "二直用2.3.1", value: "2.3.1" },

                ]
            },
            {
                text: "二直用4", value: '2.4', children: [
                    { text: "二直用2.4.1", value: "2.4.1" },

                ]
            },

        ]
    }
    ]);





    const [selectedValues,setselectedValues]=useState(["1.1.1", "2.2"])

    const onChange = (item: SourceDataItem, bool: boolean) => {
        // 如果这个item是等于true说明你想把这个item选中
       if(bool===true){
        // setselectedValues([...selectedValues,item.value])
       }

    }

    return (
        <div>
            <h1>展示数据</h1>
            <Tree sourceData={array} onChange={onChange} selectedValues={selectedValues}></Tree>
        </div>
    );
};


export default TreeExample