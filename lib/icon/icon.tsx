import React from 'react'
import  '../importicons';
import './icon.scss'
import classes from '../helpers/classes'
interface IconProps extends React.SVGAttributes<SVGElement>{
}
// onClick:(e:React.MouseEvent)=> void
// 添加事件参数
const Icon:React.FunctionComponent<IconProps>=({className ,name,...resProps})=>{
    return (
            <svg className={classes('ufo-icon',className)} {...resProps}>
                <use xlinkHref={`#${name}`}></use>
            </svg>
    )
}
export default Icon