import React, { useEffect, useState } from 'react'
import { getUserData } from '../api/Users/Users';

function UserInfo({userId}) {
  const [userInfo, setUserInfo] = useState([])

  useEffect(() => {
    fetchUserInfo(userId)
  }, [userId])

  async function fetchUserInfo(userId) {
    let data = await getUserData(userId)
    setUserInfo(data)
  }

  return (
    <div className='mx-[164px] my-8 border-solid border-2 border-grey-400 rounded-md'>
      <div className='my-8 flex justify-around gap-10'>
        <div className='flex'>
          <img src={userInfo.imageUrl} alt="" className='mx-4 rounded-md w-1/5'></img>
          <div>
              <h2 className='font-bold text-2xl'>{userInfo.prefix} {userInfo.name} {userInfo.lastName} </h2>
              <p className='text-lg text-slate-600 italic'>{userInfo.title}</p>

            <div className='text-sm'>
              <p><span className='font-bold'>Email:</span> {userInfo.email}</p>
              <p><span className='font-bold'>IP Address:</span> {userInfo.ip}</p>
              <p><span className='font-bold'>Job Descriptor:</span> {userInfo.jobDescriptor}</p>
              <p><span className='font-bold'>Job Area:</span> {userInfo.jobArea}</p>
              <p><span className='font-bold'>Job Type:</span> {userInfo.jobType}</p>
            </div>
              
          </div>
        </div>
        
            
        <div>
            <h2 className='font-bold text-2xl'>{userInfo.company?.name} {userInfo.company?.suffix}</h2>
            <p><span className='font-bold'>City:</span> {userInfo.address?.city}</p>
            <p><span className='font-bold'>Country:</span> {userInfo.address?.country}</p>
            <p><span className='font-bold'>State:</span> {userInfo.address?.state}</p>
            <p><span className='font-bold'>Street Address:</span> {userInfo.address?.streetAddress}</p>
            <p><span className='font-bold'>ZIP:</span> {userInfo.address?.zipCode}</p>
        </div>
      </div>
        

        <hr/>
    </div>
  )
}

export default UserInfo