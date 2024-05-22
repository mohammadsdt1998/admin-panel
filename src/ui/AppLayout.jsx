import { Link, Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import { RxHamburgerMenu } from "react-icons/rx";

function AppLayout() {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();
  const pathname = location.pathname.replace(/^\/+/, "");

  function handleClick() {
    setIsOpen(!isOpen);
  }

  useEffect(function () {
    function handleResize() {
      if (window.innerWidth < 1024) {
        setIsOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="grid h-screen grid-cols-6 bg-primary text-gray-300 transition-all duration-300">
      <div
        className={`lg:border-r lg:border-gray-600
        ${isOpen ? "fixed left-0 top-0 z-10 h-full w-full bg-popup lg:relative lg:z-0 lg:col-span-1 lg:bg-primary" : "hidden"}
        `}
      >
        <SideBar handleClick={handleClick} />
      </div>

      <div
        className={`text-center ${isOpen ? "col-span-6 lg:col-span-5" : "col-span-6"}
         transition-all duration-300`}
      >
        <header className="flex items-center justify-between border-b border-gray-600 p-2">
          <div className="ml-3 flex items-center gap-5">
            <RxHamburgerMenu
              onClick={handleClick}
              className="cursor-pointer hover:text-gray-100"
            />
            <Link to="/" className="hidden text-white md:block">
              Dashboard
            </Link>
          </div>
          <Navbar />
        </header>
        <main className="flex flex-col items-center justify-center bg-slate-900">
          <div className="flex w-full gap-3 border-b border-gray-600 bg-primary p-3">
            <Link
              className="capitalize text-purple-600 underline hover:text-purple-400"
              to="/"
            >
              home
            </Link>
            <span>/</span>
            <Link
              to={location.pathname}
              className="capitalize text-purple-600 underline hover:text-purple-400"
            >
              {pathname}
            </Link>
          </div>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default AppLayout;
