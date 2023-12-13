interface projectProps {
    props: projectData;
    openModal: Function;
}

export interface projectData {
    name: string;
    desc: string;
}

function ProjectButton({ props, openModal }: projectProps) {

    return (
        <div className="project">
            <div className="projectLeft">
                <div lang="en">{props.name}</div>
            </div>
            <div className="projectRight">
                <div className="projectDesc">{props.desc}</div>
                <div className="projectLink" onClick={() => openModal()}>Read More</div>
            </div>
        </div>
    )
}

export default ProjectButton;