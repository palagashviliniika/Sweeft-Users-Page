import { useState, useEffect, useRef } from "react";
import { getUsersFromPage, getUserFriendsData } from "../api/Users/Users";
import config from "../config/config";
import UserCard from "./UserCard";

const PAGE_SIZE = config.page_size;

function UserList({name, userId}) {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const isFirstRunRef = useRef(true);

  useEffect(() => {
    if (isFirstRunRef.current) {
      isFirstRunRef.current = false;
      return;
    }
    fetchUsers(page);
  }, [page]);

  async function fetchUsers(page) {
    if(name === "getUsersFromPage"){
        let data = await getUsersFromPage(page, PAGE_SIZE);
        setUsers((prevUsers) => [...prevUsers, ...data.list]);
    } else if(name === "getUserFriendsData"){
        let data = await getUserFriendsData(userId, page, PAGE_SIZE);
        setUsers((prevUsers) => [...prevUsers, ...data.list]);
    }
    
  }

  console.log(users);

  function handleScroll() {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight) {
        setPage((prevPage) => prevPage + 1);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const usersComponent = users.map(user => {
    return(
      <UserCard 
        key={user.id}
        user={user}
      >
      </UserCard>
    )
  })

  return (
    <div className="flex flex-wrap justify-around gap-y-8 gap-x-1 mx-36 my-8">
      {usersComponent}
    </div>
  );
}

export default UserList;