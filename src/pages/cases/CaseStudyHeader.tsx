import { useEffect } from 'react';
import { Anchor, Flex, Text, Title } from '@mantine/core';
import { Link } from 'react-router-dom';

interface CaseStudyHeaderProps {
  title: string;
}
export function CaseStudyHeader({ title }: CaseStudyHeaderProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Flex id="Panel-0" direction="column" className="self-start gap-4">
      <div className="light-gradient p-4 rounded-xl w-max">
        {/* <Anchor href="/"> */}
        <Link to="/">
          <Title className="text-bg-dark underline">Lynn Kinsella</Title>
        </Link>
        {/* </Anchor> */}
      </div>
      <div className="light-gradient p-4 rounded-xl flex flex-col gap-0">
        <Title>{title}</Title>
        <Text size="xl">A Case Study</Text>
      </div>
    </Flex>
  );
}
