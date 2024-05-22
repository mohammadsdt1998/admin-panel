import MenuBar from "./MenuBar";

function SideBar({ handleClick }) {
  return (
    <div
      className="flex w-1/4 flex-col gap-10 border-b border-r
  border-gray-600 bg-primary lg:w-full lg:border-none"
    >
      <div className="flex w-full items-center justify-between border-b border-gray-600 p-4 lg:mt-3 lg:justify-normal">
        <p className="text-lg font-semibold">SDT</p>
        <span
          className="block cursor-pointer text-5xl font-semibold text-gray-400 hover:text-gray-100 lg:hidden"
          onClick={handleClick}
        >
          &times;
        </span>
      </div>
      <MenuBar />
    </div>
  );
}

export default SideBar;
