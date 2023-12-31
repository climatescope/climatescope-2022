import { useEffect, useRef } from "react"
import {
  HStack,
  Stack,
  Container,
  Box,
  Text,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  VisuallyHidden,
  Divider,
  useTheme,
} from "@chakra-ui/react"
import { useRouter } from "next/router"

import { Link, ButtonLink } from "@components/Link"
import { DownloadIcon, CloseIcon, MenuIcon } from "@components/Icon"
import SimpleGrid from "@components/SimpleGrid"
import Logo from "./Logo"

const includedLinks = [
  "/results",
  "/highlights",
  "/tools",
  "/sectors",
  "/about",
]

const reports = [
  {
    id: 1,
    title: "Power Transition Factbook",
    href: "/downloads/climatescope-2022-power-report-en.pdf",
    year: 2022,
    imgSrc: "climatescope-2022-report-en-cover.jpg",
    actionText: "Power Factbook",
    isComingSoon: false,
  },
  {
    id: 2,
    title: "Emerging Markets Electrified Transport Factbook",
    href: "/downloads/climatescope-2022-transport-report-en.pdf",
    year: 2022,
    imgSrc: "climatescope-2022-report-en-cover.jpg",
    actionText: "Transport Factbook",
    isComingSoon: false,
  },
  {
    id: 3,
    title: "Electrified Heating Factbook",
    href: "/downloads/climatescope-2022-buildings-report-en.pdf",
    year: 2022,
    imgSrc: "climatescope-2022-report-en-cover.jpg",
    actionText: "Buildings Factbook",
    isComingSoon: false,
  },
]

