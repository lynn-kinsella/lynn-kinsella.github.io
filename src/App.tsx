import { useState, useEffect } from 'react'
import ProjectButton from './ProjectButton'

import { getImageUrl } from './imageUtils';

import * as data from './content.json'

interface minSchema {
  name: string;
  desc: string;
  id: number;
}


import './AppDesktop.css'
import './AppMobile.css'
import ProjectModal from './ProjectModal'

function App() {
  const [modalState, setModalState] = useState<boolean>(false);
  // const [projectId, setProjectId] = useState<number>(0);
  const [projectsList, setProjectsList] = useState<minSchema[]>();
  const [modal, setModal] = useState<JSX.Element>(<div></div>);

  function loadProjectData() {
    setProjectsList(data["projectsMin"]);
  }

  useEffect(() => {
    loadProjectData();
  }, []);

  function openModal(id: number) {
    const newModal = <ProjectModal exitModal={exitModal} props={{ show: true, id: id, 'name': "Project Name" }}></ProjectModal>;
    setModal(newModal)
    setModalState(true)
    // setProjectId(id)
  }
  function exitModal() {
    setModal(<div></div>)
    setModalState(false)
  }

  return (
    <>
      {modal}
      <div className={'container' + (modalState ? ' backgroundBlur' : '')}>
        <div className='header'>
          <div className='hero'>
            <div className='heroFrame'>
              <img className="heroIMG" src={getImageUrl("subject", "png")} alt="Lynn" />
              <div className='heroText'>
                <div className="heroTitle lynnPos">Lynn</div>
                <div className="heroTitle kinsPos">Kinsella</div>
                <div className="heroSub titlePos">Software Developer</div>
              </div>
            </div>
          </div>
          <div className='heroRule'></div>
        </div>
        <div className='contentBackground' id='aboutMe'>
          <div className='contentTitle'>About Me</div>
          <div className='contentSub'>Hi, I'm Lynn!</div>
          <div className='contentBody'>
            <p>
              I'm a Computer Engineering graduate from McMaster University with a passion for developing software that people want to use.
              I have experience writing both front and back-end code through my year working at IBM, my courses at McMaster, and my personal projects and exploration.
            </p>
            <p>
              I love finding ways to apply my skills and acquiring new ones! My expertise includes modern web development for both front-end and back-end,
              as well as writing embedded software. I'm also keenly interested in UX research and design, image processing, and machine learning,
              and want to explore those fields further in the future.
            </p>
            <p>
              Please explore this site and feel free to reach out to me if you have any questions!
            </p>
          </div>
        </div>
        <div className='contentBackground' id='projects'>
          <div className='contentTitle'>Projects</div>
          <div className='projectsContainer'>
            <div>
              {
                projectsList &&
                projectsList.map(({ name, desc, id }) => {
                  return (
                    <ProjectButton openModal={() => { openModal(id) }} props={{ name: name, desc: desc }} />
                  )
                })
              }
            </div>
          </div>
        </div>
        <div className='contentBackground' id='footer'>
          <div className='footerIcon'><i className='fab fa-linkedin fa-lg'></i></div>
          <div className='footerText'>Made with 💖 by  <br /> Lynn Kinsella</div>
          <div className='footerIcon'><i className='fas fa-envelope fa-lg'></i></div>
        </div>
      </div>
    </>
  )
}

export default App
