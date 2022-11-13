import { useState } from "react";

function Navbar() {
  const [nav, setNav] = useState(false);

  const navList = ["Home", "New", "Popular", "Trending", "Categories"];
  return (
    <nav className="flex justify-between pt-5 px-3 items-center lg:col-span-3">
      <img src="/assets/logo.svg" className="w-10" />
      <button className="lg:hidden" onClick={() => setNav(!nav)}>
        <img src="/assets/icon-menu.svg" />
      </button>
      <div className={`w-full h-full fixed top-0 left-0 bg-black/50 z-9 ${nav ? "block" : "hidden"} lg:hidden`}></div>
      <div className={`bg-white px-5 w-2/3 h-full fixed z-10 duration-300 transition-all top-0 ${nav ? "right-0" : "-right-full"} lg:static lg:px-0 lg:w-auto`}>
        <button onClick={() => setNav(!nav)} className="absolute right-5 top-6 lg:hidden">
          <img src="/assets/icon-menu-close.svg" />
        </button>
        <ul className="flex flex-col gap-10 text-gray-500 mt-52 text-xl lg:flex-row lg:mt-0">
          {navList.map((list) => (
            <li key={list} className="cursor-pointer hover:text-red-400">
              {list}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
