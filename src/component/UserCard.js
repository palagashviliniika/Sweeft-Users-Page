import React from 'react'
import { Link } from 'react-router-dom'

function UserCard(props) {
    console.log(props)
  return (
    <Link to={`/users/${props.user.id}`}>
        <div>
            <img src={props.user.imageUrl} alt=""></img>
            <h2>{props.user.id} {props.user.prefix} {props.user.name} {props.user.lastName} </h2>
            <p>{props.user.title}</p>
        </div>
    </Link>
  )
}

export default UserCard