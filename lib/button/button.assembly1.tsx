import React from 'react';
import Buttonss from './button'
const ButtonAssembly1: React.FunctionComponent = () => {
    return (
        <div >
            <div >
                <Buttonss>默认按钮</Buttonss>
                <Buttonss level="important">蓝色按钮</Buttonss>
                <Buttonss level="red">红色</Buttonss>
            </div>
        </div>
    );
};
export default ButtonAssembly1;