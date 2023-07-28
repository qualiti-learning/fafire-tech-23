import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react';
import { MdPhone, MdEmail, MdLocationOn, MdOutlineEmail } from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';

const ContactCard = ({ children, Icon }) => (
  <Button
    size='md'
    height='48px'
    width='200px'
    variant='ghost'
    color='#DCE2FF'
    _hover={{ border: '2px solid #1C6FEB' }}
    leftIcon={<Icon color='#1970F1' size='20px' />}
  >
    {children}
  </Button>
);

export default function Contact({ children, contact, email, location }) {
  return (
    <Box
      mt={4}
      bg='#02054B'
      color='white'
      borderRadius='lg'
      p={{ sm: 5, md: 5, lg: 16 }}
    >
      <Box p={4}>
        <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
          <WrapItem>
            <Box>
              <Heading>Contact</Heading>
              <Text mt={{ sm: 3, md: 3, lg: 5 }} color='gray.500'>
                Fill up the form below to contact
              </Text>
              <Box mr={20} py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                <VStack pl={0} spacing={3} alignItems='flex-start'>
                  <ContactCard Icon={MdPhone}>{contact}</ContactCard>
                  <ContactCard Icon={MdEmail}>{email}</ContactCard>
                  <ContactCard Icon={MdLocationOn}>{location}</ContactCard>
                </VStack>
              </Box>
            </Box>
          </WrapItem>
          <WrapItem>{children}</WrapItem>
        </Wrap>
      </Box>
    </Box>
  );
}
