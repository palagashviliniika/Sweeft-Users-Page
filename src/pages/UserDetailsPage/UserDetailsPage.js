import React from 'react'
import { useParams } from 'react-router-dom';
import UserInfo from '../../component/UserInfo';
import UserList from '../../component/UserList';

function UserDetailsPage() {
    const {id} = useParams()

  return (
    <div>
        <UserInfo userId={id} />
        <UserList name="getUserFriendsData" userId={id}/>
    </div>
  )
}

export default UserDetailsPage