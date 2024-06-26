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

        <div
          className="flex w-full min-w-72 flex-col items-center justify-around gap-2
         rounded-r border-l border-gray-600 bg-indigo-500 p-10"
        >
          <h1 className="w-full p-3 text-center text-4xl font-semibold capitalize">
            sign up
          </h1>
          <p className="w-full p-2 text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Link
            to={"/register"}
            className="rounded bg-indigo-600 bg-opacity-90 p-2 capitalize"
          >
            register now!
          </Link>
        </div>

        {/* register div in login page */}
      </div>
    </div>
  );
}

export default Login;
