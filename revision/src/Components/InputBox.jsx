import React from 'react'

function InputBox({

  amount,
  options,
  label,
  selected,
  setAmount,
  oncurrencychange,
  onamountchange


}) {
  return (
    <div>
      <label htmlFor="">{label}</label>
      <input type="text" placeholder='amount' value={amount} onChange={(e)=>{onamountchange && onamountchange(e.target.value)}}/>
      <select value={selected} onChange={(e) => { oncurrencychange && oncurrencychange(e.target.value) }}>
        {options.map((currency, index) => (
          <option key={index} value={currency}>{currency}</option>
        ))}

      </select>
    </div>
  )
}

export default InputBox