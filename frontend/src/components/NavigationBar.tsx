import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  Image,
  MenuButton,
  Container,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Stack,
  Heading,
  Text,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link as LinkTo } from "react-router-dom";
import Logo from "../assets/logo.svg"

interface LinkItem {
    nama: string;
    link: string;
}

const Links: LinkItem[] = [
    { nama: 'Modul', link: '/modul' },
    { nama: 'Hubungi', link: '/hubungi' },
    { nama: 'Informasi', link: '/informasi' },
]

const NavLink = ({
  children,
  link,
  onClick,
}: {
  children: ReactNode;
  link: string;
  onClick?: () => void;
}) => (
  <Text
    as={LinkTo}
    to={link}
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    onClick={onClick}
    w="max-content"
  >
    {children}
  </Text>
);


export default function NavigationBar() {
  const isLoggedIn = false;

  const bgnavbar = useColorModeValue(
    "rgba(255, 255, 255, 0.8)",
    "rgba(26, 32, 44, 0.8)"
  );

  const navbarSet = {
    color: useColorModeValue("white", "black"),
    bg: useColorModeValue("accentLight.400", "accentDark.400"),
    _hover: {
      bg: useColorModeValue("accentLight.500", "accentDark.500"),
    },
  };
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        backdropBlur="5px"
        boxShadow="sm"
       >
      <Container maxW={"7xl"}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
          variant={'ghost'}
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <HStack as={LinkTo} to="/" alignItems={"center"} >
              <Image src={Logo} alt="Logo" />
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
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              mr={4}
              {Links.map((link) => (
                <NavLink key={link.nama} {...link}>
                  {link.nama}
                </NavLink>
              ))}
            </HStack>
          <Flex alignItems={'center'}>
          <IconButton
              variant={'ghost'}
              size={'md'}
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              aria-label= {isOpen ? 'Close Menu' : 'Open Menu'}
              mr={4}
              onClick={toggleColorMode}
            />
            {isLoggedIn ? (
              <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
            ) : (
              <Button as={LinkTo} to="/masuk" size={"sm"} {...navbarSet}>
                MASUK
              </Button>
            )}
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
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.nama} {...link}>{link.nama}</NavLink>
              ))}
            </Stack>
            </Container>
        ) : null}
      </Box>
  );
}