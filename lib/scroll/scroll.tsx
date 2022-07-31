import React, { HTMLAttributes, MouseEventHandler, TouchEventHandler, UIEventHandler, useEffect, useRef, useState } from "react";
import './scroll.scss'
import scrollbarWidth from './scrollbar-width'  
interface Props extends HTMLAttributes<HTMLElement> {

}

const Scroll: React.FunctionComponent<Props> = (props) => {
    const { children, ...rest } = props;
    const [barHeights,setBarHeight]=useState(0)
    const [barTop,_setBarTop]=useState(0);   
    const [translateY,setTranslateY]=useState(0)
    let firstY=useRef(0)
    let firstBarTopRef=useRef(0)
    let draggingRef=useRef(false)
    let lastYRef=useRef(0)

    // 控制滚动条不超出上下文
    const setBarTop=(numbers: number)=>{
        if(numbers<0){return}
        const {current}=constainerRef;
        const scrollHeight=current!.scrollHeight
        const viewheight=current!.getBoundingClientRect().height
        const maxBarTop=(scrollHeight-viewheight)*viewheight/scrollHeight;
        if(numbers>maxBarTop){return}
        _setBarTop(numbers)
    }
    const onScroll:UIEventHandler = (e)=>{
        const {current}=constainerRef;
        const scrollHeight=current!.scrollHeight
        const viewheight=current!.getBoundingClientRect().height
        const scrollTop=current!.scrollTop;
        setBarTop(scrollTop * viewheight/scrollHeight)
    }
    const constainerRef=useRef<HTMLDivElement>(null)
    useEffect(()=>{
        const scrollheight=constainerRef.current!.scrollHeight;
        const viewheight=constainerRef.current!.getBoundingClientRect().height
        const barheight=viewheight* viewheight / scrollheight
        setBarHeight(barheight)
    },[])
    const onselect=(e:Event)=>{
        if(draggingRef.current){e.preventDefault()}
    }


    useEffect(()=>{
        document.addEventListener('mousemove',onMouseMoveBar);
        document.addEventListener('mouseup',onMouseUpBar);
        document.addEventListener('selectstart',onselect)
        return ()=>{
            document.removeEventListener('mousemove',onMouseMoveBar);
            document.removeEventListener('mouseup',onMouseUpBar);
            document.removeEventListener('selectstart',onselect)
        }
    },[])
   
    const onMouseUpBar=()=>{
        draggingRef.current=false
    }
    // 鼠标点击开始移动
    const onMouseDownBar:MouseEventHandler=(e)=>{
        draggingRef.current=true
        firstY.current=e.clientY
        firstBarTopRef.current=barTop
    }
    // 鼠标移动计算高度
    const onMouseMoveBar=(e:MouseEvent)=>{
        if(draggingRef.current){
            const  delta=e.clientY-firstY.current;
            const newBarTop=firstBarTopRef.current+delta
            setBarTop(newBarTop) 
            const scrollHeight=constainerRef.current!.scrollHeight
            const viewheight=constainerRef.current!.getBoundingClientRect().height
            constainerRef.current!.scrollTop=newBarTop* scrollHeight/viewheight
        }
    }
    const onTouchMove:TouchEventHandler=(e)=>{

        
        const deltaY = e.touches[0].clientY-lastYRef.current
        if(deltaY>0){
            setTranslateY(translateY+deltaY)
        }else{

        }
        lastYRef.current=e.touches[0].clientY
    }
    const onTouchStart:TouchEventHandler=(e)=>{
           lastYRef.current=e.touches[0].clientY
    }
    const onTouchEnd:TouchEventHandler=()=>{
        setTranslateY(0)
    }   

    return (
        <div className="fui-scroll" {...rest}    >
            <div className="fui-scroll-inner" style={{right:-scrollbarWidth()}}
                ref={constainerRef}
                onTouchMove={onTouchMove}
                onTouchStart={onTouchStart}
                onScroll={onScroll}
                onTouchEnd={onTouchEnd}
        
            > {children}</div>
                <div className="fui-scroll-track">
                    <div className="fui-scroll-bar" style={{height:barHeights,top:barTop}}
                    onMouseDown={onMouseDownBar}
                 
                   
                    ></div>
                </div>
        </div>
    )

};
export default Scroll