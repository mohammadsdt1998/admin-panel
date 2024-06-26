import { SlUser } from "react-icons/sl";
import InputForm from "../components/InputForm";
import { LuAtSign } from "react-icons/lu";
import { IoLockClosedOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState } from "react";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  {
    /* email validation */
  }
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function handleEmailChange(e) {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsEmailValid(validateEmail(newEmail));
  }

  function isFormValid() {
    return username !== "" && password !== "" && email !== "" && isEmailValid;
  }

  {
    /* email validation */
  }

  return (
    <div className="flex min-h-lvh w-full items-center justify-center bg-primary bg-opacity-95 text-slate-100">
      <div className="m-auto flex w-5/12 flex-col gap-6 rounded border border-gray-600 bg-primary p-6">
        <h1 className="text-4xl font-semibold text-slate-100">Register</h1>
        <p className="font-semibold text-gray-400">Create your account</p>
        {/* username */}
        <div className="flex w-full items-center">
          <SlUser
            className="h-10 w-auto rounded-l border-b border-l border-t border-gray-600
       bg-gray-700 p-3 text-slate-100"
          />
          <InputForm
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        {/* username */}

        {/* email */}
        <div className="flex w-full items-center">
          <LuAtSign
            className="h-10 w-auto rounded-l border-b border-l border-t border-gray-600
       bg-gray-700 p-3 text-slate-100"
          />
          <InputForm
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        {/* email */}

        {/* password */}
        <div className="flex w-full items-center">
          <IoLockClosedOutline
            className="h-10 w-auto rounded-l border-b border-l border-t border-gray-600
       bg-gray-700 p-3 text-slate-100"
          />
          <InputForm
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="flex w-full items-center">
          <IoLockClosedOutline
            className="h-10 w-auto rounded-l border-b border-l border-t border-gray-600
       bg-gray-700 p-3 text-slate-100"
          />
          <InputForm type="password" placeholder="Repeat password" />
        </div>

        {/* password */}

        <Link
          to={isFormValid() ? "/" : "/404"}
          className="w-full rounded-md bg-green-600 py-2 text-center capitalize text-black hover:bg-green-400"
        >
          create account
        </Link>
      </div>
    </div>
  );
}

export default Register;
