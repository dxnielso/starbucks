// Liberies
import { motion } from "framer-motion";
import { useState } from "react";

const Header = () => {
  const [toggled, setToggled] = useState(false);

  return (
    <header className={toggled ? 'mb-[90px]' : undefined}>
      <div className={(toggled ? 'fixed' : 'relative') + ` md:relative fixed right-0 left-0 top-0 h-[90px] bg-white px-8 flex items-center justify-between z-50 shadow-xl`}>
        <div className="w-fit h-min">
          <img src="/logo.svg" alt="Logo de Starbucks" />
        </div>
        <div className="hidden sm:flex bg-purple-400">
          {/* <Navbar /> */}
          <div>
            <a href="/">Localizar Tienda</a>
            <a href="/">Ingresar</a>
            <a href="/">Unete</a>
          </div>
        </div>

        {/* Menu hamburger icon */}
        <div
          onClick={() => setToggled(!toggled)}
          className="space-y-1.5 cursor-pointer"
        >
          <motion.span
            animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
            className="block h-0.5 w-8 bg-gray-800"
          ></motion.span>
          <motion.span
            animate={{ width: toggled ? 0 : 24 }}
            className="block h-0.5 w-6 bg-gray-800"
          ></motion.span>
          <motion.span
            animate={{
              rotateZ: toggled ? -45 : 0,
              y: toggled ? -8 : 0,
              width: toggled ? 32 : 16,
            }}
            className="block h-0.5 w-4 bg-gray-800"
          ></motion.span>
        </div>
      </div>
      {toggled && (
        <div className="fixed top-[90px] bottom-0 right-0 left-0 bg-[#00000060] z-40">
          <motion.div
            className="w-[80%] h-screen bg-white absolute top-0 bottom-0 right-0"
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeOut" }}
          ></motion.div>
        </div>
      )}
    </header>
  );
};
export default Header;
