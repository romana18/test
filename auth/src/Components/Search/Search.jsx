
import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import useTmdb from '../../Context/useTmdb'

function Search() {
  const [what, setWhat] = useState("Search")
  const history = useNavigate()
  const { pat, tmdb, setParti, parti } = useTmdb();
  const [res, setRes] = useState([])

  const handleSearch = () => {
    if (!what.trim()) {
      return
    }
    const result = tmdb.filter((list) => {
      if (pat === "movie") {
        return list.original_title.toLowerCase().includes(what.toLowerCase())
      }
      if (pat === "tv") {
        return list.name.toLowerCase().includes(what.toLowerCase())
      }
    })
    setRes(result)
  }

  const handleim = (e) => {
    const val = e.target.value
    setWhat(val)
    if (val == "") {
      setRes([])
    }
    else {
      handleSearch()
    }


  }

  const handleparti = (list) => {
    setRes([])
    setParti([list])
    
    history('/particular')
  }

  const handlekeydown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  }
  return (
    <div>
      <div className="flex items-center space-x-3 rtl:space-x-reverse">
        <input type="text" onChange={handleim} onKeyDown={handlekeydown} className="px-3 py-2 border border-gray-300 focus:outline-none focus:border-blue-500 rounded-md w-96" placeholder={what} />
        <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600" onClick={handleSearch}  >Search</button>
      </div>
      <div>
        {res.map((list) => (
          <Fragment key={list.id} >
            <ul onClick={() => handleparti(list)} className="flex items-center space-x-3 mt-4 hover:cursor-pointer">
              <li >
                <div>
                <img  src={`https://image.tmdb.org/t/p/w500/${list.poster_path}`} className="h-10 w-10" alt="" />
                </div>
              </li>
              <li>{list.original_title || list.name}</li>
            </ul>
          </Fragment>
        ))}
      </div>
      
    </div>

  )
}



export default Search