import {
  Stack,
  Container,
  Text,
  Heading,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  Box,
  useColorModeValue,
} from '@chakra-ui/react';

const data = [
  {
    tanya: 'Apa itu Let It Be',
    jawab:
      'Let It Be adalah sebuah aplikasi yang dibuat untuk memudahkan para siswa dalam melakukan pembelajaran secara online guna membantu dalam persiapan Ujian Masuk Perguruan Tinggi.',
  },
  {
    tanya: 'Bagaimana cara menggunakan Let It Be',
    jawab:
      'Untuk menggunakan Let It Be, kamu harus mendaftar terlebih dahulu. Setelah mendaftar, kamu bisa langsung login dan mulai belajar.',
  },
  {
    tanya: 'Kursus apa saja yang ada di Let It Be',
    jawab:
      'Kursus yang ada di Let It Be adalah kursus untuk persiapan Ujian Masuk Perguruan Tinggi.',
  },
  {
    tanya: 'Bagaimana cara mendaftar di Let It Be',
    jawab:
      'Untuk mendaftar di Let It Be, kamu bisa klik tombol Daftar di pojok kanan atas. Setelah itu, kamu akan diarahkan ke halaman pendaftaran. Isi data diri kamu dengan benar dan klik Daftar. Setelah itu, kamu akan mendapatkan email konfirmasi dari kami.',
  },
  {
    tanya: 'Bagaimana cara login di Let It Be',
    jawab:
      'Untuk login di Let It Be, kamu bisa klik tombol Masuk di pojok kanan atas. Setelah itu, kamu akan diarahkan ke halaman login. Isi email dan password kamu dengan benar dan klik Masuk.',
  },
  {
    tanya: 'Bagaimana cara mengganti password di Let It Be',
    jawab:
      'Untuk mengganti password di Let It Be, kamu bisa klik tombol Masuk di pojok kanan atas. Setelah itu, kamu akan diarahkan ke halaman login. Isi email dan password kamu dengan benar dan klik Masuk. Setelah itu, kamu akan diarahkan ke halaman profil. Klik tombol Ganti Password dan isi password lama, password baru, dan konfirmasi password baru dengan benar. Setelah itu, klik Ganti Password.',
  },
  {
    tanya: 'Bagaimana cara mengganti foto profil di Let It Be',
    jawab:
      'Untuk mengganti foto profil di Let It Be, kamu bisa klik tombol Masuk di pojok kanan atas. Setelah itu, kamu akan diarahkan ke halaman login. Isi email dan password kamu dengan benar dan klik Masuk. Setelah itu, kamu akan diarahkan ke halaman profil. Klik tombol Ganti Foto Profil dan pilih foto yang ingin kamu gunakan. Setelah itu, klik Ganti Foto Profil.',
  },
  {
    tanya: 'Bagaimana cara mengganti data diri di Let It Be',
    jawab:
      'Untuk mengganti data diri di Let It Be, kamu bisa klik tombol Masuk di pojok kanan atas. Setelah itu, kamu akan diarahkan ke halaman login. Isi email dan password kamu dengan benar dan klik Masuk. Setelah itu, kamu akan diarahkan ke halaman profil. Isi data diri kamu dengan benar dan klik Simpan.',
  },
  {
    tanya: 'Bagaimana cara mengganti email di Let It Be',
    jawab:
      'Untuk mengganti email di Let It Be, kamu bisa klik tombol Masuk di pojok kanan atas. Setelah itu, kamu akan diarahkan ke halaman login. Isi email dan password kamu dengan benar dan klik Masuk. Setelah itu, kamu akan diarahkan ke halaman profil. Klik tombol Ganti Email dan isi email lama, email baru, dan konfirmasi email baru dengan benar. Setelah itu klik Ganti Email.',
  },
  {
    tanya: 'Bagaimana cara mengganti nomor telepon di Let It Be',
    jawab:
      'Untuk mengganti nomor telepon di Let It Be, kamu bisa klik tombol Masuk di pojok kanan atas. Setelah itu, kamu akan diarahkan ke halaman login. Isi email dan password kamu dengan benar dan klik Masuk. Setelah itu, kamu akan diarahkan ke halaman profil. Isi nomor telepon kamu dengan benar dan klik Simpan.',
  },
  {
    tanya: 'Bagaimana cara mengganti alamat di Let It Be',
    jawab:
      'Untuk mengganti alamat di Let It Be, kamu bisa klik tombol Masuk di pojok kanan atas. Setelah itu, kamu akan diarahkan ke halaman login. Isi email dan password kamu dengan benar dan klik Masuk. Setelah itu, kamu akan diarahkan ke halaman profil. Isi alamat kamu dengan benar dan klik Simpan.',
  },
];

export default function FAQ() {
  const AccordionContainer = props => (
    <AccordionItem border="0">
      <AccordionButton px={0} _hover={{ bg: 'none' }}>
        <Box flex="1" textAlign="left">
          {props.tanya}
        </Box>
        <AccordionIcon ml={5} />
      </AccordionButton>
      <AccordionPanel pb={4} px={0}>
        <Text color={'gray.500'} align="justify">
          {props.jawab}
        </Text>
      </AccordionPanel>
    </AccordionItem>
  );

  return (
    <Stack
      as={Container}
      mt={20}
      mb={6}
      maxW={'7xl'}
      align="center"
      justifyContent="center"
      minH={{ base: 'auto', lg: '70vh' }}
      data-aos="fade-up">
      <Stack
        p={{ base: 5, lg: 10 }}
        bg={useColorModeValue('gray.100', 'gray.900')}
        rounded="xl"
        direction={{ base: 'column', md: 'row' }}
        spacing={{ base: 4, md: 10 }}>
        <Stack flex={1}>
          <Stack>
            <Text
              color={useColorModeValue('accentLight.500', 'accentDark.500')}>
              Support
            </Text>
            <Heading as="h2">FAQ</Heading>
            <Text fontSize={'md'} color={'gray.500'} align="justify">
              Segala pertanyaan yang kerap ditanyakan kepada kami, kami rangkum
              di dalam komponen FAQ, agar mempermudah pekerjaan tim kami dan
              menambah pemahaman anda tentang Platform ini.
            </Text>
          </Stack>
        </Stack>
        <Stack flex={1}>
          <Accordion allowToggle w="full">
            {data.map((item, index) => (
              <AccordionContainer key={index} {...item} />
            ))}
          </Accordion>
        </Stack>
      </Stack>
    </Stack>
  );
}
