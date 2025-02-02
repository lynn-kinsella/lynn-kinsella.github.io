import React from 'react';
import { Anchor, Flex, Text } from '@mantine/core';
import { Layout } from '@/components/Layout';
import sec1img1 from '../../assets/sv1-1-1.png';
import sec1img2 from '../../assets/sv1-1-2.png';
import sec2img1 from '../../assets/sv2-1.png';
import sec2img2 from '../../assets/sv2-2.png';
import sec3img1 from '../../assets/sv3-1.png';
import sec3img2 from '../../assets/sv3-2.png';
import sec3img3 from '../../assets/sv3-3.png';
import sec4img1 from '../../assets/sv4-1.png';
import sec4img2 from '../../assets/sv4-2.png';
import sec4img3 from '../../assets/sv4-3.png';
import sec5img1 from '../../assets/sv5-1.png';
import sec5img2 from '../../assets/sv5-2.png';
import sec6img1 from '../../assets/sv6-1.png';
import sec6img2 from '../../assets/sv6-2.png';
import sec6img3 from '../../assets/sv6-3.png';
import sec7img1 from '../../assets/sv7-1.png';
import sec7img2 from '../../assets/sv7-2.png';
import sec7img3 from '../../assets/sv7-3.png';
import { CaseStudyHeader } from '../../components/CaseStudyHeader';
import { CaptionImage } from '../../components/CaptionImage';
import { CaseStudyPanel } from '../../components/CaseStudyPanel';

