import Link from 'next/link';
import React from 'react';

interface MarkenDropdownProps {
    handleDropdown: (menu: string | null) => void;
    dropdown: string | null;
}

const MarkenDropdown: React.FC<MarkenDropdownProps> = ({ handleDropdown, dropdown }) => (
    <div
        className="relative group"
        onMouseEnter={() => handleDropdown('/marken')}
        onMouseLeave={() => handleDropdown(null)}
    >
        <div className="cursor-pointer px-4 py-2 hover:text-pink-500">Marken</div>
        {dropdown === '/marken' && (
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md p-2 z-50">
                {["joyor", "evercross", "miniwalker"].map((brand) => (
                    <div key={brand} className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md">
                        <img className="w-10 h-10 object-contain" src={`/marken/${brand}.png`} alt={brand} />
                        <Link className="text-gray-900 hover:text-pink-500" href={`/marken/${brand}`}>
                            {brand.charAt(0).toUpperCase() + brand.slice(1)}
                        </Link>
                    </div>
                ))}
            </div>
        )}
    </div>
);

export default MarkenDropdown;
