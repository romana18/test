import React from 'react'
import Fetchgit from './Fetchgit'
import { useParams } from 'react-router-dom'

function Github() {
    const {userna} = useParams()
    const uniqueuser = 'romana18'
    const userinfo = Fetchgit(userna)
    console.log(userinfo)
  return (
    <>
     <img src={userinfo.avatar_url} alt="" />
    <div>Github Username : {userinfo.login}</div>
    <div>User created at : {userinfo.created_at}</div>
   
    <div>Public Repos  : {userinfo.public_repos}</div>
    <div>Followers : {userinfo.followers}</div>

    </>
  )
}

export default Github