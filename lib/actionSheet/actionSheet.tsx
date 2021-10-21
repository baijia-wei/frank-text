import React, { FunctionComponent, useEffect, useRef, useState } from "react";
interface Props {

}
const ActionSheet: FunctionComponent<Props> = (props) => {
    const [hide, sethide] = useState(false)

    const [dataset, setdataset] = useState(['第一', "第二", "dishan"])
    const divRef = useRef<HTMLDivElement>(null)
    const divRefsw = useRef<HTMLDivElement>(null)
    const onclicks = (item: any) => {
        console.log(item);

    }

    const useUpdate = (dep: any, fn: () => void) => {
        const [count, setCount] = useState(0)
        useEffect(() => { setCount(x => x + 1) }, [dep])
        useEffect(() => { if (count > 1) { fn() } }, [count])
    }
    useUpdate(hide, () => {
        if (hide) {
            console.log("打开");
            if (!divRef.current||!divRefsw.current) { return }
            divRefsw.current.style.backgroundColor='rgba(216, 216, 216, 0)'
            divRef.current.style.height = "auto";
            divRefsw.current.getBoundingClientRect()
            const { height } = divRef.current.getBoundingClientRect()
            divRef.current.style.height = "0px";
            divRef.current.getBoundingClientRect()
            divRef.current.style.height = height + "px"
            divRefsw.current.style.backgroundColor='rgba(216, 216, 216, .5)'

        } else {
            console.log("关闭");
            if (!divRef.current||!divRefsw.current) { return }
            const { height } = divRef.current.getBoundingClientRect()
            divRef.current.style.height = height+"px";
            divRef.current.getBoundingClientRect()
            divRef.current.style.height = "0px";
            divRefsw.current.style.backgroundColor='rgba(216, 216, 216, .5)'
            divRefsw.current.getBoundingClientRect()
            divRefsw.current.style.backgroundColor='rgba(216, 216, 216, 0)'
        }
    })
    return (
        <div className="Action">
            <h2>第一个例子</h2>
            <div className="actionsheet" onClick={() => sethide(true)}>
                <div>基础用发</div>
                <div>》</div>
            </div>
            <div ref={divRefsw} className={hide ? "actionsheet-dialog" : "none"} onClick={() => sethide(false)
            }>
                <div className='dialog-z' ref={divRef}>
                    <div className="dialog-head" >

                        {dataset.map((item) => (
                            <div className="dialog" key={item} onClick={() => { onclicks(item) }}> {item}</div>
                        ))}


                    </div>
                    <div className='dialog-qux' onClick={() => sethide(false)
                    }>
                        取消
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ActionSheet