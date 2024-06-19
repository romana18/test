import React, { useContext, useEffect, useState } from 'react'
import { Carousel } from 'flowbite-react';
import CallTMDB from '../Fetch/CallTMDB'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useNavigate } from 'react-router-dom';
import useTmdb from '../../Context/useTmdb'

function Carousels() {

    const {setParti} = useTmdb()
    const history = useNavigate()
    const call = "movie"
    const tv = "tv"
    const data = CallTMDB(call)
    const tdata = CallTMDB(tv)
   
    useGSAP(() => {
        gsap.from(".custom-carousel-height", { duration: 2, y: 200 })
    })
    const handledesc = (desc, length) => {
        if (desc.length > length) {
            return desc.substring(0, length) + "..."
        }
        else {
            return desc
        }
    }

    const handleParticular = (movie) => {
        setParti([movie])
        history('/particular')
        console.log("true")
      }


    return (
        <>
            <div className="p-2 h-96">

                <Carousel>

                    {data && data.slice(0, 4).map(poster => (
                        <div key={poster.id} className='hover:cursor-pointer ' >
                            <img
                            onClick={()=>handleParticular(poster)}
                                src={`https://image.tmdb.org/t/p/w500/${poster.backdrop_path}`}
                                alt=""
                                style={{height:"100vh"}}
                                className="absolute inset-0 -z-10 w-full object-fit object-right md:object-center"
                            />
                            <div className="mx-auto max-w-2xl mt-20 lg:mx-0 ">
                                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">{poster.original_title}</h2>
                                <p className="mt-6 text-lg leading-8 text-gray-300">
                                    {handledesc(poster.overview, 100)}
                                </p>
                            </div>
                        </div>
                    ))}
               
                
                </Carousel>
            </div>

        </>
    )
}

export default Carousels