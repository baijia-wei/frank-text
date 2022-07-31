import React from "react";
import './inputassembly1.scss'
import Inputexample from './input.example'
import {InputDemo}  from './input.demo'
const ButtonExample: React.FunctionComponent = () => {
    return (
        <div>
            <div className='ands-header'>

                <h2>基本使用</h2>
                <p>通过鼠标或键盘输入内容，是最基础的表单域的包装。</p>
            </div>
            <div className="ands-header-content">
                <div className="ands-content-left">
                    <Inputexample/>
                    <div className="ands-content-left-text">
                        <p>
                        </p>
                    </div>
                </div>
                <div className="ands-content-right">
                    <InputDemo/>
                </div>
            </div>


        </div>
    );
};

export default ButtonExample;