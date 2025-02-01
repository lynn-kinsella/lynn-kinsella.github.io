import { Flex, Title, Text, Anchor } from '@mantine/core';
import React from 'react';

interface CaseStudyPanelProps {
  title: string;
  images: React.ReactNode;
  content: React.ReactNode;
  index: number;
  final?: boolean;
}
export function CaseStudyPanel({ title, images, content, index, final = false }: CaseStudyPanelProps) {
  return (
    <Flex
      direction="column"
      id={`Panel-${index}`}
      className="light-gradient rounded-xl p-4 w-[100%] gap-4"
      style={{ height: 'calc(100vh - 2rem)' }}
    >
      <Flex direction="row" className="gap-4 h-0 grow rounded-xl">
        <Flex
          direction="column"
          className="w-[100%] gap-8 overflow-y-scroll max-h-[100%] case-inset rounded-xl  p-4"
        >
          <Title>{`${index}. ${title}`}</Title>
          {content}
        </Flex>
        {images}
      </Flex>
      <Flex direction="row" justify={final ? 'end' : 'center'} align="end" className="px-[5%]">
        {final && <Text>To Top</Text>}
        <Anchor
          onClick={() => {
            const elementIndex = final ? 0 : index + 1;
            const target = document.getElementById(`Panel-${elementIndex}`);
            target?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <svg
            style={{ rotate: final ? '180deg' : '0' }}
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="69"
            viewBox="0 0 60 69"
            fill="none"
          >
            <path
              d="M27.1716 67.32C28.7337 68.8821 31.2663 68.8821 32.8284 67.32L58.2843 41.8642C59.8464 40.3021 59.8464 37.7694 58.2843 36.2073C56.7222 34.6452 54.1895 34.6452 52.6274 36.2073L30 58.8347L7.37258 36.2073C5.81049 34.6452 3.27783 34.6452 1.71573 36.2073C0.153631 37.7694 0.153631 40.3021 1.71573 41.8642L27.1716 67.32ZM26 0.806335V64.4916H34V0.806335H26Z"
              fill="black" />
          </svg>
        </Anchor>
      </Flex>
    </Flex>
  );
}
