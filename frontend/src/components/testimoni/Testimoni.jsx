import {
  Container,
  Flex,
  Box,
  chakra,
  Avatar,
  useColorModeValue,
  Text,
  Heading,
  Stack,
} from '@chakra-ui/react';

const Testimoni = () => {
  const hiasan =
    'url("https://images.unsplash.com/photo-1517436073-7b3a1a2e9d0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80")';
  return (
    <Container maxW={'7xl'}>
      <Flex justify={'center'} data-aos="fade-up">
        <Stack maxW="xl" textAlign="center">
          <Heading
            textAlign={'center'}
            fontSize="28"
            fontWeight={700}
            lineHeight={10}>
            Tanggapan Para Siswa?
          </Heading>
          <Text color={'gray.500'}>
            Mereka yang pernah mencoba menggunakan jasa kami, menyebutkan bahwa
            kami menyediakan layanan yang sangat bagus.
          </Text>
        </Stack>
      </Flex>
      <Stack spacing={20} mt={20}>
        <Flex
          justify={'flex-start'}
          data-aos="fade-up-right"
          _after={{
            content: '""',
            position: 'absolute',
            height: '21px',
            width: '29px',
            left: '35px',
            top: '-10px',
            backgroundSize: 'cover',
            backgroundImage: hiasan,
          }}
          _before={{
            content: '""',
            position: 'absolute',
            zIndex: '-1',
            height: 'full',
            maxW: '4xl',
            width: 'full',
            filter: 'blur(40px)',
            transform: 'scale(0.98)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            top: 0,
            left: 0,
            bgImage: [],
          }}>
          <Box
            maxW={'4xl'}
            boxShadow={'lg'}
            width={'full'}
            rounded={'xl'}
            p={10}
            justifyContent={'space-between'}
            position={'relative'}
            bg={useColorModeValue('white', 'gray.800')}
            borderWidth={1}>
            <Flex
              justify={'space-around'}
              wrap={{ base: 'wrap', md: 'nowrap' }}>
              <Box maxW="sm" display="flex" alignItems={'center'}>
                <Avatar
                  height={'100px'}
                  src={
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrYRtkmin6enItRvBvbIs9cmK3q95i5sjr_U1mFp27bgENdklC0o9pvb2TQlktcmiy6yk&usqp=CAU'
                  }
                  width={'100px'}
                  alignSelf={'center'}
                  m={{ base: '0 0 30px 0', md: '0 30px 0 10px' }}
                />
              </Box>
              <Box maxW="100%">
                <Box textAlign={'justify'}>
                  <Text>
                    Seneng banget tau platform pusat ngoding dengan biaya mentor
                    yang terjangkau dan kualitas mereka yang berkompeten,
                    sekarang saya sudah lebih percaya diri dan ga takut sama
                    yang namanya ngoding.
                  </Text>
                  <Text>
                    Thanks buat Tim yang sudah buat platform Pusat Ngoding!
                  </Text>
                </Box>
                <br />
                <chakra.span fontWeight={600} color={'teal.600'}>
                  Agil Pangestu.
                </chakra.span>
                <chakra.span pl="2">- Siswa SMAN 1 Bandung</chakra.span>
              </Box>
            </Flex>
          </Box>
        </Flex>
        <Flex
          justify={'flex-end'}
          data-aos="fade-up-left"
          _after={{
            content: '""',
            position: 'absolute',
            height: '21px',
            width: '29px',
            right: '35px',
            top: '-10px',
            backgroundSize: 'cover',
            backgroundImage: hiasan,
          }}
          _before={{
            content: '""',
            position: 'absolute',
            zIndex: '-1',
            height: 'full',
            maxW: '4xl',
            width: 'full',
            filter: 'blur(40px)',
            transform: 'scale(0.98)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            top: 0,
            right: 0,
            bgImage: {
              base: 'url("https://images.unsplash.com/photo-1517436073-7b3a1a2e9d0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80")',
            },
          }}>
          <Box
            maxW={'4xl'}
            boxShadow={'lg'}
            width={'full'}
            rounded={'xl'}
            p={10}
            justifyContent={'space-between'}
            position={'relative'}
            bg={useColorModeValue('white', 'gray.800')}
            borderWidth={1}>
            <Flex
              justify={'space-around'}
              wrap={{ base: 'wrap-reverse', md: 'nowrap' }}>
              <Box maxW="100%">
                <Box textAlign={'justify'}>
                  <Text>
                    Platform ini sangat membantu saya dalam mempelajari berbagai
                    bahasa pemrograman dan hemat dari sisi waktu juga tenaga
                    dengan mendapatkan mentor yang sangat hebat. Next Time saya
                    akan menggunakan platform ini lagi.
                  </Text>
                  <Text>Terima Kasih Pusat Ngoding!</Text>
                </Box>
                <br />
                <chakra.span fontWeight={600} color={'green.600'}>
                  Galih Aryanto.
                </chakra.span>
                <chakra.span pl="2">- Siswa SMKN 1 Purwokerto</chakra.span>
              </Box>
              <Box display="flex" alignItems={'center'} justify="center">
                <Avatar
                  src={
                    'https://i.pinimg.com/474x/db/1e/29/db1e29c7ba309d373c313ff6f2810a7d.jpg'
                  }
                  height={'100px'}
                  width={'100px'}
                  alignSelf={'center'}
                  m={{ base: '0 0 30px 0', md: '0 10px 0 30px' }}
                />
              </Box>
            </Flex>
          </Box>
        </Flex>
        <Flex
          justify={'flex-start'}
          data-aos="fade-up-right"
          _after={{
            content: '""',
            position: 'absolute',
            height: '21px',
            width: '29px',
            left: '35px',
            top: '-10px',
            backgroundSize: 'cover',
            backgroundImage: hiasan,
          }}
          _before={{
            content: '""',
            position: 'absolute',
            zIndex: '-1',
            height: 'full',
            maxW: '4xl',
            width: 'full',
            filter: 'blur(40px)',
            transform: 'scale(0.98)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            top: 0,
            left: 0,
            bgImage: {
              base: 'url("https://images.unsplash.com/photo-1517436073-7b3a1a2e9d0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80")',
            },
          }}>
          <Box
            maxW={'4xl'}
            boxShadow={'lg'}
            width={'full'}
            rounded={'xl'}
            p={10}
            justifyContent={'space-between'}
            position={'relative'}
            bg={useColorModeValue('white', 'gray.800')}
            borderWidth={1}>
            <Flex
              justify={'space-around'}
              wrap={{ base: 'wrap', md: 'nowrap' }}>
              <Box maxW="sm" display="flex" alignItems={'center'}>
                <Avatar
                  src={
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFNXJ2kFjrB4rGFIGX0WJ-E19bUDyaWVA9tw&usqp=CAU'
                  }
                  height={'100px'}
                  width={'100px'}
                  alignSelf={'center'}
                  m={{ base: '0 0 30px 0', md: '0 30px 0 10px' }}
                />
              </Box>
              <Box maxW="100%">
                <Box textAlign={'justify'}>
                  <Text>
                    Ini adalah platform yang selama ini dicari-cari. Buat saya
                    yang bukan seorang mahasiswa IT, bahasa pemrograman cukup
                    sulit untuk dipelajari sendirian, termasuk belajar melalui
                    bootcamp-bootcamp. Thanks Pusat Ngoding sudah mempertemukan
                    saya dengan mentor berkompeten dan profesional.
                  </Text>
                </Box>
                <br />
                <chakra.span fontWeight={600} color={'blue.600'}>
                  Gilang Ramadhan.
                </chakra.span>
                <chakra.span pl="2">- Siswa SMKN 1 Pekalongan</chakra.span>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
};

export default Testimoni;
