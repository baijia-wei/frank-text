import React from 'react';
import Buttonsst from './button.assembly1'
// import ButtonExample1 from './button.assembly2';
// import ButtonExample2 from './button.assembly';
import './button.example.scss'
import { Assembly1,}  from './button.demo';

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
                       <p>
                       </p>
                    </div>
                </div>
                <div className="ands-content-right">
                 <Assembly1/>
                </div>
            </div>


        </div>
    );
};

export default ButtonExample;