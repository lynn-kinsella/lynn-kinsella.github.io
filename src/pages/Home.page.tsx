import { useEffect, useState } from 'react';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Anchor, Flex, Image, Text, Title } from '@mantine/core';
import { Layout } from '@/components/Layout';
import cafe1 from '../assets/cafe-1.png';
import cafe2 from '../assets/cafe-2.png';
import cafe3 from '../assets/cafe-3.png';
import flip1 from '../assets/flip-1.png';
import flip2 from '../assets/flip-2.png';
import flip3 from '../assets/flip-3.png';
import heroImage from '../assets/Hero Splash.png';
import svraid1 from '../assets/svraid-1.png';
import svraid2 from '../assets/svraid-2.png';
import svraid3 from '../assets/svraid-3.png';

export function HomePage() {
  return (
    <Layout>
      <Hero />
      <ContentRow />
      <CaseStudies />
      <div className="px-8 py-4 light-gradient rounded-lg flex-col justify-center items-center gap-2 inline-flex overflow-hidden">
        <Title className="text-center text-bg-dark font-bold leading-loose ">Get In Touch</Title>
        <div className="self-stretch p-2 justify-center items-center gap-4 inline-flex overflow-hidden">
          <Text size="48px">
            <Anchor href="www.linkedin.com/in/lynnkinsella">
              <FontAwesomeIcon className="text-bg-dark" icon={faLinkedin} />
            </Anchor>
          </Text>
          <Text size="48px">
            <Anchor href="mailto://lynnkinsella2000@gmail.com">
              <FontAwesomeIcon className="text-bg-dark" icon={faEnvelope} />
            </Anchor>
          </Text>
        </div>
      </div>
    </Layout>
  );
}

function Hero() {
  return (
    <div className=" w-[100%] rounded-xl relative overflow-clip" style={{height: `calc(100vh - 2rem)`}}>
      <HeroFrame rotation={30} x="0vw" y="-20vh" fliph flipv />
      <HeroFrame rotation={150} x="0vw" y="120vh" flipv />
      <HeroFrame rotation={-30} x="calc(100vw - 40vw - 2rem)" y="-20vh" />
      <HeroFrame rotation={210} x="calc(100vw - 40vw - 2rem)" y="120vh" fliph />
      <HeroTitle />
      <Image src={heroImage} />
    </div>
  );
}

