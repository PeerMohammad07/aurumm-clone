import React, { useState, useEffect } from "react";
import { Sun, Moon, ArrowRight } from "lucide-react";
import { AlignRight } from "lucide-react";
import { Link } from "react-router-dom";

export interface INav {
  setDark?: (color: string) => void;
}

const Navbar: React.FC<INav> = ({ setDark }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
      setDark && setDark("black");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
      setDark && setDark("white");
    }
  }, [setDark]);

  const toggleTheme = () => {
    const newTheme = !isDarkMode ? "dark" : "light";
    setIsDarkMode(!isDarkMode);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDark && setDark("black");
    } else {
      document.documentElement.classList.remove("dark");
      setDark && setDark("white");
    }
    localStorage.setItem("theme", newTheme);
  };

  const toggleDropdown = () => {
    setDropDown(!dropDown);
  };

  return (
    <nav className="bg-white dark:bg-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
        <img
          src="/Auss/Aurum_Logo.png"
          alt="Aurum Logo"
          className="h-10 w-auto"
        />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          <ul className="flex items-center space-x-8 font-pt-serif text-gray-700 dark:text-white">
            <Link
              to={"/"}
              className="hover:text-gray-900 dark:hover:text-gray-300 cursor-pointer transition duration-300"
            >
              Home
            </Link>

            <li className="relative group">
              <div className="hover:text-gray-900 dark:hover:text-gray-300 cursor-pointer transition duration-300">
                Products & Features
              </div>
              <div className="absolute w-48 left-0 hidden group-hover:block bg-white dark:bg-black shadow-lg rounded-lg overflow-hidden z-50">
                <div className="flex items-center hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-2">
                  <img src="/Auss/icon.png" alt="icon" className="h-4" />
                  <Link
                    to={"/product"}
                    className="px-2 py-2 cursor-pointer transition duration-300"
                  >
                    AuSales
                  </Link>
                </div>
              </div>
            </li>

            <Link
              to={"/"}
              className="hover:text-gray-900 dark:hover:text-gray-300 cursor-pointer transition duration-300"
            >
              Contact
            </Link>
          </ul>

          <button className="relative inline-flex items-center justify-center p-1 group transition duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="px-4 flex text-white rounded-full relative group-hover:bg-transparent group-hover:text-black border-2 border-transparent transition duration-300 text-sm">
              Get a Demo
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </button>

          <button
            onClick={toggleTheme}
            className="text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-300 transition duration-300"
          >
            {isDarkMode ? <Moon /> : <Sun />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div className="md:hidden">
          <button
            onClick={toggleDropdown}
            className="text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-300"
          >
            <AlignRight className="w-6 h-6" />
          </button>

          {dropDown && (
            <div className="absolute left-0 right-0 top-16 bg-white dark:bg-black text-gray-700 dark:text-white shadow-lg rounded-lg p-4 space-y-4 z-50">
              <ul>
                <li className="hover:text-gray-900 dark:hover:text-gray-300 cursor-pointer transition duration-300">
                  <Link to={"/"}>Home</Link>
                </li>
                <li className="hover:text-gray-900 dark:hover:text-gray-300 cursor-pointer transition duration-300">
                  <Link to={"/product"}>Products & Features</Link>
                </li>
                <li className="hover:text-gray-900 dark:hover:text-gray-300 cursor-pointer transition duration-300">
                  <Link to={"/"}>Contact</Link>
                </li>
              </ul>
              <button
                onClick={toggleTheme}
                className="text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-300 transition duration-300 w-full flex justify-center items-center"
              >
                {isDarkMode ? <Moon className="mr-2" /> : <Sun className="mr-2" />}
                {isDarkMode ? "Dark Mode" : "Light Mode"}
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
