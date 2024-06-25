import { SlUser } from "react-icons/sl";
import InputForm from "../components/InputForm";
import { IoLockClosedOutline } from "react-icons/io5";

function LoginForms({ username, setUsername, password, setPassword }) {
  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  return (
    <div className="flex w-full flex-col gap-5">
      {/* username */}
      <div className="flex w-full items-center">
        <SlUser
          className="h-10 w-auto rounded-l border-b border-l border-t border-gray-600
       bg-gray-700 p-3 text-slate-100"
        />
        <InputForm
          type="text"
          value={username}
          placeholder="Username"
          onChange={handleUsernameChange}
        />
      </div>

      {/* username */}

      {/* password */}
      <div className="flex w-full items-center">
        <IoLockClosedOutline
          className="h-10 w-auto rounded-l border-b border-l border-t 
      border-gray-600 bg-gray-700 p-3 text-slate-100"
        />
        <InputForm
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>

      <p className="text-sm text-gray-500">hint : user & pass = sdt</p>
      {/* password */}
    </div>
  );
}

export default LoginForms;
