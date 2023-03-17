import { useState, useEffect, useRef } from "react";
import { getUsersFromPage } from "../../api/Users/Users";
import config from "../../config/config";
import UserCard from "../../component/UserCard";

const PAGE_SIZE = config.page_size;

function UserListingPage() {
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
    let data = await getUsersFromPage(page, PAGE_SIZE);
    setUsers((prevUsers) => [...prevUsers, ...data.list]);
  }

  function handleScroll() {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight) {
      setTimeout(() => {
        setPage((prevPage) => prevPage + 1);
      }, 500)
      
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
    <div>
      {usersComponent}
    </div>
  );
}

export default UserListingPage;