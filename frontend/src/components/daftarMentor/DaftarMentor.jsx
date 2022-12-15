import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { Link as LinkTo } from 'react-router-dom';

const DaftarMentor = () => {
  return (
    <Stack
      minH={{ base: 'auto', lg: '100vh' }}
      as={Container}
      w="full"
      alignItems="center"
      justifyContent={'center'}
      maxW={'7xl'}
      px={50}>
      <Box w={'100%'} data-aos="fade-up">
        <Heading
          fontSize={{ base: '3xl', sm: '4xl' }}
          fontWeight={600}
          letterSpacing={'tight'}
          lineHeight={'shorter'}
          color={useColorModeValue('gray.900', 'gray.100')}>
          <Text>Ingin Bergabung Sebagai Partner Pengajar Kami?</Text>
          <Text color={useColorModeValue('gray.900', 'gray.100')}>
            Bagikan Pengalamanmu Sekarang Bersama Para Pengajar Lainya
          </Text>
        </Heading>
        <Button
          as={LinkTo}
          to={'cara_mendaftar_instruktur'}
          color={useColorModeValue('white', 'black')}
          bg={useColorModeValue('accentLight.400', 'accentDark.400')}
          _hover={{
            bg: useColorModeValue('accentLight.500', 'accentDark.500'),
          }}
          p="4"
          mt={4}>
          Cara Mendaftar
        </Button>
      </Box>
    </Stack>
  );
};

export default DaftarMentor;
