import React from "react";
// import Tab from "./tab";
// var fs = require("fs");
// const fsw = require('./sd.json');
import fsw from "./sd.json";
const TabExample = () => {


    type dlecs = {
        name?: string,
        children: dlecs | [] | any
    }

    // let   jsonsting= JSON.stringify(fsw)
    // var data = fs.writeFileSync('write1.json', jsonsting);
    const onclikde = () => {
        const obj: dlecs = {
            children: []
        }

        Object.keys(fsw).forEach((item, index) => {
            if (item === "docDataName") {
                obj.name = fsw[item]
            }
            if (item === 'dataClassList') {
                fsw[item].map((item1: any) => {
                    obj.children.push(
                        {
                            name: item1.docClassName,
                            children: Object.keys(item1).map(item2=>{
                                console.log(item2);
                                
                                // return { name : item1[item2]}
                            })
                        }
                    )


                })
            }
        })




        console.log(obj)


    }


    const arrays = (arr: string[]) => {
        const obj: { name: string; }[] = []
        arr.map((item, index) => {
            obj.push({ name: item })
        })
        return obj
    }





    // console.log(Object.keys(fsw));



    return (
        <div>
            第一个例子

            <button onClick={onclikde}> 查看</button>
            {/* <Tab>
                <Tab.TabPane title="水果">菠萝</Tab.TabPane>
                <Tab.TabPane title="蔬菜">黄瓜</Tab.TabPane>
                <Tab.TabPane title="家具">椅子</Tab.TabPane>
            </Tab> */}

            {/* <Tab>
                <div title="水果">菠萝</div>
                <div title="蔬菜">黄瓜</div>
                <div title="家具">椅子</div>
            </Tab> */}
        </div>
    )
}

export default TabExample