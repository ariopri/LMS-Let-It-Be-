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

const backgrounds = [
  `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ED8936'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%2348BB78'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%230BC5EA'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%23ED64A6'/%3E%3C/svg%3E")`,
  `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='102.633' cy='61.0737' rx='102.633' ry='61.0737' fill='%23ED8936'/%3E%3Cellipse cx='399.573' cy='123.926' rx='102.633' ry='61.0737' fill='%2348BB78'/%3E%3Cellipse cx='366.192' cy='73.2292' rx='193.808' ry='73.2292' fill='%230BC5EA'/%3E%3Cellipse cx='222.705' cy='110.585' rx='193.808' ry='73.2292' fill='%23ED64A6'/%3E%3C/svg%3E")`,
  `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ECC94B'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%239F7AEA'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%234299E1'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%2348BB78'/%3E%3C/svg%3E")`,
];

export default function Testimoni() {
  const hiasan = `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='21' viewBox='0 0 29 21' fill='none'%3E%3Cpath d='M6.91391 21C4.56659 21 2.81678 20.2152 1.66446 18.6455C0.55482 17.0758 0 15.2515 0 13.1727C0 11.2636 0.405445 9.43939 1.21634 7.7C2.0699 5.91818 3.15821 4.3697 4.48124 3.05454C5.84695 1.69697 7.31935 0.678787 8.89845 0L13.3157 3.24545C11.5659 3.96667 9.98676 4.94242 8.57837 6.17273C7.21266 7.36061 6.25239 8.63333 5.69757 9.99091L6.01766 10.1818C6.27373 10.0121 6.55114 9.88485 6.84989 9.8C7.19132 9.71515 7.63944 9.67273 8.19426 9.67273C9.34658 9.67273 10.4776 10.097 11.5872 10.9455C12.7395 11.7939 13.3157 13.1091 13.3157 14.8909C13.3157 16.8848 12.6542 18.4121 11.3311 19.4727C10.0508 20.4909 8.57837 21 6.91391 21ZM22.5982 21C20.2509 21 18.5011 20.2152 17.3488 18.6455C16.2391 17.0758 15.6843 15.2515 15.6843 13.1727C15.6843 11.2636 16.0898 9.43939 16.9007 7.7C17.7542 5.91818 18.8425 4.3697 20.1656 3.05454C21.5313 1.69697 23.0037 0.678787 24.5828 0L29 3.24545C27.2502 3.96667 25.6711 4.94242 24.2627 6.17273C22.897 7.36061 21.9367 8.63333 21.3819 9.99091L21.702 10.1818C21.9581 10.0121 22.2355 9.88485 22.5342 9.8C22.8756 9.71515 23.3238 9.67273 23.8786 9.67273C25.0309 9.67273 26.1619 10.097 27.2715 10.9455C28.4238 11.7939 29 13.1091 29 14.8909C29 16.8848 28.3385 18.4121 27.0155 19.4727C25.7351 20.4909 24.2627 21 22.5982 21Z' fill='%239F7AEA'/%3E%3C/svg%3E")`;

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
            bgImage: backgrounds[0],
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
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTevq29iiuJ0a1bZlBp42_61aggHEHqjTK_Hw&usqp=CAU'
                  }
                  width={'100px'}
                  alignSelf={'center'}
                  m={{ base: '0 0 30px 0', md: '0 30px 0 10px' }}
                />
              </Box>
              <Box maxW="100%">
                <Box textAlign={'justify'}>
                  <Text>
                    Seneng banget tau platform Let It Be ini, karena bisa
                    belajar untuk persiapan SBMPTN dengan materi yang lengkap
                    dan mudah dipahami.
                  </Text>
                  <Text>
                    Terima Kasih Let It Be! Semoga kedepannya bisa lebih baik
                  </Text>
                </Box>
                <br />
                <chakra.span fontWeight={600} color={'teal.600'}>
                  Go Yoon Jung.
                </chakra.span>
                <chakra.span pl="2">- Siswa SMAN 8 Jakarta</chakra.span>
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
            bgImage: backgrounds[1],
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
                    Platform ini sangat membantu para siswa dalam persiapan
                    SBMPTN karena materi yang disediakan sangat lengkap dan
                    selain itu kita dapat memilih para mentor yang sistem
                    pembelajaranya sesuai dengan kita.
                  </Text>
                  <Text>Terima Kasih Let It Be!</Text>
                </Box>
                <br />
                <chakra.span fontWeight={600} color={'green.600'}>
                  Kanna Hashimoto.
                </chakra.span>
                <chakra.span pl="2">- Siswa SMAN 78 Jakarta</chakra.span>
              </Box>
              <Box display="flex" alignItems={'center'} justify="center">
                <Avatar
                  src={
                    'https://cimg.clozette.co/img/Kanna_Hashimoto_Best_Instagram_Beauty_Moments_FBShare.png'
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
            bgImage: backgrounds[2],
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
                    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgVEhUYGRgYGRkZHBkZGhgYGBoYGhoaGhgYGBgcIS4lHB4rIxgYJjgmKy8xNTU1HCQ7QDszPy40NTEBDAwMEA8QHhISGjQhJCs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0MTQ0NDQxNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAPsAyQMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAEDBQYCBwj/xAA9EAABAwIEAwUHAgUEAQUAAAABAAIRAyEEEjFBBVFhBiJxgZETMqGxwdHwcuFCUmKC8QcUI5KiJDOywtL/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAgEDBP/EACIRAQEAAgICAgIDAAAAAAAAAAABAhEhMQMSIkFRgQQTYf/aAAwDAQACEQMRAD8A9eSSSWhJJJIEkkkgSSSSBJJJIEkkkgSSSSNJJJJAkkkkYYpJJLQySSSBJJJIGSSToOkkkkCSTJIEkkkgSSSSBJ0ySB0lFUqtaJcY38hqgRxmiS4Zx3RJM2ixMHpIKaFmo31mgwXAHqUA/jdBryx1RocADc2gkCx8x6qor9pMMXvY+JY/Kc8eRbfRTbpUx21UpSqrB8Upub3HCB1mESMcz+YJuN9KLlNKG/3jDo4SpWPBEhbLKm42dpJSlcZkpWsdSlK5lKUHaS5lJA6SZOg7TJ0yBJJJkCSSTIHSTJIHUOJqFrSRsmxVcMY550aCfReZdq+1pqw2i97AJBZeSedv3Rsm0XantLWeA0hoexxjJLXQbERJmRtusThsU9h94wZyEzMGQWnyJbfayNLjUf8A8jXA8yNfMaeiExA7xZM6kSNt78x6+iaUix+LeHB8kzYXNiCLfBpQtSq9zi45nuOpJ+c3R1Ghnc1rj3SJm02Go+CjxNMtJDAA2dT8ySpsA1LG4hhljyOjSR6n6LUcD7TVA4DEAQYEmY83NKyxa4mz2+X+FyM4Ovkf2U2bdMcrHvXC67CA4MF95keRRjsbkcYEgnn6leNcI7S1MNAIL2bhpnLzgL0Th3EmVmNfTdId+EHkVnMVrHKtWzEhwkLr2yqcNUjzU5erxu445Y6qwFVdteqvOpadRVtGliHLrMhWPUgetEwKeVG1yeVgITJ0yMMkkmQJJJMgdKUlW8cx/saTnzeIbAkydLLWsV2/487P7CmLNsSCIJ3BHIfRYbAtDnG88yIIRWJLqj3F0CSZcSSXHU6n6JUzlGWmLbkiJPUclMvLr68aRY6llMh5nrEeSBezOWkzI0MbqbHvd+0KGhhXvHdBvvrPQKcsmzCpqQAdmJiNgY1+ihxeGc8E5h4D7xdS1OF1GtLneoug6LnZiwuIOm+vJMctmWNior0XNPe+yloV8vvHu8iZ9IR2IoEyHA22VZUoDYlKgUx7Zmm6Tux1p/SSPgvQP9Pzna9ubKM0hsXFhI1XmlJhBGh+E+Eradi+INp12k3DxkuSMp2Mc9r81nH2qW74eqMphosnlctdITq0W37OCu2FRLppWg1jlK0oVjkQxy1iVq6XDSnlGDEkkyxhJk5XK0JOmToGWQ7cM7jnvJysb3Wjd5sJ9Vr1lu3xaMM6TBLmxpJvcCekorHt5f7XvZW7w0nqbkfnPorVtGO6NbyeQGpHXZUOFMvJ5EOPkJI9Arbgr3VKoHMwfIyuPtp6scdrXAcE9o6SLfNaalwBgHu+aseHYWAOis8llGvbmtuXrdRlsTwkRHh6brG8X4BFQGPE+BAn4r1GsxUvEKQzXGg+BI//ACpk0vft282xuCeyXEyW2nm07qrxGEJ7zd16BxrDDviJzMcPoPiVQMwoa91N/QAndp9x3jYtPg3mlyp/XKx76QIJGo+aIwz5vfrzRWNwvs6jmnQj8+/mq+gcr8vOfgf3C6S7jhcdV7TwPE56LCTfKNfBWQKwXYzib5bSJzNlzf6mENzC+7SI8yt2Crwu4nyzVdJwuZTgq3NIxyIY5CtU7CtYKaV2o2ldyjByZOmKxhimTlMtCTpkkCWY7Z4T2lMwLtBObKHED+kG06LToXENkHwWXq6XjZMpt41iuB1KJOfRzZB08Z6yVp+AcOyuonLAIcbcwD91xx3Euql7WEZWOLSbXgwWt8NSfAc41PCsL/w0yNQAR6Ly817brHpKMaWa03kdAuG8fpkwWvaf6mkLhz6xqBjWta06vfeP0tHveZCyWI7Q1WY6phXsa9jT77Q5r2tInM5psW+HMaq+dbjnqe2q2v8AuWv90yqzGOGa51IHkLnyifUI+hTJb3WhVuJw5k89PAKKvHW1DxnilJtRoc6NCbE6OB03mPgqTinE6L3sfTdcHLoQMrr6n+prVbcdoU6LH4g0jUDC1royjvOOUCXa+/eFSYXF0q5ZnoezaSSLNIJaS2HEdQfFNXvS9zepUPahg9pTO5Zf4/dZfEOipH5f62Wt7RUe8HAQ0FrR01EDwhZ7FUmNqNJJh0OLhcNkw2RuDDrdFWNcvJje3pnZJjPYtIY0Oi7g0AuBuCTqVogqTs6WeyYWCBlFpmOYB3EyroFeiTh5suzroLhO1axI1TsUDVMwIwVTXajYpEYPTJJIwyZOmQJJJJAxVPxnGOaHtp2LWFzn/wAogxE72n8tcFYbtlxAse5jbiq0A+IzCPMH4dVlupteGPtlpzhMLTqU2uYd3g8veIg7k9eS1nC2xTZ+kLxVnGq+GJfTfBmHNMOYSOm2+kL1/s1i/a4alUtL2McY0kgEgecrzyc7erK8aH4ikCLqqq8Ma894SOt1cvuoQ6FVTLZ0lw9INbCpa575CvM9lncbUyvvuVmXRhLbXOJ4e11N1MiWPJLmuh4JJmSHTvdVLOBMZECzRAFoA6ALRMMhQ4hym9OuNrB9qaRbTYIv7QeZdYH4rJ03MdiX09W/+3GswAD55g5ant9xIMdTY332/wDJG1j3S7pLT6Lz7gtbLUa91yHgn1k/VbjNTbnnlu6endiXuYalB5k03WP9JEj4QfNbEFZDs6z/ANTiHbgUmH9QY1zv/mAtY0rvj08+XaRdNXC7aqYlap2BRMCIa1GJWBdpmBdwjBqZOmRhkydJAySdMgixNTK0u/JXl/EAa9So8mzIvye6MkeDb+i33aTFBlJ7js0n1t9Vi8dQ9jhmtJ77yXuPN5Gdw8u6PJRlzw7+LibYnHM94EaggjqCDPz+K9D/ANLMdnwvsyb0nub/AGuJezyuR/asRXp5jPJpb48j6D5rvsDxf/bYnK8wyqQx3Qn3HeAMj+4rlOnbOc7e1FQvZJUgeh6+MDNQ4/pBcfgtc5vqGrF4M5hkiMsXzTrmnTpCoMTSqPe9rsoBIykbDeeZUuO4/FnMc3fQ7TF9FTYbtOx7+8C2TEwdeUG6jJ7Mf4/kmPtY0jG5RHRB4iopXVpErE9teO+zpljHd98tEahv8TvS3iQn+OXU3WJ7TcS9viKjwZaJYz9LQRPmZP8AcqnAiHQNS4ek2UYqCbaNH7fVLDPh07iD5gzKuzh55d5bet9mBd7p955d5Pp03D5fFatqyPZF8tI5BvyLWn/q1q1jSuuPTnl2kCkpqIKSmqYLphEsCgpIpgRLpoXUJBOgLTJ0yMMkkkgSSSSDJds3kmmzZ9WmD+nPf6Ki7Z1MoYI0FQ+uh9Ar3t3hzkZUb/A6fOCWf+QaPNZftq/OwObcOZLTtDwSD5XXLL7/AE9OGuP2zVKvAdOth/0n7lBcOwpdiabI1qNMf0gZiR0hqjwdfO2SYc6NbCZEHx+5Wq7DcPL6z67hZgDGyIuYLvQR/wBiuO3p709JwlSWgHkp8qHoMgQpg8hbjXHKc8K/HYRx5eapDw0NdncRYyABACv8Xieaz/EMUSDAsFmWT0YZ53H13wB7QcabQplzjYbDUnYDqvHcbxN9aq6q83dYDYCbAdAr3tbiHPccxmNByWRV+OSzby+e2WQbhWd13gPiWlPRPeHI7/nii8AyQOTrfAn6Qg6djB2HxH4VV+0Sa1XpvYytIPMhoJ/SIaPRrluGFeV9kMfkqND/AHX2n+oR9j6r0zD12nQqsLwzOcjWqSmoWlSsK6OY2iUW1BUijGFalKEkwKeVgMTJ0kDJLl7wNSonYtg1KCZOhXY5nP8APNcO4izqmg/E8I2rTexws4QvK8a8szYap79HM5hdo+nuwztqfAdF6i/HToPVZ3G8Ho1Kgq12B5Huz7oHIga+c6lTnNTbp47zp5dwXgNWu6KbSGzd5FgJGnMxP7L1ngvCmUKbWMEBo8ydyepKLosYBDQAOkQpg8Ly6/L1e3GolY1JwTsqArmoVSQOJZKoOOuDGQB3jYDr9lpKrd1QYvDF7yTtYfM/Rc8nfxvMe0GAIaXHr/lYwD5/nyXpHb6o1jBTHvPt4NF3fIDzXndL3ieUn0XXxdOH8ifKaXXDWAZAf57+MuaUDi6eSq9v8p+yssLT7jJ3c71J/cobijv+Qu55Z9CD8ls7TZ8YO4U4OBYHBswRzDgZa5hP8Q5b9TZbvhfHHMGXEMktgF7IcD1cz32HoQvPuBMNR2SQGnWQCAALm69H7O8BNVgdme2k0kAlxL6kG+WbMZIImJOxAudl0mzcXuFxrHiWSfIo5j09DhzKbYY2PGST4uNz5pObCr3/ACf176E0noym5VzHIqm9dpdxxs0NBTyoGvXeZErJRVqkBSlV+JfuskEDnlz4/ff/AAh8TTAFp/x0UjjkEnX5/n2TUH5mgOibmOm4+KsVVWtBymxnQ29OaJa6ehH5so8fTlxAHuga78/zohsE+LCbaaeP3CzavpZ0XfkR8SpXkDWIOt7qJgkSL872SDtgfQfValDQY1pyG27eo+6KFDkhsRRzDeZkOOoPMJsBine6/wB4fkry54yV68MrZvfIvIWrsuUpdK4IUeqvbaGsbIJhALp8UdVChpYMVB3vcBv/AF9J5dVlx3VTKScvF+NUK+OxVV9JjnhpyNizWgaAuMNBvNzuqV3BKtOqKdVjmkieYdJgBpEgm4EL37E8OAAZRaGgfwgQ2fAKsZgRSJfUOapc5iIDRyYNvHX5LZlZwy4458/byurw6s3L3HNDCS7NDInSzoOhnzVLj295wkGIiL22v6r0/HYV2IZUAcGNe496JcQGtByjYGNT6Ly/ijGsqPYwkhsCTraxn1TG7p5MfWFwmoRVAaYzSAeRdIzDqJkdQF9FcJYxtNjKYAa1rWtA0DQAAF804Z5Dp5H6r3XsVxP2lJocZIiPCLK7dVyxx9sbfw1lZllX12K0BsgcS1MoY0GwqZrlBupAunjvxR5J8k7XqT2iGC6lXtzaGpoUDVE+unx+iNraIB319eZW4pDYlsuaDoLmPgAhq78pFxaLnUHQI9x7/K3yQeNp7zuNNvH5K4OscyWy0ajUXvtKqmMgydPWCUbw+uHsLYgsJaRp1aQeUOTPoSYBMHWJ+tuSWEqXDOvp/ne3kp6jLTeLWCgwJk20Gn+PVGM0tt3VhQbhzA8zKgqMPvNuRpFh4eCLfT3aB1JULjNrnwsPVZcZZqqxysu4nwtYOHXcckU1sqso4Z2abNA3mSeYMo2pU05Gw5u8Fxniu3TLyTXCSphmOIlxgXibHx6Kd7hED4IOToDB3jRo5DquHvsXAwNjz8uSq+LXSZ5LexDnZVWcRo5wZEiLj5yp3Vrw+x+aVR4yknQAk+C4ZT6ejC65efcQx9RwdSwzc1RxeXONmU2ZiMznbG1m6rzLEtLXva45iCZd/MZmfmvRuO8XGHwuQWfVBcRuA8yfPb1XmQdIJPU/H90xh5ry5oG58V6X2Dxxbkb/AG+mnwhea4dv3W97CPgkzYOAPK+h9Vdx9rI54Zesr2CliLBQ16uoi4FvzxsoKRhsen5+brp75h3Ox8Tb5r0TDGOFztCurXFtQT52t8/REtQj7f2v+Drf/YomnoEsk6bu3tIlKSSkaKtoq+sbT1+o/PNH1ygqzbHnN/z1VRKN57zfAqKuDsIPpPNSVTDmx+WTV77+YjS+6pKiwTm08SQSQKrSADoHU5It1BP/AFV29sDz184+k+azHaV5Y32kgeze188mtcM3/iXDzWocczWxoWgz4XRQLCmKkbE6eWvT9gj6Au4TqZ+W3ohcOyXjpfl0RrGHMSbaR16oIHgyMom9+XU9FxWLQYF3chEBd4nER3WRJ9PNDsZkGY3cdT6x8UEmJEdf6efjzTNeZg3cR5NG64pEuuTdpMbSIiT0XWtm6m7jyGiJPA0nujU7k+K4c+e8bNGg59YXTmgiNGt+MfRQPfPeIsPdHO2sfJAz7g5pJcbDcefPqs52z4v/ALagQZIf3AR1Fx6Sr7EVskl13nYbdB9SvKe3HHhVd7FhzAODi7m8WAZyaJ13XPyzGzddfHllLwy3FMc+u8uebk+TQP4R4ISo2AANTb1uiWYfKM77dPzdLB0szi7Zsk+NrfFcY6XdvLmhTvG/7FbbsIyXlpHdcY+Asf8Ar6jqsexveLjaPibjT1K9N7BYEsZJ3Mnodm/WVuE3kZcYttRbAE6j4pn3kHe/7/IrnPJgeZ2HTqbKN58dR58/r6r0uCKq4HUxmHo4Xn5+gRFB0ied/W/1XRoW2+aTBFuX5IWUiRJJJS1oMR90JVEg/miLr7Iaq2QRG0/ZbGBcaYykc/2TO5x5dBdPjLskbXURqS3WRvt8lSVPx2gHseyZDg5sHfM0jKeQN1Ydmq/tcMxxaWyxoIIghze68HzaUPi2h0ZovEnY3sDvN1e0abWtDWNgDTzW0MykGmwud+QUeIfHdGp35DmUR7t99B8r9ELXdlBMyd/msFdGSXOuQb891JTfmDpO4gadZXGIIJkyAQfjoEIxxJy3ty5flkUIY1z3eBvG/wC32RpqBvdaBfX4b+aiY8NEDU/k+CmpUstzqfn1RLl7QG94zv4z+6Dr1cgLne9sNx+6Mc2zsxMA6bnQrz7tx2kDT7Gm4ZzZ5GrW8vE38AmWUk2rGbqr7W9onOmlSdJdIe5ptG7GHkNyszS4WWDNGczJjXnEKSlg6hHdbA12/NlY4Hg1SQ4Ey4Sb+FuWq8uVyyr0444yM9Uw1R57zS3oQQB16lEsw2VuVoPUn6brcs7NPeBmeQ465YEDxjr0V9wvslSYAXNzO5uknwuqnjyrLljiwPA+zz3uYXNhszB1Pw/J3Xp2HotptyNEc/MbfdFtwrGNIDY1+JVPjq+Z2Vpvo6NYMW8ZhdscZi45Zew1tYu7lMTES7RvlzR1Cjodhz58/mo8BhQ1oDfzmeasA0NF9tBdU5mewAISbpsTWcYG30BhcUkrYlCdMkoU0WI0UDzHn89kTXFkOBOux+KRiBrJDm8jb5hR06OQAOGb6HwUzaoLi0a3J8BYIao7vXOked1aXNXBvcLZWja26nwjiGgOMkDaY9Sp6ZEA6yFFUm9rafuEElV9gRefyyrK7hmM8rfYog1A1jb3Hz3j4queS8zpukEL3l3dE8vopaYymB7x1/OSZrYsy559eqJw1DLB1JP1v+dEUkoULmddfNSvf3WuPj4jqnfUDSZ1tHjvKyHabtBkDqdJwzkGL+7b5oIO1/aMs/4aN6r7foBGtt1kMB2QqVD7Qm8yQZ70xME7/m6uez/CPaPmqCb5pvJPMyevxXoWFwoY2ALAadOSm4+3bZl6sbwvhZYcpaPA7DaNY0VthuG3zRG43tt+dFb1qQtv139VMGAM+XyHxWTHSrntHgsNJLj9NPz5o3JO0RFlJQpw21lFWfDZ9bq3O3aq4vig0Od/KDPjsPWPVZ3hRNSsGxIEuJP81o87yn7U8QyjLu4l3kP3+SuexfB3U2e0q+/UIcW/ygWA9LlGr/D0w0XshsTVdfLpbfxRr9Ygk/4lAYhknvO8vJEq5zpuLzfVT4bQ+Pw1+qc09CfqkwXJSqShOmSUtaWtohK78rc0f5Nka/Qqux/uLMWIOGsu983JA8mjT4lcVnTmI976bLvAe4f1fZBH3/L6q/tKyZXaGtLRtEcuaHq1CSR0j7KNmg8USwWPggBLBcvPl90zGOcbCB9dvDdc7/nMKwZoPH7II2UQ2QBt8d1HUqBgEai/ny+KIq+679X0Cxfa7EObRdlcRqLcuSCLtD2mJcWYcFzr5nC4FrgcyqfhfCDVfJ96QS462PXX90LwnUBb/htJuUWCztXQzhuEDABGkKxeO7bkucNp6Lo6eQWpVtd4Ex6KUmSwclBxD3x4/RTYX3/JFDqj4H013QXEXkC2ht9kWz3vIoDHcup+YRLH4HD/AO54k4asw7WyDu7+EesnyXo7AANPz8Kwv+n/AL2Ld/Ea8TvAGnxW5ebeX1CNoWrWiYMW9b2+qosVxxjSQJe7MBIAiY0mYT4sZ3lrpLYFpIGo5eKjfg6bXNysaLHQdFrEDuIOLvdfA5jbaIVjhq4NwdfzyQOQWMaOA8p0U+D1+Pne6WKWCdMElDX/2Q=='
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
                    Platform Let It Be ini sangat membantu saya dalam belajar
                    materi yang diujikan dalam seleksi masuk perguruan tinggi.
                    Materi yang disajikan sangat mudah dipahami dan mudah
                    diakses dimanapun dan kapanpun. Saya sangat merekomendasikan
                    platform ini untuk para siswa yang ingin belajar materi
                    pelajaran secara online.
                  </Text>
                  <Text>Terima Kasih Let It Be!</Text>
                </Box>
                <br />
                <chakra.span fontWeight={600} color={'blue.600'}>
                  Lee Ji eun
                </chakra.span>
                <chakra.span pl="2">- Siswa SMAN 81 Jakarta</chakra.span>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}
