import React from 'react'
import { useContext,useState } from 'react'
import UserContext from '../context/UserContext'
function Profile() {
    const {user} = useContext(UserContext)
  if(!user){
    return (
        "please login"
    )
  }
  else{
    return (
        <div>Welcome : {user.username}</div>
      )
  }
}

export default Profile