import React from 'react';
import Buttonss from './button'

const ButtonExample1: React.FunctionComponent = () => {
    return (
        <div className="ands-header">
            <Buttonss>默认按钮</Buttonss>
            <Buttonss type="red">成功按钮</Buttonss>
            <Buttonss type="yellow">错误按钮</Buttonss>
            <Buttonss type="blue">警告按钮</Buttonss>
        </div>
    );
};
export default ButtonExample1;