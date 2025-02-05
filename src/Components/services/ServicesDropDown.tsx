import Link from 'next/link';
import React from 'react';

interface ServicesDropdownProps {
    handleDropdown: (menu: string | null) => void;
    dropdown: string | null;
}

const ServicesDropdown: React.FC<ServicesDropdownProps> = ({ handleDropdown, dropdown }) => (
    <div
        className="relative group"
        onMouseEnter={() => handleDropdown('/services')}
        onMouseLeave={() => handleDropdown(null)}
    >
        <div className="cursor-pointer px-4 py-2 hover:text-pink-500">Services</div>
        {dropdown === '/services' && (
            <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md p-3 z-50">
                {[
                    { name: "repair", img: "repair.png" },
                    { name: "maintenance", img: "maintenance.jpg" },
                    { name: "customization", img: "customization.jpg" },
                ].map((service) => (
                    <div key={service.name} className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md">
                        <img className="w-12 h-12 object-contain" src={`/services/${service.img}`} alt={service.name} />
                        <Link className="text-gray-900 hover:text-pink-500 font-medium" href={`/services/${service.name}`}>
                            {service.name.charAt(0).toUpperCase() + service.name.slice(1)}
                        </Link>
                    </div>
                ))}
            </div>
        )}
    </div>
);

export default ServicesDropdown;
