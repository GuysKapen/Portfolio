import { motion } from 'framer-motion';
import React from 'react';
import "./Header.scss";
import { images } from "../../constants"
import { Section } from "../../layout"
import PlayButton from '../PlayButton';

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
        <div className='app__header app__flex relative'>
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
                <div className='w-full invisible lg:visible absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 px-8 z-10'>
                    <h1 className='text-6xl text-center font-black'>Guys Robot</h1>
                    <p className='mt-8 w-1/2 text-2xl text-center mx-auto'>Web app developer and AI engineer</p>
                    <div className='mx-auto mt-8 w-48'>
                        <PlayButton />
                    </div>
                </div>
                {/* <img src={images.profile} alt="image_profile" /> */}
                <motion.img whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className='overlay_circle top-0'
                    src={images.circle}
                    alt="profile_circle" />

            </motion.div>

            <motion.div
                variants={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className='app__header-circles'
            >

                {[images.vue, images.android, images.flutter].map((circle, index) => (
                    <div className='circle-cmp app__flex' key={`circle-${index}`}>
                        <img src={circle} alt="circle_image" />
                    </div>
                ))}

            </motion.div>

            <motion.div
                variants={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className='absolute left-0 bottom-12'
            >

                <div className='flex justify-center items-center bg-white rounded-full p-5 absolute left-20 bottom-0 w-24'>
                    <img src={images.react} alt="circle_image" />
                </div>

                <div className='flex justify-center items-center bg-white rounded-full p-5 absolute left-48 bottom-28 w-20'>
                    <img src={images.python} alt="circle_image" />
                </div>

                <div className='flex justify-center items-center bg-white rounded-full p-5 absolute bottom-40 w-20'>
                    <img src={images.node} alt="circle_image" />
                </div>

            </motion.div>
        </div>
    );
}

export default Section(Header, "home");
