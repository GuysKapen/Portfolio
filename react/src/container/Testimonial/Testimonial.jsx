import React, { useState } from 'react';
import { images } from '../../constants';
import { Section } from '../../layout';
import MotionWrap from '../../layout/MotionWrap';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"
import { motion } from 'framer-motion';

import "./Testimonial.scss";
const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const testimonials = [
        {
            name: "Sarah",
            company: "Netflix",
            imgUrl: images.css,
            feedback: "A great desinger with all creative deisgn ideas to inspire others",
        },
        {
            name: "Michael",
            company: "Google",
            imgUrl: images.node,
            feedback: "Grate job! Would recommend",
        },
        {
            name: "John",
            company: "Bolt",
            imgUrl: images.graphql,
            feedback: "A genius engineer",
        },
    ];
    const brands = [
        {
            name: "New Balance",
            imgUrl: images.nb,
        },
        {
            name: "Bolt",
            imgUrl: images.bolt,
        },
        {
            name: "Skype",
            imgUrl: images.skype,
        },
        {
            name: "Spotify",
            imgUrl: images.spotify,
        }
    ];

    function handleClick(index) {
        setCurrentIndex(index);
    }
    return (
        <>
            {testimonials.length && (
                <>
                    <div className="app__testimonial-item app__flex">
                        <img src={testimonials[currentIndex].imgUrl} alt={testimonials[currentIndex].name} />
                        <div className="app__testimonial-content">
                            <p className="p-text">{testimonials[currentIndex].feedback}</p>
                            <div>
                                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
                            </div>
                        </div>
                    </div>

                    <div className="app__testimonial-btns app__flex">
                        <div className="app__flex cursor-pointer" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
                            <HiChevronLeft />
                        </div>

                        <div className="app__flex cursor-pointer" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
                            <HiChevronRight />
                        </div>
                    </div>
                </>
            )}

            <div className="app__testimonial-brands app__flex">
                {brands.map((brand) => (
                    <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        key={brand.name}
                    >
                        <img src={brand.imgUrl} alt={brand.name} />
                    </motion.div>
                ))}
            </div>
        </>
    );
}


export default Section(MotionWrap(Testimonial, "app__testimonial"), "testimonial", "app__primarybg");

