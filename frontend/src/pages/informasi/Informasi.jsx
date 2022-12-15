import {
  Container,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import LoadingFetchEffect from '../../components/loadingEffect/LoadingFetchEffect';
import useTimeoutGlobal from '../../store/TimeOut';
import Belajar from './Belajar';
import Bootcamp from './Bootcamp';
import Forum from './Forum';
import TryOut from './TryOut';

export default function Informasi() {
  const { timeout } = useTimeoutGlobal();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, timeout);
  });

  const textcolor = useColorModeValue('accentLight.500', 'accentDark.500');

  const ContainerInformasi = props => {
    return (
      <Stack mt={5}>
        <Text fontWeight={'semibold'}>{props.judul}</Text>
        <SimpleGrid
          columns={{ base: 3, sm: 4, md: 5, lg: 8 }}
          autoRows="1fr"
          gap={2}>
          {props.data.map((item, index) => (
            <Stack
              as="a"
              href={item.url}
              target="_blank"
              borderWidth={1}
              w="full"
              h="60px"
              p={2}
              bg="white"
              key={index}>
              <Image
                src={item.image}
                alt={item.name}
                fit={'contain'}
                w="full"
                h="full"
              />
            </Stack>
          ))}
        </SimpleGrid>
      </Stack>
    );
  };

  return isLoading ? (
    <LoadingFetchEffect />
  ) : (
    <Container maxW="7xl" data-aos="fade-up" pt={4}>
      <Heading
        fontSize={{ base: '2xl', sm: '4xl', md: '5xl' }}
        color={textcolor}>
        Informasi
      </Heading>
      <Text color={'gray.500'}>
        Let It Be sedang membuka kesempatan bagi semua orang untuk bergabung
        sebagai pengajar. Manfaatkan sebaik mungkin dan jangan ragu untuk
        bergabung. Kami nantikan anda mendaftar sebagai bagian dari kami!
      </Text>
      <ContainerInformasi judul="Belajar" data={Belajar} />
      <ContainerInformasi judul="Forum" data={Forum} />
      <ContainerInformasi judul="TryOut" data={TryOut} />
      <ContainerInformasi judul="Bootcamp" data={Bootcamp} />
    </Container>
  );
}
