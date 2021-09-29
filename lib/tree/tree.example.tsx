import React, { useState } from "react";
import Tree from "./tree";
const TreeExample: React.FunctionComponent = () => {
    const [array, setArray] = useState([{
        text: '一职中',
        value: "1",
        childern: [
            {
                text: "一直用1.1", value: "1.1", childern: [
                    { text: "一直用1.1.1", value: "1.1.1" },
                    { text: "一直用1.1.2", value: '1.1.2' },
                    { text: "一直用1.1.3", value: '1.1.3' },
                    { text: "一直用1.1.4", value: '1.1.4' },
                ]
            },
            { text: "一直用1.2", value: '1.2' },
            { text: "一直用1.3", value: '1.3' },
            {
                text: "一直用1.4", value: '1.4', childern: [
                    { text: "一直用1.4.1", value: "1.4.1" },
                    { text: "一直用1.4.2", value: '1.4.2' },
                    { text: "一直用1.4.3", value: '1.4.3' },
                    {
                        text: "一直用1.4.4", value: '1.4.4', childern: [
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
        childern: [
            {
                text: "二直用1", value: "2.1", childern: [
                    {
                        text: "二直用2.1.1", value: "2.1.1", childern: [
                            { text: "二直用2.1.1", value: "2.1.1" },

                        ]
                    },
                ]
            },
            {
                text: "二直用2", value: '2.2', childern: [
                    { text: "二直用2.2.1", value: "2.2.1" },

                ]
            },
            {
                text: "二直用3", value: '2.3', childern: [
                    { text: "二直用2.3.1", value: "2.3.1" },

                ]
            },
            { text: "二直用4", value: '2.4' , childern: [
                { text: "二直用2.4.1", value: "2.4.1" },

            ]},

        ]
    }

    ])
    return (
        <div>
            <h1>展示数据</h1>
            <Tree sourceData={array}></Tree>
        </div>
    );
};


export default TreeExample