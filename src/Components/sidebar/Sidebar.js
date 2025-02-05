
"use client"
import { useSidebar } from "@/app/context/SidebarContext";

import { X } from "lucide-react";


const Sidebar =()=>{

    const {isOpen, toggleSidebar}= useSidebar();

    return(
        <aside  className={`fixed top-0 left-0 h-full w-64 bg-gray-800
            text-white transform ${isOpen? "translate-x-0":"-translate-x-64"}
            transition-transform duration-300 ease-in-out`}
        
        >
        <div className="p-4 flex justify-between items-center">

        <h2 className="text-xl font-bold">Sidebar</h2>
        <button onClick={toggleSidebar}>
            <X className="w-6 h-6" />
        </button>
</div> <nav className="p-4">
        <ul>
          <li className="py-2"><a href="#" className="hover:text-gray-400">Home</a></li>
          <li className="py-2"><a href="#" className="hover:text-gray-400">About</a></li>
          <li className="py-2"><a href="#" className="hover:text-gray-400">Services</a></li>
        </ul>
      </nav>
        </aside>
    )
}



export default Sidebar;
