import React, { useState } from 'react';
import { images } from '../../constants';
import { Section } from '../../layout';
import MotionWrap from '../../layout/MotionWrap';


import './Footer.scss';

const Footer = () => {
    return (
        <>
            <h2 className="head-text">Take a coffee & chat with me</h2>

            <div className="app__footer-cards">
                <div className="app__footer-card ">
                    <img src={images.email} alt="email" />
                    <a href="mailto:ngntrgtam@gmail.com" className="p-text">ngntrgtam@gmail.com</a>
                </div>
                <div className="app__footer-card">
                    <img src={images.mobile} alt="phone" />
                    <a href="tel:0855591409" className="p-text">0855591409</a>
                </div>
            </div>
        </>
    );
}

export default Section(MotionWrap(Footer, "app__footer"), "contact", "app__whitebg");
