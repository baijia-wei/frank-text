import React from "react";
import Dragpull from "./dragpull"
import DragSlide from "./dragSlide"
const dragPulls: React.FunctionComponent = () => {
    return (
        <div>
            <Dragpull></Dragpull>
            <div>滑动</div>
            <DragSlide></DragSlide>

        </div>
    );
};
export default dragPulls

