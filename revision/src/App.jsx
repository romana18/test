import { useEffect } from 'react'
import './App.css'
import InputBox from './Components/InputBox'
import { useState } from 'react'
import useCurrency from './Hooks/useCurrency'

function App() {
  const [amount, setAmount] = useState(0)
  const [convamount, setConvamount] = useState(0)
  const [to, setTo] = useState("inr")
  const [from, setFrom] = useState("usd")

  const fromcurrency = useCurrency(from)


  const currencyinfo = Object.keys(fromcurrency)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvamount(amount)
    setAmount(convamount)
}

  const convert = () => {
    setConvamount(amount * fromcurrency[to])
  }

  return (
    <>
    <form action="" onSubmit={(e)=>{e.preventDefault();
    convert()}}>
      <InputBox amount={amount} selected={from} label="from" options={currencyinfo} setAmount={setAmount} oncurrencychange={(currency)=>{setFrom(currency)}} onamountchange={(amount)=>setAmount(amount)} />
      <button onClick={swap}>Swap</button>
      <InputBox amount={convamount} selected={to} label="to" options={currencyinfo} setAmount={setConvamount} oncurrencychange={(currency) => setTo(currency)}/>
      <button onClick={convert}>Convert {from.toUpperCase()} to {to.toUpperCase()} </button>
      </form>
    </>
  )
}

export default App
