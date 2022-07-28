import React, { useState } from 'react';
import pwimg from '../Images/Generated-password.png';
import ProjectCard from './ProjectCard';

function Portfolio() {
    const [projects] = useState([
        {
            id: '1',
            title: 'password generator',
            description:'',
            img:pwimg,
            deployedLink: '',
            githubLink:'',
        },
        {
            id: '2',
            title: 'password generator',
            description:'',
            img:'',
            deployedLink: '',
            githubLink:'',
        },
        {
            id: '3',
            title: 'password generator',
            description:'',
            img:'',
            deployedLink: '',
            githubLink:'',
        },
        {
            id: '4',
            title: 'password generator',
            description:'',
            img:'',
            deployedLink: '',
            githubLink:'',
        },
    ])
    return (
        <div>
            <h1>Portfolio</h1>
            {projects.map(project => {
                return <ProjectCard key={project.id} title={project.title} img={project.img}></ProjectCard>
            })}
        </div>
    );
}

export default Portfolio