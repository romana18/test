import React from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function useCurrency(currency ) {
  const [data, setData] = useState({})

  const getCurr = useCallback(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
      .then((res) => {
        return res.json()
      })
      .then((response) => {
        setData(response[currency])
        // console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [currency])


  useEffect(() => {
    getCurr()
  }, [getCurr])

  return data

}

export default useCurrency