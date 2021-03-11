import React from 'react';
import Buttonsst from './button.assembly1'
import './button.example.scss'
import IconDemo from './button.demo';

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
                </div>
                <div className="ands-content-right">
                    <IconDemo/>
                </div>
            </div>
            <div className="ands-header-content">
                <div className="ands-content-left">
                    <Buttonsst></Buttonsst>
                </div>
                <div className="ands-content-right">
                    <IconDemo/>
                </div>
            </div>
        </div>
    );
};

export default ButtonExample;