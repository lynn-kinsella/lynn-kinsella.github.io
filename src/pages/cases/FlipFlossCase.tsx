import { Flex, Text } from '@mantine/core';
import { Layout } from '@/components/Layout';
import sec1img1 from '../../assets/ff1-1.png';
import sec1img2 from '../../assets/ff1-2.png';
import sec1img3 from '../../assets/ff1-3.png';
import sec2img1 from '../../assets/ff2-1.png';
import sec2img2 from '../../assets/ff2-2.png';
import sec3img1 from '../../assets/ff3-1.png';
import sec3img2 from '../../assets/ff3-2.png';
import sec4img1 from '../../assets/ff4-1.png';
import sec4img2 from '../../assets/ff4-2.png';
import sec4img3 from '../../assets/ff4-3.png';
import sec4img4 from '../../assets/ff4-4.png';
import { CaptionImage } from '../../components/CaptionImage';
import { CaseStudyHeader } from '../../components/CaseStudyHeader';
import { CaseStudyPanel } from '../../components/CaseStudyPanel';

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
            content="center"
            align="center"
            justify="space-evenly"
            className="w-[60%] kmax-h-[100%] gap-4"
          >
            <CaptionImage src={sec1img1} caption="Flip & Floss Mission Statement Site" />
            <Flex direction="row" justify="center" className="max-w-[100%] h-0 grow gap-4">
              <CaptionImage src={sec1img2} caption="F&F Kids App Home" maxh="100%" />
              <CaptionImage src={sec1img3} caption="F&F Kids App Activity" maxh="100%" />
            </Flex>
          </Flex>
        }
        content={
          <Flex direction="column" className="w-[100%] gap-4">
            <Text size="xl">
              Flip Academy is a mission-driven finance education company. With the goal of bringing
              financial literacy to kids everyday, they have developed an app - Flip & Floss - to
              encourage kids and parents to engage with topics like earning, saving, and the value
              of money. The app works as a way for parents to assign kids chores, which earns them
              with virtual rewards, as well as small allowance payouts. The app also contains
              finance education learning materials that kids can engage with at their leisure.
            </Text>
            <Text size="xl">
              The big issue with the Flip & Floss kids app is that it is not engaging for the target
              8-14 year old demographic. Kids interviewed before the start of this project commented
              on it being "boring" and there being "nothing to do" in the app. That's where this
              project begins. How can Flip & Floss make financial literacy engaging and fun for
              kids, so that it becomes a part of their everyday life?
            </Text>
          </Flex>
        }
        index={1}
      />
      <CaseStudyPanel
        title="Research"
        images={
          <Flex direction="column" justify="center" className="w-[40%] h-[100%] p-4">
            <CaptionImage src={sec2img1} caption="Interview Discussion Guide Introduction" />
            <CaptionImage
              src={sec2img2}
              caption="Annotated Walkthrough of Subway Surfers' Onboarding Flow"
            />
          </Flex>
        }
        content={
          <Flex direction="column" className="w-[100%] gap-4">
            <Flex direction="column">
              <Text size="xl" fw={700}>
                User Research
              </Text>
              <div className="pl-4">
                <Text className="pl-4" size="xl">
                  Working with Flip Academy, I scheduled a group interview with a cohort of students
                  that are enrolled in a workshop that the client is running. Ahead of the interview
                  I put wrote a research plan & discussion guide to keep the session focused and on
                  topic. The research session focused on the themes 1. What motivates kids to use an
                  app consistently 2. Kids' sharing habits, on and off social media 3. What about
                  the current app isn't succeeding in these goals and 4. What could make an
                  educational app fun for kids to use.
                </Text>
                <Text className="pl-4" size="xl">
                  The session uncovered that kids are highly motivated by rewards systems and
                  gamification, challenge and competition, and easy to learn experiences. This
                  provided a clear perspective on what changes the Flip & Floss app needed: a fun
                  rewards system, sharable and engaging activities, and a more age-appropriate,
                  easier to learn interface.
                </Text>
              </div>
            </Flex>
            <Flex direction="column">
              <Text size="xl" fw={700}>
                Secondary Research
              </Text>
              <div className="pl-4">
                <Text className="pl-4" size="xl">
                  In order to inform the design direction following the user research session, I
                  played through the onboarding process and 20 minutes of gameplay for 4 mobile
                  games that the participants noted as games they play every day. Analyzing the
                  commonalities between each game, as well as standout impactful experiences, I put
                  compiled key themes that make a mobile game sticky for kids.
                </Text>
              </div>
            </Flex>
          </Flex>
        }
        index={2}
      />
      <CaseStudyPanel
        title="Design Iteration"
        images={
          <Flex direction="column" justify="space-between" className="w-[80%] h-[100%] p-4">
            <CaptionImage src={sec3img1} caption="Onboarding Flow Pitch" />
            <CaptionImage src={sec3img2} caption="Homepage Design Evolution" maxh="60%" />
          </Flex>
        }
        content={
          <Flex direction="column" className="w-[100%] gap-4">
            <Text size="xl">
              Working with my team, we each came up with a number of concept sketches to present to
              the client. The client chose to move forward with an onboarding flow and rewards
              system designed by me, and a hybrid of two Home Page concepts designed by my teammates
              Justin Le and Ashley Thompson.
            </Text>
            <Text size="xl">
              The initial challenge with translating the sketches to digital mockups was to each
              person's individual style into a cohesive single design language. These initial
              wireframes used a style based off of our home screen concept by Ashley Thompson. I
              adapted this style across our other screens to establish a scaffolding to build on top
              of.
            </Text>
            <Text size="xl">
              The next step was to establish an identity for the app, through the use of colour,
              typography, and common components. This early sample focused on using bright,
              contrasting colours, chunky fonts, and size-based hierarchy to make the app more
              accessible and fun for the younger demographic.
            </Text>
            <Text size="xl">
              Clarifying statements from the clients that made it clear that this redesign should
              follow the style guide for the accompanying parents' app. This caused a shake up in
              the colours and fonts that I had access to, and posed a new challenge of keeping the
              interface engaging and accessible for kids while working with the more subdued palette
              of the parents' app. I leaned on the parents' app's use of drop shadows to establish
              hierarchy and achieve boundaries, and integrated their accent colours into an exciting
              gradient to use for high impact buttons, such as the "Claim Reward" button used to
              complete a mission.
            </Text>
          </Flex>
        }
        index={3}
      />
      <CaseStudyPanel
        title="Usability Testing"
        images={
          <Flex
            direction="column"
            content="center"
            align="center"
            justify="space-evenly"
            className="w-[60%] kmax-h-[100%] gap-4"
          >
            <Flex direction="row" justify="center" className="w-[100%] h-[50%] grow gap-4">
              <CaptionImage src={sec4img1} caption="Study Welcome" maxw="100%" maxh="100%" />
              <CaptionImage src={sec4img2} caption="Useberry Prompt" maxw="100%" maxh="100%" />
            </Flex>
            <Flex direction="row" justify="center" className="w-[100%] h-[50%] gap-4">
              <CaptionImage src={sec4img3} caption="Onboarding Prompt" maxw="100%" maxh="100%" />
              <CaptionImage src={sec4img4} caption="Knowledge Check" maxw="100%" maxh="100%" />
            </Flex>
          </Flex>
        }
        content={
          <Flex direction="column" className="w-[100%] gap-4">
            <Text size="xl">
              Using Useberry, the final design was tested with a small population of participants
              aged 8 - 14.
            </Text>
            <Text size="xl">
              This test was designed to verify the effectiveness of the onboarding process, by
              allowing kids to interact with the prototype, and interrupting the experience
              periodically to check if key information had been retained as a key metric for the
              design's learnability.
            </Text>
            <Text size="xl">
              The study also aimed to evaluate the ease of use for the design, both quantitatively,
              by comparing metrics such as the completion rate or the average time taken across each
              task, and qualitatively by watching back each session recording to discover pain
              points.
            </Text>
            <Text size="xl">
              The biggest takeaway from this study was that young users only comprehended one
              concept per dialogue box. Attempts to introduce or lead into a new feature at the end
              of one prompt often lead to a reduced comprehension of the system as a whole.
            </Text>
          </Flex>
        }
        index={4}
      />
      <CaseStudyPanel
        final
        title="Results"
        images={
          <Flex
            direction="column"
            content="center"
            align="center"
            justify="space-evenly"
            className="w-[200%] kmax-h-[100%] gap-4 "
          >
            <iframe
              title="Figma Prototype"
              src="https://embed.figma.com/proto/FxMRZKRwlIk1Mkbe94HfUN/Flip-%26-Floss-Old?page-id=408%3A11024&node-id=408-12029&viewport=59%2C175%2C0.12&scaling=scale-down&content-scaling=fixed&starting-point-node-id=408%3A12029&show-proto-sidebar=0&embed-host=share"
              className="rounded-xl drop-shadow-lg h-[100%] w-[100%]"
            />
          </Flex>
        }
        content={
          <Flex direction="column" className="gap-4">
            <Text size="xl">
              Flip & Floss were very happy with the prototype, as well as the insight gleaned from
              the research process.
            </Text>
            <Text size="xl">
              TAs of writing, Flip & Floss are still in the process of internally refining their
              redesign for their kids app.
            </Text>
            <Text size="xl">
              The Figma prototype of the onboarding flow is available here.
            </Text>
          </Flex>
        }
        index={5}
      />
    </Layout>
  );
}
