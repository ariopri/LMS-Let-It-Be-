import {
  CloseIcon, HamburgerIcon, MoonIcon, SunIcon,
} from '@chakra-ui/icons';
import {
  Box, Container, Flex, Heading, HStack, IconButton, Image, Text, useColorModeValue, useColorMode, useDisclosure, Button,
} from '@chakra-ui/react';
import { Link as LinkTo } from 'react-router-dom';

const Links = [
  { nama: 'Roadmap', link: '/roadmap' },
  { nama: 'Hubungi', link: '/hubungi' },
  { nama: 'Tentang', link: '/tentang' },
  { nama: 'Informasi', link: '/Informasi' },
];

function NavLink({ nama, link, onClick }) {
  return (
    <Text
      as={LinkTo}
      to={link}
      px={2}
      py={1}
      rounded="md"
      _hover={{
        bg: useColorModeValue('gray.200', 'gray.700'),
        textDecoration: 'none',
      }}
      onClick={onClick}
      w="max-content"
    >
      {nama}
    </Text>
  );
}

function NavigationBar() {
  const bgnavbar = useColorModeValue(
    'rgba(255, 255, 255, 0.8)',
    'rgba(26, 32, 44, 0.8)',
  );
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navbarSet = {
    color: useColorModeValue('white', 'black'),
    bg: useColorModeValue('accentLight.400', 'accentDark.400'),
    _hover: {
      bg: useColorModeValue('accentLight.500', 'accentDark.500'),
    },
  };

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      left={0}
      right={0}
      w="full"
      zIndex={3}
      bg={bgnavbar}
      backdropFilter="auto"
      backdropSaturate="180%"
      backdropBlur="5px"
      boxShadow="sm"
    >
      <Container maxW="7xl">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <IconButton
            variant="ghost"
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems="center">
            <Box>
              <HStack as={LinkTo} to="/" alignItems="center">
                <Image src="" alt="Logo" />
                <Heading
                  as="h3"
                  size="md"
                  fontWeight="500"
                  display={{ base: 'none', sm: 'block' }}
                >
                  <Text
                    color={useColorModeValue(
                      'accentLight.400',
                      'accentDark.400',
                    )}
                    as="span"
                    position="relative"
                    _after={{
                      content: '""',
                      width: 'full',
                      height: '15%',
                      position: 'absolute',
                      bottom: 1,
                      left: 0,
                      bg: useColorModeValue(
                        'accentLight.400',
                        'accentDark.400',
                      ),
                      zIndex: -1,
                    }}
                  >
                    Le It Be
                  </Text>
                </Heading>
              </HStack>
            </Box>
          </HStack>
          <Flex alignItems="center">
            <HStack
              as="nav"
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
              mr={4}
            >
              {Links.map((link) => (
                <NavLink key={link.nama} nama={link.nama} link={link.link} />
              ))}
            </HStack>
            <IconButton
              variant="ghost"
              size="md"
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              mr={4}
              onClick={toggleColorMode}
            />
            <Button as={LinkTo} to="/masuk" size="sm">
              MASUK
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export default NavigationBar;
