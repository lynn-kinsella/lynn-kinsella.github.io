interface projectProps {
    props: projectData;
    openModal: Function;
}

export interface projectData {
    name: string;
    desc: string;
}

function ProjectButton({ props, openModal }: projectProps) {

    function reviewForHypenation(text: string): string {
        var newString: string = "";
        text.split(" ").forEach((word: string) => {
            newString += word.length <= 4 ? word + " " : word.substring(0, 4) + "\u00AD" + word.substring(4) + " ";
        })
        return newString
    }

    const filteredName = reviewForHypenation(props.name);

    return (
        <div className="project">
            <div className="projectLeft">
                <div lang="en">{filteredName}</div>
            </div>
            <div className="projectRight">
                <div className="projectDesc">{props.desc}</div>
                <div className="projectLink" onClick={() => openModal()}>Read More</div>
            </div>
        </div>
    )
}

export default ProjectButton;