import * as React from 'react';
import { useState } from 'react';
import classSyle from "../utils/classSyle";
import "./style/switch.scss";





export interface SwitchProps {
    checked?: boolean
    defaultChecked?: boolean
    size?: 'small' | 'default'
    onChange?: (checked: boolean, e: React.MouseEvent) => any
    disabled?: boolean
    className?: string
    style?: React.CSSProperties
}

const Switch: React.FunctionComponent<SwitchProps> = (props) => {
    // 获取参数
    const { size, disabled, style, className, onChange } = props
    const [derivedChecked, setderivedChecked] = useState(props.defaultChecked);
    // 关闭打开事件
    const handleClick: React.MouseEventHandler = e => {
        if (disabled) {
            return
        }
        // 取反
        setderivedChecked(!derivedChecked)
        if (onChange) {
            onChange(!derivedChecked, e)
        }
    }


    // 类名统一处理
    const switchClassName = classSyle('Switch', '', [className, size], {
        checked: derivedChecked, //是否打开 
        disabled//是否禁用
    })

    return <div>
        <span
            className={switchClassName}
            onClick={handleClick}
            style={style}
        >
            <span className={classSyle('Switch', 'core')} />
        </span>

    </div>
}
export default Switch