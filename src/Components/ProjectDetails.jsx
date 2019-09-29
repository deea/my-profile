import React from "react"

const ProjectDetails = ({ url, projectName, text }) => (
    <p>
        <span><a href={url} target="_blank" rel="noopener noreferrer">{projectName}: </a></span>
        {text}
    </p>
)

export default ProjectDetails