import React from 'react'
import { useParams } from 'react-router-dom';
import { getUserFriendsData } from '../../api/Users/Users';
import UserFriends from '../../component/UserFriends';
import UserInfo from '../../component/UserInfo';
import UserList from '../../component/UserList';

function UserDetailsPage() {
    const {id} = useParams()

  return (
    <div>
        <UserInfo userId={id} />
        <UserFriends userId={id}/>
    </div>
  )
}

export default UserDetailsPage