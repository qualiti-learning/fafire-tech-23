import { Button, Stack, useDisclosure, useToast } from '@chakra-ui/react';
import Hero, { PlayIcon } from '../components/Hero';
import BaseModal from '../components/Modal';
import App from '../App';
import { useState } from 'react';

const API_DOMAIN = 'http://byte.li';
const URL_REGEX =
  /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [shortner, setShortner] = useState();
  const [value, setValue] = useState('');

  const isLinkFilled = value.trim();
  const isLinkValid = URL_REGEX.test(value);

  const isValid = isLinkFilled && isLinkValid;

  const onClickShortnerURL = async () => {
    setLoading(true);

    const response = await fetch(`${API_DOMAIN}/api/shortner`, {
      body: JSON.stringify({
        author: 'Keven',
        link: value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const data = await response.json();

    if (response.ok) {
      setShortner(data);
      setLoading(false);

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

    setLoading(false);
  };

  return (
    <>
      <Hero
        title='Share Links'
        subtitle='Get Insights from user access'
        description='Byte.li is a free tool to shorten URLs powered by Rebrandly. Create short & memorable links in seconds.'
      >
        <Stack
          spacing={{ base: 4, sm: 6 }}
          direction={{ base: 'column', sm: 'row' }}
        >
          <Button
            onClick={onOpen}
            rounded={'full'}
            size={'lg'}
            fontWeight={'normal'}
            px={6}
            colorScheme={'red'}
            bg={'red.400'}
            _hover={{ bg: 'red.500' }}
          >
            Get started
          </Button>
          <Button
            rounded={'full'}
            size={'lg'}
            fontWeight={'normal'}
            px={6}
            leftIcon={<PlayIcon h={4} w={4} color={'gray.300'} />}
          >
            How It Works
          </Button>
        </Stack>
      </Hero>

      <BaseModal
        isOpen={isOpen}
        onClose={onClose}
        submitTitle='Shortner URL'
        title='Shortner URL'
        submitProps={{
          isDisabled: !isValid,
          isLoading: loading,
          onClick: onClickShortnerURL,
        }}
        modalProps={{ size: 'xl' }}
      >
        <App
          isLinkFilled={isLinkFilled}
          isValid={isValid}
          setValue={setValue}
          shortner={shortner}
          value={value}
        />
      </BaseModal>
    </>
  );
};

export default Home;
