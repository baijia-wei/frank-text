import React from 'react';
import Buttonss from './button'
const ButtonExample: React.FunctionComponent = () => {
    return (
        <div>
            <Buttonss >
                按钮默认
            </Buttonss>
            <Buttonss type="red">
              按钮紅
            </Buttonss>

            <Buttonss type="yellow">
                按钮的内容黃
            </Buttonss>
            <Buttonss type="blue">
                按钮的内蓝
            </Buttonss>

        </div>
    );
};

export default ButtonExample;