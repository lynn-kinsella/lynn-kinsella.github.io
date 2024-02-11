import { useEffect, useState } from "react";
import * as data from './content.json'
import Loading from "./Loading";
import { getImageUrl } from "./imageUtils";

interface modalProps {
    props: modalData;
    exitModal: Function;
}

export interface modalData {
    name: string;
    id: number;
    show: boolean;
}

interface maxSchema {
    subheading: string;
    bodyParagraphs: string[];
    imageID: number | null;
    link: string;
}

function ProjectModal({ props, exitModal }: modalProps) {

    const [project, setProject] = useState<maxSchema>();
    const [imageUrl, setImageURL] = useState<string | undefined>();

    function loadProjectData() {
        setProject(data['projectsMax'][props.id]);
    }

    useEffect(() => {
        loadProjectData();
        console.log("loading project data")
    }, []);

    useEffect(() => {
        const url = project?.imageID != null ? getImageUrl(project.imageID.toString(), "png") : undefined;
        setImageURL(url);
    }, [project])

    function closeModal(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        event.preventDefault();
        if (event.target == event.currentTarget) {
            setProject(undefined);
            setImageURL(undefined);
            exitModal();
        }
    }

    return (
        <div className="floatingModalContainer" onClick={closeModal} >
            <div className="projectModalContainer">
                <div className="projectModalTopRow">
                    <div className="projectModalTitle">
                        {project?.link ?
                            <span onClick={() => {
                                const w = window.open("https://silken.dev/calculator", "_blank", "noopener noreferrer");
                                if (w) { w.opener = null; }
                            }}>
                                <a href="https://silken.dev/calculator">{props.name}</a>
                            </span> :
                            <span>{props.name}</span>
                        }
                    </div>
                    <div className="projectModalExit" onClick={closeModal}>X</div>
                </div>
                {project ? (
                    <div className="projectModalBody">
                        <div className="projectModalImage">
                            <img src={imageUrl} alt="Loading..." />
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
        </div>
    )
}

export default ProjectModal;