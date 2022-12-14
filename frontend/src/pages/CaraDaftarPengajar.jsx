import {
  Container,
  Heading,
  Stack,
  Box,
  Text,
  Img,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import useTimeoutGlobal from '../store/TimeOut';
import hero from '../assets/mendaftarmentor/hero.png';
import mendaftarpengajar1 from '../assets/mendaftarmentor/1.png';
import mendaftarpengajar2 from '../assets/mendaftarmentor/2.png';
import mendaftarpengajar3 from '../assets/mendaftarmentor/3.png';
import mendaftarpengajar4 from '../assets/mendaftarmentor/4.png';
import LoadingFetchEffect from '../components/loadingEffect/LoadingFetchEffect';
import { useEffect, useState } from 'react';

const syarats = [
  {
    judul: 'Siapkan Foto Terbaru dan Foto KTP',
    deskripsi:
      'Demi mendapat identitas anda tinggal dimana dan umur berapa, kami membutuhkan foto terbaru dan foto KTP dari anda.',
    img: mendaftarpengajar1,
    direction: 'row',
  },
  {
    judul: 'Mengisi Formulir Pendaftaran',
    deskripsi:
      'Setelah mempersiapkan foto terbaru dan foto KTP anda, selanjutnya adalah mengisi formulir pendaftaran pada kotak paling bawah.',
    img: mendaftarpengajar2,
    direction: 'row-reverse',
  },
  {
    judul: 'Menunggu Persetujuan',
    deskripsi:
      'Setelah mengisi formulir pendaftaran, kami akan mempertimbangkan anda menjadi bagian dari Pengajar kami, anda akan menerima email konfirmasi.',
    img: mendaftarpengajar3,
    direction: 'row',
  },
  {
    judul: 'Selamat Bergabung',
    deskripsi: 'Selamat! anda resmi bergabung sebagai pengajar di Let It Be.',
    img: mendaftarpengajar4,
    direction: 'row-reverse',
  },
];

const CaraMendafatarPengajar = () => {
  const { timeout } = useTimeoutGlobal();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), timeout);
  }, [timeout]);

  const ContainerSyarat = props => {
    return (
      <Stack
        alignItems="center"
        spacing={{
          base: 10,
          md: 24,
        }}
        direction={{ base: 'column', md: props.direction }}>
        <Box flex={1} data-aos="fade-up">
          <Heading
            mb={4}
            fontSize={{
              base: '2xl',
              md: '4xl',
            }}
            textAlign={{
              base: 'center',
              md: 'left',
            }}>
            {props.judul}
          </Heading>
          <Text
            textAlign={{
              base: 'center',
              sm: 'left',
            }}
            color="gray.600"
            _dark={{
              color: 'gray.400',
            }}
            fontSize={{
              md: 'lg',
            }}>
            {props.deskripsi}
          </Text>
        </Box>
        <Box flex={1} w="md" h="md" p={10} align={'center'}>
          <Img
            src={props.img}
            h={{ base: '48', sm: 'full' }}
            fit="cover"
            objectPosition="center"></Img>
        </Box>
      </Stack>
    );
  };

  const stylependaftaran = {
    color: useColorModeValue('white', 'black'),
    bg: 'blue.500',
    _hover: {
      bg: useColorModeValue('accentLight.500', 'accentDark.500'),
    },
  };

  return isLoading ? (
    <LoadingFetchEffect />
  ) : (
    <Container maxW={'7xl'} data-aos="fade-up">
      <Stack py={3} spacing={10}>
        <Stack align={'center'} spacing={10}>
          <Stack textAlign={'center'}>
            <Heading fontSize={{ base: '3xl', md: '4xl' }}>
              Kesempatan Untuk Anda!
            </Heading>
            <Text fontSize={'md'} color={'gray.500'} maxW={'3xl'}>
              Let It Be sedang membuka kesempatan bagi semua orang untuk
              bergabung sebagai pengajar. Manfaatkan sebaik mungkin dan jangan
              ragu untuk bergabung. Kami nantikan anda mendaftar sebagai bagian
              dari kami!
            </Text>
          </Stack>
          <Img src={hero} w="2xl" />
        </Stack>
        <Stack>
          <Stack borderWidth={1} p={10} borderRadius={20}>
            <Stack spacing={10} p={5}>
              {syarats.map(syarat => (
                <ContainerSyarat key={syarat.judul} {...syarat} />
              ))}
            </Stack>
          </Stack>
        </Stack>
        <Button
          as="a"
          href="https://www.google.com/"
          p="4"
          w="full"
          target="_blank"
          {...stylependaftaran}>
          Link Pendaftaran
        </Button>
      </Stack>
    </Container>
  );
};

export default CaraMendafatarPengajar;
