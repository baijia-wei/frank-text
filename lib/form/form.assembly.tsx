import React from "react";
import './inputassembly1.scss'
import FormExamole from './form.example'
import FormDemo  from './form.demo'
const FormExample: React.FunctionComponent = () => {
    return (
        <div>
            <div className='ands-header'>

                <h2>基本使用</h2>
                <p>传入校验规则。</p>
            </div>
            <div className="ands-header-content">
                <div className="ands-content-left">
                    <FormExamole/>
                    <div className="ands-content-left-text">
                        <p>

                        </p>
                    </div>
                </div>
                <div className="ands-content-right" >
                    <FormDemo />
                </div>
            </div>


        </div>
    );
};

export default FormExample;