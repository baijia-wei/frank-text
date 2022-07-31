import * as React from 'react';
import { useEffect, useState } from 'react';
export interface OptionProps {
    value: string | number
    checkedValue?: any
    onClick?: (checkedValue: any, e: React.MouseEvent) => any
    radioStyle?: 'radio' | 'button'
    disabled?: boolean
    vertical?: boolean
    className?: string
    style?: React.CSSProperties
}

interface Props {
    value?: any
    defaultValue?: any
    onChange?: (checkedValue: any, e: React.MouseEvent) => any
    vertical?: boolean
    radioStyle?: 'radio' | 'button'
    className?: string
    style?: React.CSSProperties

}

const Radio: React.FunctionComponent<Props> = (props) => {

    const [checkedValuew, setcheckedValue] = useState(props.defaultValue);
    const handleClick: (checkedValue: any, e: React.MouseEvent) => any = (
        checkedValue,
        e
    ) => {
        if (checkedValue !== checkedValuew) {
            setcheckedValue(checkedValue)
            if (props.onChange) {
                props.onChange(checkedValue, e)
            }
        }
    }
    const renderChildren = () => {
        const { radioStyle = "radio", vertical = false, children } = props
        return React.Children.map(
            children,
            (child: React.ReactElement<OptionProps>) => {
                return React.cloneElement(child, {
                    onClick: handleClick,
                    checkedValue: checkedValuew,
                    radioStyle,
                    vertical
                })
            }
        )
    }



    return <div className={"xue-radio" + " " + [props.className]} style={props.style}>
        {renderChildren()}
    </div>
}
export default Radio


