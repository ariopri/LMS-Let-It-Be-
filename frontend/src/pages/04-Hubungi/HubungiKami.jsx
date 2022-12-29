import {
  Flex,
  Stack,
  Heading,
  Text,
  Input,
  Button,
  useColorModeValue,
  Image,
  Container,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Loading from '../../components/01-Reusable/LoadingEffect/LoadingFetchEffect';
import useTimeoutGlobal from '../../store/TimeOut';
import OpenWhatsApp from './OpenWhatsapp';

export default function HubungiKami() {
  const { timeout } = useTimeoutGlobal();
  const [isLoading, setIsLoading] = useState(true);
  const [pesan, setPesan] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, timeout);
  });

  const searchstyle = {
    focusBorderColor: useColorModeValue('accentLight.400', 'accentDark.400'),
  };

  const buttonstyle = {
    color: useColorModeValue('black', 'black'),
    bg: useColorModeValue('blue.100', 'blue.900'),
    _hover: {
      bg: useColorModeValue('accentLight.500', 'accentDark.500'),
      boxShadow: 'lg',
    },
  };

  const bgContainer = { bg: useColorModeValue('white', 'gray.700') };

  return isLoading ? (
    <Loading />
  ) : (
    <Container maxW={'7xl'} my={5} data-aos="fade-up">
      <Flex align={'center'} justify={'center'}>
        <Stack
          p={8}
          spacing={6}
          align={'center'}
          rounded={'3xl'}
          boxShadow={'base'}
          {...bgContainer}>
          <Image
            src={`${import.meta.env.VITE_APP_IMAGE_PATH + 'hubungikami.png'} `}
            alt=""
            w={64}
          />
          <Stack align={'center'} spacing={2} textAlign="center">
            <Heading textTransform={'uppercase'} fontSize={'3xl'}>
              Hubungi Kami
            </Heading>
            <Text fontSize={'lg'} color={'gray.500'}>
              Kamu dapat menanyakan segala hal tentang Let It Be disini.
            </Text>
          </Stack>
          <Stack
            as="form"
            spacing={4}
            direction={{ base: 'column', md: 'row' }}
            w={'full'}
            onSubmit={e => {
              e.preventDefault();
              OpenWhatsApp({ pesan });
            }}>
            <Input
              rounded="full"
              type="text"
              placeholder="contoh: Apakah Let It Be itu?"
              onChange={e => setPesan(e.target.value)}
              {...searchstyle}
            />
            <Button
              type="submit"
              rounded={'full'}
              flex={'1 0 auto'}
              {...buttonstyle}>
              Kirim Pesan
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Container>
  );
}
