import { Flex, Paper, Text } from '@mantine/core';
import { CaptionImage } from '@/components/CaptionImage';
import { CaseStudyHeader } from '@/components/CaseStudyHeader';
import { CaseStudyPanel } from '@/components/CaseStudyPanel';
import { Layout } from '@/components/Layout';
import sec1img1 from '../../assets/cc1-1.png';
import sec1img2 from '../../assets/cc1-2.png';
import sec2img1 from '../../assets/cc2-1.png';
import sec2img2 from '../../assets/cc2-2.png';
import sec3img1 from '../../assets/cc3-1.png';
import sec3img2 from '../../assets/cc3-2.png';
import sec4img1 from '../../assets/cc4-1.png';
import sec4img2 from '../../assets/cc4-2.png';
import sec4img3 from '../../assets/cc4-3.png';
import sec4img4 from '../../assets/cc4-4.png';
import sec4img5 from '../../assets/cc4-5.png';
import sec4img6 from '../../assets/cc4-6.png';
import sec4img7 from '../../assets/cc4-7.png';
import sec4img8 from '../../assets/cc4-8.png';

export function CafeCompassCase() {
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
            <CaptionImage src={sec1img1} caption="Google Maps Cafe Search Results" maxh="100%" />
            <CaptionImage src={sec1img2} caption="Yelp Cafe Search Results" maxh="100%" />
          </Flex>
        }
        content={
          <Flex direction="column" className="w-[100%] gap-4">
            <Text size="xl">
              In a city like Toronto, there is a cafe on almost every block. Not every cafe is
              created equal - some are cozy or cramped with an emphasis on fine coffee, some are
              wide open spaces with outlets and seating galore. From pet-friendly to wallet
              friendly, there are tons of different attributes that differentiate one coffee shop
              from another, yet sites like Google Maps and Yelp reduce all that nuance down to the
              search term "cafe" and a checkbox or two.
            </Text>
            <Text size="xl">
              In order to support both small businesses and their patrons, the solution to this
              problem must empower customers to find cafes that meet their needs, and allow cafes to
              advertise their features that set them apart.
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
            align="center"
            justify="space-evenly"
            className="w-[60%] kmax-h-[100%] gap-4"
          >
            <CaptionImage
              src={sec2img1}
              caption="Effective Uses of UI/UX from Existing Solutions"
              maxh="100%"
            />
            <CaptionImage
              src={sec2img2}
              caption="Cafe Blog Toronto Coffee Date - Last Updated 2022"
              maxh="100%"
            />
          </Flex>
        }
        content={
          <Flex direction="column" className="w-[100%] gap-4">
            <Text size="xl">
              Existing solutions typically fall into one of two camps - word of mouth or discovery
              tool.
            </Text>
            <Text size="xl">
              Recommendation threads on Reddit, blogs, and real life advice from your network are
              all word of mouth solutions. These solutions yield detailed, trustworthy
              recommendations, but are limited in their scope - threads and blogs may be outdated,
              and your friends can only speak to the place they've been.
            </Text>
            <Text size="xl">
              Discovery tools like Google Maps and Yahoo have a wide breadth of options to choose
              from, and many user reviews, but are unable to surface the crucial details that matter
              to a customer. Attributes such as the amount of seating a shop has, if it has a loud
              or quiet atmosphere, or if they allow for extended stays for working or studying are
              all difficult to find on these non-specialized discovery tool.
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
            align="center"
            justify="space-evenly"
            className="w-[120%] kmax-h-[100%] gap-4"
          >
            <CaptionImage src={sec3img1} caption="Early Task Flows" maxh="100%" />
            <CaptionImage src={sec3img2} caption="Early Search Tools Concept" maxh="60%" />
          </Flex>
        }
        content={
          <Flex direction="column" className="w-[100%] gap-4">
            <Text size="xl">
              The solution to this problem should be a specialized discovery tool - one that
              accounts for the cafe customer base's variety of needs.
            </Text>
            <Text size="xl">
              Three primary task flows were considered when building out early concepts - users
              searching for a cafe with specific attributes, users search for a specific cafe to
              leave a review, and business owners looking to add their business to the platform.
              Taskflows for each of these users' needs were roughed in order to inform the
              requirements of what early sketches should fulfill.
            </Text>
            <Text size="xl">
              One theme that showed up across the task flows was the importance of search tools -
              specifically the attributes that a business might be assigned. These attributes allow
              for searching users to discover the cafe that meets their needs and for business
              owners to help their business reach more potential customers. Reviewing users would
              serve as a balancing force in this system, validating the descriptions of businesses
              and adding a layer of trust for searching users.
            </Text>
            <Text size="xl">
              With attributes being so core to the proposed solution, the design needed have strong
              search tools, to empower users to cut through the noise and quickly find options that
              meet their needs. If these search tools are effective and compelling, businesses would
              be incentivized to tag themselves with as many of their offerings as possible in order
              to surface in these refined searches.
            </Text>
          </Flex>
        }
        index={3}
      />
      <CaseStudyPanel
        title="Iteration"
        images={
          <Flex
            direction="column"
            content="center"
            align="center"
            justify="space-evenly"
            className="w-[250%] max-h-[100%]"
          >
            <Flex direction="row" justify="center" className="w-[100%] max-h-[48%] grow gap-4">
              <CaptionImage src={sec4img1} caption="" maxw="20%" maxh="100%" />
              <CaptionImage src={sec4img2} caption="" maxw="20%" maxh="100%" />
              <CaptionImage src={sec4img3} caption="" maxw="20%" maxh="100%" />
              <CaptionImage src={sec4img4} caption="" maxw="20%" maxh="100%" />
              <CaptionImage src={sec4img5} caption="" maxw="20%" maxh="100%" />
            </Flex>
            <Flex
              direction="column"
              align="center"
              justify="start"
              className="w-[100%] max-h-[48%]"
            >
              <Flex direction="row" justify="center" className="w-[100%] h-[100%] gap-4">
                <CaptionImage src={sec4img6} caption="" maxw="20%" maxh="min-content" />
                <CaptionImage src={sec4img7} caption="" maxw="20%" maxh="min-content" />
                <CaptionImage src={sec4img8} caption="" maxw="20%" maxh="min-content" />
              </Flex>
            </Flex>
            <Text size="lg">Home Page Design Evolution</Text>
          </Flex>
        }
        content={
          <Flex direction="column" className="w-[100%] gap-4">
            <Text size="xl">
              Starting with paper sketches, I roughed out concepts for the search tools, search
              results, and cafe details page. Every paper sketch got at least one iteration before
              being translated to a digital wireframe in Figma.
            </Text>
            <Text size="xl">
              After performing a short round of user interviews to validate the clarity of the
              design from the wireframes, a design system and high fidelity mock-ups were developed.
            </Text>
            <Text size="xl">
              These high fidelity mockups were then strung together to create an interactive
              prototype in Figma that brought the design to life. This prototype was used in a small
              usability study conducted using Useberry that tested the learnability of key taskflows
              within the product.
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
              src="https://embed.figma.com/proto/xO1DfsRNk1zdJKTbMSAsDA/Lynn-Kinsella?page-id=2%3A4&node-id=2234-27785&viewport=116%2C91%2C0.18&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2183%3A13833&show-proto-sidebar=0&embed-host=share"
              className="rounded-xl drop-shadow-lg h-[100%] w-[100%]"
            />
          </Flex>
        }
        content={
          <Flex direction="column" className="w-[100%] gap-4">
            <Text size="xl">
              The final prototype received broadly positive feedback, with many university students
              commenting that they've looked for a website just like this in the past, and would use
              it if it were developed into a functional product.
            </Text>
            <Text size="xl">
              The interface also received generally positive feedback - especially on the
              interactive components such as the carousels and map. Some users notably commented on
              the UI style as outdated, and accurately pointed out that elements such as the footer
              and cards were not optimized for a mobile screen width, and felt cramped.
            </Text>
          </Flex>
        }
        index={5}
      />
    </Layout>
  );
}
