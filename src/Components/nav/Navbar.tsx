
// "use client";

// import Link from 'next/link';
// import React, { useState } from 'react';
// import { PiWebhooksLogoFill } from "react-icons/pi";
// import { AiOutlineMenu } from "react-icons/ai";
// import { IoMdClose } from "react-icons/io";
// import { useSidebar } from '@/app/context/SidebarContext';
// import { Menu } from "lucide-react";
// import MarkenDropdown from '../marken/MarkenDropdown';
// import ServicesDropdown from '../services/ServicesDropDown';


// const Navbar = () => {
//     const [toggle, setToggle] = useState(false);
//     const [dropdown, setDropdown] = useState<string | null>(null);
//     const { toggleSidebar } = useSidebar();

//     const handleDropdown = (menu: string | null) => {
//         setDropdown(menu);
//     };

//     return (
//         <div>
//             <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">


//                 <div className={`md:flex md:items-center md:space-x-6 ${toggle ? 'block' : 'hidden'}`}>
//                 <Link className="text-2xl  mr-28 font-bold flex items-center gap-2" href="/">
//                         City <span className="text-pink-600"> <PiWebhooksLogoFill size={24} /></span>

//                          Scooter
//                     </Link>
//                 <button onClick={toggleSidebar} className="text-white">
//                     <Menu className="ml-28 text-pink-600 w-6 h-6" />
//                 </button>

//                     <Link onClick={() => setToggle(false)} className="hover:text-pink-500" href="/escooter">E-Scooter</Link>



//                     <Link onClick={() => setToggle(false)} className="hover:text-pink-500" href="/gebraucht">Gebraucht</Link>
//                     <Link onClick={() => setToggle(false)} className="hover:text-pink-500" href="/teile">Teile</Link>
//                     <MarkenDropdown handleDropdown={handleDropdown} dropdown={dropdown} />
//                     <ServicesDropdown handleDropdown={handleDropdown} dropdown={dropdown} />
//                     <Link onClick={() => setToggle(false)} className="hover:text-pink-500" href="/ueberuns">Über Uns</Link>
//                 </div>
//                 <div className="md:hidden" onClick={() => setToggle((prev) => !prev)}>
//                     {toggle ? <span className="w-6 h-6"> <IoMdClose  /></span>  : <span className="w-6 h-6"> <AiOutlineMenu   /></span> }
//                 </div>
//             </nav>
//         </div>
//     );
// };

// export default Navbar;
"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { PiWebhooksLogoFill } from "react-icons/pi";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useSidebar } from '@/app/context/SidebarContext';
import { Menu } from "lucide-react";
import MarkenDropdown from '@/Components/marken/MarkenDropdown';
import ServicesDropdown from '@/Components/services/ServicesDropDown';
import EScooterDropdown from '@/Components/escooter/EscooterDropDown';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const { toggleSidebar } = useSidebar();

  const handleDropdown = (menu: string | null) => {
    setDropdown(menu === dropdown ? null : menu); // Toggle dropdown state
  };

  return (
    <div>
      <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
        <Link className="text-2xl mr-28 font-bold flex items-center gap-2" href="/">
          City <span className="text-pink-600"><PiWebhooksLogoFill size={24} /></span> Scooter
        </Link>

        <div className={`md:flex md:items-center md:space-x-6 ${toggle ? 'block' : 'hidden'}`}>
          <button onClick={toggleSidebar} className="text-white">
            <Menu className="ml-28 text-pink-600 w-6 h-6" />
          </button>

          <EScooterDropdown handleDropdown={handleDropdown} dropdown={dropdown} />
          <Link onClick={() => setToggle(false)} className="hover:text-pink-500" href="/gebraucht">Gebraucht</Link>
          <Link onClick={() => setToggle(false)} className="hover:text-pink-500" href="/teile">Teile</Link>
          <MarkenDropdown handleDropdown={handleDropdown} dropdown={dropdown} />
          <ServicesDropdown handleDropdown={handleDropdown} dropdown={dropdown} />
          <Link onClick={() => setToggle(false)} className="hover:text-pink-500" href="/ueberuns">Über Uns</Link>
        </div>

        <div className="md:hidden" onClick={() => setToggle((prev) => !prev)}>
          {toggle ? <span className="w-6 h-6"><IoMdClose /></span> : <span className="w-6 h-6"><AiOutlineMenu /></span>}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
