import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  VStack,
  useToast,
} from '@chakra-ui/react';
import Contact from '../components/Contact';
import { BsPerson } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import { useState } from 'react';

const defaultState = {
  name: '',
  email: '',
  message: '',
};

const ContactPage = () => {
  const [loading, setLoading] = useState();
  const [form, setForm] = useState(defaultState);

  const toast = useToast();

  const onChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const onSendMessage = async (event) => {
    event.preventDefault();

    setLoading(true);

    const response = await fetch('http://byte.li/contact', {
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    if (response.ok) {
      setLoading(false);
      setForm(defaultState);

      return toast({
        status: 'success',
        title: 'Success',
        description: 'The contact email was sent with success',
      });
    }

    setLoading(false);

    toast({
      status: 'error',
      title: 'Error',
      description: 'An unexpected error happened',
    });
  };

  const isFormValid =
    form.email.trim().length &&
    form.name.trim().length &&
    form.message.trim().length;

  return (
    <Contact
      email='byteli@contact.me'
      contact='+55 999999999999'
      location='Recife, Pernambuco - Brazil'
    >
      <Box bg='white' borderRadius='lg'>
        <Box m={8} color='#0B0E3F'>
          <VStack as='form' spacing={5} onSubmit={onSendMessage}>
            <FormControl id='name'>
              <FormLabel>Your Name</FormLabel>
              <InputGroup borderColor='#E0E1E7'>
                <InputLeftElement pointerEvents='none'>
                  <BsPerson color='gray.800' />
                </InputLeftElement>
                <Input
                  type='text'
                  size='md'
                  minLength={8}
                  value={form.name}
                  onChange={onChange}
                  name='name'
                  required
                />
              </InputGroup>
            </FormControl>
            <FormControl id='name'>
              <FormLabel>Mail</FormLabel>
              <InputGroup borderColor='#E0E1E7'>
                <InputLeftElement pointerEvents='none'>
                  <MdOutlineEmail color='gray.800' />
                </InputLeftElement>
                <Input
                  type='email'
                  size='md'
                  value={form.email}
                  onChange={onChange}
                  name='email'
                  required
                />
              </InputGroup>
            </FormControl>
            <FormControl id='name'>
              <FormLabel>Message</FormLabel>
              <Textarea
                borderColor='gray.300'
                _hover={{
                  borderRadius: 'gray.300',
                }}
                required
                placeholder='message'
                value={form.message}
                onChange={onChange}
                name='message'
              />
            </FormControl>

            <Button
              isDisabled={!isFormValid}
              isLoading={loading}
              variant='solid'
              bg='#0D74FF'
              color='white'
              _hover={{}}
              type='submit'
            >
              Send Message
            </Button>
          </VStack>
        </Box>
      </Box>{' '}
    </Contact>
  );
};

export default ContactPage;
