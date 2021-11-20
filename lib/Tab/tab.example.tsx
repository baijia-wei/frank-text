import React from "react";
import Tab from "./tab";
const TabExample = () => {


    // console.log(Object.keys(fsw));



    return (
        <div>
            第一个例子

            {/* <button onClick={onclikde}> 查看</button> */}
            {/* <Tab>
                <Tab.TabPane title="水果">菠萝</Tab.TabPane>
                <Tab.TabPane title="蔬菜">黄瓜</Tab.TabPane>
                <Tab.TabPane title="家具">椅子</Tab.TabPane>
            </Tab> */}

            <Tab>
                <div title="水果">菠萝</div>
                <div title="蔬菜">黄瓜</div>
                <div title="家具">椅子</div>
            </Tab>
        </div>
    )
}

export default TabExample