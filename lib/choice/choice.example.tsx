import React, { useState } from "react";
import Choice from "./choice";

const MultipleChoice: React.FunctionComponent = () => {

    const [arrdataws, setarrdataws] = useState<string[]>(['钟离'])
    const [arrdata] = useState(['神子', '将军', '心海', '钟离', '公子', '胡桃'])


    const [arrdatawss, setarrdatawss] = useState<string[]>([])
    const [arrdatas] = useState(['神子', '将军', '公子', '胡桃', '心海', '钟离'])


   


    
    // 单
    const onClicksw = (item: string[]) => {
        setarrdataws(item)
    }
    // 多
    const onClicksws = (item: string[]) => {
        setarrdatawss(item)
    }

    return (
        <div>
            <div>单选</div>
            <Choice visible={arrdataws} choicedata={arrdata} bool={false} onClicksw={onClicksw}></Choice>
            <div>多选</div>
            <Choice visible={arrdatawss} choicedata={arrdatas} bool={true} onClicksw={onClicksws}></Choice>
        </div>

    )
}
export default MultipleChoice