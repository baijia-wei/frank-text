import React, {useState} from "react";
import Input from "./input";
const InputExample: React.FunctionComponent = () => {
    const [value, setvalue] = useState('你好')
    return (
        <div>
            <Input value={value} onChange={
                (event: { target: { value: React.SetStateAction<string>; }; }) => {
                setvalue(event.target.value)
            }}/>
            <div>{value}</div>
        </div>
    )
}
export default InputExample;