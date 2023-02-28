import React from 'react';

const projects = [
    {
        name: "Kasa",
        description: "Application Frontend React de location immobilière",
        backgroundImage: 'kasa.png',
        githubLink: "https://github.com/NextSap/oc-6"
    },
    {
        name: "Mon Vieux Grimoire",
        description: "Application Backend Express d'un site de notation de livre",
        backgroundImage: 'mon-vieux-grimoire.png',
        githubLink: "https://github.com/NextSap/oc-7"
    }
]

const Projects = () => {
    return (
        <div id="projects" className="flex flex-col items-center text-white font-medium tracking-wide">
            <h2 className="text-5xl mb-20">Projets</h2>
            <div className="flex flex-col items-center justify-around w-full lg:flex-row lg:items-start">
                {projects.map((project) => (
                    <div key={project.name} className="w-[90%] lg:w-[40%]">
                        <div className="flex flex-col items-center">
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                <img src={project.backgroundImage} alt={project.name} className="bg-cover rounded-2xl hover:scale-105 duration-300"/>
                            </a>
                            <h3 className="text-[16px] mt-10 mb-40 text-center md:text-xl">{project.description}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;