"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { PiWebhooksLogoFill } from "react-icons/pi";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

import style from './gavbar.module.css';

const Gavbar = () => {
    const [toggle, setToggle] = useState(false);
    const [dropdown, setDropdown] = useState<string | null>(null);

    const handleDropdown = (menu: string) => {
        setDropdown((prev) => (prev === menu ? null : menu));
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
                        <div
                            className={`${style.navLink} ${style.dropdown}`}
                            onMouseEnter={() => handleDropdown('marken')}
                            onMouseLeave={() => setDropdown(null)}
                        >
                            <div>Marken</div>
                            {dropdown === 'marken' && (
                                <div className={style.dropdownMenu}>
                                    <div className={style.dropdownItem}>
                                        <div className={style.imageWrapper}>
                                            <img className={style.dropdownImage} src="/marken/joyor.png" alt="Joyor" />
                                        </div>
                                        <div className={style.textWrapper}>
                                            <Link href="/marken/joyor">Joyor</Link>
                                        </div>
                                    </div>
                                    <div className={style.dropdownItem}>
                                        <div className={style.imageWrapper}>
                                            <img className={style.dropdownImage} src="/marken/evercross.png" alt="Evercross" />
                                        </div>
                                        <div className={style.textWrapper}>
                                            <Link href="/marken/evercross">Evercross</Link>
                                        </div>
                                    </div>
                                    <div className={style.dropdownItem}>
                                        <div className={style.imageWrapper}>
                                            <img className={style.dropdownImage} src="/marken/miniwalker.png" alt="Miniwalker" />
                                        </div>
                                        <div className={style.textWrapper}>
                                            <Link href="/marken/miniwalker">Miniwalker</Link>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Services Dropdown */}
                        <div
                            className={`${style.navLink} ${style.dropdown}`}
                            onMouseEnter={() => handleDropdown('services')}
                            onMouseLeave={() => setDropdown(null)}
                        >
                            <div>Services</div>
                            {dropdown === 'services' && (
                                <div className={style.dropdownMenu}>
                                    <div className={style.dropdownItem}>
                                        <div className={style.imageWrapper}>
                                            <img className={style.dropdownImage} src="/marken/repair.png" alt="Repair" />
                                        </div>
                                        <div className={style.textWrapper}>
                                            <Link href="/services/repair">Repair</Link>
                                        </div>
                                    </div>
                                    <div className={style.dropdownItem}>
                                        <div className={style.imageWrapper}>
                                            <img className={style.dropdownImage} src="/images/maintenance.jpg" alt="Maintenance" />
                                        </div>
                                        <div className={style.textWrapper}>
                                            <Link href="/services/maintenance">Maintenance</Link>
                                        </div>
                                    </div>
                                    <div className={style.dropdownItem}>
                                        <div className={style.imageWrapper}>
                                            <img className={style.dropdownImage} src="/images/customization.jpg" alt="Customization" />
                                        </div>
                                        <div className={style.textWrapper}>
                                            <Link href="/services/customization">Customization</Link>
                                        </div>
                                    </div>
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

export default Gavbar;
