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
import gambar from '../../assets/hubungikami.png';
import { useEffect, useState } from 'react';
import useTimeoutGlobal from '../../store/TimeOut';
import LoadingFetchEffect from '../../components/loadingEffect/LoadingFetchEffect';
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
    <LoadingFetchEffect />
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
          <Image src={gambar} alt="" w={64} />
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
