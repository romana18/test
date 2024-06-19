import React, { useEffect, useState } from 'react'
import Carousels from './Carousels'
import { useParams } from 'react-router-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useNavigate } from 'react-router-dom';
import useTmdb from '../../Context/useTmdb'

function Dashboard() {
  const { tmdb, setTmdb, pat, setPat,parti,setParti } = useTmdb()
  // console.log(tmdb)
  const history = useNavigate()

  useGSAP(() => {
    gsap.from(".grid", { duration: 1, y: 300 })
  })
  const { path } = useParams()

  useEffect(() => {
    setPat(path)
    // console.log(tmdb)
  })


  const handleParticular = (movie) => {
    setParti([movie])
    history('/particular')
    console.log("true")
  }


  return (

    <>

      <Carousels />
      
      <div className="grid grid-cols-4 gap-2 p-20">

        {Array.isArray(tmdb) && path === "movie" && (tmdb.map(movie => (
          <div  key={movie.id} className="max-w-sm bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

           
              <img onClick={()=>handleParticular(movie)} className="rounded-t-lg photos hover:cursor-pointer" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
           
            <div className="p-5">
              
                <h5 onClick={handleParticular} className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:cursor-pointer">{movie.original_title}</h5>
              

            </div>

          </div>

        )))}
        {path === "tv"&& Array.isArray(tmdb) && (tmdb.map((tv) => (
          <div key={tv.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <a href="#">
              <img className="rounded-t-lg photos" src={`https://image.tmdb.org/t/p/w500/${tv.poster_path}`} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{tv.name}</h5>
              </a>


            </div>

          </div>
        )))}
      </div>
      
    </>
  )
}

export default Dashboard