import React, { useCallback, useEffect, useState } from "react";
import './App.css'
import Input from "./Components/Input";

function App() {
  const [length, setLength] = useState(10)
  const [num, setNum] = useState(false)
  const [char, setChar] = useState(false)
  const [pass, setPass] = useState("sdfghui")

const changepass = useCallback(()=>{
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  let pas = ""
  let nums = "123456789"
  let chars = "~!@#$$%^&*()_+"
  if (num === true) {
    str += nums;
  }
  if (char === true) {
    str += chars;
  }
  for (let i = 0; i < length; i++) {
    let character = Math.floor(Math.random() * str.length + 1)
    pas += str.charAt(character)
  }
  setPass(pas)
},[length, setPass, char, num])

  useEffect(() => {
    changepass()
     
    }
  ,[length, setPass, char, num] )

  const copy=()=>{
    window.navigator.clipboard.writeText(pass)
  }
  return (
    <>
      <h1>Password Generator{length}</h1>
  <Input setLength={setLength} length ={length} copy={copy} setNum={setNum} setChar={setChar} pass={pass}/>
      

    </>
  )
}

export default App
