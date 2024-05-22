import React, { useState } from "react";
import { CgMoreVertical } from "react-icons/cg";
function DropDownBtn() {
  const [isOpen, setIsOpen] = useState(false);

  function handleDropDown() {
    setIsOpen(!isOpen);
  }

  return (
    <React.Fragment>
      <button>
        <CgMoreVertical
          onClick={handleDropDown}
          className="text-xl text-slate-100"
        />
      </button>
      {isOpen && (
        <ul className="absolute z-10 ml-16 mt-48 rounded-md bg-primary py-1 text-left">
          <li className="w-full cursor-pointer px-3 py-1 hover:bg-gray-700">
            <button>Action</button>
          </li>
          <li className="w-full cursor-pointer px-3 py-1 hover:bg-gray-700">
            <button>Another action</button>
          </li>
          <li className="w-full cursor-pointer px-3 py-1 hover:bg-gray-700">
            <button>Something else here</button>
          </li>
          <li className="w-full px-3 py-1">
            <button disabled className="cursor-default text-gray-600">
              Disabled action
            </button>
          </li>
        </ul>
      )}
    </React.Fragment>
  );
}

export default DropDownBtn;
