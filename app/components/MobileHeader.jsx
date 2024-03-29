"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineAlignRight, AiOutlineClose } from "react-icons/ai";
import img from "../assets/images/author/footer-img.png";
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { TbBrandGithub, TbBrandTwitter } from "react-icons/tb";
import { Link } from "react-scroll";
import { CiDark } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

const MobileHeader = ({ theme, changeTheme }) => {
  const [toggle, setToggle] = useState(false);
  const [navEffect, setNavEffect] = useState(false);

  const activateStickyNav = () => {
    if (window.scrollY >= 150) {
      setNavEffect(true);
    } else {
      setNavEffect(false);
    }
  };

  // adding the eventListner
  addEventListener("scroll", activateStickyNav);

  // handle toggle
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div
      className={
        navEffect
          ? `header flex justify-between items-center px-6 py-2 sticky top-0 ${
              theme === "dark" ? "bg-[#212428]" : "bg-[#dde1e7]"
            } shadow-2xl md:hidden z-10 ease-in-out duration-5000`
          : "header flex justify-between items-center px-6 py-2 relative top-0 bg-transparent border-b-2 border-gray-8 z-10 md:hidden ease-in-out duration-200"
      }
    >
      {/* logo */}
      <div className="logo flex justify-center items-center space-x-2">
        <div className="w-10 h-10 bg-gray-800 rounded-full overflow-hidden">
          <img src={img} alt="" />
        </div>
        <h1 className=" block text-2xl font-bold">Akachukwu</h1>
      </div>
      <button className="text-3xl ml-8" onClick={changeTheme}>
        {theme === "dark" ? <CiDark /> : <MdDarkMode />}
      </button>
      <AiOutlineAlignRight
        className="text-primary text-3xl font-bold"
        onClick={handleToggle}
      />
      {/* Mobile menu list */}
      <div
        className={
          toggle !== true
            ? `z-10 p-4 absolute top-0 -left-[850px] w-[80%] ${
                theme === "dark" ? "bg-[#212428]" : "bg-[#ECF0F3]"
              }  h-screen opacity-100 space-y-8 ease-out duration-300`
            : `z-10 p-4 absolute top-0 left-0 w-[80%] ${
                theme === "dark" ? "bg-[#212428]" : "bg-[#ECF0F3]"
              }  h-screen opacity-100 space-y-8 ease-in duration-300`
        }
      >
        {/* header */}
        <div className="logo flex justify-between items-center space-x-2">
          <div className="flex items-center gap-2">
            <div className="w-15 h-15 bg-gray-800 rounded-full overflow-hidden">
              <img src={img} className="w-[100%]" alt="" />
            </div>
            <h1 className=" block text-2xl font-bold">Akachukwu</h1>
          </div>
          <button className="text-3xl ml-8" onClick={changeTheme}>
            {theme === "dark" ? <CiDark /> : <MdDarkMode />}
          </button>
          <AiOutlineClose
            className={`text-primary font-bold p-2 items-center rounded-full ${
              theme == "dark" ? "dark-theme-shadow-effect" : "shadow-default"
            }`}
            size={40}
            onClick={handleToggle}
          />
        </div>
        <p className="pb-4 border-b-2 border-gray-300">
          A FullStack web Developer...
        </p>
        <div className="flex-col space-y-8">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={handleToggle}
            className=" block text-2xl cursor-pointer"
          >
            Home
          </Link>
          {/* <Link
              to=""
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={handleToggle}
              className=" block text-2xl cursor-pointer"
            >
              About us
            </Link> */}
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={handleToggle}
            className=" block text-2xl cursor-pointer"
          >
            Services
          </Link>
          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={handleToggle}
            className=" block text-2xl cursor-pointer"
          >
            Portfolio
          </Link>
          <Link
            to="resume"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={handleToggle}
            className=" block text-2xl cursor-pointer"
          >
            Resume
          </Link>
          <Link
            to="testimonies"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={handleToggle}
            className=" block text-2xl cursor-pointer"
          >
            Testimony
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={handleToggle}
            className=" block text-2xl cursor-pointer"
          >
            Contact
          </Link>
        </div>
        {/* socials */}
        <div className="footer absolute bottom-16 mb-8">
          <h3 className="font-medium text-lg text-primary">Find me with</h3>
          <div className="mt-6 flex justify-between space-x-2">
            <a
              href="#"
              className={`p-3 ${
                theme == "dark" ? "dark-theme-shadow-effect" : "shadow-default"
              } inline-block`}
            >
              <FiFacebook className="text-3xl" />
            </a>
            <a
              href="#"
              className={`p-3 ${
                theme == "dark" ? "dark-theme-shadow-effect" : "shadow-default"
              } inline-block`}
            >
              <TbBrandTwitter className="text-3xl" />
            </a>
            <a
              href="#"
              className={`p-3 ${
                theme == "dark" ? "dark-theme-shadow-effect" : "shadow-default"
              } inline-block`}
            >
              <TbBrandGithub className="text-3xl" />
            </a>
            <a
              href="#"
              className={`p-3 ${
                theme == "dark" ? "dark-theme-shadow-effect" : "shadow-default"
              } inline-block`}
            >
              <FiLinkedin className="text-3xl" />
            </a>
          </div>
        </div>
      </div>
      <div
        className={
          toggle !== true
            ? "hidden"
            : "overlay h-screen w-full bg-black absolute top-0 left-0 opacity-90"
        }
        onClick={handleToggle}
      ></div>
    </div>
  );
};

export default MobileHeader;
