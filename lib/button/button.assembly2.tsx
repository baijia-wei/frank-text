import React from 'react';
import Buttonss from './button'

const ButtonAssembly2: React.FunctionComponent = () => {
    return (
        <div className="ands-header">
            <Buttonss type="">@</Buttonss>
            <Buttonss type="red">搜索</Buttonss>
            <Buttonss type="ios-search">搜索</Buttonss>
            <Buttonss type="circle">圆角</Buttonss>
        </div>
    );
};
export default ButtonAssembly2;