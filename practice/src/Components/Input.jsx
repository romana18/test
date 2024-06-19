import React from 'react'

function Input({
    length,
    pass,
    copy,
    setChar,
    setNum,
    setLength


}) {
    
  return (
    <div className="p-20">
    <input className='bg-whote border-green-500 border w-96' type="text" value={pass} placeholder='Password' />
    <button className="bg-black text-white p-1" onClick={copy}>Copy</button>
    <br />
    <input type="range" name="range" id="" onChange={(e) => { setLength(e.target.value) }} />{length}
    <br />
    <input type="checkbox" name="number" id="" onChange={() => {setNum((prev)=>!prev) }} /><label htmlFor="">Number</label>
    <br />
    <input type="checkbox" name="character" id=""onChange={()=>{setChar((prev)=>!prev)}} /><label htmlFor="">Char</label>
  </div>
  )
}

export default Input