import Sales from "../features/sales/Sales";
import { SalesProvider } from "../contexts/SalesContext";

function Users() {
  return (
    <SalesProvider>
      <div className="mx-auto h-auto w-full max-w-7xl gap-5 p-4">
        <Sales />
      </div>
    </SalesProvider>
  );
}

export default Users;
