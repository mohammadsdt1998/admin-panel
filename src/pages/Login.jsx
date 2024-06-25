import { useState } from "react";
import { Link } from "react-router-dom";
import LoginForms from "../components/LoginForms";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex min-h-lvh w-full items-center justify-center bg-primary bg-opacity-95 text-white">
      <div className="m-auto flex w-7/12 flex-col rounded rounded-md border border-gray-600 md:flex-row">
        {/* login */}
        <div className="flex w-full flex-col gap-4 rounded-l bg-primary p-10">
          <h1 className="text-4xl font-semibold capitalize text-slate-200">
            login
          </h1>
          <h3 className="text-gray-400">Sign In to your account</h3>

          {/* login forms */}
          <LoginForms
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
          />
          {/* login forms */}
          <div className="flex w-full flex-col items-center justify-around gap-3 sm:flex-row">
            <Link
              to={username && password === "sdt" ? "/" : "/404"}
              className="rounded bg-indigo-500 px-6 py-2 text-slate-100"
            >
              Login
            </Link>
            <a
              href="#"
              className="text-nowrap text-indigo-600 underline hover:text-indigo-500"
            >
              Forget password?
            </a>
          </div>
        </div>

        {/* login */}

        {/* register div in login page */}

        <div className="w-full rounded-r border-l border-gray-600 bg-indigo-500 p-10">
          register
        </div>

        {/* register div in login page */}
      </div>
    </div>
  );
}

export default Login;
