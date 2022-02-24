import * as React from 'react';
import { useEffect, useRef } from 'react';
import './longList.scss'

const LongList: React.FunctionComponent = () => {
    const visibleList = Array.from({ length: 100 }, (v, k) => k);
    // const itemHeight = 30
    // const toalheght = visibleList.length * itemHeight


    let panel: any = useRef()
    let container: any = useRef()

    const onScroll = (e:any) => {
        
    }

    useEffect(() => {
     
    }, [])
    return <div>
        <h1>我的信息开关</h1>
        <div className="containers" onScroll={onScroll} ref={container}>
           
                {visibleList.map((item: any, index: any) => {
                    return <div className='items' key={index}>{index}</div>
                })}
           
        </div >
    </div >
}
export default LongList