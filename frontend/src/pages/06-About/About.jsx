import {
  Heading,
  Stack,
  Text,
  Container,
  Box,
  Avatar,
  Center,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import useTimeoutGlobal from '../../store/TimeOut';
import LoadingFetchEffect from '../../components/01-Reusable/loadingEffect/LoadingFetchEffect';

const data = [
  {
    nama: 'Alifah Rumaishah Indi',
    status: 'Mahasiswa Teknik Informatika',

    text: 'Life is a cycle, so just keep going and never give up.',

    avatar: 'https://avatars.githubusercontent.com/u/115602696?v=4',
    sbg: 'Hustler',
    github: 'https://github.com/indialifah',
    warna: 'red.600',
  },
  {
    nama: 'Ario Prima',
    status: 'Mahasiswa Teknik Elektro',
    text: 'Keep trying until your dreams come true and make the failures you experience as motivation to try to be even better',
    avatar: 'https://avatars.githubusercontent.com/u/101112740?v=4',
    sbg: 'Full Stack Developer',
    github: 'https://github.com/ariopri',
    warna: 'blue.600',
  },
];

const About = () => {
  const { timeout } = useTimeoutGlobal();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, timeout);
  });

  const About = props => {
    return (
      <Stack
        as="a"
        href={props.github}
        target="_blank"
        spacing={{ base: 0, lg: 8 }}
        direction={'row'}
        h={'100%'}
        p={10}
        borderWidth="1px"
        borderRadius="lg"
        justifyContent={'center'}
        bg={useColorModeValue('rgba(0,0,0,.05)', 'rgba(255,255,255,.05)')}
        boxShadow={{
          base: useColorModeValue(
            '2px 2px 2px 0 rgba(208, 245, 255, 0.5)',
            '5px 5px 5px 0 rgba(97, 210, 242, .05)'
          ),
          sm: 'md',
        }}>
        <Avatar
          size={'xl'}
          src={props.avatar}
          display={{ base: 'none', lg: 'block' }}
        />
        <Stack spacing={5} textAlign={{ base: 'center', lg: 'left' }}>
          <Box>
            <Center>
              <Avatar
                size={'xl'}
                src={props.avatar}
                display={{ base: 'block', lg: 'none' }}
                mb={2}
              />
            </Center>
            <Stack
              align="center"
              justify={'space-between'}
              direction={{ base: 'column', lg: 'row' }}>
              <Box>
                <Heading size={'sm'} color={props.warna}>
                  {props.nama}
                </Heading>
                <Text as={'span'} fontWeight={'normal'}>
                  {props.status}
                </Text>
              </Box>
              <Text as={'i'} fontWeight={'normal'}>
                {props.sbg}
              </Text>
            </Stack>
          </Box>
          <Text align={'justify'}>{props.text}</Text>
        </Stack>
      </Stack>
    );
  };
  return isLoading ? (
    <LoadingFetchEffect />
  ) : (
    <Stack as={Container} maxW={'7xl'} pt={4} pb={4} data-aos="fade-up">
      <Heading
        fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
        textAlign={'center'}
        my={5}>
        TIM KAMI
      </Heading>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 4, xl: 8 }}
        autoRows={'1fr'}>
        {data.map((item, index) => {
          return <About {...item} key={index} />;
        })}
      </SimpleGrid>
    </Stack>
  );
};

export default About;
