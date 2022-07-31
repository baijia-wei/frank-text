import * as React from 'react';
import Switch from './switch';

const SwitchExample = () => {
    const handleOnChange = (checked: any) => {
        console.log(checked);
    }
    return <div>
        <h1>我的信息开关</h1>
        <Switch onChange={(checked: any) => handleOnChange(checked)} size="small"/>
        <Switch   disabled={true} />
        <Switch onChange={(checked: any) => handleOnChange(checked)}  disabled={true} />
        <Switch onChange={(checked: any) => handleOnChange(checked)}  disabled={true} defaultChecked={true} />
    </div>
}
export default SwitchExample