import React, { useState } from 'react';

import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { images } from '../../constants';
import { Section } from '../../layout';
import ReactTooltip from "react-tooltip";
import "./Skill.scss";
import Work from '../Work/Work';

const Skill = () => {

    const skills = [
        {
            name: "React",
            bgColor: null,
            icon: images.react
        },
        {
            name: "Figma",
            bgColor: "",
            icon: images.figma
        },
        {
            name: "Flutter",
            bgColor: "",
            icon: images.flutter
        },
        {
            name: "Node JS",
            bgColor: "",
            icon: images.node
        },
        {
            name: "Github",
            bgColor: "",
            icon: images.git
        },
    ];
    const experiences = [
        {
            year: 2010,
            works: [
                {
                    name: "Fronted Developer",
                    company: "Google",
                    desc: "I had worked at Google as fronted developer for 2 years"
                },
                {
                    name: "Backend Developer",
                    company: "Facebook",
                    desc: "I had worked at Facebook as backend developer with Node JS and VR for 5 years"
                },
            ]
        },
        {
            year: 2018,
            works: [
                {
                    name: "Blockchain Developer",
                    company: "Google",
                    desc: "I had worked at Google as Blockchain developer"
                },
                {
                    name: "AI Engineer",
                    company: "Facebook",
                    desc: "I had worked at Facebook as AI engineer"
                },
            ]
        },

    ];
    return (
        <>
            <h2 className='head-text'>Skills & Experiences</h2>

            <div className='app__skills-container'>
                <motion.div className='app__skills-list'>
                    {skills.map((skill) => (
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className="app__skills-item app__flex"
                            key={skill.name}>
                            <div className='app__flex' style={{ backgroundColor: skill.bgColor }}>
                                <img src={skill.icon} alt={skill.name} />
                            </div>
                            <p className='p-text'>{skill.name}</p>
                        </motion.div>
                    ))}
                </motion.div>
                <motion.div className='app__skills-exp'>
                    {experiences.map((exp) => (
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            key={exp.year}
                            className='app__skills-exp-item'>
                            <div className="app__skills-exp-year">
                                <p className="bold-text">{exp.year}</p>
                            </div>
                            <motion.div
                                className='app__skills-exp-works'
                                key={exp.year}>
                                {exp.works.map((work) => (
                                    <div key={work.name}>
                                        <motion.div
                                            whileInView={{ opacity: [0, 1] }}
                                            transition={{ duration: 0.5 }}
                                            className="app__skills-exp-work"
                                            data-tip
                                            data-for={work.name}
                                            key={exp.name}>
                                            <h4 className="bold-text">{work.name}</h4>
                                            <p className="p-text">{work.company}</p>
                                        </motion.div>
                                        <ReactTooltip
                                            id={work.name}
                                            effect="solid"
                                            arrowColor='#fff'
                                            className='skills-tooltip'
                                            afterShow={() => setTimeout(ReactTooltip.hide())}>
                                            {work.desc}
                                        </ReactTooltip>
                                    </div>
                                ))}

                            </motion.div>

                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </>
    );
}

export default Section(Skill, "skills");
