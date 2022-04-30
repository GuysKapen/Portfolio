import React, { useState } from 'react';

import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import "./Work.scss";
import { images } from '../../constants';
import { Section } from '../../layout';
const Work = () => {

    const works = [
        {
            title: "Modern UI/UX website",
            description: "A modern UI/UX Portfolio Website",
            projectLink: "https://nestify.com",
            codeLink: "https://github.com",
            imgUrl: images.about01,
            tags: [
                "UI/UX",
                "All"
            ]
        },
        {
            title: "Ecommericial Project",
            description: "A modern UI/UX ECommericial Website",
            projectLink: "https://nestify.com",
            codeLink: "https://github.com",
            imgUrl: images.about02,
            tags: [
                "Web App",
                "All"
            ]
        },
        {
            title: "Cool Mobile Meditation App",
            description: "A Mobile Meditation app with Flutter",
            projectLink: "https://nestify.com",
            codeLink: "https://github.com",
            imgUrl: images.about03,
            tags: [
                "Mobile App",
                "All"
            ]
        },
        {
            title: "Modern Blog website",
            description: "A modern Blog website with React JS and Node JS",
            projectLink: "https://nestify.com",
            codeLink: "https://github.com",
            imgUrl: images.about04,
            tags: [
                "Web App",
                "React JS",
                "All"
            ]
        }
    ]

    const [activeFilter, setActiveFilter] = useState("All");
    const [animatedCard, setAnimatedCard] = useState({ y: 0, opacity: 1 });
    const [filteredWorks, setfilteredWorks] = useState(works);


    function handleWorkFilter(item) {
        setActiveFilter(item)
        setAnimatedCard([{ y: 100, opacity: 0 }]);

        setTimeout(() => {
            setAnimatedCard([{ y: 0, opacity: 1 }]);

            if (item === "All") {
                setfilteredWorks(works);
            } else {
                setfilteredWorks(works.filter((work) => work.tags.includes(item)));
            }
        }, 500)
    }

    return (
        <div>
            <h2 className="head-text">Creative <span>Portfolio</span> Section</h2>

            <div className='app__work-filter'>
                {['UI/UX', 'Web App', "Mobile App", "React JS", "All"].map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleWorkFilter(item)}
                        className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
                    >
                        {item}
                    </div>
                ))}

            </div>

            <motion.div
                animate={animatedCard}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__work-portfolio">

                {filteredWorks.map((work, index) => (
                    <motion.div
                        whileInView={{ opacity: [0, 1], y: [100, 0] }}
                        transition={{ duration: 0.25 }} 
                        className='app__work-item app__flex' key={`${work.title}-${index}`}>
                        <div className='app__work-img app__flex'>
                            <img src={work.imgUrl} alt={work.title} />

                            <motion.div
                                whileHover={{ opacity: [0, 1] }}
                                transition={{ duration: 0.25, ease: "easeInOut", staggerChildren: 0.5 }}
                                className="app__work-hover app__flex">
                                <a href={work.projectLink} target="_blank" rel='noreferrer' >
                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 0.9] }}
                                        transition={{ duration: 0.25, ease: "easeInOut" }}
                                        className="app__flex">
                                        <AiFillEye />
                                    </motion.div>
                                </a>

                                <a href={work.codeLink} target="_blank" rel='noreferrer' >
                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 0.9] }}
                                        transition={{ duration: 0.25, ease: "easeInOut" }}
                                        className="app__flex">
                                        <AiFillGithub />
                                    </motion.div>
                                </a>

                            </motion.div>
                        </div>

                        <div className='app__work-content app__flex'>
                            <h4 className='bold-text'>{work.title}</h4>
                            <p className='p-text mt-2'>{work.description}</p>

                            <div className='app__work-tag app__flex'>
                                <p className='p-text'>{work.tags[0]}</p>
                            </div>
                        </div>

                    </motion.div>
                ))}

            </motion.div>
        </div>
    );
}

export default Section(Work, "work", "app__works");
