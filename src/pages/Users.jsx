import { useEffect, useState } from "react";
import { getUsers } from "../services/getData";
import { useLoaderData } from "react-router-dom";
import Sales from "../components/Sales";

function Users() {
  const usersData = useLoaderData();
  console.log(usersData);

  return (
    <div>
      <Sales />
    </div>
  );
}

export async function loader() {
  const usersData = await getUsers();
  return usersData;
}

export default Users;
