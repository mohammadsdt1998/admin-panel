import React from "react";
import { CSSTransition } from "react-transition-group";
import MenuBarLink from "./MenuBarLink";
import { GoDot } from "react-icons/go";

function OtherPagesAccardion({ openAccardion }) {
  return (
    <CSSTransition
      in={openAccardion}
      timeout={300}
      classNames="accordion"
      unmountOnExit
    >
      <React.Fragment>
        <MenuBarLink to={`/login`}>
          <GoDot className="text-gray-400" />
          <p className="text-lg capitalize">login</p>
        </MenuBarLink>
        <MenuBarLink>
          <GoDot className="text-gray-400" />
          <p className="text-lg capitalize">register</p>
        </MenuBarLink>
      </React.Fragment>
    </CSSTransition>
  );
}

export default OtherPagesAccardion;
