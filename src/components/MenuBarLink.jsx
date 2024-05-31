import { Link } from "react-router-dom";

function MenuBarLink({ children, to }) {
  return (
    <Link
      to={to}
      className="flex w-11/12 items-center gap-2 rounded-md p-3 hover:bg-secondary hover:bg-opacity-20"
    >
      {children}
    </Link>
  );
}

export default MenuBarLink;
