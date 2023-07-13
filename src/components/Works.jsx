import React from "react";
import Tilt from "react-tilt";
import {motion} from "framer-motion";

import {styles} from "../styles";
import viemImg from '../assets/view.png';
import {github} from "../assets";
import {SectionWrapper} from "../hoc";
import {projects} from "../constants";
import {fadeIn, textVariant} from "../utils/motion";

const ProjectCard = ({
                         index,
                         name,
                         description,
                         tags,
                         demoLink,
                         image,
                         source_code_link,
                     }) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className='bg-tertiary p-5 rounded-2xl h-[550px] w-[360px] max-[880px]:w-[100%] max-[880px]:h-[100%]'
            >
                <div className='relative w-full h-[230px]'>
                    <img
                        src={image}
                        alt='project_image'
                        className='w-full h-full object-cover rounded-2xl'
                    />

                    <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                        <div
                            onClick={() => window.open(source_code_link, "_blank")}
                            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                        >
                            <img
                                src={github}
                                alt='source code'
                                className='w-1/2 h-1/2 object-contain'
                            />
                        </div>
                    </div>
                </div>

                <div className='mt-5'>
                    <div className='flex justify-between'>
                    <h3 className='text-white font-bold text-[24px]'>{name}</h3>
                    <div className="flex justify-center ml-[10px] mt-[3px] max-[880px]:hidden">
                        <a href={demoLink} target="_blank">
                            <button className='flex items-center bg-opacity-40 bg-white pl-[10px] pt-[5px] pb-[5px] pr-[10px] rounded-md font-semibold w-max'>Demo
                                <img className="w-[20px] ml-[5px]" src={viemImg} alt="view"/>
                            </button>
                        </a>
                    </div>
                    </div>
                    <p className='mt-2 text-secondary text-[14px]'>{description}</p>
                </div>

                <div className='mt-4 flex flex-wrap gap-2'>
                    {tags.map((tag) => (
                        <p
                            key={`${name}-${tag.name}`}
                            className={`text-[14px] ${tag.color}`}
                        >
                            #{tag.name}
                        </p>
                    ))}
                </div>
                <div className="flex justify-center ml-[10px] mt-[3px] min-[880px]:hidden">
                    <a href={demoLink} target="_blank">
                        <button className='flex items-center bg-opacity-40 bg-white mt-[20px] p-[10px] rounded-md font-semibold w-max'>Demo
                            <img className="w-[20px] ml-[5px]" src={viemImg} alt="view"/>
                        </button>
                    </a>
                </div>
            </Tilt>
        </motion.div>
    );
};

const Works = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <h2 className={`${styles.sectionHeadText}`}>My Projects</h2>
            </motion.div>

            <div className='w-full flex'>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
                >
                    The following projects demonstrate my skills and experience with real examples of my work. Each
                    project has a brief description with links to code repositories and live demonstrations. They
                    reflect my ability to solve complex problems, and work with different technologies.
                </motion.p>
            </div>

            <div className='mt-20 flex flex-wrap gap-7 max-[1270px]:justify-center'>
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
            <div className="flex justify-center ml-[10px] mt-[3px]">
                <a href="https://github.com/vladosdc?tab=repositories" target="_blank" className="w-[400px]">
                    <button className='flex items-center justify-center bg-opacity-40 bg-white w-[100%] h-[70px] text-[22px] mt-[40px] rounded-md font-semibold' style={{background: 'rgb(21 16 48)'}}>See all projects
                        <img className="w-[30px] ml-[5px]" src={github} alt="see all projects"/>
                    </button>
                </a>
            </div>
        </>
    );
};

export default SectionWrapper(Works, "projects");
