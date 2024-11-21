import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { WavyBackground } from "../ui/wavy-background";

const Layout: React.FC<any> = ({
  heading,
  subheading,
  buttonLabel,
  onButtonClick,
  textStyle,
  buttonStyle,
}) => {
  const [isDarkMode, setIsDarkMode] = useState("white");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setIsDarkMode(savedTheme === "dark" ? "black" : "white");
  }, []);

  return (
    <>
      <Navbar setDark={setIsDarkMode} />
      <WavyBackground backgroundFill={isDarkMode}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <h1
            className={`font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-4xl leading-tight ${textStyle}`}
          >
            {heading}
          </h1>

          <p className={`mt-4 text-base sm:text-lg lg:text-xl xl:text-2xl ${textStyle}`}>
            {subheading}
          </p>

          {onButtonClick && (
            <div className="mt-6 flex justify-center">
              <button
                className={`px-6 py-3 rounded-full text-lg sm:text-xl shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105 ${buttonStyle}`}
                onClick={onButtonClick}
              >
                {buttonLabel}
              </button>
            </div>
          )}
        </div>
      </WavyBackground>
    </>
  );
};

export default Layout;
