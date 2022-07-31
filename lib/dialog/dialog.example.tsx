import React, {useState} from 'react';
import Dialog, {alert, confirm, modal} from './dialog';
import Buttonss from "../button/button";

export default function () {
    const [x, setX] = useState(false);
    const [y, setY] = useState(false);
    const openModal = () => {
        const close = modal(<h1>弹窗内容
            <Buttonss onClick={() => close()}>默认关闭</Buttonss>
        </h1>);
    };


    return (
        <div>
            <div>
                <div>基础用法</div>
                <Buttonss onClick={openModal}>提示</Buttonss>
            </div>

            <div>
                <div>基础用法2</div>
                <Buttonss onClick={() => alert('1')}>弹窗</Buttonss>
                <Buttonss onClick={() => confirm('1', () => {
                    console.log('你点击了yes');
                }, () => {
                    console.log('你点击了no');
                })}>确定取消
                </Buttonss>
            </div>

            <div>
                <div>基础用法3</div>
                <Buttonss onClick={() => setX(!x)}>click</Buttonss>
                <Dialog visible={x} buttons={
                    [
                        <Buttonss onClick={() => {setX(false);}} level="important">确定</Buttonss>,
                        <Buttonss onClick={() => {setX(false);}}>取消</Buttonss>
                    ]
                } onClose={() => {setX(false);}}>
                    <strong>hi</strong>
                </Dialog>
            </div>


            <div style={{position: 'relative', zIndex: 9}}>
             <div>
                 遮罩层点击关闭
             </div>
                <Buttonss onClick={() => setY(!y)}>click</Buttonss>
                <Dialog visible={y} closeOnClickMask={true} buttons={
                    [
                        <Buttonss onClick={() => {setY(false);}}>取消</Buttonss>,
                        <Buttonss level="important" onClick={() => {setY(false);}}>确定</Buttonss>
                    ]
                } onClose={() => {setY(false);}}>
                    <strong>hi</strong>
                </Dialog>
            </div>


        </div>
    );
}