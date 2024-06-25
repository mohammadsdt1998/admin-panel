import React from "react";
import { useState } from "react";
import { SlDocs } from "react-icons/sl";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import "/src/index.css";
import OtherPagesAccardion from "./OtherPagesAccardion";

function OtherPages() {
  const [openAccardion, setOpenAccardion] = useState(false);

  function handleAccardion() {
    setOpenAccardion(!openAccardion);
  }

  return (
    <div className="w-11/12">
      <div
        className="flex w-full cursor-pointer items-center justify-between rounded-md p-3 hover:bg-secondary hover:bg-opacity-20"
        onClick={handleAccardion}
      >
        <div className="flex items-center gap-2">
          <SlDocs className="text-gray-400" />
          <p className="text-lg capitalize">other pages</p>
        </div>
        {openAccardion ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
      </div>
      <OtherPagesAccardion openAccardion={openAccardion} />
    </div>
  );
}

export default OtherPages;
