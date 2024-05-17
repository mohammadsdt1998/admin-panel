import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import { RxHamburgerMenu } from "react-icons/rx";

function AppLayout() {
  const [isOpen, setIsOpen] = useState(true);

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
    <div className="grid h-screen grid-cols-5 bg-primary text-gray-300 transition-all duration-300">
      <div
        className={`lg:border-r lg:border-gray-600
        ${isOpen ? "fixed left-0 top-0 z-10 h-full w-full bg-popup lg:relative lg:z-0 lg:col-span-1 lg:bg-primary" : "hidden"}
        `}
      >
        <SideBar handleClick={handleClick} />
      </div>

      <div
        className={`text-center ${isOpen ? "col-span-5 lg:col-span-4" : "col-span-5"}
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
        <main className="flex items-center justify-center">
          <p>main</p>
          <p>main</p>
          <p>main</p>
          <p>main</p>
        </main>
        <footer>footer</footer>
      </div>
    </div>
  );
}

export default AppLayout;
