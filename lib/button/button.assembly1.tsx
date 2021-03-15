import React from 'react';
import Buttonss from './button'

const ButtonAssembly1: React.FunctionComponent = () => {
    return (
        <div >
            <div >
                <Buttonss className="baijiawei" disabled>默认按钮</Buttonss>
                <Buttonss className="baijiawei" type="red">成功按钮</Buttonss>
                <Buttonss type="yellow">错误按钮</Buttonss>
                <Buttonss type="blue">警告按钮</Buttonss>
            </div>
            <div>
                <Buttonss type="ghost">白色按钮</Buttonss>
                <Buttonss type="dashed">警告按钮</Buttonss>
            </div>


        </div>

    );
};
export default ButtonAssembly1;