import {
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Image,

} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

interface Subject {
  id: number;
  subject_name: string;
  avatar : string;
}

function SubjectList(): JSX.Element {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const fetchSubject = async () => {
    try {
      const response: AxiosResponse<{ data: Subject[] }> = await axios.get(
        "http://localhost:8080/api/subjects"
      );
      if (Array.isArray(response.data.data)) {
        setSubjects(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    void fetchSubject();
  }, []);

  return <FeaturesCard subjects={subjects} />;
}

export default SubjectList;

interface FeaturesCardProps {
  subjects: Subject[];
}

export function FeaturesCard({ subjects }: FeaturesCardProps): JSX.Element {
  return (
    <Stack
      as={Container}
      maxW={"7xl"}
      spacing={10}
      py={10}
      data-aos="fade-up"
      pt={10}
      pb={10}
    >
      <Stack maxW="lg" textAlign="center" alignSelf="center" data-aos="fade-up">
        <Heading fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}>
          Daftar Kelas
        </Heading>
        <Text color={"red"}>
          Berikut Beberapa Mata Pelajaran Yang Tersedia Di Let It Be
        </Text>
      </Stack>
      <Flex w="full" justifyContent={"center"} alignItems="center">
        <SimpleGrid
          w={"full"}
          columns={{ base: 2, xl: 4 }}
          spacing={4}
          color={"white"}
          pb={10}
        >
          {subjects.map((subject: Subject) => (
            <Text
              fontSize={{ base: "18", md: "24" }}
              fontWeight="500"
              color={"Red"}
              textAlign={"center"}
              key={subject.id}
            >
              <Image src={subject.avatar} alt={subject.subject_name} />
            </Text>
          ))}
        </SimpleGrid>
      </Flex>
    </Stack>
  );
}
