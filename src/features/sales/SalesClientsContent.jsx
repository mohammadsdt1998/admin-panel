import Loader from "../../components/Loader";
import { useSales } from "../../contexts/SalesContext";
import SalesClientsProgress from "./SalesClientsProgress";

function SalesClientsContent() {
  const { clientsData } = useSales();

  if (!clientsData || !clientsData[0]) {
    return <Loader />;
  }

  return (
    <div className="col=span-1">
      <ul className="flex flex-col gap-7 p-3">
        {clientsData &&
          clientsData.map((item) => (
            <SalesClientsProgress item={item} key={item.weekDay} />
          ))}
      </ul>
    </div>
  );
}

export default SalesClientsContent;
