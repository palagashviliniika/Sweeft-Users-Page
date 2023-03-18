import React from "react";
import UserList from "../../component/UserList"
import { getUsersFromPage } from "../../api/Users/Users";

function UserListingPage() {


  return (
    <div>
      <UserList name="getUsersFromPage"/>
    </div>
  );
}

export default UserListingPage;