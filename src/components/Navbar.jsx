import { useState } from "react";

function Navbar() {
  const [nav, setNav] = useState(false);

  const navList = ["Home", "New", "Popular", "Trending", "Categories"];
  return (
    <nav className="flex justify-between pt-5 px-3 items-center">
      <img src="/assets/logo.svg" className="w-10" />
      <button onClick={() => setNav(!nav)}>
        <img src="/assets/icon-menu.svg" />
      </button>
      <div className={`w-full h-full fixed top-0 left-0 bg-black/50 ${nav ? "block" : "hidden"}`}></div>
      <div className={`bg-white px-5 w-2/3 h-full fixed duration-300 transition-all top-0 ${nav ? "right-0" : "-right-full"}`}>
        <button onClick={() => setNav(!nav)} className="absolute right-5 top-6">
          <img src="/assets/icon-menu-close.svg" />
        </button>
        <ul className="flex flex-col gap-10 text-slate-900 mt-52 text-xl">
          {navList.map((list) => (
            <li key={list} className="hover:text-red-400">
              {list}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
