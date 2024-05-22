import { useEffect, useState } from "react";
import { getUsers } from "../services/getData";
import { useLoaderData } from "react-router-dom";

function Users() {
  // const [users, setUsers] = useState([]);

  const usersData = useLoaderData();
  console.log(usersData);

  return (
    <div className="">
      <h1>Users List</h1>
      <ul>
        {usersData.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export async function loader() {
  const usersData = await getUsers();
  return usersData;
}

export default Users;

// const BASE_URL = "http://localhost:8000";

// useEffect(function () {
//   async function getUsers() {
//     const res = await fetch(`${BASE_URL}/users`);

//     if (!res.ok) {
//       throw new Error(`HTTP error : status : ${res.status}`);
//     }
//     const data = await res.json();
//     setUsers(data);
//   }

//   getUsers();
// }, []);
