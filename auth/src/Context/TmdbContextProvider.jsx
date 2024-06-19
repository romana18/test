import React, { useCallback, useEffect, useState } from 'react'
import TmdbContext from './TmdbContext'

function TmdbContextProvider({ children }) {

    const [pat, setPat] = useState("movie")
    const [tmdb, setTmdb] = useState({})
    const [searchres,setSearchres] = useState([])
    const [parti,setParti] = useState([])
    const [vid,setVid] = useState("")
    const fet = useCallback(() => {
        fetch(`https://api.themoviedb.org/3/discover/${pat}?api_key=5c3d4f0dbfe8a17da0f2e5840ee31fa2`)
            .then(res => res.json())
            .then(res => setTmdb(res.results))
            // console.log(tmdb)
        
    }, [pat])

    useEffect(() => {
        fet()
    }, [fet])

    return (
        <TmdbContext.Provider value={{ tmdb, setTmdb, pat, setPat,parti,setParti }}>
            {children}
        </TmdbContext.Provider>
    )
}

export default TmdbContextProvider