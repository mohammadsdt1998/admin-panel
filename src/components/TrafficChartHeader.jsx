import { IoCloudDownloadOutline } from "react-icons/io5";

function TrafficChartHeader() {
  return (
    <div className="mt-4 flex w-full flex-col items-start justify-center">
      <div className="flex w-full items-center justify-between">
        <h1 className="ml-7 text-2xl font-semibold">Traffic</h1>
        <div>
          <div className="mr-5 flex items-center gap-5">
            <div className="flex w-full items-center rounded-md border border-gray-600">
              <button className="rounded-l-md px-3 py-2 text-gray-500 hover:bg-gray-500 hover:text-slate-100">
                Day
              </button>
              <button className="border-l border-r border-gray-600 bg-gray-500 px-3 py-2 text-slate-100">
                Month
              </button>
              <button className="rounded-r-md px-3 py-2 text-gray-500 hover:bg-gray-500 hover:text-slate-100">
                Year
              </button>
            </div>
            <button className="rounded-md bg-purple-700 p-3 font-semibold text-white hover:bg-purple-800">
              <IoCloudDownloadOutline />
            </button>
          </div>
        </div>
      </div>

      <p className="ml-7 text-sm font-semibold text-gray-500">January - July</p>
    </div>
  );
}

export default TrafficChartHeader;
