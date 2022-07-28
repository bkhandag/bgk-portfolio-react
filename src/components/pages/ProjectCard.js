import React from 'react';

function ProjectCard(props) {
    return (
        <div key={props.key}>
        {props.title}    
        <img src={props.img} alt={props.title}></img>
        </div>
    );
}

export default ProjectCard
