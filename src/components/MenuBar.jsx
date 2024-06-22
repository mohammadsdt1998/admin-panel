import MenuBarLink from "./MenuBarLink";
import { IoHomeOutline } from "react-icons/io5";
import { TbUsers } from "react-icons/tb";
import OtherPages from "./OtherPages";

function MenuBar() {
  return (
    <div className="flex flex-col items-center justify-center">
      <MenuBarLink to={`/`}>
        <IoHomeOutline className="text-gray-400" />
        <p className="text-lg capitalize">Home</p>
      </MenuBarLink>
      <MenuBarLink to={`/users`}>
        <TbUsers className="text-gray-400" />
        <p className="text-lg capitalize">users</p>
      </MenuBarLink>
      <OtherPages />
    </div>
  );
}

export default MenuBar;
