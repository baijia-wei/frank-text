
import React, { useEffect } from "react"
import "./Style/index.scss"
import classSyle from "../utils/classSyle"
import * as PropTypes from 'prop-types'
interface Props {
  value: any
  checkedValue?: any
  onClick?: (checkedValue: any, e: React.MouseEvent) => any
  radioStyle?: 'radio' | 'button'
  disabled?: boolean
  vertical?: boolean
  className?: string
  style?: React.CSSProperties
}

const Option: React.FunctionComponent<Props> = (props: any) => {




  const propTypes = {
    value: PropTypes.any.isRequired,
    checkedValue: PropTypes.any,
    onClick: PropTypes.func,
    radioStyle: PropTypes.oneOf(['radio', 'button']),
    disabled: PropTypes.bool,
    vertical: PropTypes.bool
  }

  const { checkedValue, radioStyle, disabled, vertical, value, children } = props

  const displayName = 'Option'


  const handleClick: React.MouseEventHandler = e => {
    const { value, onClick, disabled } = props
    if (disabled || !onClick) {
      return
    }
    onClick(value, e)
  }



  const optionClassName = classSyle(displayName, '', [radioStyle + '-style'], {
    checked: value === checkedValue,
    disabled,
    vertical
  })

  return radioStyle === 'radio' ? (
    <label className={optionClassName} onClick={handleClick}>
      <span className="label-dot" />
      <div className="label-text">{children}</div>
    </label>
  ) : (
    <label className={optionClassName} onClick={handleClick}>
      <div className="label-text">{children}</div>
    </label>
  )
}
export default Option