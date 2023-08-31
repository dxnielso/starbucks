// Liberies
import { motion } from "framer-motion";
import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
// Components
import Button from "./Button";

const Header = () => {
  const [toggled, setToggled] = useState(false);

  return (
    <header className={toggled ? "mb-[70px]" : undefined}>
      <div
        className={`${toggled ? "fixed": "relative"} md:relative right-0 left-0 top-0 h-[70px] md:h-[90px] bg-white px-8 flex items-center justify-between z-50 shadow-lg xl:px-[200px] 2xl:px-[350px]`}
      >
        {/* Logo */}
        <a href="/starbucks/" className="h-11 w-11 md:w-14 md:h-14 md:mr-5">
          <img src="/logo.svg" alt="Logo de Starbucks" />
        </a>

        {/* Menu Laptop */}
        <nav className="hidden md:flex md:flex-1 md:justify-between items-center">
          <ul className="flex justify-center items-center gap-x-7 pl-8 text-[#2b2b2b] text-sm font-bold uppercase tracking-wider duration-100">
            <li className="relative"><a href="/menu" className="before:absolute before:w-full before:h-[5px] before:bg-[#1E3932] before:-bottom-8 before:hidden hover:before:inline-block hover:text-[#1E3932]">Menú</a></li>
            <li className="relative"><a href="/rewards" className="before:absolute before:w-full before:h-[5px] before:bg-[#1E3932] before:-bottom-8 before:hidden hover:before:inline-block hover:text-[#1E3932]">Rewards</a></li>
          </ul>
          <ul className="flex justify-center items-center gap-x-6">
            <li>
              <a href="/starbucks/localizar-tienda" className="flex justify-center items-center gap-x-1 text-sm font-semibold text-[#2b2b2b] duration-200 hover:opacity-80">
                <FaMapMarkerAlt />
                <span>Localizar Tienda</span>
              </a>
            </li>
            <div className="flex justify-center items-center gap-x-3">
              <li><Button border="border-[#2b2b2b]" button={{text: "Ingresar", url: "/starbucks/login"}} color="text-[#2b2b2b]" /></li>
              <li><Button border="border-[#2b2b2b]" button={{text: "Únete", url: "/starbucks/register"}} fill={true} bgColor="bg-[#2b2b2b]" color="text-[#FFFFFF]" /></li>
            </div>
          </ul>
        </nav>

        {/* Menu hamburger icon */}
        <div
          onClick={() => setToggled(!toggled)}
          className="space-y-1.5 cursor-pointer md:hidden"
        >
          <motion.span
            animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
            className="block h-0.5 w-7 bg-gray-800"
          ></motion.span>
          <motion.span
            animate={{ width: toggled ? 0 : 20 }}
            className="block h-0.5 w-5 bg-gray-800"
          ></motion.span>
          <motion.span
            animate={{
              rotateZ: toggled ? -45 : 0,
              y: toggled ? -8 : 0,
              width: toggled ? 28 : 14,
            }}
            className="block h-0.5 w-3.5 bg-gray-800"
          ></motion.span>
        </div>
      </div>
      {toggled && (
        // Side menú
        <div className="fixed top-[70px] bottom-0 right-0 left-0 bg-[#00000060] z-40 md:hidden">
          <motion.div
            className="w-[80%] h-screen bg-white absolute top-0 bottom-0 right-0 p-6"
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeInOut" }}
          >
            <nav className="w-full my-6 uppercase text-base font-semibold text-[#2b2b2b] flex flex-col space-y-6">
              <a href="/starbucks/menu">Menú</a>
              <a href="/starbucks/rewards">Rewards</a>
            </nav>
            <span className="block w-full h-[1px] bg-gray-300 my-5"></span>
            <div className="flex flex-col space-y-4">
              <a href="/starbucks/localizar-tienda" className="text-base font-semibold text-[#2b2b2b] flex space-x-3 items-center justify-start capitalize">
                <FaMapMarkerAlt />
                <span>Localizar tienda</span>
              </a>
              <div className="flex space-x-4 justify-start items-center">
                <Button border="border-[#2b2b2b]" button={{text: "Ingresar", url: "/starbucks/login"}} color="text-[#2b2b2b]" />
                <Button border="border-[#2b2b2b]" button={{text: "Únete", url: "/starbucks/register"}} fill={true} bgColor="bg-[#2b2b2b]" color="text-[#FFFFFF]" />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </header>
  );
};
export default Header;
