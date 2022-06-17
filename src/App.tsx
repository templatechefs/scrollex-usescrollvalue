import * as React from "react";
import { Center, chakra, Heading } from "@chakra-ui/react";
import { Scroll, useScrollValue } from "./scrollex-v2";
import Graphic from "./Graphic";
import { clamp } from "./utils";

const ScrollSection = chakra(Scroll.Section);
const ScrollContainer = chakra(Scroll.Container);

const useSectionProgress = () => {
  return useScrollValue(({ position, section, container }) => {
    const sectionPosition = position - section.topAt("container-top");
    const sectionScrollableHeight = section.height - container.height;
    const progress = sectionPosition / sectionScrollableHeight;
    return clamp(progress, 0, 1);
  });
};

const ScrollableGraphic = () => {
  const progress = useSectionProgress();
  return <Graphic progress={progress} />;
};

export default function App() {
  return (
    <ScrollContainer
      scrollAxis="y"
      height="100vh"
      bg="blackAlpha.900"
      color="whiteAlpha.800"
    >
      <ScrollSection height="100vh">
        <Center h="100%">
          <Heading>useScrollValue</Heading>
        </Center>
      </ScrollSection>
      <ScrollSection showOverflow height="700vh">
        <Center pos="sticky" top={0} h="100vh">
          <ScrollableGraphic />
        </Center>
      </ScrollSection>
      <ScrollSection height="100vh">
        <Center h="100%">
          <Heading>useScrollValue</Heading>
        </Center>
      </ScrollSection>
    </ScrollContainer>
  );
}
