import React, {useState, useEffect} from 'react';
import axios from "axios";
import './App.css';
import Users from "./componets/Users";
import Pagination from "./componets/Pagination";

function App() {

  const [users, setUsers] = useState([]);
  const [current, setCurrent] = useState(1);
  const [perPage] = useState(6);
  const [userName, setUserName] = useState(null);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      if (!userName) {
        const res = await axios.get('https://api.github.com/users');
        return setUsers(res.data)
      }
      const res = await axios.get(`https://api.github.com/users/${userName}`);
      return setUsers([res.data])
    };
    fetchUsers()
  }, [userName])

  //get current page
  const idxOfLastUser = current * perPage
  const idxOfFirsUser = idxOfLastUser - perPage;
  const currentUser = users.length > perPage ? users.slice(idxOfFirsUser, idxOfLastUser) : users

  //get current user
  const currentUsername = (name) => {
    setUserName(name);
    setLogin(true)
  }
  const goBack = () => {
    setLogin(false)
    setUserName(null)
  }

  //pagination
  const paginate = (num) => {
    setCurrent(num)
  }

  return (
    <div className="container mt-5">
      <Users users={currentUser} getUser={currentUsername} loged={login} goBack={goBack}/>
      {users.length > 1 ? <Pagination userPerPage={perPage} totalUsers={users.length} paginate={paginate}/> : null}
    </div>
  );
}

export default App;
