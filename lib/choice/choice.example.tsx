import React, { useState } from "react";
import Choice from "./choice";

const MultipleChoice: React.FunctionComponent = () => {
    // const [arrdatas, setarrdatas] = useState<Array<string>>([])// 默认选中
    const [arrdataws, setarrdataws] = useState< string[]>(["将军"])
    const [arrdata, setarrdata] = useState([ '神子', '将军'])
    const onClicksws = (e: any) => {
          
            console.log(e);
            
    }

    return (
        <Choice visible={arrdataws}  choicedata={arrdata} onClicksw={onClicksws}></Choice>
    )
}
export default MultipleChoice