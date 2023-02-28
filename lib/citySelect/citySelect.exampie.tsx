import * as React from 'react';
import CitySelect from "./citySelect";


const CitySelectExample:React.FunctionComponent = () => {
    const onChangex = (e:any) => {
        console.log(e);
        
    }
    const citylist = ['鞍山',"深圳" ,"中山","安庆" ,"琴岛","安平", "安宁", "安福", '桂林', "盘锦市", "上海", "忻州市", "汾阳市", "河津市", "孝义市"]
    return (
        <div>
            <div><h2>第一个例子</h2>
                <CitySelect onChange={onChangex} dataSource={citylist}>选择城市</CitySelect>
            </div>
        </div>
    )
}
export default CitySelectExample