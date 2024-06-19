import React, { useEffect, useState } from 'react';
import useTmdb from '../../Context/useTmdb';

function Particular() {
   
    const { parti,setParti } = useTmdb();
    const [mid, setMid] = useState(0);
    const [vid, setVid] = useState([]);

    useEffect(() => {
        const result = parti.map(id => id.id);
        setMid(result);

        fetch(`https://api.themoviedb.org/3/movie/${mid}?api_key=5c3d4f0dbfe8a17da0f2e5840ee31fa2`)
            .then(res => res.json())
            .then(res => {
                setVid(res.results);
            });
            
    }, []);

    useEffect(()=>{
        const glocal = JSON.parse(localStorage.getItem("particular"))

        if(glocal && glocal.length>0){
            setParti(glocal)
        }
    }, [])

    useEffect(()=>{
        localStorage.setItem("particular",JSON.stringify(parti))
    },[parti])

    console.log(vid); 

    return (
        <div>
            {Array.isArray(parti) && parti.map(movie => (
                <div key={movie.id} className='grid grid-cols-4 gap-2 p-10'>
                    <div className="col-span-1">
                        <img
                            className="rounded-md"
                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            alt={movie.original_title || movie.name}
                        />
                    </div>
                    <div className="col-span-3 mx-20">
                        <h1 className="text-2xl font-bold mb-2">{movie.original_title || movie.name}</h1>
                        <p className="text-gray-600">{movie.overview}</p>
                    </div>
                </div>
            ))}
            <h1>{mid}</h1>
        </div>
    );
}

export default Particular;
