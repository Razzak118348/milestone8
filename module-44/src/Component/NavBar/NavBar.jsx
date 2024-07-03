import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
const NavBar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/service", name: "Service" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/ask", name: "Ask" },
  ];

  return (
    <nav
      className={`text-black m-4  
      bg-gray-400
        rounded-md p-2 md:p-0`}
    >
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        {open == true ? (
          <RxCross2 className="m-4 text-2xl  "></RxCross2>
        ) : (
          <RiMenu2Fill className="m-4 text-2xl  "></RiMenu2Fill>
        )}
      </div>
      <ul
        className={`md:flex justify-around md:static absolute ml-12  duration-1000
                ${open ? "top-16" : "-top-60"}
                bg-gray-400 text-xl py-2 px-5 md:p-0 rounded-md shadow-lg`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
