import { Stack, HStack, Text, Heading, Box, Center } from "@chakra-ui/react"
import { DownloadIcon } from "@components/Icon"

import { ButtonLink, LinkOverlay } from "@components/Link"
import SimpleGrid from "@components/SimpleGrid"

const SectorPageBanner = ({ findings }) => {
  if (!findings) return null
  return (
    <SimpleGrid
      columns={4}
      pt={5}
      pb={10}
      borderTop={["0.0625rem solid", null, "none"]}
      borderBottom="0.0625rem solid"
      borderColor="gray.100"
    >
      {findings.slice(0, 3).map((finding, i) => {
        return (
          <Stack
            key={i}
            spacing="xs"
            gridColumn={["span 4", null, "span 2", null, "span 1"]}
          >
            <Heading variant="statisticTitle">{finding.title}</Heading>
            <Text variant="statisticText">{finding.description}</Text>
          </Stack>
        )
      })}
      <Box gridColumn={["span 4", null, "span 2", null, "span 1"]} alignContent="stretch">
        <ButtonLink
          href="/downloads/climatescope-2022-report.pdf"
          download="Climatescope-2022-report.pdf"
          target="_blank"
          h="100%"
          justifyContent="left"
          whiteSpace="wrap"
          width="100%"
          borderRadius="lg"
          textTransform="none"
          variant="subtle"
        >
          <HStack>
          <Center
            flex="none"
            w="3rem"
            h="3rem"
            bg="brand.300"
            color="brand.900"
            borderRadius="full"
          >
            <DownloadIcon />
          </Center>
          <Stack spacing={2} color="brand.900">
            <Heading variant="keyMessageTitle">
              {"Download full report"}
            </Heading>
            {/* <Text variant="statisticText">{"Read more about power"}</Text> */}
          </Stack>
          </HStack>
        </ButtonLink>
      </Box>
      {/* <Box gridColumn={["span 4", null, "span 2", null, "span 1"]}>
        <ButtonLink
          href="/downloads/climatescope-2022-report.pdf"
          download="Climatescope-2022-report.pdf"
          target="_blank"
          h="6rem"
          borderRadius="none"
          justifyContent="left"
          whiteSpace="wrap"
          width="100%"
        >
          <Text
          >
            {"Download report to find out more about this sector"}
          </Text>
        </ButtonLink>
      </Box> */}
    </SimpleGrid>
  )
}

export default SectorPageBanner
