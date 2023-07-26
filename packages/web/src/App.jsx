import {
  Alert,
  AlertDescription,
  AlertTitle,
  FormControl,
  FormErrorMessage,
  Input,
  Link,
} from '@chakra-ui/react';

const API_DOMAIN = 'http://byte.li';

const App = ({ value, setValue, shortner, isValid, isLinkFilled }) => {
  const generatedLink = `${API_DOMAIN}/${shortner?.hash}`;

  return (
    <>
      {shortner && (
        <Alert display='flex' flexDirection='column' status='success' mb={4}>
          <AlertTitle>Congratulations link shortned!</AlertTitle>
          <AlertDescription>
            You generated link is:{' '}
            <Link href={generatedLink} isExternal>
              {generatedLink}
            </Link>
          </AlertDescription>
        </Alert>
      )}

      <FormControl isInvalid={!isValid}>
        <Input
          placeholder='Enter link here'
          type='text'
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />
        <FormErrorMessage>
          {isLinkFilled ? 'Link is invalid' : 'Link is required'}
        </FormErrorMessage>
      </FormControl>
    </>
  );
};

export default App;
