import { FiSearch } from "react-icons/fi";
import InputForm from "../components/InputForm";

function Error404() {
  return (
    <div className="bg flex min-h-lvh w-full flex-col items-center justify-center bg-primary bg-opacity-95 text-slate-100">
      <div className="flex w-5/12 gap-5">
        <h1 className="text-6xl">404</h1>
        <div className="flex flex-col gap-3">
          <h1 className="w-full text-3xl font-semibold capitalize">{`oops! you're lost`}</h1>
          <p className="text-lg text-gray-500">
            The page you are looking for was not found.
          </p>
        </div>
      </div>
      <div className="flex w-5/12 bg-primary">
        <FiSearch
          className="h-10 w-auto rounded-l border-b border-l border-t border-gray-600
        bg-gray-700 p-3 text-slate-100"
        />
        <InputForm type="text" placeholder="What are you looking for?" />
        <button className="rounded bg-blue-500 px-4 py-1 text-black hover:bg-blue-400">
          Search
        </button>
      </div>
    </div>
  );
}

export default Error404;
