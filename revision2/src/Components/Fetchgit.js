import React, { useCallback, useEffect } from 'react'
import { useState } from 'react'

function Fetchgit(username) {
    const [data, setData] = useState({})

    const fet = useCallback(()=>{
        fetch(`https://api.github.com/users/${username}`)
        .then(res=>res.json())
        .then(res=>setData(res))
        console.log(data)
    },[username])

    useEffect(()=>{
        fet()
    },[fet])

  return (
    data
  )
}

export default Fetchgit