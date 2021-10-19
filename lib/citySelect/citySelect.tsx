import React, { FunctionComponent, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./citySelect.scss"
interface Props {

}
const CitySelect: FunctionComponent<Props> = (props) => {
    const [dialogVisible, setDialogVisble] = useState<Boolean>(false)
    const onClick = () => {
        setDialogVisble(true)
    }
    return (
        <div>
            <div onClick={onClick}>{props.children}</div>
            {dialogVisible && <Dialog onClose={() => { setDialogVisble(false) }}></Dialog>}

        </div>
    )
}
export default CitySelect
const Dialog: React.FunctionComponent<{ onClose: () => void }> = (props) => {
    return ReactDOM.createPortal((
        <div className='fui-citySelect-dialog' onClick={props.onClose}>
            <header > 
                <span className="icon">&lt;</span>
                <span>选择城市</span>
            </header>

            <CurrentLocation></CurrentLocation>
            <h2>全部城市</h2>
            <div className='cityIndex'>Abcd</div>
            <div className='cityList'>所有城市</div>
        </div>
    ), document.body)

}

const CurrentLocation: React.FunctionComponent = () => {
    const [city, setCity] = useState<string>("加载中...")
    useEffect(()=>{
        const xhr =new XMLHttpRequest()
        xhr.open( "get",'http://ip-api.com/json/?lang=zh-CN')
        xhr.onload=()=>{
            const string =xhr.responseText;
            const obj =JSON.parse(string);
            const c=obj.city;
            setCity(c)
        };
        xhr.onerror=()=>{
            setCity('未知')
        }
        xhr.send();
    },[])
    return (
        <div className="currentCity">
            当前城市:{city}
        </div>
    )

}
