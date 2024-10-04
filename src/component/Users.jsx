import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const loadUsers = useLoaderData();
  const [users, setUsers] = useState(loadUsers);
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          setUsers(users.filter((user) => user._id !== id));
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h2>Total Users: {users.length}</h2>
      {users?.map((user) => (
        <div
          className="border-[1px] border-red-400 rounded-xl mt-6"
          key={user._id}
        >
          <h3>{user._id}</h3>
          <h3>Name:{user.name}</h3>
          <p>Email:{user.email}</p>
          <Link to={`/users/${user._id}`}><button className="btn">Update</button></Link>
          <button className="btn ml-10" onClick={() => handleDelete(user._id)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default Users;
