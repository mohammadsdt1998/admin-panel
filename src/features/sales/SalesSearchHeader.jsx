import Loader from "../../components/Loader";
import { useSales } from "../../contexts/SalesContext";

function SalesSearchHeader() {
  const { viewsData, organicData } = useSales();

  if (!viewsData[0] || !organicData[0]) {
    return <Loader />;
  }

  const male = (viewsData[0] && viewsData[0].male) || 0;
  const female = (viewsData[0] && viewsData[0].female) || 0;

  const totalPageviews = male + female;

  const totalOrganic = Object.values(organicData[0] || {}).reduce(
    (acc, curr) => acc + parseInt(curr, 10),
    0,
  );

  return (
    <div className="col-span-1 flex items-center justify-between gap-2 px-3 py-2">
      <div className="flex w-full gap-3 border-b border-gray-600 py-3">
        <div className="h-14 w-1 bg-yellow-500"></div>
        <div className="flex w-1/2 flex-col items-start gap-1">
          <p className="text-sm text-gray-400">Pageviews</p>
          <p className="text-xl font-semibold text-slate-200">
            {totalPageviews.toLocaleString()}
          </p>
        </div>

        <div className="h-14 w-1 bg-green-600"></div>
        <div className="flex flex-col items-start gap-1">
          <p className="text-sm text-gray-400">Organic</p>
          <p className="text-xl font-semibold text-slate-200">
            {totalOrganic.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SalesSearchHeader;
