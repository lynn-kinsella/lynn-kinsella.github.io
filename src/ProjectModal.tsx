import { useEffect, useState } from "react";
import * as data from './content.json'
import Loading from "./Loading";

interface modalProps {
    props: modalData;
    exitModal: Function;
}

export interface modalData {
    name: string;
    desc: string[];
    id: number;
    show: boolean;
}

interface maxSchema {
    title: string;
    subheading: string;
    bodyParagraphs: string[];
}

function ProjectModal({ props, exitModal }: modalProps) {

    const [project, setProject] = useState<maxSchema>();

    function loadProjectData() {
        setProject(data['projectsMax'][props.id]);
    }

    useEffect(() => {
        loadProjectData();
    }, [props]);

    function closeModal(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        event.preventDefault();
        if (event.target == event.currentTarget) {
            setProject(undefined);
            exitModal()
        }
    }

    if (props["show"]) {
        return (
            <div className="floatingModalContainer" onClick={closeModal}>
                <div className="projectModalContainer">
                    <div className="projectModalTopRow">
                        <div className="projectModalTitle">{project ? project.title : "Loading..."}</div>
                        <div className="projectModalExit" onClick={closeModal}>X</div>
                    </div>
                    {project ? (
                        <div className="projectModalBody">
                            <div className="projectModalImage">
                                <img src={"src/assets/" + props.id + ".png"} alt="Loading..." />
                            </div>
                            <div className="projectModalSubheading">
                                {project.subheading}
                            </div>
                            <div className="projectModalText">
                                {project.bodyParagraphs.map((para: string) => {
                                    return (<p>{para}</p>)
                                })}
                            </div>
                        </div>) : <Loading></Loading>
                    }
                </div>
            </div >

        )
    }
}

export default ProjectModal;