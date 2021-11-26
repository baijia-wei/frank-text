import * as React from 'react';
import Radio from './index';
import Option from './Option';

const RadioExample = () => {

    const handleChange=(value:any)=>{
        console.log(value+"1");
        
    }

    return <div>
        <h1>我的信息</h1>

        <Radio defaultValue="apple"  onChange={(value)  => handleChange(value)}>
            <Option value="apple">Apple</Option>
            <Option value="orange">Orange</Option>
            <Option value="pear">Pear</Option>
            <Option value="disabled" disabled={true}>Disabled</Option>
        </Radio>
    </div>
}
export default RadioExample