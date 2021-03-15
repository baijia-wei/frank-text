import React from 'react';
import Buttonsst from './button.assembly1'
import ButtonExample1 from './button.assembly2';
import ButtonExample2 from './button.assembly';
import './button.example.scss'
import { Assembly1,Assembly2,Assembly3}  from './button.demo';

const ButtonExample: React.FunctionComponent = () => {
    return (
        <div>
            <div className='ands-header'>
                <h1>Button按钮</h1>
                <p>按钮用于开始一个即时操作</p>
                <h2>何时使用</h2>
                <p>标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑</p>
            </div>
            <div className="ands-header-content">
                <div className="ands-content-left">
                    <Buttonsst></Buttonsst>
                    <div className="ands-content-left-text">
                       <p>图标按钮及按钮形状 #
                           通过设置icon属性在Button内嵌入一个Icon，或者直接在Button内使用Icon组件。

                           使用Button的icon属性，图标位置将在最左边，如果需要自定义位置，需使用Icon组件。

                           通过设置shape属性为circle，可将按钮置为圆的形状。
                       </p>
                    </div>
                </div>
                <div className="ands-content-right">
                 <Assembly1/>
                </div>
            </div>

            <div className="ands-header-content">
                <div className="ands-content-left">
                    <ButtonExample1></ButtonExample1>
                    <div className="ands-content-left-text">
                        <p>
                        图标按钮及按钮形状 #
                        通过设置icon属性在Button内嵌入一个Icon，或者直接在Button内使用Icon组件。
                        使用Button的icon属性，图标位置将在最左边，如果需要自定义位置，需使用Icon组件。
                        通过设置shape属性为circle，可将按钮置为圆的形状。
                        </p>
                    </div>
                </div>
                <div className="ands-content-right">
                    <Assembly2/>
                </div>
            </div>

            <div className="ands-header-content">
                <div className="ands-content-left">
                    <ButtonExample2></ButtonExample2>
                    <div className="ands-content-left-text">
                        <p>
                        图标按钮及按钮形状 #
                        通过设置icon属性在Button内嵌入一个Icon，或者直接在Button内使用Icon组件。
                        使用Button的icon属性，图标位置将在最左边，如果需要自定义位置，需使用Icon组件。
                        通过设置shape属性为circle，可将按钮置为圆的形状。
                        </p>
                    </div>
                </div>
                <div className="ands-content-right">
                    <Assembly3/>
                </div>
            </div>
        </div>
    );
};

export default ButtonExample;