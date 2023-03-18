import React, { useEffect, useState } from 'react'
import { getUserData } from '../api/Users/Users';

function UserInfo({userId}) {
  const [userInfo, setUserInfo] = useState([])
  console.log(userInfo);

  useEffect(() => {
    fetchUserInfo(userId)
  }, [])

  async function fetchUserInfo(userId) {
    let data = await getUserData(userId)
    setUserInfo(data)
  }
  

  return (
    <div className='flex'>
        <img src={userInfo.imageUrl} alt=""></img>
        <div>
            <h2>{userInfo.prefix} {userInfo.name} {userInfo.lastName} </h2>
            <p>{userInfo.title}</p>

            <p>Email: {userInfo.email}</p>
            <p>IP Address: {userInfo.ip}</p>
            <p>Job Descriptor: {userInfo.jobDescriptor}</p>
            <p>Job Area: {userInfo.jobArea}</p>
            <p>Job Type: {userInfo.jobType}</p>
        </div>
            
        <div>
            <h2>{userInfo.company?.name} {userInfo.company?.suffix}</h2>
            <p>City: {userInfo.address?.city}</p>
            <p>Country: {userInfo.address?.country}</p>
            <p>State: {userInfo.address?.state}</p>
            <p>Street Address: {userInfo.address?.streetAddress}</p>
            <p>ZIP: {userInfo.address?.zipCode}</p>
        </div>
    </div>
  )
}

export default UserInfo