function HeroTitle() {
  return (
    <div className="absolute bottom-0 flex flex-col w-[100%] items-center gap-4 pb-24">
      <div className="light-gradient p-4 rounded-xl">
        <Title>Lynn Kinsella</Title>
        <Text size="xl">UX Designer</Text>
      </div>
      <Anchor
        onClick={() => {
          window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="69"
          viewBox="0 0 60 69"
          fill="none"
        >
          <path
            d="M27.1716 67.32C28.7337 68.8821 31.2663 68.8821 32.8284 67.32L58.2843 41.8642C59.8464 40.3021 59.8464 37.7694 58.2843 36.2073C56.7222 34.6452 54.1895 34.6452 52.6274 36.2073L30 58.8347L7.37258 36.2073C5.81049 34.6452 3.27783 34.6452 1.71573 36.2073C0.153631 37.7694 0.153631 40.3021 1.71573 41.8642L27.1716 67.32ZM26 0.806335V64.4916H34V0.806335H26Z"
            fill="white"
          />
        </svg>
      </Anchor>
    </div>
  );
}

function ContentRow() {
  return (
    <div className="p-4 rounded-xl light-gradient">
      <Flex direction="row" className="gap-4">
        <Flex direction="column" className="w-[100%]">
          <Title>Hi - I'm Lynn</Title>
          <Text size="xl">
            I'm a UX Designer based out of Toronto, ON. My passion is turning important problems
            into solutions that users will fall in love with.
          </Text>
        </Flex>
        <Flex
          direction="row"
          justify="space-between"
          className="w-[100%] bg-bg-dark rounded-xl p-4 gap-4"
        >
          <Flex direction="column" align="center" className="grow gap-2">
            <Text size="xl" c="white" fw={700}>
              Hard Skills
            </Text>
            <Flex justify="center" wrap="wrap" className="gap-2 w-[100%]">
              {[
                'Figma',
                'User Interviews',
                'Useberry',
                'Web Development',
                'Report Writing',
                'Sketching',
              ].map((skill) => (
                <SkillPill text={skill} />
              ))}
            </Flex>
          </Flex>
          <Flex direction="column" align="center" className="grow gap-2">
            <Text size="xl" c="white" fw={700}>
              Soft Skills
            </Text>
            <Flex justify="center" wrap="wrap" className="gap-2 w-[100%]">
              {[
                'Professionalism',
                'Passion',
                'Leadership',
                'Organization',
                'Communication',
                'Creativity',
              ].map((skill) => (
                <SkillPill text={skill} />
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}

interface HeroFrameProps {
  rotation: number;
  x: string;
  y: string;
  fliph?: boolean;
  flipv?: boolean;
}
function HeroFrame({ rotation, x, y, fliph = false, flipv = false }: HeroFrameProps) {
  const [height, setHeight] = useState<string>('0');

  useEffect(() => {
    setTimeout(() => {
      setHeight('150vh');
    }, 100);
  }, []);

  return (
    <div
      className={`w-[40vw] absolute origin-top overflow-clip rounded-b-xl 
        ${flipv ? (fliph ? 'shadow-frame-0' : 'shadow-frame-1') : fliph ? 'shadow-frame-2' : 'shadow-frame-3'}`}
      style={{ rotate: `${rotation}deg`, transition: 'ease-in-out 4s', height, left: x, top: y }}
    >
      <div className="light-gradient w-[100%] h-[25vh]" />
      <div className="light-gradient w-[100%] h-[25vh] origin-center rotate-180" />
      <div className="light-gradient w-[100%] h-[25vh]" />
      <div className="light-gradient w-[100%] h-[25vh] origin-center rotate-180" />
      <div className="light-gradient w-[100%] h-[25vh]" />
      <div className="light-gradient w-[100%] h-[25vh] origin-center rotate-180" />
    </div>
  );
}

interface SkillPillProps {
  text: string;
  shadow?: boolean;
}
function SkillPill({ text, shadow = false }: SkillPillProps) {
  return (
    <div className={`light-gradient rounded-full px-3 py-0.5 ${shadow ? 'shadow-light-sm' : ''}`}>
      <Text size="lg">{text}</Text>
    </div>
  );
}

function CaseStudies() {
  return (
    <div className="w-[100%]">
      <Flex direction="column" align="center" className="gap-4 w-[100%]">
        <Title className="text-white">UX Case Studies</Title>
        <Flex direction="row" className="w-[100%] justify-between px-16">
          <CaseStudyButton
            title="Flip & Floss"
            link="/case/flip-&-floss"
            skills={['Leadership', 'Design', 'Communication']}
            images={[flip1, flip2, flip3]}
            bg="#143C30"
          />
          <CaseStudyButton
            title="Cafe Compass"
            link="/case/cafe-compass"
            skills={['Leadership', 'Design', 'Communication']}
            images={[cafe1, cafe2, cafe3]}
            bg="#6B1B1B"
          />
          <CaseStudyButton
            title="SV Raids"
            link="/case/sv-raids"
            skills={['Leadership', 'Design', 'Communication']}
            images={[svraid1, svraid2, svraid3]}
            bg="#C1A749"
          />
        </Flex>
      </Flex>
    </div>
  );
}

interface CaseStudyButtonProp {
  link: string;
  title: string;
  skills: string[];
  images: string[];
  bg: string;
}
function CaseStudyButton({ link, title, skills, images, bg }: CaseStudyButtonProp) {
  return (
    <Flex direction="column" className="gap-4 w-[25%]">
      <a href={link} className="">
        <div
          className="rounded-xl p-4 transition origin-center hover:scale-105 hover:shadow-light-sm"
          style={{ backgroundColor: bg }}
        >
          <Flex direction="column" className="">
            <Flex direction="row" className="gap-8 p-4" justify="center" align-center>
              {images.map((src) => (
                <div className="w-[50%] shadow-light-sm rounded-lg border-3 border-black overflow-clip">
                  <Image src={src} className="h-[100%]" />
                </div>
              ))}
            </Flex>
            <Flex direction="row" className="gap-4 w-[100%]" justify="center">
              {skills.map((skill) => (
                <SkillPill text={skill} shadow />
              ))}
            </Flex>
          </Flex>
        </div>
      </a>
      <a href={link}>
        <div className="text-center light-gradient rounded-xl px-4 py-2">
          <Title fw={700} className="underline">
            {title}
          </Title>
        </div>
      </a>
    </Flex>
  );
}
