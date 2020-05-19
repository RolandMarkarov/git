import React from 'react';


const User = ({user, getUser, login, goBack}) => {

  if (!login) {
    return (
      <li className='list-group-item mt-1 d-flex align-items-center  list-item' key={user.id} >
        <img src={user.avatar_url} alt="" className="img-fluid avatar cursor" onClick={() => getUser(user.login)}/>
        {user.login}
        <button className='btn btn-outline-dark d-block ml-auto' onClick={() => getUser(user.login)}>login</button>
      </li>
    );
  }
  if (login) {
   return (
     <li className='list-group-item mt-1 d-flex align-items-center list-item'>
       <img src={user.avatar_url} alt="" className=" avatar" onClick={ goBack}/>
       <div className="info">
         <p  className="name">{user.name}</p>
         <p  className="created">Created at: {user.created_at}</p>
         <p  className="location">{user.location}</p>
       </div>
       <button className='btn btn-outline-dark d-block ml-auto' onClick={ goBack}>Go Back</button>
     </li>
   )

  }

};

export default User;