const SiteHeader = ({ navigation }) => {
  const { colors } = useTheme()
  const initialRef = useRef()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { route } = useRouter()

  const allNavigation = navigation.filter((d) => includedLinks.includes(d.path))

  useEffect(() => {
    onClose()
  }, [route])

  const aboutItems = [navigation.find((s) => s.path === "/about")]
  const extendedNavigation = navigation.filter(
    (d) => !["/about"].includes(d.path)
  )

  return (
    <Box
      style={{
        background: route === "/blog" ? colors.brand[900] : "white",
        color: route === "/blog" ? "white" : "inherit",
      }}
    >
      <Container>
        <HStack
          h={["4.5rem", null, null, "6rem"]}
          justifyContent="space-between"
        >
          <HStack spacing={[8, null, null, null, 12]}>
            <Logo />
            <HStack
              as="nav"
              spacing={10}
              flex="1"
              display={["none", null, null, "flex"]}
            >
              {allNavigation.map(({ title, path }) => {
                return (
                  <Link key={path} href={path} variant="mainNav">
                    {title}
                  </Link>
                )
              })}
            </HStack>
          </HStack>

          <HStack spacing={3}>
            {/* <ButtonLink
              href="/downloads/climatescope-2022-report-en.pdf"
              download="climatescope-2022-report.pdf"
              target="_blank"
              size="lg"
              flex="none"
              rightIcon={<DownloadIcon strokeWidth={1.75} />}
              colorScheme={route === "/blog" ? "white" : "brand"}
              display={["none", "flex"]}
            >
              {"Download report"}
            </ButtonLink> */}
            <ReportDownloadDialog />
            <Button
              onClick={onOpen}
              ref={initialRef}
              w="3rem"
              minW="2.5rem"
              h="3rem"
              colorScheme={route === "/blog" ? "white" : "gray"}
              borderRadius="full"
              p={0}
            >
              <VisuallyHidden>{"Open navigation"}</VisuallyHidden>
              <MenuIcon size={20} />
            </Button>
          </HStack>
        </HStack>
      </Container>

      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="none"
        initialFocusRef={initialRef}
        finalRef={initialRef}
      >
        <ModalContent
          my={0}
          maxW="100%"
          w="100%"
          h="100vh"
          position="fixed"
          top="0"
          bottom="0"
          borderRadius="0"
          bg="teal.900"
          color="white"
          style={{ overflowY: "scroll" }}
        >
          <ModalBody p={0}>
            <Container top={0} position="sticky" bg="teal.900" zIndex={1}>
              <HStack
                h={["4.5rem", null, null, "6rem"]}
                spacing={12}
                justifyContent="space-between"
              >
                <Logo />

                <HStack
                  spacing={10}
                  flex="1"
                  display={["none", null, null, "flex"]}
                >
                  {allNavigation.map(({ title, path }) => {
                    return (
                      <Link key={path} href={path} variant="mainNav">
                        {title}
                      </Link>
                    )
                  })}
                </HStack>
                <Box>
                  <Button
                    onClick={onClose}
                    ref={initialRef}
                    w="3rem"
                    minW="2.5rem"
                    p={0}
                    h="3rem"
                    colorScheme="whiteAlpha"
                    borderRadius="full"
                  >
                    <VisuallyHidden>{"Close navigation"}</VisuallyHidden>
                    <CloseIcon size={20} />
                  </Button>
                </Box>
              </HStack>
            </Container>

            <Container>
              <SimpleGrid columns={[1, null, null, 8]} py={10}>
                <Stack spacing={[5, null, 10]} gridColumn="span 2">
                  <Stack flex="1" spacing={[5, null, 10]}>
                    <Text color="teal.100" fontSize={["md", null, "lg"]}>
                      {
                        "Climatescope is a snapshot of where clean energy policy and finance stand today, and a guide to what can happen in the future."
                      }
                    </Text>
                    {/* <ButtonLink
                      href="/downloads/climatescope-2022-report-en.pdf"
                      download="climatescope-2022-report.pdf"
                      target="_blank"
                      size="lg"
                      flex="none"
                      rightIcon={<DownloadIcon strokeWidth={1.75} />}
                      variant="outline"
                      colorScheme="white"
                      display={["none", "flex"]}
                    >
                      {"Download report"}
                    </ButtonLink> */}
                    <Stack spacing={5}>
                      <ButtonLink
                        href={reports[0].href}
                        download={reports[0].title}
                        target="_blank"
                        colorScheme="white"
                        size="lg"
                        leftIcon={
                          <Box ml={2}>
                            <DownloadIcon size={20} strokeWidth={2} />
                          </Box>
                        }
                        spacing={6}
                      >
                        {reports[0].actionText}
                      </ButtonLink>
                      <ButtonLink
                        href={reports[1].href}
                        download={reports[1].title}
                        target="_blank"
                        colorScheme="white"
                        size="lg"
                        leftIcon={
                          <Box ml={2}>
                            <DownloadIcon size={20} strokeWidth={2} />
                          </Box>
                        }
                        spacing={6}
                      >
                        {reports[1].actionText}
                      </ButtonLink>
                      <ButtonLink
                        href={reports[2].href}
                        download={reports[2].title}
                        target="_blank"
                        colorScheme="white"
                        size="lg"
                        leftIcon={
                          <Box ml={2}>
                            <DownloadIcon size={20} strokeWidth={2} />
                          </Box>
                        }
                        spacing={6}
                      >
                        {reports[2].actionText}
                      </ButtonLink>
                    </Stack>
                  </Stack>
                  {aboutItems.map((navItem) => {
                    return (
                      <Stack spacing={[5, null, 10]} key={navItem.path}>
                        <Link
                          href={navItem.path}
                          fontWeight={700}
                          fontSize={["xl", null, "3xl"]}
                          lineHeight="shorter"
                          color="teal.100"
                        >
                          {navItem.title}
                        </Link>
                        {navItem.links.length && (
                          <Stack spacing={3}>
                            {navItem.links.map((d) => {
                              return (
                                <Link
                                  key={d.path}
                                  href={d.path}
                                  fontSize={["md", null, "xl"]}
                                  lineHeight="short"
                                  color="teal.100"
                                >
                                  {d.title}
                                </Link>
                              )
                            })}
                          </Stack>
                        )}
                        <Divider borderColor="gray.700" />
                      </Stack>
                    )
                  })}
                </Stack>
                <Stack spacing={[5, null, 10]} gridColumn="span 3">
                  {extendedNavigation.slice(0, 3).map((navItem) => {
                    return (
                      <Stack spacing={[5, null, 10]} key={navItem.path}>
                        <Link
                          href={navItem.path}
                          fontWeight={700}
                          fontSize={["xl", null, "3xl"]}
                          lineHeight="shorter"
                        >
                          {navItem.title}
                        </Link>
                        {navItem.links.length && (
                          <Stack spacing={3}>
                            {navItem.links.map((d) => {
                              return (
                                <Box key={d.title}>
                                  <Link
                                    key={d.path}
                                    href={d.path}
                                    fontSize={["md", null, "xl"]}
                                    lineHeight="short"
                                  >
                                    {d.title}
                                  </Link>
                                </Box>
                              )
                            })}
                          </Stack>
                        )}
                        <Divider borderColor="gray.700" />
                      </Stack>
                    )
                  })}
                </Stack>
                <Stack spacing={[5, null, 10]} gridColumn="span 3">
                  {extendedNavigation.slice(3).map((navItem) => {
                    return (
                      <Stack spacing={[5, null, 10]} key={navItem.path}>
                        <Link
                          href={navItem.path}
                          fontWeight={700}
                          fontSize={["xl", null, "3xl"]}
                          lineHeight="shorter"
                        >
                          {navItem.title}
                        </Link>
                        {navItem.links.length && (
                          <Stack spacing={3}>
                            {navItem.links.map((d) => {
                              return (
                                <Link
                                  key={d.path}
                                  href={d.path}
                                  fontSize={["md", null, "xl"]}
                                  lineHeight="short"
                                >
                                  {d.title}
                                </Link>
                              )
                            })}
                          </Stack>
                        )}
                        <Divider borderColor="gray.700" />
                      </Stack>
                    )
                  })}
                </Stack>
              </SimpleGrid>
            </Container>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}

function ReportDownloadDialog() {
  const { route } = useRouter()
  const initialRef = useRef()
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button
        href="/downloads/climatescope-2022-report-en.pdf"
        download="climatescope-2022-report.pdf"
        target="_blank"
        size="lg"
        flex="none"
        rightIcon={<DownloadIcon strokeWidth={1.75} />}
        colorScheme={route === "/blog" ? "white" : "brand"}
        display={["none", "flex"]}
        onClick={onOpen}
      >
        {"Download report"}
      </Button>

      <Modal
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="none"
        initialFocusRef={initialRef}
        finalRef={initialRef}
      >
        <ModalOverlay />
        <ModalContent mx={4}>
          <ModalCloseButton borderRadius="full" />
          <ModalHeader>{"Downloads"}</ModalHeader>
          <ModalBody px={0} pt={0} pb={1}>
            <Stack spacing={0}>
              {reports.map((r) => {
                const { isComingSoon } = r
                return (
                  <Stack
                    key={r.id}
                    spacing={3}
                    alignItems="flex-start"
                    borderTop="0.0625rem solid"
                    borderColor="gray.100"
                    px={6}
                    py={5}
                    style={{ opacity: isComingSoon ? 0.5 : 1 }}
                  >
                    <Text fontWeight={600} lineHeight="shorter">
                      {r.title}
                    </Text>
                    <ButtonLink
                      href={r.href}
                      download={r.title}
                      target="_blank"
                      leftIcon={<DownloadIcon size={20} strokeWidth={2} />}
                      spacing={6}
                      isDisabled={isComingSoon}
                      pointerEvents={isComingSoon ? "none" : "all"}
                      tabIndex={isComingSoon ? -1 : 0}
                    >
                      {r.actionText}
                    </ButtonLink>
                  </Stack>
                )
              })}
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default SiteHeader
