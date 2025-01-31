import { Flex, Anchor, Title, Text } from '@mantine/core';

interface CaseStudyHeaderProps {
  title: string;
}
export function CaseStudyHeader({ title }: CaseStudyHeaderProps) {
  return (
    <Flex id="Panel-0" direction="column" className="self-start gap-4">
      <div className="light-gradient p-4 rounded-xl w-max">
        <Anchor href="/"><Title className='text-bg-dark underline'>Lynn Kinsella</Title></Anchor>
      </div>
      <div className="light-gradient p-4 rounded-xl flex flex-col gap-0">
        <Title>{title}</Title>
        <Text size='xl'>A Case Study</Text>
      </div>
    </Flex>
  );
}
