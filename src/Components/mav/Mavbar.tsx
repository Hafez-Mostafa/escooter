"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { PiWebhooksLogoFill } from "react-icons/pi";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

import style from './mavbar.module.css';

const Mavbar = () => {
    const [toggle, setToggle] = useState(false);
    const [dropdown, setDropdown] = useState<string | null>(null); // Type for dropdown

    const handleDropdown = (menu: string) => {
        setDropdown((prev) => (prev === menu ? null : menu)); // Toggle dropdown visibility
    };

    return (
        <div>
            <nav className={style.navbar}>
                <div>
                    <Link className={style.navLogo} href="/">
                        City<PiWebhooksLogoFill /> Scooter
                    </Link>
                </div>
                
                <div className={`${style.navLinksWrapper} ${toggle ? style.open : ''}`}>
                    <div className={style.navLinks}>
                        <Link onClick={() => setToggle(false)} className={style.navLink} href="/e-scooter">E-Scooter</Link>
                        <Link onClick={() => setToggle(false)} className={style.navLink} href="/gebraucht">Gebraucht</Link>
                        <Link onClick={() => setToggle(false)} className={style.navLink} href="/teile">Teile</Link>
                        
                        {/* Marken Dropdown */}
                        <div className={`${style.navLink} ${style.dropdown}`}>
                            <div onMouseOver={() => handleDropdown('marken')}>
                                Marken
                            </div>
                            {dropdown === 'marken' && (
                                <div className={style.dropdownMenu}>
                                    <Link onClick={() => setToggle(false)} href="/marken/joyor">Joyor</Link>
                                    <Link onClick={() => setToggle(false)} href="/marken/evercross">Evercross</Link>
                                    <Link onClick={() => setToggle(false)} href="/marken/miniwalker">Miniwalker</Link>
                                </div>
                            )}
                        </div>

                        {/* Services Dropdown */}
                        <div className={`${style.navLink} ${style.dropdown}`}>
                            <div onMouseOver={() => handleDropdown('services')}>
                                Services
                            </div>
                            {dropdown === 'services' && (
                                <div className={style.dropdownMenu}>
                                    <Link onClick={() => setToggle(false)} href="/services/repair">Repair</Link>
                                    <Link onClick={() => setToggle(false)} href="/services/maintenance">Maintenance</Link>
                                    <Link onClick={() => setToggle(false)} href="/services/customization">Customization</Link>
                                </div>
                            )}
                        </div>

                        <Link onClick={() => setToggle(false)} className={style.navLink} href="/ueberuns">Über Uns</Link>
                    </div>
                </div>
                <div className={style.menu} onClick={() => setToggle((prev) => !prev)}>
                    {toggle ? <IoMdClose /> : <AiOutlineMenu />}
                </div>
            </nav>
        </div>
    );
};

export default Mavbar;
