import React from 'react'
import { Link } from 'react-router-dom'

function UserCard(props) {
  return (
    <div className='w-[22%] border-solid border-2 border-grey-400 rounded-md'>
      <a href={`/users/${props.user.id}`}>
          <div>
              <img src={props.user.imageUrl} alt="" className='rounded-t-md'></img>
              <div className='flex flex-col items-center py-2'>
                <h2 className='font-bold'>{props.user.prefix} {props.user.name} {props.user.lastName} </h2>
                <p>{props.user.title}</p>
              </div>
              
          </div>
      </a>
    </div>
    
  )
}

export default UserCard