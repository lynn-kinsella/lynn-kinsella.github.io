import { Flex, Text } from '@mantine/core';
import { Layout } from '@/components/Layout';
import sec1img1 from '../../assets/ff1-1.png';
import sec1img2 from '../../assets/ff1-2.png';
import sec1img3 from '../../assets/ff1-3.png';
import { CaptionImage } from './CaptionImage';
import { CaseStudyHeader } from './CaseStudyHeader';
import { CaseStudyPanel } from './CaseStudyPanel';

export function FlipFlossCase() {
  return (
    <Layout>
      {/* <CaseStudyBody> */}
      <CaseStudyHeader title="Flip & Floss" />
      <CaseStudyPanel
        title="Problem Definition"
        images={
          <Flex
            direction="column"
            // content="center"
            justify="space-evenly"
            className="w-[60%]"
          >
            <CaptionImage src={sec1img1} caption="Flip & Floss Mission Statement Site" maxh='50%' />
            <Flex direction="row" justify="center" className="max-w-[100%] gap-4 h-[50%]">
              <CaptionImage src={sec1img2} caption="F&F Kids App Home" maxh="100%" />
              <CaptionImage src={sec1img3} caption="F&F Kids App Activity" maxh="100%" />
            </Flex>
          </Flex>
        }
        content={
          <Flex direction="column" className="w-[100%] gap-4">
            <Text size="xl">
              Pokemon Scarlet & Violet are the 3rd best selling pokemon games of all time, and my
              personal favourites. One huge flaw with these games, however, is the “Raid” system.
            </Text>
            <Text size="xl">
              If you wanted to find a specific raid to get specific rewards, you would have to use
              the raid listings in the Pokeportal. These 8 listings are completely random and only
              refresh every 30 seconds. With no option to search or filter by specific criteria, the
              chance of finding the correct combination of type (1/18), difficulty (1/5), and
              Pokemon (1/540+) is vanishingly small.
            </Text>
            <Text size="xl">
              Raids are short, team battles where up to 4 players can fight together against a boss
              Pokemon online. Endgame raids come in 5 difficulties - 3, 4, 5, 6 and 7 stars, and are
              generated daily on every player's game.
            </Text>
            <Text size="xl">
              On top of these astronomical odds, the Pokeportal interface is sluggish and
              unpredictable. Raid listings have no indication as to how many players have already
              joined, and trying to join a full raid will have you stuck in a loading dialogue for
              sometimes over a minute.
            </Text>
            <Text size="xl">
              These games are incredibly fun, but the player base deserves a better system than
              this.
            </Text>
          </Flex>
        }
        index={1}
      />
    </Layout>
  );
}
