import React from 'react';
import "../assets/user.scss"
import User from "./User";

const Users = ({users, getUser, loged, goBack}) => {
  return (
    <ul className="list-group">
      {users.map(user => (<User user={user} getUser={getUser} login={loged} goBack={goBack}  key={user.id}/>))}
    </ul>
  );
};

export default Users;
