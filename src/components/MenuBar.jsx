import { Link } from "react-router-dom";
import MenuBarLink from "./MenuBarLink";
import { IoHomeOutline } from "react-icons/io5";
import { TbUsers } from "react-icons/tb";

function MenuBar() {
  return (
    <div className="flex flex-col items-center justify-center">
      <MenuBarLink to={`/`}>
        <IoHomeOutline className="text-gray-400" />
        <p className="text-lg">Home</p>
      </MenuBarLink>
      <MenuBarLink to={`/users`}>
        <TbUsers className="text-gray-400" />
        <p className="text-lg">Users</p>
      </MenuBarLink>
    </div>
  );
}

export default MenuBar;
