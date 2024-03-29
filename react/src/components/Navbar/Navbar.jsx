import React, { useState } from 'react';
import "./Navbar.scss";
import { images } from '../../constants';
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <nav className='app__navbar'>
            <div className='app__logo'>
                <img src={images.logo} alt="log" className='w-[6rem]' />
            </div>
            <ul className='app__navbar-links'>
                {["home", "about", "work", "skills", "contact"].map((item) => (
                    <li className='app__flex p-text' key={`link-${item}`}>
                        <div />
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>

            <div className='app__navbar-menu'>
                <HiMenuAlt4 className='cursor-pointer' onClick={() => setToggle(true)} />
                {toggle && (
                    <motion.div whileInView={{ x: [300, 0] }}
                        transition={{ duration: 0.85, ease: "easeOut" }}>
                        <HiX className='cursor-pointer' onClick={() => setToggle(false)} />
                        <ul className='app__navbar-links'>
                            {["Home", "About", "Work", "Skills", "Contact"].map((item) => (
                                <li key={`link-${item}`}>
                                    <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
