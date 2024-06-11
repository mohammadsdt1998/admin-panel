import { getUsers } from "../services/getData";
import { useLoaderData } from "react-router-dom";
import Sales from "../features/sales/Sales";
import { SalesProvider } from "../contexts/SalesContext";

function Users() {
  const usersData = useLoaderData();

  return (
    <SalesProvider>
      <div className="mx-auto h-auto w-full max-w-7xl gap-5 p-4">
        <Sales />
      </div>
    </SalesProvider>
  );
}

export async function loader() {
  const usersData = getUsers();

  return usersData;
}

export default Users;
