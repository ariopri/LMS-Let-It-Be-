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
import axios from 'axios';

export default function Informasi() {
  const [fetchInformasi, setFetchInformasi] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = () => {
    axios
      .get('https://639ed8157aaf11ceb88c33f5.mockapi.io/ngasal3')
      .then(res => {
        setFetchInformasi(res.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const textcolor = useColorModeValue('accentLight.500', 'accentDark.500');

  const ContainerInformasi = props => {
    const { judul } = props;
    const filteredData = fetchInformasi.filter(item => item.judul === judul);

    return (
      <Stack mt={5}>
        <Text fontWeight={'semibold'}>{judul}</Text>
        {filteredData.map(({ id, data }) => (
          <SimpleGrid
            key={id}
            columns={{ base: 3, sm: 4, md: 5, lg: 8 }}
            autoRows="1fr"
            gap={2}>
            {data.map(({ url, image, judul }) => (
              <Stack
                as="a"
                href={url}
                target="_blank"
                borderWidth={1}
                w="full"
                h="60px"
                p={2}
                bg="white">
                <Image
                  src={image}
                  alt={judul}
                  fit={'contain'}
                  w="full"
                  h="full"
                />
              </Stack>
            ))}
          </SimpleGrid>
        ))}
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
        {fetchInformasi.map((item, index) => (
          <span key={index}>{item.keterangan}</span>
        ))}
      </Text>
      {fetchInformasi.map((item, index) => (
        <ContainerInformasi key={index} judul={item.judul} />
      ))}
    </Container>
  );
}
