import React, { useEffect, useState } from 'react'

function Home() {
    const [data,setData] = useState("")
    const [img,setImg] = useState("")
    const [bud, setBud] = useState(1)
    useEffect(()=>{
      
        fetch("https://api.themoviedb.org/3/movie/157336?api_key=5c3d4f0dbfe8a17da0f2e5840ee31fa2")
        .then(res=>res.json())
        .then((res)=>{
            console.log(res)
            setData(res.original_title)
            setImg(`https://image.tmdb.org/t/p/w500/${res.backdrop_path}`)
            setBud(res.budget)
        })
    },[])
  return (
    <div>
        <p>Name :  {data}</p>
        <br />
        <img src={img} alt="movie_thumbnail" />
        <p>Budget: {bud}</p>
        </div>
  )
}

export default Home