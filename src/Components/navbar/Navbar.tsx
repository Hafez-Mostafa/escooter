"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { PiWebhooksLogoFill } from "react-icons/pi";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

import style from './navbar.module.css';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div>
            <nav className={style.navbar}>
                <div>
                    <Link className={style.navLogo} href="/">
                        City<PiWebhooksLogoFill /> Scooter
                    </Link>
                </div>
                <div className={style.menu} onClick={() => setToggle(prev => !prev)}>
                    {toggle ? <IoMdClose /> : <AiOutlineMenu />}
                </div>
                <div className={`${style.navLinksWrapper} ${toggle ? style.open : ''}`}>
                    <div className={style.navLinks}>
                        <Link onClick={() => setToggle(false)} className={style.navLink} href="/e-scooter">E-Scooter</Link>
                        <Link onClick={() => setToggle(false)} className={style.navLink} href="/gebraucht">Gebraucht</Link>
                        <Link onClick={() => setToggle(false)} className={style.navLink} href="/teile">Teile</Link>
                        <Link onClick={() => setToggle(false)} className={style.navLink} href="/marken">Marken</Link>
                        <Link onClick={() => setToggle(false)} className={style.navLink} href="/services">Services</Link>



                        <Link onClick={() => setToggle(false)} className={style.navLink} href="/ueberuns">Über Uns</Link>
                    </div>
                </div>
                {/* <div className={style.auth}>
                    <button className={style.auth_btn}>Login</button>
                    <button className={style.auth_btn}>Sign up</button>

                </div> */}
            </nav>
        </div>
    );
};

export default Navbar;
