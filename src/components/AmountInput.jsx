import React from 'react'

const AmountInput = ({onChangeValue, value}) => {
  return (
    <input
      onChange={(e) => onChangeValue(e.target.value)}
      value={value}
      type="number"
      placeholder={0}
    />
  )
}

export default AmountInput