import React, { useState, useEffect } from 'react';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users'); 
      
        const data = await response.json();

        // console.log(data);
        let test = data.forEach((ele)=> {
        console.log(ele.email);
        })
        console.log(test);
        // let result = JSON.stringify(data);
        // console.log(result);
        setUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers(); 
  }, []); 

  

  return (
    <div>
      <h2>Users</h2>
      {loading ? (
        <p>Loading users...</p>
      ) : error ? (
        <p>Error loading users: {error}</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}> {user.name}
             </li>
          ))}
          
        </ul>
        
      )}


    </div>
    
  );
  
};

export default UsersList;
