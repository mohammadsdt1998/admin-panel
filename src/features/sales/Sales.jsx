import UsersTable from "../../components/UsersTable";
import SalesClientsContent from "./SalesClientsContent";
import SalesClientsHeader from "./SalesClientsHeader";
import SalesSearchContent from "./SalesSearchContent";
import SalesSearchHeader from "./SalesSearchHeader";

function Sales() {
  return (
    <div className="flex h-auto w-full flex-col rounded-lg border border-gray-600 bg-primary">
      <header className="flex w-full rounded-t-lg border-b border-gray-600 bg-secondary bg-opacity-15 p-2">
        <p className="ml-2 text-base text-slate-200">Traffic & Sales</p>
      </header>
      <div className="flex flex-col">
        <div className="grid grid-cols-1 gap-2 pb-7 md:grid-cols-2 md:flex-row">
          {/*clients details */}
          <div>
            <SalesClientsHeader />
            <SalesClientsContent />
          </div>
          {/*clients details */}

          {/*search details */}
          <div>
            <SalesSearchHeader />
            <SalesSearchContent />
          </div>

          {/*search details */}
        </div>

        <UsersTable />
      </div>
    </div>
  );
}

export default Sales;
