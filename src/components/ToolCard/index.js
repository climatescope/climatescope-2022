import { Box, Stack, Heading, Text } from "@chakra-ui/react"

import { LinkBox, LinkOverlay } from "@components/Link"
import SimpleGrid from "@components/SimpleGrid"
import Image from "@components/Image"

const ToolCard = ({ title, slug, description, src }) => {
  return (
    <Box gridColumn={["span 2", null, null, "span 1"]}>
      <LinkBox as={SimpleGrid} columns={4}>
        <Box gridColumn="1 / -1">
          <Image src={src} ratio={3 / 2} type="feature" />
        </Box>
        <Stack
          spacing={2}
          gridColumn={["span 4", null, "span 3"]}
          mt="-5.6875rem"
          mr={10}
          pt={5}
          pr={10}
          bg="white"
          zIndex={1}
        >
          <Heading variant="keyMessageTitle">
            <LinkOverlay href={`/tools/${slug}`}>{title}</LinkOverlay>
          </Heading>
          <Text variant="keyMessageText">
            {description}
          </Text>
        </Stack>
      </LinkBox>
    </Box>
  )
}

export default ToolCard
