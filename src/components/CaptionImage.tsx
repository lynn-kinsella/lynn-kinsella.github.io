import { Flex, Text } from '@mantine/core';

interface CaptionImageProps {
  src: string;
  caption: string;
  maxh?: string;
  maxw?: string;
}

export function CaptionImage({ src, caption, maxh = '50%', maxw = '100%' }: CaptionImageProps) {
  return (
    <Flex direction="column" align="center" style={{ maxHeight: maxh, maxWidth: maxw }}>
      <Flex
        direction="column"
        justify="center"
        content="end"
        className="rounded-xl w-auto h-auto max-h-[90%] drop-shadow-lg overflow-clip grow"
      >
        <img
          src={src}
          alt={caption}
          className="max-h-[100%] w-auto contain"
          style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' }}
        />
      </Flex>
      {caption.length > 0 && <Text className="">{caption}</Text>}
    </Flex>
  );
}
