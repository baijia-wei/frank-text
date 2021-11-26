import * as React from 'react';
import { useState } from 'react';

interface Props {
    value?: any
    defaultValue?: any
    onChange?: (checkedValue: any, e: React.MouseEvent) => any
    vertical?: boolean
    radioStyle?: 'radio' | 'button'
    className?: string
    style?: React.CSSProperties

}

export interface OptionProps {
    value: any
    checkedValue?: any
    onClick?: (checkedValue: any, e: React.MouseEvent) => any
    radioStyle?: 'radio' | 'button'
    disabled?: boolean
    vertical?: boolean
    className?: string
    style?: React.CSSProperties
}


const Radio: React.FunctionComponent<Props> = (props) => {
   

    const [checkedValue, setcurrentIndex] = useState(props.defaultValue);

    const handleClick: (checkedValue: any, e: React.MouseEvent) => any = (
        checkedValue,
        e
    ) => {
        if (checkedValue !== checkedValue) {
            setcurrentIndex(checkedValue)
            if (props.onChange) {
                props.onChange(checkedValue, e)
            }
        }
    }


    const renderChildren = () => {
        const { radioStyle, vertical, children } = props
        console.log(radioStyle);

        return React.Children.map(
            children,

            (child: React.ReactElement<OptionProps>) => {
                return React.cloneElement(child, {
                    onClick: handleClick,
                    checkedValue,
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


