import {
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';

const Features = () => {
  return (
    <Stack
      as={Container}
      maxW={'7xl'}
      spacing={10}
      py={10}
      data-aos="fade-up"
      mt={10}>
      <Stack maxW="lg" textAlign="center" alignSelf="center">
        <Heading fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}>
          Keungulan Let It Be
        </Heading>
        <Text color={'gray.500'}>
          Beberapa Keunggulan Let It Be dibandingkan dengan platform lainnya
        </Text>
      </Stack>
      <Flex w="full" justifyContent={'center'} alignItems="center">
        <SimpleGrid
          w={'full'}
          columns={{ base: 2, xl: 4 }}
          spacing={4}
          color={'white'}>
          <Stack
            justify={'space-between'}
            w="100%"
            rounded={'xl'}
            bgGradient="linear(to-b, rgba(246, 92, 139, 1), rgba(246, 92, 139, 1))"
            px={'8'}
            py={'8'}>
            <Text fontSize={{ base: '36', md: '50' }} fontWeight="500">
              #1
            </Text>
            <Text fontSize={{ base: '18', md: '24' }} fontWeight="500">
              Materi Terlengkap
            </Text>
            <Box mt={'auto'} w="100%" h={0.9} bg={'white'} />
          </Stack>
        </SimpleGrid>
      </Flex>
    </Stack>
  );
};

export default Features;
