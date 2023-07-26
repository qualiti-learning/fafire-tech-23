import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box position='fixed' bottom={0} width='100%'>
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}
      >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Stack direction={'row'} spacing={6}>
            <Box as='a' href={'#'}>
              Home
            </Box>
            <Box as='a' href={'#'}>
              About
            </Box>
            <Box as='a' href={'#'}>
              Blog
            </Box>
            <Box as='a' href={'#'}>
              Contact
            </Box>
          </Stack>
          <Text>© {new Date().getFullYear()} Byte.li. All rights reserved</Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
