import {
  Alert,
  Button,
  Container,
  Heading,
  Input,
  Link,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';

const API_DOMAIN = 'http://byte.li';

const App = () => {
  const [shortner, setShortner] = useState();
  const [value, setValue] = useState('');
  const toast = useToast();

  const onClickShortnerURL = async () => {
    if (!value) {
      return alert('The link is missing');
    }

    const response = await fetch(`${API_DOMAIN}/api/shortner`, {
      body: JSON.stringify({
        link: value,
        author: 'Keven',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const data = await response.json();

    if (response.ok) {
      setShortner(data);

      return toast({
        title: 'Shortner created.',
        description: "We've created your shortned link for you.",
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'bottom-left',
      });
    }

    toast({
      title: 'Failed',
      description: data?.message,
      status: 'error',
      duration: 5000,
      isClosable: true,
      position: 'bottom-left',
    });
  };

  return (
    <Container p={4}>
      <Heading>Free URL Shortener</Heading>
      <Text color='gray'>
        Byte.li is a free tool to shorten URLs powered by Rebrandly. Create
        short & memorable links in seconds.
      </Text>

      <Stack display='flex'>
        <Input
          placeholder='Enter link here'
          type='text'
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />
        <Button onClick={onClickShortnerURL}>Shortner URL</Button>
      </Stack>

      {shortner && (
        <Alert display='flex' flexDirection='column'>
          <Link
            href={`${API_DOMAIN}/${shortner.hash}`}
            isExternal
          >{`${API_DOMAIN}/${shortner.hash}`}</Link>
          <Link href={shortner.link} isExternal>
            {shortner.link}
          </Link>
        </Alert>
      )}

      <Text color='gray'>
        By clicking Shorten URL, you agree to Rebrandly's Terms of Use, Privacy
        Policy and Cookie Policy
      </Text>
    </Container>
  );
};

export default App;
