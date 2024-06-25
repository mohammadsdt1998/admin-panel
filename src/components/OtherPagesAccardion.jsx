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
        <MenuBarLink to="/login">
          <GoDot className="text-gray-400" />
          <p className="text-lg capitalize">login</p>
        </MenuBarLink>
        <MenuBarLink to="/register">
          <GoDot className="text-gray-400" />
          <p className="text-lg capitalize">register</p>
        </MenuBarLink>
        <MenuBarLink to="/404">
          <GoDot className="text-gray-400" />
          <p className="text-lg capitalize">error 404</p>
        </MenuBarLink>
      </React.Fragment>
    </CSSTransition>
  );
}

export default OtherPagesAccardion;
