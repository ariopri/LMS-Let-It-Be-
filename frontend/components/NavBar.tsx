import { ReactNode } from "react";

import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Container,
  Text,
  Image,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
} from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon, RepeatClockIcon } from "@chakra-ui/icons";
import { MoonIcon, SunIcon, EditIcon, ArrowBackIcon } from "@chakra-ui/icons";

interface Link {
  name: string;
  link: string;
}

const Links: Link[] = [
  {
    name: "Daftar Kelas",
    link: "/kelas",
  },
  {
    name: "Hubungi",
    link: "/hubungi",
  },
  {
    name: "Tentang",
    link: "/tentang",
  },
  {
    name: "Informasi",
    link: "/informasi",
  },
];

interface NavLinkProps {
  children: ReactNode;
  link: string;
}
const NavLink = ({ children, link }: NavLinkProps) => (
  <Text
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      bg: useColorModeValue("accentLight.500", "accentDark.500"),
    }}
    w="max-content"
  >
    {children}
  </Text>
);

export default function Navbar() {
  const bgnavbar = useColorModeValue(
    "rgba(255, 255, 255, 0.8)",
    "rgba(26, 32, 44, 0.8)"
  );
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navbarSet = {
    color: useColorModeValue("white", "black"),
    bg: useColorModeValue("accentLight.400", "accentDark.400"),
    _hover: {
      bg: useColorModeValue("accentLight.500", "accentDark.500"),
    },
  };
  return (
    <Box
      as="header"
      position={"sticky"}
      top={0}
      left={0}
      right={0}
      w={"full"}
      zIndex={3}
      bg={bgnavbar}
      backdropFilter="auto"
      backdropSaturate="180%"
      backdropBlur="5px"
      boxShadow="sm"
    >
      <Container maxW={"7xl"}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            variant="ghost"
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <HStack alignItems={"center"}>
                <Heading
                  as="h3"
                  size="md"
                  fontWeight={500}
                  display={{ base: "none", sm: "block" }}
                >
                  <Text
                    color={useColorModeValue(
                      "accentLight.400",
                      "accentDark.400"
                    )}
                    as={"span"}
                    position={"relative"}
                    _after={{
                      content: "''",
                      width: "full",
                      height: "15%",
                      position: "absolute",
                      bottom: 1,
                      left: 0,
                      bg: useColorModeValue(
                        "accentLight.100",
                        "accentDark.900"
                      ),
                      zIndex: -1,
                    }}
                  >
                    Let
                  </Text>
                  <br />
                  It Be
                </Heading>
              </HStack>
            </Box>
          </HStack>

          <HStack
            as={"nav"}
            spacing={4}
            display={{ base: "none", md: "flex" }}
            mr={4}
          >
            {Links.map((link) => (
              <NavLink key={link.name} link={link.link}>
                {link.name}
              </NavLink>
            ))}
          </HStack>

          <Flex alignItems={"center"}>
            <Button
              variant={"ghost"}
              size={"md"}
              mr={4}
              onClick={toggleColorMode}
            >
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>

            <Button size={"sm"} {...navbarSet}>
              MASUK
            </Button>
          </Flex>
        </Flex>
      </Container>
      {isOpen ? (
        <Container
          display={{ md: "none" }}
          pos="fixed"
          zIndex={3}
          bg={bgnavbar}
          w={"full"}
          maxW="7xl"
          p={4}
        >
          <Stack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <Text key={link.name} {...link} onClick={onClose} />
            ))}
          </Stack>
        </Container>
      ) : null}
    </Box>
  );
}