export function SvRaidsCase() {
  return (
    <Layout>
      {/* <CaseStudyBody> */}
      <CaseStudyHeader title="SV Raids" />
      <CaseStudyPanel
        title="Problem Definition"
        images={
          <Flex
            direction="column"
            content="center"
            justify="space-evenly"
            className="w-[40%] h-[100%] p-4"
          >
            <CaptionImage src={sec1img1} caption="Pokemon Scarlet & Violet" />
            <CaptionImage src={sec1img2} caption="Raid Search Interface" />
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

      <CaseStudyPanel
        title="Research"
        images={
          <Flex
            direction="column"
            content="center"
            justify="space-evenly"
            className="w-[40%] h-[100%] p-4"
          >
            <CaptionImage src={sec2img1} caption="Gamewith Bulletin Board" />
            <CaptionImage src={sec2img2} caption="r/Pokemon Discord Channel" />
          </Flex>
        }
        content={
          <Flex direction="column" className="w-[100%] gap-4">
            <Text size="xl">
              Two community-made solutions to this problem already exist - a discord server and an
              online bulletin board. These both suffer from common flaws:
            </Text>
            <Flex direction="column">
              <Text size="xl" fw={700}>
                Low Activity
              </Text>
              <div className="pl-4">
                <Text className="pl-4" size="xl">
                  Both platforms suffer from intermittent at best activity. Both of these tools
                  exist in the corners of larger platforms that are only tangentially related to the
                  goal of facilitating raid groups. This mismatch could be hurting the
                  discoverability of the
                </Text>
              </div>
            </Flex>
            <Flex direction="column">
              <Text size="xl" fw={700}>
                Unengaging Experience
              </Text>
              <div className="pl-4">
                <Text size="xl">
                  With the bland interfaces of both the discord chat and the gamewith list, these
                  platforms are purely utilitarian. Instead of providing a replacement to in-game
                  system, which is vibrant and engaging, these systems provide the bare minimum.
                  tools.
                </Text>
              </div>
            </Flex>

            <Text size="xl">
              These facts appear to feedback into each other, with their utilitarian design being
              undercut by their lack of users. Without activity, the utilitarian design fails to
              engage utility focused users, and the boring design pushes away fun focused users.
            </Text>
            <Text size="xl">
              A successful design should balance the needs of these two groups. Utility-focused
              users should be able to easily host and find their desired raids, and fun-focused
              users should find the platform just as engaging as the current in-game system in order
              to keep them active on the platform.
            </Text>
          </Flex>
        }
        index={2}
      />
      <CaseStudyPanel
        title="Ideation"
        images={
          <Flex
            direction="column"
            content="center"
            justify="space-evenly"
            className="w-[40%] h-[100%] p-4"
          >
            <CaptionImage src={sec3img1} caption="Hosting User Task Flow" />
            <CaptionImage src={sec3img2} caption="Host Form Concept" />
            <CaptionImage src={sec3img3} caption="Raid Results Concept" />
          </Flex>
        }
        content={
          <Flex direction="column" className="w-[100%] gap-4">
            <Text size="xl">
              The first, most important feature that this solution was built around was robust
              filters. The ability to filter by Pokemon, type, and stars (difficulty) are invaluable
              to the utility-focused players that will be the core-demographic of this tool.Two
              community-made solutions to this problem already exist - a discord server and an
              online bulletin board. These both suffer from common flaws:
            </Text>
            <Text size="xl">
              To be successful, this tool needs to appeal to hosts, as the content that they supply
              is the line by which the tool succeeds or fails. Making the hosting process as
              seamless as possible is a first step towards this goal. A prominently placed button on
              the landing page is necessary to funnel hosts to fill their role as quickly as
              possible. Hosting requires the input of the same 3 pieces of data that utility players
              want to filter by - designing high quality, easy to use inputs for these data is
              paramount to the platform success.
            </Text>
            <Text size="xl">
              Finally, the raid search results must be easy to read and interact with at a glance.
              The core data should be prominent and easily understood. The nature of this tool means
              that users will likely be interacting with one of the first results that show up.
              Since each raid with the same characteristics is fungible, there is little need for
              users to see extensive information past those core 3 data points.
            </Text>
          </Flex>
        }
        index={3}
      />
      <CaseStudyPanel
        title="Mockups"
        images={
          <Flex
            direction="row"
            content="center"
            align="center"
            justify="space-between"
            className="w-[100%] h-[100%] p-4"
          >
            <CaptionImage src={sec4img1} caption="Initial Design" maxw="30%" maxh="100%" />
            <CaptionImage src={sec4img2} caption="Colours Iteration" maxw="30%" maxh="100%" />
            <CaptionImage src={sec4img3} caption="Hosting Page Iteration" maxw="30%" maxh="100%" />
          </Flex>
        }
        content={
          <Flex direction="column" className="w-[100%] gap-4">
            <Text size="xl">
              Designing inputs for the core 3 data points was straightforward. Leveraging my
              experience and feedback from developing Pokemon tools in the past, I used a text input
              with dropdown suggestions for Pokemon and type inputs. I used a range slider for the
              difficulty slider, that users could select their minimum and maximum star difficulty.
            </Text>
            <Text size="xl">
              In early concepts, search results were displayed as a table, with one row per result.
              This allowed for a large amount information to be communicated densely on a single
              screen. This information density was made the content difficult to read at a glance -
              information clarity and speed of understanding is key. The final iteration uses cards
              with text and iconography that are recognizable from the games, improving the glance
              value of the search results, as well as creating large touch/click targets.
            </Text>
            <Text size="xl">
              The hosting button was placed as the first item after the introduction blurb since the
              first iteration. One significant choice that came in later iterations was to use use a
              gradient on the host button that contrasts notably with the background. On mobile,
              this is the only place on the initial view of the landing page that uses this
              gradient, drawing attention to it as a significant action.
            </Text>
          </Flex>
        }
        index={4}
      />
      <CaseStudyPanel
        title="Implementation"
        images={
          <Flex
            direction="column"
            content="center"
            justify="space-evenly"
            className="w-[150%] h-[100%] p-4"
          >
            <CaptionImage src={sec5img1} caption="Raid Host Flow Client-Server Architecture" />
            <CaptionImage
              src={sec5img2}
              caption="Raid Participant Flow Client-Server Architecture"
            />
          </Flex>
        }
        content={
          <Flex direction="column" className="w-[100%] gap-4">
            <Text size="xl">
              I used Go to write a backend REST server for data requests and a websocket server to
              handle user interaction once users join a raid together, and React.js with mantine
              components to build out the interface and bring the design to life.
            </Text>
            <Text size="xl">
              A postegresql database keeps track of users who interact with the website's
              functionality as well as the time and state of every raid hosted.
            </Text>
            <Text size="xl">
              Vercel Analytics tracks the number of unique visitors, what pages they visit, where
              they came to the site from, and the bounce rate.
            </Text>
          </Flex>
        }
        index={5}
      />
      <CaseStudyPanel
        title="Results"
        images={
          <Flex
            direction="column"
            content="center"
            justify="space-evenly"
            className="w-[40%] h-[100%] p-4"
          >
            <CaptionImage src={sec6img2} caption="Discord Night-Mode Feedback" />
            <CaptionImage src={sec6img1} caption="Discord Colour Feedback" />
          </Flex>
        }
        content={
          <Flex direction="column" className="w-[100%] gap-4">
            <Text size="xl">
              The tool is complete and available at{' '}
              <Anchor href="https://svtools.silken.dev">svtools.silken.dev</Anchor> or{' '}
              <Anchor href="https://svraids.vercel.app">svraids.vercel.app</Anchor>. The site was
              shared via the Pokemon Union Circle subreddit, as well as the community discord
              mentioned in the research section. The launch of the site was met with mild success.
              Users were uniformly excited with the concept, and 30 raids were successfully hosted
              during the first weekend - which coincided with a limited-time themed raid.
            </Text>
            <Text size="xl">
              Feedback from discord users indicated that dark mode is an important feature to
              utility-focused users. Some users noted that the yellow accents on the light blue and
              white backgrounds was straining for longer periods of use and in the dark.
            </Text>
            <Text size="xl">
              Following the initial weekend usage dwindled down to zero until the next themed raid
              event months later, where it jumped to a lower peak than the initial usage as few new
              users engaged with the hosting feature.
            </Text>

            <CaptionImage src={sec6img3} caption="Event-based Usage Trends" />
          </Flex>
        }
        index={6}
      />
      <CaseStudyPanel
        final
        title="Reflection"
        images={
          <Flex
            direction="row"
            content="center"
            justify="center"
            align="center"
            className="w-[100%] h-[100%] gap-4"
          >
            <CaptionImage src={sec7img1} caption="Live Mobile Interface" maxh="100%" />
            <Flex direction="column" justify="space-evenly" className="h-[100%]">
              <CaptionImage src={sec7img2} caption="Desktop Landing Page" />
              <CaptionImage src={sec7img3} caption="Desktop Filters" />
            </Flex>
          </Flex>
        }
        content={
          <Flex direction="column" className="w-[100%] gap-4">
            <Text size="xl">
              This usage pattern indicates that this tool did not find the core audience that it
              sought. While utility-focused players find and use the tool for special events, casual
              players are not active enough on the tool in order to justify its use outside of these
              peak interest times. In the end this tool has suffered from the same lack low activity
              as other community solutions.
            </Text>
            <Text size="xl">
              In hindsight, this tool entered the market at the wrong time. A year and half after
              the game's release and 5 months after its final content update, the casual player base
              has moved onto other games, and the core player base has been completing raid
              activities for long enough to have stockpiled resources. The fact that the discord
              community is the most active resource is exactly because it does not directly target
              this niche demographic. The fact that the tool is a small part of a larger platform is
              what is keeping that tool alive.
            </Text>
            <Text size="xl">
              From this experience, I learned the importance of considering the context in which
              competitors exist, on top of how they function or could be improved. Reaching out to
              partner with one of the existing platforms could have boosted my solution to an
              audience where it may have been able to sustain its own userbase.
            </Text>
          </Flex>
        }
        index={7}
      />
      {/* </CaseStudyBody> */}
    </Layout>
  );
}                     
