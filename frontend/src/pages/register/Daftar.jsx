import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [passwordType, setPasswordType] = useState(false);
  return (
    <Container
      maxW="lg"
      py={{
        base: '12',
        md: '8',
      }}
      px={{
        base: '0',
        sm: '8',
      }}>
      <Stack spacing={8}>
        <Stack spacing={6}>
          <img
            src={`${import.meta.env.VITE_APP_IMAGE_PATH + 'logo.svg'} `}
            alt="logo"
            style={{
              height: '20',
              width: '20',
              display: 'block',
              margin: 'auto',
            }}
          />
          <Stack
            spacing={{
              base: '2',
              md: '3',
            }}
            textAlign="center">
            <Heading
              size={useBreakpointValue({
                base: 'xs',
                md: 'sm',
              })}>
              Daftar Akun Baru
            </Heading>
          </Stack>
        </Stack>
        <Box
          py={{
            base: '0',
            sm: '8',
          }}
          px={{
            base: '4',
            sm: '10',
          }}
          bg={useBreakpointValue({
            base: 'transparent',
            sm: 'bg-surface',
          })}
          boxShadow={{
            base: 'none',
            sm: useColorModeValue('md', 'md-dark'),
          }}
          borderRadius={{
            base: 'none',
            sm: 'xl',
          }}>
          <Stack spacing={6}>
            <Stack spacing={5}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>Nama Depan</FormLabel>
                    <Input
                      type="text"
                      focusBorderColor={useColorModeValue(
                        'accentLight.400',
                        'accentDark.400'
                      )}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName" isRequired>
                    <FormLabel>Nama Belakang</FormLabel>
                    <Input
                      type="text"
                      focusBorderColor={useColorModeValue(
                        'accentLight.400',
                        'accentDark.400'
                      )}
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl isRequired>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  id="email"
                  type="email"
                  autoComplete="email"
                  focusBorderColor={useColorModeValue(
                    'accentLight.400',
                    'accentDark.400'
                  )}
                  required
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Kata Sandi</FormLabel>
                <InputGroup size={'lg'}>
                  <Input
                    type={passwordType ? 'text' : 'password'}
                    focusBorderColor={useColorModeValue(
                      'accentLight.400',
                      'accentDark.400'
                    )}
                    onChange={e => setPassword(e.target.value)}
                  />
                  <InputRightElement width="4.5rem">
                    <IconButton
                      icon={passwordType ? <ViewIcon /> : <ViewOffIcon />}
                      onClick={() => setPasswordType(!passwordType)}
                      variant="ghost"
                    />
                  </InputRightElement>
                </InputGroup>
              </FormControl>
            </Stack>
            <Stack spacing={6}>
              <Button
                type="submit"
                colorScheme={'blue'}
                size={'lg'}
                fontSize={'md'}
                w="full">
                Daftar
              </Button>
              <Text textAlign={'center'}>
                Sudah punya akun?{' '}
                <Link
                  color={useColorModeValue('accentLight.400', 'accentDark.400')}
                  to="/masuk">
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default Register;
