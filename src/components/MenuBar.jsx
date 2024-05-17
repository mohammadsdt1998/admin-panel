import { Link } from "react-router-dom";

function MenuBar() {
  return (
    <div className="ml-3 flex flex-col justify-center p-1">
      <Link to="/">Home</Link>
      <Link to="/users">Users</Link>
    </div>
  );
}

export default MenuBar;
