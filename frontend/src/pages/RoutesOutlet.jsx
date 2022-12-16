import { Box, Flex, HStack, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import ReactTypingEffect from 'react-typing-effect';
import Footer from '../components/footer/Footer';
import NavigationBar from '../components/navigationBar/NavigationBar';
import ScrollToTop from './ScrollToTop';

const RoutesOutlet = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  });
  const ContentLoading = () => {
    return (
      <Box>
        <HStack alignItems={'center'} spacing={0}>
          <ReactTypingEffect
            typingDelay={1000}
            speed={50}
            eraseSpeed={50}
            eraseDelay={1000}
            cursorRenderer={cursor => null}
            text={'Let'}
          />
          <Text>{`ItBe.`}</Text>
        </HStack>
      </Box>
    );
  };
  return isLoading ? (
    <Flex h="100vh" align="center" justify="center">
      <ContentLoading />
    </Flex>
  ) : (
    <Flex minH={'100vh'} justifyContent={'space-between'} direction={'column'}>
      <NavigationBar />
      <Box my={'auto'} h="full" style={{ overflow: 'hidden' }}>
        <ScrollToTop />
        <Outlet />
      </Box>
      <Footer />
    </Flex>
  );
};

export default RoutesOutlet;
