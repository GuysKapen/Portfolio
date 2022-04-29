import React from 'react';
import './About.scss';
import { motion } from "framer-motion";
import { images } from '../../constants';
import { Section } from '../../layout';

const About = () => {
    const abouts = [
        {
            title: "Web developer",
            description: "I am a good web developer",
            imgUrl: images.about01
        },
        {
            title: "Mobile developer",
            description: "I am a good web developer",
            imgUrl: images.about02
        },
        {
            title: "AI engenieer",
            description: "I am a good web developer",
            imgUrl: images.about03
        },
        {
            title: "UI/UX desginer",
            description: "I am a good web developer",
            imgUrl: images.about04
        },
    ]
    return (
        <>
            <h2 className="head-text">I Know that <span>Good Design</span> <br />means  <span>Good Business</span></h2>
            <div className='app__profiles'>
                {abouts.map((about, index) => (
                    <motion.div
                        whileInView={{ opacity: [0, 1], x: [120, 0] }}
                        whileHover={{ scale: 1.12 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className='app__profile-item cursor-pointer'
                        key={`about-${index}`}>
                        <img src={about.imgUrl} alt={about.title} />
                        <h2 className='bold-text mt-4'>{about.title}</h2>
                        <p className='p-text mt-2'>{about.description}</p>
                    </motion.div>
                ))}
            </div>

        </>
    );
}

export default Section(About, "about");
