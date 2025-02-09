import {categories} from '@/utils/data/data';
import Link from 'next/link';
import React from 'react';

interface EScooterDropdownProps {
  handleDropdown: (menu: string | null) => void;
  dropdown: string | null;
}

const EScooterDropdown: React.FC<EScooterDropdownProps> = ({ handleDropdown, dropdown }) => {

  return (
    <div
      className="relative group"
      onMouseEnter={() => handleDropdown('/escooter')}
      onMouseLeave={() => handleDropdown(null)}
    >
      <div className="cursor-pointer px-4 py-2 hover:text-pink-500">E-Scooter</div>
      {dropdown === '/escooter' && (
        <div className="absolute left-0 mt-2  bg-white shadow-lg rounded-md z-50">
          <div className="max-w-screen-xl mx-auto px-5">
            {categories.map((category) => (
              <div
                key={category.name}
                className="flex items-center gap-4 p-3 hover:bg-gray-100 rounded-md"
              >
                <img
                  className="w-10 h-10 object-contain"
                  src={`/marken/${category.name}.png`}
                  alt={category.name}
                />
                <Link href={category.href} className="text-gray-900 hover:text-pink-500">
                  {category.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EScooterDropdown;
