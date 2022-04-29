import { motion } from 'framer-motion';
import React from 'react';
import "./Header.scss";
import { images } from "../../constants"
import { Section } from "../../layout"

const Header = () => {
    const scaleVariants = {
        whileInView: {
            scale: [0, 1],
            opacity: [0, 1],
            transition: {
                duration: 1,
                ease: "easeInOut"
            }
        }
    };
    return (
        <div className='app__header app__flex'>
            <motion.div whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className='app__header-info'>
                <div className='app__header-badge'>
                    <div className='badge-cmp app__flex'>
                        <span>👋</span>
                        <div className='ml-4'>
                            <p className='p-text'>Hello, I am</p>
                            <h1 className='head-text'>Guys</h1>
                        </div>
                    </div>
                    <div className='tag-cmp'>
                        <p className='p-text'>
                            <span>Web Developer</span>
                        </p>
                        <p className='p-text'>
                            <span>Dev Ops</span>
                        </p>
                    </div>
                </div>
            </motion.div>

            <motion.div whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className='app__header-img'>
                <img src={images.profile} alt="image_profile" />
                <motion.img whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className='overlay_circle'
                    src={images.circle}
                    alt="profile_circle" />

            </motion.div>

            <motion.div
                variants={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className='app__header-circles'
            >

                {[images.flutter, images.redux, images.sass].map((circle, index) => (
                    <div className='circle-cmp app__flex' key={`circle-${index}`}>
                        <img src={circle} alt="circle_image" />
                    </div>
                ))}

            </motion.div>
        </div>
    );
}

export default Section(Header, "home");
