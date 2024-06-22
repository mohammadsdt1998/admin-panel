import React from "react";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";
import { SlDocs } from "react-icons/sl";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import "/src/index.css";
import MenuBarLink from "./MenuBarLink";
import { GoDot } from "react-icons/go";

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
      <CSSTransition
        in={openAccardion}
        timeout={300}
        classNames="accordion"
        unmountOnExit
      >
        <React.Fragment>
          <MenuBarLink>
            <GoDot className="text-gray-400" />
            <p className="text-lg capitalize">register</p>
          </MenuBarLink>
          <MenuBarLink>
            <GoDot className="text-gray-400" />
            <p className="text-lg capitalize">register</p>
          </MenuBarLink>
        </React.Fragment>
      </CSSTransition>
    </div>
  );
}

export default OtherPages;
