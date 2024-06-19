import React, { useState, useEffect } from 'react'

function CallTMDB(path) {
    const [data, setData] = useState([])
    useEffect(() => {
        // fetch(`https://api.themoviedb.org/3/discover/${path}?api_key=5c3d4f0dbfe8a17da0f2e5840ee31fa2`)
        //     .then(res => res.json())
        //     .then(res => {
        //         setData(res.results);

        //     })

        const fet = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/discover/${path}?api_key=5c3d4f0dbfe8a17da0f2e5840ee31fa2`)
            const response = await res.json()
            setData(response.results)
        }
        fet()

    }, [path, setData])
    return data

}

export default CallTMDB