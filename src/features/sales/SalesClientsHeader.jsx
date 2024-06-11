import Loader from "../../components/Loader";
import { useSales } from "../../contexts/SalesContext";

function SalesClientsHeader() {
  const { clientsData } = useSales();

  if (!clientsData[0]) {
    return <Loader />;
  }

  const totalNewClients = clientsData.reduce(
    (acc, item) => acc + item.newClients,
    0,
  );

  const totalRecurringClients = clientsData.reduce(
    (acc, item) => acc + item.recurringClients,
    0,
  );
  return (
    <div className="col-span-1 flex items-center justify-between gap-2 px-3 py-2">
      <div className="flex w-full gap-3 border-b border-gray-600 py-3">
        <div className="h-14 w-1 bg-sky-500"></div>
        <div className="flex w-1/2 flex-col items-start gap-1">
          <p className="text-sm text-gray-400">New Clients</p>
          <p className="text-xl font-semibold text-slate-200">
            {totalNewClients.toLocaleString()}
          </p>
        </div>

        <div className="h-14 w-1 bg-red-500"></div>
        <div className="flex flex-col items-start gap-1">
          <p className="text-sm text-gray-400">Recurring Clients</p>
          <p className="text-xl font-semibold text-slate-200">
            {totalRecurringClients.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SalesClientsHeader;
