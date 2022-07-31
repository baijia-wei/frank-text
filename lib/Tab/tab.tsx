import React, { useState } from "react";
import "./tab.scss"


const Tab: any = (props: any) => {
    console.log(props);

    const [currentIndex, setcurrentIndex] = useState<number>(0);

    return (
        <div>
            <div className="tabs">
                {React.Children.map(props.children, (item, index) => {
                    return <div onClick={() => { setcurrentIndex(index) }}
                        className={currentIndex === index ? "select boxsw" : " select "}>{item?.props.title}</div>
                })}
            </div>

            
            <div className="tabs-content">
                {React.Children.map(props.children, (item, index) => {
                    return <div onClick={() => { setcurrentIndex(index) }}
                        className={currentIndex === index ? "tabs-content-select" : "none"}>{item}</div>
                })}
            </div>

        </div>

    )

}

Tab.TabPane = (props1: any) => {

    console.log(props1);


    return (
        <div>{props1}</div>
    )
}



export default Tab